import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  position: relative;
  bottom:0;
  width: 100%;
  background-color: #181d38;
  color: #eb9b34;
  text-align: center;
  padding: 1rem 0;
`;
export const NavLink = styled.a`
  color: #eb9b34;
  text-decoration: none;
  &:hover {
    color: #535c91;
  }
`;
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      &copy; Copyright {new Date().getFullYear()}.Song app. Built by{" "}
      <NavLink href="https://github.com/FevenSeyfu">Yohannes Mulat</NavLink>
    </FooterContainer>
  );
};

export default Footer;
