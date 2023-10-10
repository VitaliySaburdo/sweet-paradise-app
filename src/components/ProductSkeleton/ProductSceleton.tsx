import Skeleton from "react-loading-skeleton";
import { Wrapper, Img, Title, Text, Params } from "./ProductSkeleton.styled";

export const ProductSkeleton = ({ key }: { key: number }) => {
  return <>
      <Wrapper key={key}>
        <Img>
          <Skeleton height={"100%"} />
        </Img>
        <Title>
          <Skeleton width={"100%"} height={"100%"} />
        </Title>
        <Text>
          <Skeleton width={"100%"} height={"100%"} />
        </Text>
        <Params>
          <Skeleton width={"100%"} height={"100%"} />
        </Params>
        <Skeleton width={145} height={45} style={{ borderRadius: "50px" }} />
    </Wrapper>
    </>
};
