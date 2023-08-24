import { Container } from "../Container/Container";
import { NavBar } from "../NavBar/NavBar";
import {
  FooterWrapper,
  LinkWrapper,
  StyledLogoLink,
  StyledPhoneLink,
  Text,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <LinkWrapper>
            <StyledLogoLink to="/">Sweet Paradise</StyledLogoLink>
            <NavBar />
            <StyledPhoneLink to="tel:+380677764273">
              +380677764273
            </StyledPhoneLink>
          </LinkWrapper>
          <Text>All rights reserved 2023-2024</Text>
        </Container>
      </FooterWrapper>
    </>
  );
};
