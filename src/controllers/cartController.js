let cartController = {
    main: async (req, res) => {
        try {
            res.render('cart')
        } catch (error) {
            res.json({error})
        }
    }
}

module.exports = cartController;