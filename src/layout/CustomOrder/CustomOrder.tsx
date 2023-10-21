import { useState } from "react";
import { notify } from "../../helpers/Notification";
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
  PhoneField,
} from "./CustomOrder.styled";


export const CustomOrder = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !phone) {
      notify({ message: `Please fill all fields`, type: "warning" }); 
      return;
    }
    setName("");
    setPhone("");
    notify({ message: `${name} your order has been submitted`, type: "info" });
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
                  autoComplete="off"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Img src={User} alt="user" width={25} />
              </StyledLabel>
              <StyledLabel htmlFor="phone">
                <PhoneField
                  type="text"
                  mask="+38(099) 999-99-99"
                  name="phone"
                  value={phone}
                  placeholder="Enter your phone"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
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
