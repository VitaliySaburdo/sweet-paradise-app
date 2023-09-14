import { Container } from "../Container/Container";
// import { Section } from "../Section/Section";
import {
  MainWrapper,
  Title,
  Wrapper,
  ItemWrapper,
  ImgWrapper,
  Img,
  Text,
  Photo,
} from "./Benefits.styled";
import milk from "../../images/Benefits/milk.png";
import oven from "../../images/Benefits/oven.png";
import recipe from "../../images/Benefits/recipe.png";
import cook from "../../images/Benefits/cook.png";
import money from "../../images/Benefits/money.png";
import sale from "../../images/Benefits/sale.png";
import cook_photo from "../../images/Benefits/cook_photo.png";

export const Benefits = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Title>Why are we delicious?</Title>
          <div style={{ position: "relative" }}>
            <Wrapper>
              <ItemWrapper>
                <ImgWrapper>
                  <Img src={milk} alt="milk" />
                </ImgWrapper>
                <Text>Quality products</Text>
              </ItemWrapper>
              <ItemWrapper>
                <ImgWrapper>
                  <Img src={oven} alt="oven" />
                </ImgWrapper>
                <Text>Expensive equipment</Text>
              </ItemWrapper>
              <ItemWrapper>
                <ImgWrapper>
                  <Img src={recipe} alt="recipe" />
                </ImgWrapper>
                <Text>Unique recipes</Text>
              </ItemWrapper>
              <ItemWrapper>
                <ImgWrapper>
                  <Img src={cook} alt="cook" />
                </ImgWrapper>
                <Text>Best confectioners</Text>
              </ItemWrapper>
              <ItemWrapper>
                <ImgWrapper>
                  <Img src={money} alt="money" />
                </ImgWrapper>
                <Text>Available prices</Text>
              </ItemWrapper>
              <ItemWrapper>
                <ImgWrapper>
                  <Img src={sale} alt="sale" />
                </ImgWrapper>
                <Text>Program loyalty</Text>
              </ItemWrapper>
            </Wrapper>
            <Photo src={cook_photo} alt="cook_photo" />
          </div>
        </Container>
      </MainWrapper>
    </>
  );
};
