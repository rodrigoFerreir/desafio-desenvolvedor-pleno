import { Button } from "@material-ui/core";
import { useAuth } from "data/hooks/Auth";
import { handleNewPost } from "data/hooks/Posts";
import Router from "next/router";
import { useState } from "react";
import { FormPostContainer, FormTitle } from "ui/components/FormContainerRegister/FormContainer.styles";
import { TextFieldStyled } from "ui/components/Inputs/TextField.styles";

export default function NewPost() {
    const { userAuth } = useAuth();

    const [text, setText] = useState<Text>();
    function handleRedirectPage() {
        Router.push('/posts')
    }
    return (
        <>
            <FormTitle>Digite:</FormTitle>
            <FormPostContainer >
                <TextFieldStyled
                    style={{ width: "100%" }}
                    label={"Novo post:"}
                    onChange={(evet) => setText((evet.target.value as unknown) as Text)}
                    multiline
                    rows={8}
                />
                <Button
                    sx={{ width: "220px", height: "60px", marginLeft: "42%" }}
                    onClick={() => {
                        handleNewPost(text, userAuth.username)
                        handleRedirectPage()
                    }}
                >
                    Enviar
                </Button>
            </FormPostContainer>
        </>
    )
}