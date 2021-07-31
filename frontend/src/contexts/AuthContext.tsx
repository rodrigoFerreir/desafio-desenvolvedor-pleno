import { handleAutheticateUser } from "data/hooks/Login";
import { createContext, useState } from "react";
import Router from "next/router";
import { setCookie } from "nookies";

type User = {
    username: string;
    email: string;
}

type LoginData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAutenticated: boolean;
    userAuth: User;
    singIn: (data: LoginData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
    const [userAuth, setUserAuth] = useState<User | null>(null);

    const isAutenticated = !!userAuth;

    async function singIn({ email, password }: LoginData) {
        const { token, user } = await handleAutheticateUser(email, password);
        setCookie(undefined, "blog@token", token, {
            maxAge: 60 * 60 * 1 // 1hora
        })
        setUserAuth(user)
        Router.push("/posts")
    }

    return (
        <AuthContext.Provider value={{ userAuth, isAutenticated, singIn }} >
            {children}
        </AuthContext.Provider>
    )
}