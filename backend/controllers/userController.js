// @desc Register new user
// @route POST /api/users
// @acces Public
const registerUser = (req,res) => {
    res.json({message: 'Register User'})
}

// @desc Authenticate a user on login
// @route POST /api/users/login
// @acces Public
const loginUser = (req,res) => {
    res.json({message: 'Login User'})
}

// @desc Get user's data
// @route GET /api/users/me
// @acces Public
const getUser = (req,res) => {
    res.json({message: 'Display User Information'})
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
}