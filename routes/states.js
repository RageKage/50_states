let express = require("express");
const { config } = require("../.sequelizerc");
let States = require("../models").States;

let router = express.Router();

router.get("/states", (req, res, next) => {
  States.findAll({ order: ["name"] })
    .then((state) => {
      return res.json(state);
    })
    .catch((err) => next(err));
});

// this will return info about one state
router.get("/state/:name", (req, res, next) => {
  let stateName = req.params.name;
  States.findOne({ where: { name: stateName } })
    .then((state) => {
      if (state) {
        return res.json(state);
      } else {
        return res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      return next(err);
    });
});

// this updates if a state is visited or not
router.patch("/states/:name", (req, res, next) => {
  let stateName = req.params.name;
  let stateVisited = req.body.visited;

  States.update({ visited: stateVisited }, { where: { name: stateName } })
    .then((rowsUpdated) => {
      let numberOfRows = rowsUpdated[0];
      if (numberOfRows === 1) {
        return res.send('ok');
      }
      return res.status(404).send("State not found");
    })
    .catch((err) => {
      return next(err);
    });
});

router.get("/states/:name", (req, res, next) => {
  States.findAll({where: {visited: true,},}) // this will find any state that returns true if they been visited
    .then((state) => {
      return res.send(state)
    })
    .catch((err) => {
      return next(err);
    });
});
module.exports = router;
