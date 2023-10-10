import { Product } from "../Product/Product";
import { Wrapper } from "./ProductList.styled";
import { ProductProps } from "../../App/App.types";
import { ProductSkeleton } from "../ProductSkeleton/ProductSceleton";

interface ProductListProps {
  products: ProductProps[];
  loading: boolean;
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
  changedCategory: (id: string) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  loading,
  onAdd,
  orders,
  changedCategory,
}) => {
  return (
    <>
      {loading ? (
        <Wrapper>
          {Array.from({ length: 3 }, (_, index) => (
            <ProductSkeleton key={index}/>
          ))}
          </Wrapper>
      ) : (
        <Wrapper>
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              onAdd={onAdd}
              orders={orders}
              changedCategory={changedCategory}
            />
          ))}
        </Wrapper>
      )}
    </>
  );
};
