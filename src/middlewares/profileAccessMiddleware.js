function profileAccessMiddleware(req, res, next) {
    if(!(req.session.userLogged && (req.session.userLogged.rol_id == 2 || req.session.userLogged.id == req.params.id))){
        return res.redirect('/')
    }
    next();
}

module.exports = profileAccessMiddleware