import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { logOut } from "../../redux/auth/operations";
import { Button } from "../Button/Button";
import {
  StyledForm,
  Title,
  StyledLabel,
  StyledField,
  StyledFieldIngredients,
  StyledFileInputWrapper,
  StyledFileInput,
  StyledFileInputLabel,
  StyledMessage,
  LogoutBtn,
} from "./AddForm.styled";

interface AddFormProps {
  closeModal: () => void;
}

export const AddForm: React.FC<AddFormProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          price: "",
          weight: "",
          category: "",
          ingredients: "",
          img: null,
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          closeModal();
        }}
      >
        {({ setFieldValue }) => (
          <StyledForm>
            <Title>Add goods</Title>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledField
              type="text"
              id="name"
              name="name"
              placeholder="Please enter name of goods"
            />
            <StyledMessage name="name" component="div" />

            <StyledFileInputWrapper>
              <StyledFileInput
                type="file"
                id="img"
                name="img"
                placeholder="Please select an image"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const selectedFile = event.currentTarget.files?.[0];

                  if (selectedFile) {
                    // Use Formik's setFieldValue to update the form's state
                    setFieldValue("img", selectedFile);
                  } else {
                    // Handle the case where no file is selected, e.g., show an error message
                  }
                }}
              />
              <StyledFileInputLabel htmlFor="img">
                Select an Image
              </StyledFileInputLabel>
            </StyledFileInputWrapper>
            <StyledMessage name="img" component="div" />

            <StyledLabel htmlFor="price">Price</StyledLabel>
            <StyledField
              type="text"
              id="price"
              name="price"
              placeholder="Please enter your price"
            />
            <StyledMessage name="price" component="div" />

            <StyledLabel htmlFor="category">Category</StyledLabel>
            <StyledField
              type="text"
              id="category"
              name="category"
              placeholder="Please enter category of goods"
            />
            <StyledMessage name="category" component="div" />
            <StyledMessage name="weight" component="div" />
            <StyledLabel htmlFor="weight">Weight</StyledLabel>
            <StyledField
              type="text"
              id="weight"
              name="weight"
              placeholder="Please enter weight of goods"
            />
            <StyledMessage name="weight" component="div" />

            <StyledLabel htmlFor="ingredients">Ingredients</StyledLabel>
            <StyledFieldIngredients
              id="ingredients"
              name="ingredients"
              component="textarea"
              rows="4"
              cols="30"
            />
            <StyledMessage name="ingredients" component="div" />

            <Button
              margin="20px auto 0 auto"
              height="50px"
              width="100%"
              type="submit"
            >
              add
            </Button>
          </StyledForm>
        )}
      </Formik>
      <LogoutBtn
        onClick={() => {
          dispatch(logOut() as any);
          closeModal();
        }}
      >
        Logout
      </LogoutBtn>
    </>
  );
};
