import jwt from 'jsonwebtoken';
import config from '../config/config';

export const auth = (req, res, next)=>{
    const token = req.header('auth-token');
    if(!token) return res.status(401).json({msg: 'please, sign in first'});

    try{
        const secreteKey = config.SECRETE_KEY;
        const verified = jwt.verify(token,secreteKey);
        req.user = verified;
        return next();
    }catch(err){
        return res.status(403).json({message: 'Your token has expired'});
    }
}