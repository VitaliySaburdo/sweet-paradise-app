import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import user from "../../images/CustomOrder/user.png";
import phone from "../../images/CustomOrder/phone.png";

import {
  StyledSection,
  Box,
  Title,
  AccentText,
  Text,
  StyledForm,
  StyledField,
  Img,
  StyledLabel,
} from "./CustomOrder.styled";

export const CustomOrder = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <StyledSection>
        <Container>
          <Box>
            <Title>
              {" "}
              <AccentText>Order</AccentText> <br />
              individual <br />
              <AccentText>set of sweets</AccentText>{" "}
            </Title>
            <Text>
              Fill out the form and we will call you back to complete your order
            </Text>
            <StyledForm onSubmit={handleOnSubmit}>
              <StyledLabel htmlFor="name">
                <StyledField
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <Img src={user} alt="user" width={25} />
              </StyledLabel>
              <StyledLabel htmlFor="phone">
                <StyledField
                  type="text"
                  name="phone"
                  placeholder="Enter your phone"
                />
                <Img src={phone} alt="phone" width={25} />
              </StyledLabel>
              <Button type="submit">More products</Button>
            </StyledForm>
          </Box>
        </Container>
      </StyledSection>
    </>
  );
};
