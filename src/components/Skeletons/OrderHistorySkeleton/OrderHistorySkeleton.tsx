import Skeleton from "react-loading-skeleton";
import { Item } from "./OrderHistorySkeleton.styled";

export const OrderHistorySkeleton = () => {
  return (
    <>
      <Item>
        <Skeleton width={"100%"} height={"100%"} />
      </Item>
    </>
  );
};
