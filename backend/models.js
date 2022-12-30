const bookshelf = require("./config/bookshelf");

exports.Terms = bookshelf.Model.extend({
  tableName: "terms",
});
