import {useState} from 'react';
import { useDispatch } from "react-redux";
import { Formik, FormikHelpers, useFormikContext } from "formik";
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

interface FormValues {
  name: string;
  price: string;
  weight: string;
  category: string;
  ingredients: string;
  file: string;
}

const initialValues: FormValues = {
  name: "",
  price: "",
  weight: "",
  category: "",
  ingredients: "",
  file: "",
};

export const AddForm: React.FC<AddFormProps> = ({ closeModal }) => {
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { setFieldValue } = useFormikContext();

  const handleOnSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("weight", values.weight);
    formData.append("category", values.category);
    formData.append("ingredients", values.ingredients);
    formData.append("img", values.file!);

    console.log(formData);
    resetForm();
    closeModal();
  };

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFile = event.currentTarget.files?.[0];
    setFieldValue("file", uploadFile);
    const preview = uploadFile ? URL.createObjectURL(uploadFile) : null;
    setPhotoPreview(preview);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
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
                id="file"
                name="file"
                accept="image/*"
                placeholder="Please select an image"
                onChange={handleUploadFile}
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
              cols="20"
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
