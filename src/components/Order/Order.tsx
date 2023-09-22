import { Container } from "../Container/Container";
import { Section } from "../Section/Section";
import { Formik } from "formik";
import {
  Title,
  Wrapper,
  StyledText,
  FormWrapper,
  StyledForm,
  FormTitle,
  FormText,
  StyledField,
  StyledButton,
  Text,
} from "./Order.styled";

export const Order = () => {
  return (
    <>
      <Section>
        <Container>
          <Title>Time to place your order :)</Title>
          <Wrapper>
            <StyledText>Sweet Paradise</StyledText>
            <FormWrapper>
              <Formik
                initialValues={{
                  name: "",
                  phone: "",
                }}
                onSubmit={({ name, phone }, { resetForm }) => {
                  console.log(name, phone);
                  resetForm();
                }}
              >
                <StyledForm>
                  <FormTitle>Ready to order?</FormTitle>
                  <FormText>
                    Enter your details and we will We'll definitely call you
                    back
                  </FormText>
                  <StyledField
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Please enter your name"
                  />
                  <StyledField
                    type="text"
                    name="phone"
                    placeholder="Please enter your phone"
                  />
                  <StyledButton type="submit">Send</StyledButton>
                  <Text>
                    By clicking on the button, you consent to processing Your
                    personal data
                  </Text>
                </StyledForm>
              </Formik>
            </FormWrapper>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};
