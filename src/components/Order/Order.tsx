import { Section } from "../Section/Section";
import { Formik } from "formik";
import {
  Title,
  Wrapper,
  StyledContainer,
  StyledText,
  FormWrapper,
  StyledForm,
  FormTitle,
  FormText,
  StyledField,
  StyledButton,
  Text,
  PhoneField,
} from "./Order.styled";

export const Order = () => {
  return (
    <>
      <Section>
        <StyledContainer>
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
              <StyledForm onSubmit={handleOnSubmit}>
                <FormTitle>Ready to order?</FormTitle>
                <FormText>
                  Enter your details and we will We'll definitely call you back
                </FormText>
                <StyledField
                  autoComplete="off"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <PhoneField
                  type="text"
                  mask="+38(099) 999-99-99"
                  name="phone"
                  value={phone}
                  placeholder="Enter your phone"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                />
                <StyledButton type="submit">Send</StyledButton>
                <Text>
                  By clicking on the button, you consent to processing Your
                  personal data
                </Text>
              </StyledForm>
            </FormWrapper>
          </Wrapper>
        </StyledContainer>
      </Section>
    </>
  );
};
