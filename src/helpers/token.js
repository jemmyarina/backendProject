import jwt  from 'jsonwebtoken';

const generateToken = (user) => {
    return jwt.sign(user, 'abc123', { expiresIn: '600s' });
}

console.log(generateToken({name: 'peter'}));
