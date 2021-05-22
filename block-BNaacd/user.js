const mongoose = require("mongoose");
userSchema=new mongoose.Schema({
    name: String,
    email: String,
    age: {type: Number,lowercase:true,default:0},

})
module.export=mongoose.model('User',userSchema);

