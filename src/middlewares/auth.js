const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const token = req.header("x-auth-token")
    if (!token) {
        return res.status(401).json({ message: "permiso no valido" })
    }
    try {
        const passVerifiedToken = jwt.verify(token, process.env.SECRET)
        req.user = passVerifiedToken.user
        next()
    } catch (err) {
        res.json({ message: "hubo un error", descripcion: err })
    }
}