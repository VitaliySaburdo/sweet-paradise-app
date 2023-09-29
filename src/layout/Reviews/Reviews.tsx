import { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { FeedbackList } from "../../components/FeedbackList/FeedbackList";
import { Modal } from "../../components/Modal/Modal";
import { Section } from "../../components/Section/Section";
import { feedbacks } from "../../db/dataFeedback";
import {
  StyledForm,
  StyledField,
  StyledFieldFeedback,
  StyledLabel,
  StyledMessage,
  StyledButton,
  Title,
  Text,
  Block,
  Wrapper,
} from "./Reviews.styled";

export const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState(feedbacks);

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    feedback: yup
      .string()
      .max(50, "Maximum allowed number of characters 50")
      .required("Feedback field is required"),
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (
    values: { name: string; feedback: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    const newFeedback = {
      id: Date.now(),
      ...values,
      user: values.name,
      date: new Date(),
      post: values.feedback,
    };
    setReviews((prevFeedbacks) => [newFeedback, ...prevFeedbacks]);
    console.log(newFeedback);
    // dispatch(logIn({ values: { email, password } }));
    resetForm();
    closeModal();
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
                <Title>Please leave us your feedback</Title>
                <Formik
                  initialValues={{
                    name: "",
                    feedback: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <StyledForm>
                    <StyledLabel htmlFor="name">Name</StyledLabel>
                    <StyledField id="name" name="name" type="text" />
                    <StyledMessage name="name" component="div" />

                    <StyledLabel htmlFor="feedback">Feedback</StyledLabel>
                    <StyledFieldFeedback
                      id="feedback"
                      name="feedback"
                      component="textarea"
                      rows="4"
                      cols="35"
                    />
                    <StyledMessage name="feedback" component="div" />

                    <StyledButton type="submit">Submit</StyledButton>
                  </StyledForm>
                </Formik>
              </Modal>
            )}
          </Wrapper>
          <FeedbackList feedbacks={reviews} />
        </Container>
      </Section>
    </>
  );
};
