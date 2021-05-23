var mongoose=require('mongoose');
var Schema=mongoose.Schema;

articleSchema=new Schema({
    title:String,
    description:String,
    tags:String,
    likes:{
        type:Number,
        default:0
    }
},{
    timestamps:true
});

module.exports=mongoose.model('Articles',articleSchema)