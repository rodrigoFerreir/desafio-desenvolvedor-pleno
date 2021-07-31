import React, { useEffect, useState } from "react";
import Router from 'next/router';
import { PostsContainer, PostsPaper } from "@styles/pages/index.styles";
import { handleGetPosts } from "data/hooks/Posts";
import PostInformation from "ui/components/PostList/PostList";
import { Button } from "@material-ui/core";

export default function Posts() {
    const [posts, setPost] = useState([]);
    const [load, setLoad] = useState(true);

    async function handleSetPosts() {
        const dataPosts = await handleGetPosts();
        setPost(dataPosts.posts)
        if (posts.length !== 0) {
            setLoad(false)
        }
    }

    function handleRedirectPage() {
        Router.push('/newpost')
    }

    useEffect(() => {
        handleSetPosts();
    }, [load])
    return (
        <PostsPaper>
            <div style={{ marginBottom: "24px" }}>
                <Button onClick={handleRedirectPage}>Novo Post</Button>
            </div>
            <PostsContainer>
                {
                    posts.map((item, index) => {
                        return (
                            <PostInformation
                                key={item.id}
                                postID={item.id}
                                user={item.user}
                                text={item.text}
                            />
                        )
                    })
                }
            </PostsContainer>
        </PostsPaper>
    )
}