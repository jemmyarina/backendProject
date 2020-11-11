
exports.validate_user = async (req, res, next) => {
    const password = req.body;
    const pwdLength = password.length;
    if (pwdLength < 6) return res.status(400).json({ message: 'Password is not correct.' });
        
    return next();
};