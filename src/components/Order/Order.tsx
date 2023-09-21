import { Button } from "../Button/Button";
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
  StyledLabel,
  StyledField,
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
                  <StyledLabel htmlFor="name">Name</StyledLabel>
                  <StyledField type="text" id="name" name="name"/>
                  <StyledField type="text" />
                  <Button type="submit">Send</Button>
                  <p>
                    By clicking on the button, you consent to processing Your
                    personal data
                  </p>
                </StyledForm>
              </Formik>
            </FormWrapper>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};
