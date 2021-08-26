const BucketList = require('../database/model/bucketList')


module.exports = (list) => {  // 버킷리스트에서 해당하는 것들 모두 삭제
  for (let i in list) {
    BucketList.deleteOne({ 'id': list[i].id }).catch(err => console.log('AllRemover error', err))
  }
  return 1;
}