import { Container } from "../../components/Container/Container";
import User from "../../images/CustomOrder/user.png";
import Phone from "../../images/CustomOrder/phone.png";

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
  StyledButton,
} from "./CustomOrder.styled";
import { useState } from "react";

export const CustomOrder = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name: name, phone: phone });
    setName('');
    setPhone('');
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
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Img src={User} alt="user" width={25} />
              </StyledLabel>
              <StyledLabel htmlFor="phone">
                <StyledField
                  type="text"
                  name="phone"
                  value={phone}
                  placeholder="Enter your phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Img src={Phone} alt="phone" width={25} />
              </StyledLabel>
              <StyledButton type="submit">More products</StyledButton>
            </StyledForm>
          </Box>
        </Container>
      </StyledSection>
    </>
  );
};
