import RepositoryUsers from "../repositories/UserRepository.js";


class UserController {
    async create(req, res) {
        try {
            const { nome, userName, email, password } = req.body;
            const userVerificate = await RepositoryUsers.readOneEmail(email)
            if (!userVerificate) {
                const user = await RepositoryUsers.create(nome, email, userName, password);
                return res.status(200).json({ message: "Usuario criado com sucesso!", usuario: user })
            }
            return res.status(400).json({ message: "Erro! E-mail já cadastrado na plataforma" })

        } catch (error) {
            res.json({ erro: error.message })
        }
    }
    async readAll(req, res) {
        try {
            const users = await RepositoryUsers.read();
            return res.status(200).json({ users: users })
        } catch (error) {
            return res.json({ erro: error.message })
        }
    }
}

export default new UserController();
