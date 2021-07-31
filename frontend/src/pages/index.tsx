import React, { useContext, useState } from "react"
import { Button } from "@material-ui/core"
import { FormContainer } from "@styles/pages/index.styles"
import { TextFieldStyledEmail, TextFieldStyledPassword } from "ui/components/Inputs/TextField.styles"
import { handleAutheticateUser } from "data/hooks/Login";
import { AuthContext } from "contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { singIn } = useContext(AuthContext);

  async function handleSiginUser(email: string, password: string) {
    const data = {
      email: email,
      password: password
    }
    await singIn(data)
  }

  return (
    <FormContainer>
      <TextFieldStyledEmail
        placeholder={"Digite o seu email:"}
        type={"email"}
        onChange={(evet) => setEmail(evet.target.value)}
      />
      <TextFieldStyledPassword
        placeholder={"Digite a sua senha:"}
        type={"password"}
        onChange={(evet) => setPassword(evet.target.value)}
      />
      <Button
        onClick={() => handleSiginUser(email, password)}
      >Login</Button>
    </FormContainer>
  )
}
