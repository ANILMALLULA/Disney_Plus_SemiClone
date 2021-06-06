import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSilder() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/slider-badging.jpg' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-badag.jpg' />
      </Wrap>
    </Carousel>
  );
}

export default ImageSilder;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: darkgray;
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 400ms;
    &:hover {
      border: 4px solid whitesmoke;
    }
  }
`;
