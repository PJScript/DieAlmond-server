const tf = require('@tensorflow/tfjs-node')


tf.loadLayersModel('file://model/ver_0.0.3/model.json').then((model)=>{
      model.predict(tf.tensor([[1,1]])).print();
      console.log("test")
})


