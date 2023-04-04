import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Button, Stack } from "@mui/material";
import Backward from "../../assets/backward.svg";
import background1 from "../../assets/background1.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const styles = {
  paperContainer: {
    backgroundImage: `url(${background1})`,
    overflow: "hidden",
  },
};

const items = [
  {
    src: background1,
  },
  {
    src: background1,
  },
  {
    src: background1,
  },
];
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
function AlbumLayout() {
  const slide = React.useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const screenWidth = window.innerWidth;
      const centerThreshold = screenWidth / 2;
      setIsFlipped(event.clientX >= centerThreshold);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const style = {
    transform: isFlipped ? "scaleX(-1)" : "scaleX(1)",
    cursor: `url(${Backward})12 12, auto`,
    transition: "transform 0.3s ease-in-out",
  };
  return (
    <main>
      <Box style={style}>
        <Slider ref={slide} {...settings} style={styles.paperContainer}>
          {items.map((item) => {
            return (
              <Box
                sx={{
                  pt: 6,
                  pb: 6,
                  height: "100vh",
                }}
              >
                <Grid container spacing={2} sx={{ display: "flex", mt: 10 }}>
                  <Grid item md={4} xs={12} sm={12} lg={4}>
                    <Container
                      sx={{
                        ml: {
                          lg: 12,
                        },
                      }}
                    >
                      <Typography
                        component="div"
                        variant="h3"
                        color="white"
                        width={346}
                        sx={{ fontSize: "50px" }}
                      >
                        New Collection
                      </Typography>
                      <Typography
                        component="h1"
                        variant="h1"
                        color="white"
                        width={1200}
                        sx={{ mt: 5 }}
                      >
                        Big!Lets Imagine Giant
                      </Typography>
                    </Container>
                  </Grid>
                </Grid>
                <Stack
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 3,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#FF8201",
                      },
                      borderRadius: "10px",
                    }}
                  >
                    Check Out
                  </Button>
                </Stack>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </main>
  );
}

export default AlbumLayout;
