const { Mongoose, Schema } = require("mongoose");

Schema=Mongoose.Schema

userSchema=new Schema({
    password:{
        type:String,
        min:5,
        max:15,
    }
},{
    timestamps:true
});

module.export=Mongoose.model('User',userSchema);