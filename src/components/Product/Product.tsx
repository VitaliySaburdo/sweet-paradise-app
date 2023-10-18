import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import {addOrder} from '../../redux/orders/ordersSlice';
import Sceleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
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
  changedCategory: (id: string) => void;
  orders: ProductProps[];
}

export const Product: React.FC<NoveltiesItem> = ({
  product,
  orders,
  changedCategory,
}) => {
  const [added, setAdded] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const dispatch = useAppDispatch();

  const isLogin = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    const currentOrder = orders.some((order) => order._id === product._id);
    setAdded(currentOrder);
  }, [orders, product]);

  const onAdd = (product: ProductProps) => {
    dispatch(addOrder(product))
  }

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
    changedCategory(product.category);
  };



  return (
    <>
      <Wrapper>
        {<Img
          src={"https://sweet-paradise-api.onrender.com/static/" + product.img}
          alt={product.name}
        /> || <Sceleton/>}
        <Title>{product.name || <Sceleton/>}</Title> 
        <Text>{product.ingredients || <Sceleton/>}</Text> 
        {<Params>
          {product.price} uah / {product.weight} gr
        </Params> || <Sceleton/>}

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
