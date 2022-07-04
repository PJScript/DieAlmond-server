const express = require('express')
const mongoose = require('mongoose')



const MypageRouter = require('./route/myPageRouter')
const BucketRouter = require('./route/bucketRouter')
const Crawling = require('./controller/crawling.js')
const cors = require('cors')
//라우팅

const GetMain = require('./controller/main')
const Setting = require('./controller/setting')
const Signout = require('./controller/signOut')
const WithDrawal = require('./controller/withDrawal.js')


// const Facebook = require('./Controller/SnsLogin/Facebook')
// const Github = require('./Controller/SnsLogin/Github')
const Google = require('./controller/snsLogin/google')
const Kakao = require('./controller/snsLogin/kakao')
// const Naver = require('./Controller/SnsLogin/Naver')

//소셜 로그인 컨트롤러

require('dotenv').config()



const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    credentials: true,
    method: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS']
}))
app.get('/', (req, res) => { 
// tensorflow.tfGo(req.body.age,req.body.count,res)
res.status(200).send('hi')

}
    )
app.post('/', (req, res) => { res.send('post hello') })
// 테스트용 

app.post('/kakao', Kakao)
app.post('/google', Google)


app.use('/bucket', BucketRouter)
app.use('/mypage', MypageRouter)
// 해당 하는 모든 요청을 파라미터로 라우팅
app.get('/crawl',Crawling)
app.get('/main', GetMain)
app.get('/signout', Signout)
app.post('/setting', Setting)
app.delete('/withdrawal', WithDrawal)

// 

//monogodb connect
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('mongo connect'))
    .catch((err) => console.log("CATCH ERROR", err))



app.listen(process.env.PORT || 8080, () => { console.log('open 8080 port') })