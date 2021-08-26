const express = require('express')
const GetMypage = require('../controller/getMyPage')
const PatchMypage = require('../controller/patchMypage')

const MypageRouter = express.Router();

MypageRouter.get('/',GetMypage)
MypageRouter.patch('/',PatchMypage)
MypageRouter.use((req, res, next) => {
    res.statusCode = 404;
    res.send({'code':404,'msg':'request could not be found'})
  });

module.exports = MypageRouter