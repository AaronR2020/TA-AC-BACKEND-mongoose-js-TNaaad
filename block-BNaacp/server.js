express=require('express');
mongoose=require('mongoose');
User=require('./user')

mongoose.connect(' mongodb://127.0.0.1:27017/Student',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(e)=>{
    console.log(e?e:"Connected Successfully");
});

app=express();
app.listen(4000,()=>{
    console.log("Port:4000");
});
app.use(express.json())

app.post('/users',(req,res)=>{
    //capture data
    console.log(
        req.body
    );
    //save data in database
    User.create(req.body,(e,p)=>{
        console.log(e,p);
    })
    res.send()
    });

app.get('/find',(req,res)=>{
res.send( User.find({}));
});

