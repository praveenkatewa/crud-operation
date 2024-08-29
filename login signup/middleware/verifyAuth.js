const jwt = require('jsonwebtoken');
const secret = 'wedrfuiofdsghjklkjhmnvcxvbnmlkjytertyuiouy'
const User = require("../models/user");

module.exports = async (req,res,next) =>{
    try{
        const header = req.headers.authorization
        console.log(`>>>>>header>>>>>>>>>`,header);
        
        if(!header){
            return res.status(401).json({message: 'No header provided'})
        }
    
        const token = header.split(" ")[1]
        console.log(`>>>>>token>>>>>>>>>`,token);
    
        if(!token){
            return res.status(401).json({message: 'No token provided'})
        }
    
        const decode = jwt.verify(token,secret)
        console.log(`>>>>>>decode>>>>>>>>>`,decode);
        
        if(!decode){
            return res.status(401).json({message: 'invalid user'})
        }
    
        const {id} = decode
        const user = await User.findOne({_id:id})
        console.log(`>>>>>>user>>>>>>>>>`,user);
    
        if(!user){
            return res.status(401).json({message: 'no user found'})
        }
        next();
        
    }catch(error){
        return res.status(401).json({message: `token time out ${error} `})
    }
    

}