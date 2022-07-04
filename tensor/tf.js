const tf = require('@tensorflow/tfjs-node')


module.exports = {
      tfGo: (age,count, res) => {
            console.log(age,count,"input")
            let result
            tf.loadLayersModel('file://model/ver_0.0.3/model.json').then((model) => {
                 result = model.predict(tf.tensor([[age, count]])).dataSync()
                 return result;
            //      console.log(test)
            }).then((result)=>{
console.log(result[0],"result")
res.status(200).send({'life':result[0],'msg':'success'});

// 'life': data, 'msg': 'success'
            })
            // console.log(result,'result02')
            // return result[0];
      }
}



