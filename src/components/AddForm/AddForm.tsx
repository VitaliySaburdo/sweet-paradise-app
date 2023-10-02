import { useState } from "react";
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
  NextBtn,
  PrevBtn,
  AddBtn,
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
  // const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [stage, setStage] = useState<number>(1);
  const dispatch = useDispatch();

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

  const handleOnNexBtn = () => {
    setStage((prevStage) => prevStage + 1);
  };

  const handleOnPrevBtn = () => {
    setStage((prevStage) => (prevStage > 1 ? prevStage - 1 : prevStage));
  };

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const uploadFile = event.currentTarget.files?.[0];
    // setFieldValue("file", uploadFile);
    // const preview = uploadFile ? URL.createObjectURL(uploadFile) : null;
    // setPhotoPreview(preview);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <StyledForm>
          <Title>Add goods</Title>
          {stage === 1 && (
            <>
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
                <StyledFileInputLabel htmlFor="file">
                  Select an Image
                </StyledFileInputLabel>
              </StyledFileInputWrapper>
              <StyledMessage name="file" component="div" />
            </>
          )}

          {stage === 2 && (
            <>
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

              <StyledLabel htmlFor="weight">Weight</StyledLabel>
              <StyledField
                type="text"
                id="weight"
                name="weight"
                placeholder="Please enter weight of goods"
              />
              <StyledMessage name="weight" component="div" />
            </>
          )}
          {(stage === 1 || stage === 2) && (
            <div style={{ display: "flex" }}>
              {" "}
              <PrevBtn onClick={handleOnPrevBtn}>Prev</PrevBtn>
              <NextBtn onClick={handleOnNexBtn}>Next</NextBtn>
            </div>
          )}
          {stage === 3 && (
            <>
              {" "}
              <StyledLabel htmlFor="ingredients">Ingredients</StyledLabel>
              <StyledFieldIngredients
                id="ingredients"
                name="ingredients"
                component="textarea"
                rows="6"
                cols="25"
              />
              <StyledMessage name="ingredients" component="div" />
              <div style={{ display: "flex" }}>
                {" "}
                <PrevBtn onClick={handleOnPrevBtn}>Prev</PrevBtn>
                <AddBtn type="submit">add</AddBtn>
              </div>
            </>
          )}
        </StyledForm>
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
