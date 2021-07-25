var express = require('express');
var router = express.Router();

const userRouter = require('./user');
const profileRouter = require('./profile');

// branching using index as parent route

router.use('user',userRouter);
router.use('profile',profileRouter);

module.exports = router;
