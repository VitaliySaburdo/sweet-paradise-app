import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Section } from "../Section/Section";
import { MainWrapper, Box, Title, AccentText, Text, StyledForm, StyledField } from "./CustomOrder.styled";

export const CustomOrder = () => {
  return (
    <>
      <Section>
        <Container>
          <MainWrapper>
            <Box>
              <Title>
                {" "}
                <AccentText>Order</AccentText> <br />
                individual <br /><AccentText>set of sweets</AccentText>{" "}
              </Title>
              <Text>
                Fill out the form and we will call you back to complete your
                order
              </Text>
              <StyledForm>
                <StyledField type="text" name="name" />
                <StyledField type="text" name="phone" />
                <Button type="submit">More products</Button>
              </StyledForm>
            </Box>
          </MainWrapper>
        </Container>
      </Section>
    </>
  );
};
