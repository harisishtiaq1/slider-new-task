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
} from "@mui/material";

import MouseFlip from "../MouseFlip/MouseFlip";
import background1 from "../../assets/background1.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const styles = {
  paperContainer: {
    backgroundImage: `url(${background1})`,

    height: "80vh",
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
  const theme = createTheme();
  const slide = React.useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* <Box style={{ cursor: `url(${Backward}), auto` }}> */}
        <MouseFlip>
          <Slider ref={slide} {...settings} style={styles.paperContainer}>
            {items.map((item) => {
              return (
                <Box
                  sx={{
                    pt: 6,
                    pb: 6,
                    height: "100vh",
                  }}
                  // style={{ backgroundImage: `url(${item.src})` }}
                >
                  <Stack
                    sx={{
                      flexGrow: 1,
                      overflow: "hidden",
                      position: "relative",
                      cursor: "none",
                    }}
                  >
                    <Box
                      sx={{
                        height: 35,
                        opacity: 1,
                      }}
                      style={{}}
                    ></Box>
                  </Stack>
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
        </MouseFlip>
        {/* </Box> */}
      </main>
    </ThemeProvider>
  );
}

export default AlbumLayout;
