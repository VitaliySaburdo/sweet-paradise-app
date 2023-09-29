import { Container } from "../../components/Container/Container";
import raspberries from "../../images/Hero/raspberries.png";

import {
  MainTitle,
  Wrapper,
  Item,
  Circle,
  StyledNumber,
  Title,
  Text,
  StyledImg
} from "./Work.styled";
import { Section } from "../../components/Section/Section";

export const Work = () => {
  return (
    <>
      <Section>
        <Container>
          <MainTitle>How we are working?</MainTitle>
          <Wrapper>
            <Item>
              <Circle>
                <StyledNumber>1</StyledNumber>
              </Circle>
              <Title>We receive an order</Title>
              <Text>
                We receive the order and contact you for clarification of
                details
              </Text>
            </Item>
            <Item>
              <Circle>
                <StyledNumber>2</StyledNumber>
              </Circle>
              <Title>Preparing an order</Title>
              <Text>
                We prepare the order in strict accordance with the wishes of the client
              </Text>
            </Item>
            <Item>
              <Circle>
                <StyledNumber>3</StyledNumber>
              </Circle>
              <Title>Sending goods</Title>
              <Text>
                We send your order by the previously approved method
              </Text>
            </Item>
            <Item>
              <Circle>
                <StyledNumber>4</StyledNumber>
              </Circle>
              <Title>Shipping and payment</Title>
              <Text>
                Our courier will deliver the goods to your address directly to your hands
              </Text>
          </Item>
          <StyledImg src={raspberries} alt="raspberries" width={'98px'} />
        </Wrapper>
        </Container>
        </Section>
    </>
  );
};
