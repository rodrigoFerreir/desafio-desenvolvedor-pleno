import { apiService } from "data/service/api/api";
import jwt from "jsonwebtoken";

export async function handleAutheticateUser(email: string, password: string) {
    try {
        const { data } = await apiService.post("login", {
            email: email,
            password: password
        })
        const user = jwt.decode(data.token)
        console.log(user)
        return {
            message: data.message,
            user: user,
            token: data.token
        }
    } catch (error) {
        return (error.message)
    }
}
