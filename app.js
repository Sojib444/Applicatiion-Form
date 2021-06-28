const express=require("express")
const app=express();
const path=require("path")
const hbs=require("hbs")
require("./database")
const Register=require("./model")
const port=process.env.PORT ||3000

// const staticPath=path.join(__dirname,"../Registration form/public") 

// app.use(express.static(staticPath))    
app.use(express.json()) 
app.use(express.urlencoded({extended:false}))
const tamplatePath=path.join(__dirname,"../Registration form/templates/views")
const partialPath=path.join(__dirname,"../Registration form/templates/partials")
app.set("view engine","hbs")
app.set("views",tamplatePath)  
hbs.registerPartials(partialPath);
app.get("/",(req,res)=>
{
    res.render("index")
})
   
app.get("/SignUp",(req,res)=> 
{
    res.render("index")     
})
app.post("/register",async(req,res)=> 
{
        try{
            const password=req.body.Password;
            const cpassword=req.body.ConfrimPassword;
            if(password==cpassword)
            {
                const catro= new Register(
                    {
                        FirstName:req.body.FirstName,
                        LastName:req.body.LastName,
                        Email:req.body.Email,
                        Password:password,
                        ConfrimPassword:cpassword
                    }
                )
               const registerd=await catro.save()
               res.status(201).render("login")

            }else
            {
                res.send("Pssword Not matching")
            }



        }catch(e)
        {
           res.status(404).send(e)
        }
})

app.listen(port,()=>{
    console.log("app is run");
})
 