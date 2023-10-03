import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { deleteProduct } from "../../services/apiService";
import { Modal } from "../Modal/Modal";
import {
  Img,
  Wrapper,
  Title,
  DeleteTitle,
  BtnWrapper,
  Text,
  Params,
  ConfirmBtn,
  CancelBtn,
  DeleteBtn,
} from "../Product/Products.styled";
import { Button } from "../Button/Button";
import { ProductProps } from "../../App/App.types";

interface NoveltiesItem {
  product: ProductProps;
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
}

export const Product: React.FC<NoveltiesItem> = ({
  product,
  onAdd,
  orders,
}) => {
  const [added, setAdded] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const isLogin = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const isNoveltyInCart = orders.some((order) => order._id === product._id);
    setAdded(isNoveltyInCart);
  }, [orders, product]);

  const handleOnDelete = () => {
    setIsDelete(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteProduct(product._id);
      setIsDelete(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <Wrapper>
        <Img
          src={"https://sweet-paradise-api.onrender.com/static/" + product.img}
          alt={product.name}
        />
        <Title>{product.name}</Title>
        <Text>{product.ingredients}</Text>
        <Params>
          {product.price} uah / {product.weight} gr
        </Params>

        {isLogin ? (
          <DeleteBtn onClick={handleOnDelete}>Delete</DeleteBtn>
        ) : (
          <Button width="200px" onClick={() => onAdd(product)}>
            {added ? "Added to Cart" : "Add to Cart"}
          </Button>
        )}

        {isDelete && (
          <Modal onClick={() => setIsDelete(false)}>
            <DeleteTitle>
              Are you sure you want <br /> to remove the product?
            </DeleteTitle>
            <BtnWrapper>
              <CancelBtn onClick={() => setIsDelete(false)}>No</CancelBtn>
              <ConfirmBtn onClick={handleConfirmDelete}>Yes</ConfirmBtn>
            </BtnWrapper>
          </Modal>
        )}
      </Wrapper>
    </>
  );
};
