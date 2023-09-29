import { Product } from "../Product/Product";
import { Wrapper } from "./ProductList.styled";
import { ProductProps } from "../../app/App.types";

interface ProductListProps {
  products: ProductProps[];
  loading: boolean;
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  loading,
  onAdd,
  orders,
}) => {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Wrapper>
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              onAdd={onAdd}
              orders={orders}
            />
          ))}
        </Wrapper>
      )}
    </>
  );
};
