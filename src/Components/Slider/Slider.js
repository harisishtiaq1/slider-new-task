import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import {
  Container,
  createTheme,
  ThemeProvider,
  Grid,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import background1 from "../../assets/background1.jpg";
import background2 from "../../assets/background2.jpg";
import background3 from "../../assets/background3.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const styles = {
  paperContainer: {
    backgroundImage: `url(${background1})`,
    height: "100vh",
  },
};
const items = [
  {
    paperContainer: {
      backgroundImage: `url(${background1})`,
      height: "100vh",
      text: "This is my first Image",
    },
  },
  {
    paperContainer: {
      backgroundImage: `url(${background2})`,
      height: "100vh",
      text: "This is my first Image",
    },
  },
  {
    backgroundImage: background3,
    alt: "img1",
    text: "This is my first Image",
  },
];
const settings = {
  dots: true,
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
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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
  const theme = createTheme();
  const slide = React.useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Slider ref={slide} {...settings} style={styles.paperContainer}>
          {items.map((item) => {
            return (
              <Box
                sx={{
                  pt: 6,
                  pb: 6,
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
                        backgroundColor: "orange",
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
      </main>
      <IconButton
        sx={{
          mr: 2,
          mt: 0.5,
          borderRadius: "50%",
          boxShadow:
            "3px 3px 5px rgb(0 0 0 / 25%), -3px -3px 5px rgb(255 255 255 / 6%)",
          position: "absolute",
          top: "40%",
          right: 20,
          backgroundColor: "lightblue",
        }}
        onClick={() => slide?.current?.slickNext()}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <IconButton
        sx={{
          mr: 2,
          mt: 0.5,
          borderRadius: "50%",
          boxShadow:
            "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
          position: "absolute",
          top: "40%",
          left: 20,
          backgroundColor: "lightblue",
        }}
        onClick={() => slide?.current?.slickPrev()}
      >
        <ArrowBackIosIcon />
      </IconButton>
    </ThemeProvider>
  );
}

export default AlbumLayout;
