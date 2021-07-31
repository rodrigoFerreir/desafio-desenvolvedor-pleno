import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import database from './database/index.js'
import userRoutes from "./routes/users.routes.js";
import postRoutes from "./routes/post.routes.js";
import AuthRoutes from "./routes/login.routes.js";

class Server {
    constructor() {
        this.app = express();
        this.sync();
    }

    async sync() {
        await database.sync().then(() => console.log("Database is ready"));
    }

    run() {
        dotenv.config()
        const port = process.env.PORT || 3003;

        this.middleweres();
        this.routes();

        this.app.listen(port, () => {
            console.log(`Server is running: ${port}`)
        });


    }

    middleweres() {
        this.app.use(express.json());
        this.app.use(cors("*"));
    }

    routes() {
        this.app.use(userRoutes.routes);
        this.app.use(postRoutes.routes);
        this.app.use(AuthRoutes.routes);
    }
}

export default Server;