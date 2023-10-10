import Sceleton from "react-loading-skeleton";
import {
  Wrapper,
  Img,
  Title,
  Text,
  Params,
} from "./ProductSkeleton.styled";

export const ProductSkeleton = () => {
  return (
    <>
      <Wrapper>
        <Img>
          <Sceleton height={"100%"} />
        </Img>
        <Title>
          <Sceleton width={"100%"} height={"100%"} />
        </Title>
        <Text>
          <Sceleton width={"100%"} height={"100%"} />
        </Text>
        <Params>
          <Sceleton width={"100%"} height={"100%"} />
        </Params>
        <Sceleton width={145} height={45} style={{ borderRadius: "50px" }} />
      </Wrapper>
    </>
  );
};
