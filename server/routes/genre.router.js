const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT * FROM "genres" ORDER BY "name" ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});
router.post("/:id", (req, res) => {
  const queryText = `INSERT INTO "movies_genres"("url) VALUES($1)`;
  console.log(req.body);
  pool
    .query(queryText, [req.body.url])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in POST", err);
      res.status(500).send("Error posting in Details");
    });
});
module.exports = router;
