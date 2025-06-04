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

module.export = {checkToken}
