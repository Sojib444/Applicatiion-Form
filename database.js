const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/Registration-form",{useCreateIndex:true,useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connect database succesful");
}).catch((error)=>
{
    console.log(error);
})