const Mongoose  = require("mongoose");
Schema=Mongoose.Schema;
ObjectId = Schema.Types.ObjectId;

userSchema= new Schema({
    name:String,
    email:{
        type:String,
        lowercase:true,
    },
    age:{
        type:Number,
        default:0,
    },
    password:{
        type:String,
        min:5
    },
    address:{
        
        village:{
            type:String,
            required:true
        },
        city:{
            type:String,
            validate:true,
        },
        state:String,
        pin:Number,
        user:ObjectId,
    },
    fav:[String],
},{
    timestamps:true
});

module.export=Mongoose.model('User',userSchema);
