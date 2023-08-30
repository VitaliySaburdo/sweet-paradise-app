import { Container } from "../Container/Container";
import { Section } from "../Section/Section";
import {
  Wrapper,
  Item,
  Circle,
  StyledNumber,
  Title,
  Text,
} from "./Work.styled";

export const Work = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Item>
              <Circle>
                <StyledNumber>1</StyledNumber>
              </Circle>
              <Title>We receive an order</Title>
              <Text>
                We receive the order <br/> and contact you <br/> for clarification of
                details
              </Text>
            </Item>
            <Item>
              <Circle>
                <StyledNumber>2</StyledNumber>
              </Circle>
              <Title>Preparing an order</Title>
              <Text>
                We prepare the order <br/> in strict accordance with <br/> the wishes of the client
              </Text>
            </Item>
            <Item>
              <Circle>
                <StyledNumber>3</StyledNumber>
              </Circle>
              <Title>Sending goods</Title>
              <Text>
                We send your order <br/> by the previously <br/> approved method
              </Text>
            </Item>
            <Item>
              <Circle>
                <StyledNumber>4</StyledNumber>
              </Circle>
              <Title>Shipping and payment</Title>
              <Text>
                Our courier will deliver the goods <br/> to your address <br/> directly to your hands
              </Text>
            </Item>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};
