let express = require('express');
let States = require('../models').States


let router = express.Router()

router.get('/states', (req, res, next) => {
    States.findAll({order: ['name']}).then(state => {
        return res.json(state)
    }).
    catch(err => next(err))

})

module.exports = router