var express = require('express');
var router = express.Router();
var { signIn } = require('../services/jwt');
const users = require('../models/users');

router.use('/', async function (req, res, next) {
    try {

        const row = await users.findOne({
            where: {
                name: req.body.usu,
                psw: req.body.psw
            }
        });

        if (!row)
            next();
        else {
            res.token = signIn(req.body.usu); 
            next();
        }

    } catch (error) {
        res.sendStatus(500);
    }
});

/* GET users listing. */
router.post('/', function (req, res, next) {
    if (!res.token)
        res.sendStatus(403);
    else
        res.send({ token: res.token });
});

module.exports = router;
