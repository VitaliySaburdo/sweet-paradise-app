import React, { useState } from "react";
import { SliderWrapper, TextWrapper, BtnWrapper, Btn, PriceWrapper, MainWrapper } from "./Slider.styled";
import vanilla from "../../images/Slider/cupcake-vanilla.png";
import caramel from "../../images/Slider/cupcake-caramel.png";
import chocolate from "../../images/Slider/cupcake-chocolate.png";
import arr_left from "../../images/Hero/arr_left.png";
import arr_right from "../../images/Hero/arr_right.png";

export const Slider = () => {
    const images = [caramel, vanilla, chocolate];
    const cakesNames = ["caramel", "vanilla", "chocolate"];
    const cakesPrice = ["30", "30", "40"];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(1);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
      <>
          <MainWrapper>
          <PriceWrapper>{cakesPrice[currentImageIndex]} UAH</PriceWrapper>
          <SliderWrapper currentImageIndex={currentImageIndex}>    
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide-${index}`}
              style={{
                flex: "0 0 100%",
                maxWidth: "100%",
              }}
            />
          ))}
      </SliderWrapper>
              <TextWrapper>{cakesNames[currentImageIndex]}</TextWrapper>
              </MainWrapper>
      <BtnWrapper>
        <Btn type="button">
          <img src={arr_left} alt="arrow" onClick={handlePrevImage} />
        </Btn>
        <Btn type="button">
          <img src={arr_right} alt="arrow" onClick={handleNextImage} />
        </Btn>
      </BtnWrapper>
    </>
  );
};
