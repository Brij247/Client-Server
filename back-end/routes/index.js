var express = require('express');
const app = require('../app');
var router = express.Router();
const path =require('path')



var users=[
  {
  email: 'abc@gmail.com', password: 'password'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
res.send("Welcome to server");
});



router.post('/login',function(req,res){
  let result = users.find(user => user.email == req.body.email);
  var valid=false;
  if(result){
    if(result.password == req.body.password){
      res.status(200).send({
        message: "successfully login",
      })
      //app.use(express.static(path.join(__dirname, 'build')));
      
    } else{
      res.status(200).send({
        message: "pswd error"
      })
    }
  }else{
    res.status(200).send({
      message: "user error"
    })
  }
})
router.post('/home',function(req,res){
  
  res.status(200).send({
    message: "successfully home",
  })

})




module.exports = router;
