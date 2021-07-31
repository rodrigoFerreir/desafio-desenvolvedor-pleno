import React from "react";
import { Button } from "@material-ui/core";
import {
    UserInformationContainer,
    UserName,
    TextPost
} from "./PostList.styles";
import { handleDeletePost } from "data/hooks/Posts";
import Router from "next/router";

interface PostListProps {
    postID: number
    user: string,
    text: Text
}

const PostInformation: React.FC<PostListProps> = ({
    postID,
    user,
    text
}) => {
    function handleRedirectPage(postID: number) {
        Router.push(`/editpost?id=${postID}`)
    }

    return (
        <UserInformationContainer >
            <Button onClick={() => handleRedirectPage(postID)}>Editar</Button>
            <Button onClick={() => handleDeletePost(postID)}>Deletar</Button>
            <UserName>{user}</UserName>
            <TextPost>{text}</TextPost>
        </UserInformationContainer>
    );
};

export default PostInformation;