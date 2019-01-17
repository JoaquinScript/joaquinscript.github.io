import React from "react";
import styled from "styled-components";
import { Github, Twitter, Linkedin } from "styled-icons/fa-brands";
import { Email } from "styled-icons/material";

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4a9df7;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const P = styled.p`
  text-align: center;
  margin: 5px;
`;

const Greet = styled(P)`
  margin-bottom: 30px;
  font-size: 180%;
`;

const Link = styled.a.attrs({ target: "_blank" })`
  height: 100%;
  & > svg {
    height: 50px;
    text-decoration: none;
    color: #4a9df7;
    vertical-align: middle;
    &:hover {
      opacity: 0.8;
      zoom: 1.1;
    }
    &:active {
      opacity: 1;
    }
  }
`;

const Icons = styled.div`
  margin-top: 30px;
  display: flex;
  & > ${Link}:not(:last-child) {
    margin-right: 20px;
  }
`;

const App = () => (
  <Container>
    <Greet>
      Hi, I'm <strong>Joaquín Moreira</strong>.
            </Greet>
    <P>
      <strong>Computer Engineer</strong>
      , family man &
      <br />
      amateur musician.
    </P>
    <Icons>
      <Link href="https://github.com/joaquinscript">
        <Github />
      </Link>
      <Link href="https://twitter.com/joaquinscript">
        <Twitter />
      </Link>
      <Link href="https://linkedin.com/in/moreirasababa/">
        <Linkedin />
      </Link>
      <Link href="mailto:joaquinscript@gmail.com">
        <Email />
      </Link>
    </Icons>
  </Container>
);

export default App;
