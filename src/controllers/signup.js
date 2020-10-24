// import User from '../models/userModel';  
// // import { user_signup } from './userController';


// //signup user

// export  const user_signup1 = async (req, res, next) => {
    
//     const user = { firstName: req.body, lastName: req.body, email: req.body, password: req.body}
    
//     // const token = generateToken.generate_token(user);

//     const existUser = await User.findOne({ email: user.email});

//     if (existUser) return res.status(400).json({ error: 'user already existing in database'});

//     // const hashedPassword = await hashedPassword (user.password);
    
//     const readUser = new User ({
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         password: user.password
//     });
//     try{
//         const addedUser = await User.create(readyUser);

//         res.status(201).json({ 'Mwassage': 'User created', 'user' : addedUser, 'token' : token});
//     }
//     catch (error) {
//         res.status(400).json(` User not created. Error: ${ error.message}`);
//     };
// }