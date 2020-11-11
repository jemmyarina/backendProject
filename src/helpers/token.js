import jwt  from 'jsonwebtoken';
import config from '../config/config';

 const generateToken = (user) => {
    const {firstName, lastName, email, _id, admin}=user;
    const secreteKey = config.SECRETE_KEY;

    return jwt.sign({firstName, lastName, email, _id, admin}, secreteKey, { expiresIn: '900000s' });
}

export default generateToken;