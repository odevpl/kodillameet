const { Terms } = require("../models");
const { getList } = require("../helpers/filters");

exports.getTerms = async (req, res) => {
  let terms = await getList(req, Terms);

  res.json({
    terms,
  });
};
