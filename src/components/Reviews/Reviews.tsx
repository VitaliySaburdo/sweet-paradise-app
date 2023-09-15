import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Section } from "../Section/Section";
import { feedbacks } from "./dataFeedback";
import {Wrapper, Title, Text} from './Reviews.styled';

export const Reviews = () => {
  return (
    <>
      <Section>
        <Container>
          <Title>Reviews from our clients</Title>
          <Wrapper>
            <Text>Please leave a review about our sweets</Text>
            <Button>Leave feedback</Button>
          </Wrapper>
          <ul style={{ minHeight: "500px" }}>
            {feedbacks.map((feedback) => (
              <li key={feedback.id}>
                <p>{feedback.date.toLocaleDateString()}</p>
                <p>{feedback.user}</p>
                <p>{feedback.post}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};
