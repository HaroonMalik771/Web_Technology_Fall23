const validateUser = (req, res, next) => {

    if (!req.body.email || !req.body.email.includes('@')) {
        return res.redirect('/users/add');
    }
    next();
};

module.exports = validateUser;
