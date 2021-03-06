import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
// Components
import { Footer } from "../footer";
import { Nav } from "../nav";

const Container = styled.div`
  position: relative;
  z-index: ${props => props.theme.zIndex.content};
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <Nav />
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
