mongoose=require('mongoose');
Schema=mongoose.Schema;

articleSchema=new Schema({
    title: String,
    desc: String,
});

module.exports=mongoose.model('Article',articleSchema)