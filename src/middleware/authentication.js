import jwt from 'jsonwebtoken';
import config from '../config/config';

export const auth = (req, res, next)=>{
    const token = req.header('auth-token');
    if(!token) return res.status(401).json({msg: 'please, sign in first'});

    try{
        // const secreteKey = config.SECRETE_KEY;
        const secreteKey = config.SECRETE_KEY;
        const verified = jwt.verify(token,secreteKey);
        req.user = verified;
        return next();
    }catch(err){
        return res.status(403).json({message: err.message});
    }
};

export const admin = (req, res, next) => {
    const { admin } = req.user;
    
    if (!admin) return res.status(401).json({msg: 'Acces denied, available for admins only'})

    return next()
};