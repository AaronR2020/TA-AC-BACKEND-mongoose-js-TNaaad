mongoose= require("mongoose");
express=require('express');
Article=require('./article')
User=require('./user')

mongoose.connect('mongodb://127.0.0.1:27017',{
    useNewUrlParse:true,
    useUnifiedTopology:true
},(e)=>{
    console.log(e?e:"No Errors in connectiong to DataBase");
});

app=express();
