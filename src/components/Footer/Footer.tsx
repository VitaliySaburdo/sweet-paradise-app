import { Container } from "../Container/Container";
import { FooterWrapper, StyledLogoLink, StyledPhoneLink, Text } from "./Footer.styled";

export const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <StyledLogoLink to="/">Sweet Paradise</StyledLogoLink>
          <StyledPhoneLink to="tel:+380677764273">+380677764273</StyledPhoneLink>
          <Text>All rights reserved 2023-2024</Text>
        </Container>
      </FooterWrapper>
    </>
  );
};
