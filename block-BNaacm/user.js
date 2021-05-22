mongoose=require('mongoose');
Schema=mongoose.Schema;

articleSchema=new Schema({
    title:String,
    desc:String,
});

module.export=mongoose.model('article',"articleSchema");

