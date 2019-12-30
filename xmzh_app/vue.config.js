const bodyParser = require('body-parser')
module.exports = {
  devServer: {
    before(app){
      // 解析post请求
      app.use(bodyParser.json())
      app.post('/login',(req,res)=>{
        let {username,password} = req.body
        if(username==="admin"&&password==="2214358851"){
          res.send({
            code:200,
            data:{username},
            message:'登录成功'
          })
        }else{
          res.send({
            code:400,
            message:'登录失败'
          })
        }
      })
    }
  }
}