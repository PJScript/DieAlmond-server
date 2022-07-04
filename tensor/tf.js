const tf = require('@tensorflow/tfjs-node')


module.exports = {
      tfGo: (age,count, res) => {
            let result
            tf.loadLayersModel('file://model/ver_0.0.3/model.json').then((model) => {
                 result = model.predict(tf.tensor([[age, count]])).dataSync()
                 return result;
            //      console.log(test)
            }).then((result)=>{
console.log(result[0],"result")
res.status(200).send({result:result[0]});
            })
            // console.log(result,'result02')
            // return result[0];
      }
}



