import { Router } from "express";
import UserController from "../controllers/UserController.js";

class UserRoutes {
    constructor() {
        this.routes = Router();
        this.inicializeRoutes();
    }

    inicializeRoutes() {
        this.routes.post("/register", UserController.create);
        this.routes.get("/read", UserController.readAll);//eliminar;

        this.routes.post("/login")
    }
}

export default new UserRoutes();