import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import Backward from "../../assets/backward.svg";

const FlippedMouseCursor = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX } = event;
      const screenWidth = window.innerWidth;
      const centerThreshold = screenWidth / 2 - 50; // Assuming the image width is 100px
      setIsFlipped(clientX >= centerThreshold);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      width="fit-content"
      height="fit-content"
    >
      <img
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: isFlipped ? "scaleX(-1)" : "scaleX(1)",
        }}
        src={Backward}
        alt="Mouse Cursor"
      />
    </Box>
  );
};

export default FlippedMouseCursor;
