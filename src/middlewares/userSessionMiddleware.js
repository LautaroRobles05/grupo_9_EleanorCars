const userSessionMiddleware = (req, res, next) => {
    if (req.cookies && req.cookies.remember) {
        // Si el usuario quiso ser recordado lo recordamos
        req.session.userLogged = req.cookies.remember;
        
    }

    if (req.session && req.session.userLogged) {
        // Si el usuario esta logueado guardamos la data
        res.locals.userLogged = req.session.userLogged;
       
    }

    next();
}

module.exports = userSessionMiddleware;