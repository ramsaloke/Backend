const express = require("express");
const app = express();
let port = 8080;

app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
});

// app.use((req,res)=>{
//     console.log("request recieved");
//     let hello = "<h1> hello world</h1><ul> this is ram , iam a web developer please give me a web developer job</u>"
   
//     res.send(hello);
// });

app.get("/apple",(req,res)=>{
res.send("you contacted apple path");
});





// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
//     });
// app.get("*",(req,res)=>{
//     res.send("hello im rout");
// });
app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
       let htmlstr = `<h1> welcome to the page of  @ ${username}`;
       res.send(htmlstr);
});
