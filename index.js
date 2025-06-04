let express = require('express');

let app= express()
app.use (express.json())
let myToken =" 12345"

let checkToken = (req,res,next)=>{
    console.log(req.query.token)
    if(req.query.token == "" || req.query.token == undefined){
        return res.send(
            {
                status:0,
                msg:"Please Fill the Token"
            }
        )
    }


    if(req.query.token!=myToken){
        return req.send(
            {
                status:0,
                msg:"Please Fill the correct Token"
            }
        )
    }
}
next();



}







app.get("/",(req,res)=>{
    res.send({status:1,msg:"Home page API"})

})

app.get("/news",(req,res)=>{
    res.send({status:1,msg:"news page API"})
})
app.get("/news/id:",(req,res)=>{
    let currentId = req.params.currentIdres.send("News Detailed API"+currentId)
})


app.get ("/products",(req,res)=>{
    res.send({status:1, msg:"hii dev"})
})

app.post("/Login",(req,res)=>{
console.log(req.body)

res.status(200).json( {
    status:1,
    msg:"Login API",
    bodyData:req.body,
    queryData:req.query
})

// res.send({
//     status:1,
//     msg:"Login API",
//     bodyData:req.body,
//     queryData:req.query 
// })
})

app.listen("8000")