import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Section } from "../Section/Section";
import {MainWrapper, Box} from './CustomOrder.styled'

export const CustomOrder = () => {
  return (
    <>
      <Section>
        <Container>
          <MainWrapper>
            <Box>
              <h2>Order individual set of sweets</h2>
              <p>
                Fill out the form and we will call you back to complete your
                order
              </p>
              <form>
                <input type="text" name="name" />
                <input type="text" name="phone" />
                <Button type="submit">More products</Button>
              </form>
            </Box>
          </MainWrapper>
        </Container>
      </Section>
    </>
  );
};
