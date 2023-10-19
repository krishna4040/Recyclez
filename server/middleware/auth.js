const jwt = require('jsonwebtoken');

exports.auth = async (req,res,next) => {
    try {
        const token = req.cookies.token || req.header("Authorization").replace("Bearer ", "");
        if (!token) {
            throw new Error('token not found');
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        if (!decode) {
            throw new Error('invalid token');
        }
        req.user = decode;
        next();
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}