import UserRepository from "../repositories/UserRepository.js";
import Autheticator from "../utils/authentication.js";
import jwt from "jsonwebtoken";

class AuthController {

    async login(req, res) {
        const { email, password } = req.body;
        const keyJWT = process.env.JWT_KEY;
        const user = await UserRepository.readOneEmail(email);
        if (!user) {
            return res.status(401).json({ message: "Falha na autenticação" })
        } else if (user) {
            const result = await Autheticator(password, user.password)
            if (result === false) {
                return res.status(401).json({ message: "Falha na autenticação" })
            }

            const token = jwt.sign({
                username: user.userName,
                email: user.email
            }, keyJWT, {
                expiresIn: '2h'
            })

            return res.status(200).json({ message: "Usuario Logado", token: token })
        }
        return res.status(401).json({ message: "Falha na autenticação" })
    }

}

export default new AuthController();