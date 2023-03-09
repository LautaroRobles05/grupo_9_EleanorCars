const userSessionMiddleware = (req, res, next) => {
    if (req.cookies && req.cookies.remember) {
        // Si el usuario quiso ser recordado lo recordamos
        req.session.userLogged = req.cookies.remember;
        console.log("cookie",req.cookies.remember);
    }

    if (req.session && req.session.userLogged) {
        // Si el usuario esta logueado guardamos la data
        res.locals.userLogged = req.session.userLogged;
        console.log("session",req.session.userLogged);
    }

    next();
}

module.exports = userSessionMiddleware;