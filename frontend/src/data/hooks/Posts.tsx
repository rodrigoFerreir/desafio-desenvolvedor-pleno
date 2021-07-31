import { AuthContext } from "contexts/AuthContext";
import { apiService } from "data/service/api/api"
import Router from "next/router"
import { parseCookies } from "nookies"
import { useContext } from "react";

const { "blog@token": token } = parseCookies();
export async function handleGetPosts() {
    try {
        const posts = await apiService.get("posts", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => res.data)
        return (posts)
    } catch (error) {
        return (error.message)
    }
}

export async function handleNewPost(postText: Text, user: string) {
    try {
        const posts = await apiService.post("posts", {
            "username": user,
            "text": postText
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => res.data)
        return (posts)
    } catch (error) {
        return (error.message)
    }
}

export async function handleEditPost(idPost: number, postText: Text) {
    try {
        const posts = await apiService.put(`posts/${idPost}`, {
            "text": postText
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => res.data)
        return (posts)
    } catch (error) {
        return (error.message)
    }
}

export async function handleDeletePost(idPost: number) {
    try {
        const posts = await apiService.delete(`posts/${idPost}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        if (posts.status === 200) {
            Router.reload()
        }
    } catch (error) {
        return (error.message)
    }
}