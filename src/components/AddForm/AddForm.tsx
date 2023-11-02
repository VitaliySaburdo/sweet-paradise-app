import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { Formik, FormikHelpers } from "formik";
import { createProduct } from "../../services/apiService";
import { logOut } from "../../redux/auth/authOperations";
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
import { selectCategories } from "../../redux/product/productsSelectors";

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
  const [selectCategory, setSelectCategory] = useState<string>("");

  const allCategories = useAppSelector(selectCategories);

  const categories = allCategories.filter((item) => item.name !== "novelties");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (categories.length > 0) {
      setSelectCategory(categories[0]._id);
    }
  }, [categories]);

  const handleOnSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("price", String(values.price));
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
    setFieldValue: (field: string, value: string) => void,
    validateForm: () => void,
    values: { name: string; img: File | string; price: string; weight: string }
  ) => {
    await validateForm();

    const { name, img, price, weight } = values;

    if (stage === 1) {
      if (!name || !img) {
        return;
      }
    }

    if (stage === 2) {
      setFieldValue("category", selectCategory);
      if (!price || !weight) {
        return;
      }
    }
    setStage((prevStage) => prevStage + 1);
  };

  const handleOnPrevBtn = () => {
    setStage((prevStage) => (prevStage > 1 ? prevStage - 1 : prevStage));
  };

  const handleUploadFile =
    (setFieldValue: (field: string, value: any) => void) =>
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
        {({ validateForm, values, setFieldValue, errors }) => (
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
                <StyledMessage>{errors.name}</StyledMessage>

                <StyledFileInputWrapper>
                  <StyledFileInputLabel htmlFor="img">
                    {imageUrl && <img src={imageUrl} alt="Dishes" width={60} />}
                    <StyledFileInput
                      type="file"
                      id="img"
                      name="img"
                      accept="image/*"
                      onChange={handleUploadFile(setFieldValue)}
                    />
                    {!imageUrl && "Select an Image"}
                  </StyledFileInputLabel>
                  <StyledLabel htmlFor="img">Add image</StyledLabel>
                </StyledFileInputWrapper>
                <StyledMessage>{errors.img}</StyledMessage>

                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <PrevBtn onClick={() => closeModal()}>Cancel</PrevBtn>
                  <NextBtn
                    onClick={() => {
                      handleOnNexBtn(setFieldValue, validateForm, values);
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
                <StyledMessage>{errors.price}</StyledMessage>

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
                <StyledMessage>{errors.category}</StyledMessage>

                <StyledLabel htmlFor="weight">Weight</StyledLabel>
                <StyledField
                  type="text"
                  id="weight"
                  name="weight"
                  placeholder="Please enter weight of goods"
                />
                <StyledMessage>{errors.weight}</StyledMessage>
              </>
            )}
            {stage === 2 && (
              <div style={{ display: "flex", gap: "10px" }}>
                {" "}
                <PrevBtn onClick={handleOnPrevBtn}>Prev</PrevBtn>
                <NextBtn
                  onClick={() => {
                    handleOnNexBtn(setFieldValue, validateForm, values);
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
                <StyledMessage>{errors.ingredients}</StyledMessage>
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
          dispatch(logOut());
          closeModal();
        }}
      >
        Logout
      </LogoutBtn>
    </>
  );
};
