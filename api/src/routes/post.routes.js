import { Router } from "express";
import PostController from "../controllers/PostController.js";
import login from "../middlewares/login.js";

class PostRoutes {
    constructor() {
        this.routes = Router();
        this.inicializeRoutes();
    }

    inicializeRoutes() {
        this.routes.post("/posts", login, PostController.create);
        this.routes.get("/posts", login, PostController.readAll)
        this.routes.get("/posts/:id", login, PostController.readOne)
        this.routes.put("/posts/:id", login, PostController.update);
        this.routes.delete("/posts/:id", login, PostController.remove)
    }
}

export default new PostRoutes();