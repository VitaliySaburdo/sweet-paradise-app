import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { FeedbackList } from "../FeedbackList/FeedbackList";
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
          <FeedbackList feedbacks={feedbacks } />
        </Container>
      </Section>
    </>
  );
};
