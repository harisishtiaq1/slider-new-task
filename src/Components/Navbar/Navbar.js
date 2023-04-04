import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { Container, createTheme, Link, ThemeProvider } from "@mui/material";
import Logo from "../../assets/logo.svg";
import Slider from "../Slider/Slider";
const drawerWidth = 200;
const navItems = [
  "Home",
  "Layouts",
  "Apps",
  "Customization",
  "Features",
  "Documents",
];

function AlbumLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = createTheme();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Box component="img" alt="img" sx={{ height: 35 }} src={Logo}></Box>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            component="nav"
            wrap
            sx={{
              position: "fixed",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <Container>
              <Toolbar
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Link href="/">
                  <Box
                    component="img"
                    alt="img"
                    sx={{ height: 35 }}
                    src={Logo}
                  ></Box>
                </Link>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Link
                    sx={{
                      mr: 3,
                      my: 2,
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    sx={{
                      mr: 3,
                      my: 2,
                      cursor: "pointer",

                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    layouts
                  </Link>
                  <Link
                    sx={{
                      my: 2,
                      mr: 3,
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Apps
                  </Link>
                  <Link
                    sx={{
                      my: 2,
                      mr: 3,
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Customization
                  </Link>
                  <Link
                    sx={{
                      my: 2,
                      mr: 3,
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Feature
                  </Link>
                  <Link
                    sx={{
                      my: 2,
                      mr: 3,
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Documents
                  </Link>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, color: "white" }}
                  >
                    <SearchIcon />
                  </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, color: "white" }}
                >
                  <MenuIcon />
                </IconButton>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </Container>
      <Slider  />
    </ThemeProvider>
  );
}
export default AlbumLayout;
