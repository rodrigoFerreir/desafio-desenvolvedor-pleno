import React from "react";
import { HeaderAppBar, HeaderTitle } from "./Header.styles";
import { Toolbar, Container } from "@material-ui/core";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderTitle>{title}</HeaderTitle>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;