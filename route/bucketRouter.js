// Allbucket.js
// BucketAdd
// BucketDelete.js
// BucketLike.js
// BucketListCheck

const express = require('express')
const BucketDelete = require('../controller/bucketDelete')
const AllBucket = require('../controller/allBucket')
const MyBucket = require('../controller/myBucket')
const BucketAdd = require('../controller/bucketAdd')
const BucketListCheck = require('../controller/bucketListCheck')
const BucketLike = require('../controller/bucketLike')
const MyBucketChecked = require('../controller/myBucketChecked')

const BucketRouter = express.Router();


BucketRouter.delete('/',BucketDelete)
BucketRouter.get('/check', MyBucketChecked)
BucketRouter.get('/', MyBucket)
BucketRouter.get('/all',AllBucket)
BucketRouter.patch('/add',BucketAdd)
BucketRouter.patch('/check',BucketListCheck)
BucketRouter.patch('/like',BucketLike)
BucketRouter.use((req, res, next) => {
    res.statusCode = 404;
    res.send({'code':404,'msg':'request could not be found'})
  });

module.exports = BucketRouter


