import { Button } from "@material-ui/core";
import { handleRegisterUser } from "data/hooks/User";
import { useState } from "react";
import { FormContainer, FormTitle } from "ui/components/FormContainerRegister/FormContainer.styles";
import { TextFieldStyled } from "ui/components/Inputs/TextField.styles";

export default function Register() {
    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <>
            <FormTitle>Digite as informações necessárias:</FormTitle>
            <FormContainer>
                <TextFieldStyled
                    label={"Nome:"}
                    onChange={(evet) => setNome(evet.target.value)}
                />
                <TextFieldStyled
                    label={"Usuário:"}
                    onChange={(evet) => setUsuario(evet.target.value)}
                />
                <TextFieldStyled
                    label={"Email:"}
                    type={"email"}
                    onChange={(evet) => setEmail(evet.target.value)}
                />
                <TextFieldStyled
                    label={"Senha"}
                    onChange={(evet) => setSenha(evet.target.value)}
                />
            </FormContainer>
            <Button
                sx={{ width: "220px", marginLeft: "42%" }}
                onClick={() => handleRegisterUser(nome, usuario, email, senha)}
            >
                Cadastrar
            </Button>
        </>
    )
}