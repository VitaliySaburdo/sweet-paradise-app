import { useState } from "react";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { FeedbackList } from "../FeedbackList/FeedbackList";
import { Modal } from "../Modal/Modal";
import { Section } from "../Section/Section";
import { feedbacks } from "./dataFeedback";
import { Block, Wrapper, Title, Text, Label } from "./Reviews.styled";

export const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    console.log("Form values:", values); // Add this line for debugging
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
                  <Form>
                    <Label htmlFor="name">Name</Label>
                    <Field id="name" name="name" type="text" />
                    <ErrorMessage name="name" component="div" />

                    <Label htmlFor="feedback">Feedback</Label>
                    <Field id="feedback" name="feedback" as="textarea" />
                    <ErrorMessage name="feedback" component="div" />

                    <Button type="submit">Submit</Button>
                  </Form>
                </Formik>
              </Modal>
            )}
          </Wrapper>
          <FeedbackList feedbacks={feedbacks} />
        </Container>
      </Section>
    </>
  );
};
