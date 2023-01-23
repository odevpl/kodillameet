const express = require("express");
const router = express.Router();

try {
  const TermsController = require("./controllers/terms");

  router.post("/terms", TermsController.getTerms);

  router.post("/*", (req, res) => res.json({ table: [] }));

} catch (error) {
  console.log("Sorry... some problem", error);
}



module.exports = router;