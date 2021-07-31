import User from '../models/Users.js';
import bcrypt from 'bcrypt';

class RepositoryUsers {
    async create(name, email, userName, password) {
        const hash = await bcrypt.hash(password, 10).then(hash => hash)
        try {
            await User.create({
                name: name,
                email: email,
                userName: userName,
                password: hash,
            })
        } catch (error) {
            return (error);
        }
    }

    async read() {
        try {
            const users = await User.findAll();
            return users
        } catch (error) {
            return (error)
        }
    }

    async readOne(id) {
        try {
            const user = await User.findByPk(id);
            return user
        } catch (error) {
            return (error)
        }
    }


    async readOneEmail(email) {
        try {
            const user = await User.findOne({ where: { email: email } })
            return user
        } catch (error) {
            return (error.message)
        }
    }

    async update(id) { //melhorar
        try {
            if (id) {
                const user = await User.findByPk(id);
                return user
            }
        } catch (error) {
            return (error)
        }
    }

    async delete(id) {
        try {
            if (id) {
                User.destroy({ where: { id: id } })
            }
        } catch (error) {
            return (error)
        }
    }
}

export default new RepositoryUsers();