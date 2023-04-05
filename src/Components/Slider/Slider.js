import React, { useState} from "react";
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
const cursorStyles = {
  position: "absolute",
  width: "50px",
  height: "50px",
  backgroundImage: `url(${Backward})`,
  backgroundSize: "cover",
  transition: "transform 0.2s",
};
function AlbumLayout() {
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
    <main>
        <Slider ref={slide} {...settings} style={styles.paperContainer} onMouseMove={handleMouseMove}>
          {items.map(() => {
            return (
              <Box style={{ ...cursorStyles, transform }} >
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
              </Box>
            );
          })}
        </Slider>
    </main>
  );
}

export default AlbumLayout;
