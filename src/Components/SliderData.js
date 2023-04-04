import React, { useState } from 'react';
import {Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import background1 from "../assets/background1.jpg";

const styles = {
  slider: {
    position: 'relative',
    backgroundImage: `url(${background1})`,
    backgroundSize: 'cover',
    height: 500,
  },
  cursor: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color:"white",
    transform: 'translate(-50%, -50%)',
    width: 50,
    height: 50,
    transition: 'transform .2s ease-out',
  },
  cursorFlip: {
    transform: 'translate(-50%, -50%) scaleX(-1)',
  },
  
  
};

const Slider = () => {
  const [isCursorFlipped, setIsCursorFlipped] = useState(false);

  const handleMouseMove = (e) => {
    const cursorX = e.pageX;
    const sliderWidth = e.target.offsetWidth;

    if (cursorX > sliderWidth / 2 && !isCursorFlipped) {
      setIsCursorFlipped(true);
    } else if (cursorX < sliderWidth / 2 && isCursorFlipped) {
      setIsCursorFlipped(false);
    }
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} style={styles.slider} onMouseMove={handleMouseMove}>
        <IconButton style={{ ...styles.cursor, ...(isCursorFlipped && styles.cursorFlip) }}>
          <ArrowBack />
        </IconButton>
        <IconButton style={{ ...styles.cursor, ...(isCursorFlipped || styles.cursorFlip) }}>
          <ArrowForward />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Slider;
