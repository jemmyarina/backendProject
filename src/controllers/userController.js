import User from '../models/userModel';
import bcrypt from 'bcryptjs';
import generateToken  from '../helpers/token';

export const signup= async (req, res) => {
    try {
        const { firstName, lastName, email, password} = req.body;

        const checkUser = await User.findOne({email});
        if (checkUser) {
            return res.status(400).json({error: 'Email already exist!'});
        }
        
        const salt = await bcrypt.genSalt(10);
        const PassH = await bcrypt.hash(password, salt);

        // const token = await generateToken(checkUser);

        const newUser =  new User({
            firstName,
            lastName,
            email,
            password: PassH
        });
        const savedUser = await newUser.save();
        return res.status(201).json({msg: 'User account created successfully', savedUser});
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
};


// USER SIGN UP

export const signups = (req,res,next)=>{
    User.create(req.body)
     .then((user) => {
        console.log('User Created ', user);
        res.statusCode = 200;
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
 }




//  SELECT ONE USER BY ID
export const readOneUser = (req, res, next) =>{
    const {id}=req.params;
    User.findById(id)
    .then((users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
 }

//  SELECT ALL USERS 
export const readAllusers= (req, res, next) =>{
    User.find({})
    .then((users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
 }

//  UPDATE A USER 
 export const updateUser= async (req, res, next) =>{
    try {
       const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
       const updatedUser= await User.findOne({ _id: req.params.id });
       res.status(200).send(updatedUser);
    }
    catch {
           res.status(400).json(`Error: ${error}`);
    }
}

// DELETING A USER
 
export const deleteUser = async (req, res, next) => {    
    let { id } = req.params;        
     
        const existUser = await User.find({ _id: id });  
       if (existUser.length) {  
       try {                
           const deletedUser = await User.deleteOne({ _id: id });                
           res.status(200).send(`User is deleted ${existUser}`);           
        }            
           catch (error) {    
               res.status(500).json({error});                    
            };       
        }        
       else { res.status(404).json({ status: 403, error: 'Blog does not exist' });        
       };    
}



// POST LOGIN
export const login = async (req, res) => {
    try {
        const { email, password} = req.body;
        const checkAccount = await User.findOne({email});
        if (!checkAccount) return res.status(404).json({error: 'Invalid email'});

        const isValidPass = await bcrypt.compare(password, checkAccount.password)
        if (!isValidPass) return res.status(400).json({error: 'Invalid password!'});

        const token = await generateToken(checkAccount);

        return res.status(200).json({msg: 'Logged in successfully!', token})

    } catch (err) {
        return res.status(500).json({error: err.message})
    }
};
