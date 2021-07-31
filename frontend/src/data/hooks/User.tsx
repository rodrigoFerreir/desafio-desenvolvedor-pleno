import { apiService } from "data/service/api/api";

export async function handleRegisterUser(nome: string, username: string, email: string, password: string) {
    try {
        const { data } = await apiService.post("register", {
            nome: nome,
            userName: username,
            email: email,
            password: password
        })
        return data.message
    } catch (error) {
        return (error.message)
    }
}

