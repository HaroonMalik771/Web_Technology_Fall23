const validateUser = (req, res, next) => {
    // Example validation logic
    if (!req.body.email || !req.body.email.includes('@')) {
        return res.redirect('/users/register');
    }
    next();
};

module.exports = validateUser;
