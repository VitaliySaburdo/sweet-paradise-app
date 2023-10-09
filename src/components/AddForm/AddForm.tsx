import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, FormikHelpers } from "formik";
import { createProduct } from "../../services/apiService";
import { getAllCategories } from "../../services/apiService";
import { logOut } from "../../redux/auth/operations";
import { addProductSchema } from "../../helpers/ValidationSchemas";
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
  img: File | string;
}

const initialValues: FormValues = {
  name: "",
  price: "",
  weight: "",
  category: "",
  ingredients: "",
  img: "",
};

export const AddForm: React.FC<AddFormProps> = ({ closeModal }) => {
  const [stage, setStage] = useState<number>(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>(
    []
  );
  const [selectCategory, setSelectCategory] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length > 0) {
      setSelectCategory(categories[0]._id);
    }
  }, [categories]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleOnSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("weight", values.weight);
    formData.append("category", selectCategory);
    formData.append("ingredients", values.ingredients);
    if (selectedFile) {
      formData.append("img", selectedFile);
    }

    try {
      await createProduct(formData);
    } catch (error) {
      console.log(error);
    }
    resetForm();
    closeModal();
  };

  const handleOnNexBtn = async (
    setFieldValue: (field: string, value: any) => void,
    isValid: boolean,
    validateForm: () => void,
    values: any,
    errors: any,
    touched: any,
    setErrors: any
  ) => {
     await validateForm();

    const { name, img } = values;

    if (stage === 1) {
      if (!name || !img) {
        return;
      }
    }

    if (stage === 2) {
      setFieldValue("category", selectCategory);
    }
    setStage((prevStage) => prevStage + 1);
  };

  const handleOnPrevBtn = () => {
    setStage((prevStage) => (prevStage > 1 ? prevStage - 1 : prevStage));
  };

  const handleUploadFile =
    (setFieldValue: (field: string, value: any) => void, values: any) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const uploadFile = event.currentTarget.files?.[0] ?? null;
      setSelectedFile(uploadFile);
      if (uploadFile) {
        const imageUrl = URL.createObjectURL(uploadFile);
        setImageUrl(imageUrl);
        setFieldValue("img", uploadFile);
      } else {
        setImageUrl(null);
      }
    };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
        validationSchema={addProductSchema}
      >
        {({
          isValid,
          validateForm,
          values,
          setFieldValue,
          errors,
          touched,
          setErrors,
        }) => (
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
                <span>{ errors.name}</span>

                <StyledFileInputWrapper>
                  <StyledFileInputLabel htmlFor="img">
                    {imageUrl && <img src={imageUrl} alt="Dishes" width={60} />}
                    <StyledFileInput
                      type="file"
                      id="img"
                      name="img"
                      accept="image/*"
                      onChange={handleUploadFile(setFieldValue, values)}
                    />
                    {!imageUrl && "Select an Image"}
                  </StyledFileInputLabel>
                  <StyledLabel htmlFor="img">Add image</StyledLabel>
                </StyledFileInputWrapper>
                <span>{ errors.img }</span>
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <PrevBtn onClick={() => closeModal()}>Cancel</PrevBtn>
                  <NextBtn
                    onClick={() => {
                      handleOnNexBtn(
                        setFieldValue,
                        isValid,
                        validateForm,
                        values,
                        errors,
                        touched,
                        setErrors
                      );
                    }}
                  >
                    Next
                  </NextBtn>
                </div>
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
                  as="select"
                  id="category"
                  name="category"
                  placeholder="Please enter category of goods"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectCategory(e.target.value);
                  }}
                >
                  {categories.length &&
                    categories.map((item) => (
                      <option
                        key={item._id}
                        value={item._id}
                        label={item.name}
                      />
                    ))}
                </StyledField>
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
            {stage === 2 && (
              <div style={{ display: "flex", gap: "10px" }}>
                {" "}
                <PrevBtn onClick={handleOnPrevBtn}>Prev</PrevBtn>
                <NextBtn
                  onClick={() => {
                    handleOnNexBtn(
                      setFieldValue,
                      isValid,
                      validateForm,
                      values,
                      errors,
                      touched,
                      setErrors
                    );
                  }}
                >
                  Next
                </NextBtn>
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
                  cols="20"
                />
                <StyledMessage name="ingredients" component="div" />
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <PrevBtn onClick={handleOnPrevBtn}>Prev</PrevBtn>
                  <AddBtn type="submit">Add</AddBtn>
                </div>
              </>
            )}
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
