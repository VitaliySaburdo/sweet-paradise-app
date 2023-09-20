import { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { FeedbackList } from "../FeedbackList/FeedbackList";
import { Modal } from "../Modal/Modal";
import { Section } from "../Section/Section";
import { feedbacks } from "./dataFeedback";
import {
  StyledForm,
  StyledField,
  StyledFieldFeedback,
  StyledLabel,
  StyledMessage,
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
    setReviews((prevFeedbacks) => [...prevFeedbacks, newFeedback]);

    // dispatch(logIn({ values: { email, password } }));
    resetForm();
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
                      cols="50"
                    />
                    <StyledMessage name="feedback" component="div" />

                    <Button customStyle={{ margin: "0 auto" }} type="submit">
                      Submit
                    </Button>
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
