import { Product } from "../Product/Product";
import { Wrapper } from "./ProductList.styled";
import { ProductProps } from "../../App/App.types";
import { ProductSkeleton } from "../ProductSkeleton/ProductSceleton";

interface ProductListProps {
  products: ProductProps[];
  loading: boolean;
  orders: ProductProps[];
  changedCategory: (id: string) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  loading,
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
              orders={orders}
              changedCategory={changedCategory}
            />
          ))}
        </Wrapper>
      )}
    </>
  );
};
