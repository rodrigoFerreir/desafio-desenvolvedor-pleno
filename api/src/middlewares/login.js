import jwt from "jsonwebtoken";

export default function login(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    const keyJWT = process.env.JWT_KEY
    try {
        const decode = jwt.verify(token, keyJWT);
        req.username = decode
        next()
    } catch (error) {
        return res.status(401).json({ message: "Falha na autenticação" })
    }
}