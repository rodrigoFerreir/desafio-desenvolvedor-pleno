import RepositoryPosts from "../repositories/PostRepository.js";


class PostController {
    async create(req, res) {
        try {
            const { text, username } = req.body;
            const post = await RepositoryPosts.create(text, username);
            if (!post) {
                return res.status(400).json("Post não foi criado")
            }
            res.status(200).json({ message: "Post criado com sucesso!", post: post })
        } catch (error) {
            res.json({ erro: error })
        }
    }

    async readAll(req, res) {
        try {
            const posts = await RepositoryPosts.read();
            if (!posts) {
                return res.status(400).json("Posts não encontrados")
            }
            res.status(200).json({ posts: posts })
        } catch (error) {
            res.json({ erro: error })
        }
    }

    async readOne(req, res) {
        try {
            const { id } = req.params
            const posts = await RepositoryPosts.readOne(id);
            if (!posts) {
                return res.status(400).json("Post não encontrado!")
            }
            res.status(200).json({ message: "Post encontrado.", posts: posts })
        } catch (error) {
            res.json({ erro: error })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params
            const { text } = req.body
            const posts = await RepositoryPosts.update(id, text)
            res.status(200).json({ message: "Atualizado com sucesso!", posts: posts })
        } catch (error) {
            res.json({ erro: error })
        }
    }

    async remove(req, res) {
        try {
            const { id } = req.params
            await RepositoryPosts.delete(id);
            res.status(200).json({ message: "Deletado  com sucesso!", })
        } catch (error) {
            res.json({ erro: error })
        }
    }
}

export default new PostController();
