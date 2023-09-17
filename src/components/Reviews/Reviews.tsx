import { useState } from "react";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { FeedbackList } from "../FeedbackList/FeedbackList";
import { Modal } from "../Modal/Modal";
import { Section } from "../Section/Section";
import { feedbacks } from "./dataFeedback";
import { Block, Wrapper, Title, Text, Form, Label } from "./Reviews.styled";

export const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Section>
        <Block />
        <Container>
          <Title>Reviews from our clients</Title>
          <Wrapper>
            <Text>Please leave a review about our sweets</Text>
            <Button onClick={openModal}>Leave feedback</Button>
            {isModalOpen && (
              <Modal onClick={closeModal}>
                <Form>
                  <Label htmlFor="name">
                    {" "}
                    name
                    <input name="name" type="text" />
                  </Label>
                  <Label>
                    Review:
                    <textarea />
                  </Label>
                  <Button>Submit</Button>
                </Form>
              </Modal>
            )}
          </Wrapper>
          <FeedbackList feedbacks={feedbacks} />
        </Container>
      </Section>
    </>
  );
};
