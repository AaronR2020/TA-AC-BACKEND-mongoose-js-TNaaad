const { Mongoose, Schema } = require("mongoose");
Schema=Mongoose.Schema;

atricle=new Schema({
title:String,
description:String,
tags:String,
likes:String,
author :String,
comments:{
    type:String,
    content:String,
    author:String,
},

},{
    timestamps:true
})
module.exports=Mongoose.model('Article',article)
