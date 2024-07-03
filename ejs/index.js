let express = require ("express");
let app = express();
let port = 8080;
const path = require("path");
app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine", "ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/:ig/:username",(req,res)=>{
    let {username} = req.params;
       const instaData = require("./data.json");
    let data = instaData[username];
   if (data){
    res.render("instagram.ejs", {data} );
   }else{
    res.render("error.ejs");
   }

  
});

app.get("/rolldice",(req,res)=>{
    let diceval = Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs" , {diceval});
});

app.get("/helo",(req,res)=>{
    res.send("hello");
});

app.listen(port,()=>{
    console.log(`app is listening On port ${port}`);
});
