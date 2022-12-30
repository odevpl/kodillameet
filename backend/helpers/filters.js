exports.getList = async (
  req,
  model,
  related,
  primaryFilters,
  containFilter
) => {
  let query = model.forge();

  const { filters, page, size, compartments } = req.body;
  // .where('id', 'IN', uczestnicyIds.split(','))
  if (containFilter) {
    for (let filter of containFilter) {
      query = query.where(filter.key, "IN", filter.values.split(","));
    }
  }
  /* {
        [key]: {
          min: '2',
          max: '10'
        }
  } */
  if (compartments) {
    for (let key in compartments) {
      const { min, max } = compartments[key];
      query = query.where(key, ">=", min).where(key, "<=", max);
    }
  }
  if (filters) {
    for (let key in filters) {
      query = query.where(key, "LIKE", `%${filters[key]}%`);
    }
  }
  if (primaryFilters) {
    for (let key in primaryFilters) {
      query = query.where(key, "LIKE", `%${primaryFilters[key]}%`);
    }
  }

  const response = await query
    .fetchPage({
      withRelated: related,
      pageSize: size || 10000,
      page: page || 1,
    })
    .then((resData) => {
      const { page, pageSize, rowCount } = resData.pagination;
      const payload = resData.toJSON();
      const RESPONSEEE = {
        table: payload,
        page,
        count: rowCount,
        size: pageSize,
      };
      return RESPONSEEE;
    });

  return response;
};

exports.getPosition = async (req, model, related, primaryFilters) => {
  const id = req.params.id;

  let query = model.forge();
  let response = {};

  try {
    if (primaryFilters) {
      for (let key in primaryFilters) {
        query = query.where(key, "LIKE", `%${primaryFilters[key]}%`);
      }
    } else {
      query = query.where("id", "LIKE", `%${id}%`);
    }

    response = await query.fetch({ withRelated: related }).then((resData) => {
      return resData.toJSON();
    });
  } catch {
    response = {};
  }

  return response;
};

exports.create = async (req, res, model, response) => {
  const body = req.body;
  await model
    .forge({
      ...body,
    })
    .save()
    .then((e) => {
      if (response) {
        res.json({
          ...response,
        });
      } else {
        res.json({
          status: "SUCCESS",
          data: {
            id: e.attributes.id,
          },
        });
      }
    });
};

exports.remove = async (req, res, model) => {
  const body = req.body;
  await model
    .where({ id: body.id })
    .destroy()
    .then((e) => {
      res.json({
        status: "success",
        data: {
          id: e.attributes.id,
        },
      });
    });
};
