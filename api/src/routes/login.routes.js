import { Router } from "express";
import AuthenticateController from "../controllers/AuthenticateController.js";

class UserRoutes {
    constructor() {
        this.routes = Router();
        this.inicializeRoutes();
    }

    inicializeRoutes() {
        this.routes.post("/login", AuthenticateController.login)
    }
}

export default new UserRoutes();