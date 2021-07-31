import { Button } from "@material-ui/core";
import { useAuth } from "data/hooks/Auth";
import { handleEditPost } from "data/hooks/Posts";
import Router from "next/router";
import { useState } from "react";
import { FormPostContainer, FormTitle } from "ui/components/FormContainerRegister/FormContainer.styles";
import { TextFieldStyled } from "ui/components/Inputs/TextField.styles";

export default function NewPost() {
    const [idPost, setIdPost] = useState<number>();
    const [text, setText] = useState<Text>();
    function handleRedirectPage() {
        Router.push('/posts')
    }
    function handleSetIdPost() {
        const { id } = Router.query;
        console.log(id)
        if (id !== undefined) {
            setIdPost((id as unknown) as number)
        }
    }

    return (
        <>
            <FormTitle>Digite:</FormTitle>
            <FormPostContainer >
                <TextFieldStyled
                    style={{ width: "100%" }}
                    label={"Editar post:"}
                    onChange={(evet) => setText((evet.target.value as unknown) as Text)}
                    multiline
                    rows={8}
                />
                <Button
                    sx={{ width: "220px", height: "60px", marginLeft: "42%" }}
                    onClick={() => {
                        handleSetIdPost()
                        if (idPost !== undefined) {
                            const data = handleEditPost(idPost, text).then(res => res)
                            console.log(data)
                        }
                    }}
                >
                    Enviar
                </Button>
            </FormPostContainer>
        </>
    )
}