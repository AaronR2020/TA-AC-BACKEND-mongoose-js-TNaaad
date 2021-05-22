article = require('./article');
mongoose=require('mongoose');

mongoose.connect(' mongodb://127.0.0.1:27017',{useNewUrlParser:true,useUnifiedTopology:true},(e)=>{
    console.log(e?e:"No Error");
})

