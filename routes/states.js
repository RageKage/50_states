let express = require("express");
let States = require("../models").States;

let router = express.Router();

router.get("/states", (req, res, next) => {
  States.findAll({ order: ["name"] })
    .then((state) => {
      return res.json(state);
    })
    .catch((err) => next(err));
});

router.patch("/states/:name", (req, res, next) => {
  let stateName = req.params.name;
  let stateVisited = req.body.visited;


  States.update({ visited: stateVisited }, { where: { name: stateName } })
    .then((rowsUpdated) => {
      let numberOfRows = rowsUpdated[0];
      if (numberOfRows === 1) {
        return res.send("ok");
      }
      return res.status(404).send("State not found"); 
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = router;
