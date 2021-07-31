
import Post from '../models/Posts.js';

export class RepositoryPosts {

    async create(text, username) {

        try {
            const post = await Post.create({
                user: username,
                text: text
            })
            return post
        } catch (error) {
            return (error);
        }
    }
    async read() {
        try {
            const posts = await Post.findAll();
            return posts
        } catch (error) {
            return (error)
        }
    }

    async readOne(id) {
        try {
            if (id) {
                const post = await Post.findByPk(id);
                return post
            }
        } catch (error) {
            return (error)
        }
    }

    async update(id, text) {
        try {
            if (id) {
                const post = await Post.findByPk(id);
                post.text = text;
                return post
            }
        } catch (error) {
            return (error)
        }
    }

    async delete(id) {
        try {
            if (id) {
                Post.destroy({ where: { id: id } })
            }
        } catch (error) {
            return (error)
        }
    }
}

export default new RepositoryPosts();