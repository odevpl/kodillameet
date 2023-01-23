const { Terms } = require("../models");
const { getList } = require("../helpers/filters");

exports.getTerms = async (req, res) => {
  let terms = await getList(req, Terms);

  res.json({
    terms,
  });

};

/*
Terms.forge({
  year: 2023,
  week_id: 1,
  user_uuid: '',
  hour: "07:00:02",
  week_day_id: 4,
})
.save()
.then(term => {
  console.log(term)
})
.catch(err => {
  console.log(err)
})
*/