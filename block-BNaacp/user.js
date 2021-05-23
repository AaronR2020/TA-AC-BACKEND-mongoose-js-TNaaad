const { Mongoose, Schema } = require("mongoose");
Schema=Mongoose.Schema;

userSchema=new Schema({
  name:String,
  email:String,
  sports:[String]  
});

module.export=Mongoose.model('User',userSchema);