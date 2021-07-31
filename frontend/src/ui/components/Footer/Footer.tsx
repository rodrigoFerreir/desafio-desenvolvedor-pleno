import React from "react";
import {
  FooterStyles,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.styles";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyles>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Digite seu email e senha para acessar a plataforma.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Não é cadastrado?</FooterTitle>
          <AppList>
            <a href={"/register"} rel={"noopener noreferrer"}>
              Cadastre-se aqui!
            </a>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyles>
  );
};

export default Footer;