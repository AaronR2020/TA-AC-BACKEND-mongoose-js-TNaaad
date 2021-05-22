const { Mongoose, Schema } = require("mongoose");

Schema=Mongoose.Schema;

userSchema=new Schema({
    fav:[String],
    marks:[Number],
    address:{
        village:String,
        city:String,
        state:String,
        pin:Number,
        user:Schema.Types.ObjectId
    }
});