const tokenVerify = require('../middleware/tokenVerify')
const User = require('../database/model/bucketList')

module.exports = async (req, res) => {
  let verifyData = tokenVerify(req, res)

  let userinfo = await User.findOne({ 'email': verifyData.email })

  if (userinfo) {
    res.status(200).send('로그아웃 완료')
  } else {
    res.status(400).send('잘못된 접근')
  }
}