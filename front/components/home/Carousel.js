import React, { useRef, useCallback } from 'react';
import Slider from 'react-slick';
import styled, { createGlobalStyle } from 'styled-components';
import { LeftOutlined, RightOutlined } from '../addAni/@ant-design/icons';

const GlobalStyled = createGlobalStyle`
  .slick-slider {
      position: relative;
  }
  .slick-slide {
      display: inline-block;
  }
  .slick-arrow { 
      display: none !important;
  }
`;

const SlickWrapper = styled.div`
  position: relative;
  height: calc(100% - 44px);
  margin-bottom: 3rem;
`;

const ImgWrapper = styled.div`
  /* padding: 0px 10px; */
  text-align: center;

  & img {
    margin: 0 auto;
    width: 100%;
    max-height: 750px;
  }
`;

const ArrowButton = styled.div`
  z-index: 99;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 10%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: transparent;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.5s ease-in;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  & span {
    color: #fff;
    opacity: 0.8;
    font-size: 4em;
    transition: all 0.3s ease-in;
  }
  &:hover span {
    opacity: 1;
  }
`;

const Carousel = ({ images }) => {
  const sliderEl = useRef();
  const onPrev = useCallback(() => {
    sliderEl.current.slickPrev();
  }, []);

  const onNext = useCallback(() => {
    sliderEl.current.slickNext();
  }, []);

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
        <ArrowButton onClick={onPrev}>
          <LeftOutlined />
        </ArrowButton>
        <Slider ref={sliderEl} {...settings}>
          {images.map(v => (
            <ImgWrapper key={v.imageSrc}>
              <img src={v.imageSrc} alt={v.imageSrc} />
            </ImgWrapper>
          ))}
        </Slider>
        <ArrowButton onClick={onNext} style={{ left: 'initial', right: '0' }}>
          <RightOutlined />
        </ArrowButton>
      </SlickWrapper>
    </>
  );
};

export default Carousel;
