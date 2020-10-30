import jwt  from 'jsonwebtoken';
import config from '../config/config';

 const generateToken = (user) => {
    const {firstName, lastName, email, _id}=user;
    const secreteKey = config.SECRETE_KEY;

    return jwt.sign({firstName, lastName, email, _id}, secreteKey, { expiresIn: '9000s' });
}

export default generateToken;