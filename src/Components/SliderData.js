import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background1 from "../assets/background1.jpg";
import Backward from "../assets/backward.svg";
import { Container, Box } from "@mui/material";

const containerStyles = {
  position: "relative",
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${background1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const cursorStyles = {
  position: "absolute",
  width: "50px",
  height: "50px",
  backgroundImage: `url(${Backward})`,
  backgroundSize: "cover",
  transition: "transform 0.2s",
};
const settings = {
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function App() {
  const slide = React.useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const containerCenterX = window.innerWidth / 2;
  const containerCenterY = window.innerHeight / 2;

  const deltaX = cursorPosition.x - containerCenterX;
  const deltaY = cursorPosition.y - containerCenterY;

  const angle = Math.atan2(deltaY, deltaX);
  const degrees = angle * (180 / Math.PI);

  const transform = `translate(${cursorPosition.x - 50}px, ${
    cursorPosition.y - 50
  }px) rotate(${degrees}deg)`;

  return (
    <Container style={containerStyles} onMouseMove={handleMouseMove}>
      <Box style={{ ...cursorStyles, transform }} />
    </Container>
  );
}
