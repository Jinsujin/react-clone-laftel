import React from 'react';
import Slider from 'react-slick';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
.slick-slider {
    position: relative;
}
.slick-slide {
    display: inline-block;
}
.slick-arrow {
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 99;
}
.slick-prev {}
.slick-next {right: 0; left: initial;}
`;

const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  margin-bottom: 3rem;
`;

const ImgWrapper = styled.div`
  padding: 0px 10px;
  text-align: center;

  & img {
    margin: 0 auto;
    width: 100%;
    max-height: 750px;
  }
`;

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <GlobalStyled />
      <SlickWrapper>
        <Slider {...settings}>
          {images.map(v => (
            <ImgWrapper key={v.imageSrc}>
              <img src={v.imageSrc} alt={v.imageSrc} />
            </ImgWrapper>
          ))}
        </Slider>
      </SlickWrapper>
    </>
  );
};

export default Carousel;
