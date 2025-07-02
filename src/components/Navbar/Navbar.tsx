"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EuroIcon from "@mui/icons-material/Euro";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

const Navbar = () => {
  const [anchorElCurrency, setAnchorElCurrency] = React.useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleCurrencyClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCurrency(event.currentTarget);
  };

  const handleLangClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElCurrency(null);
    setAnchorElLang(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    "Home",
    "Hotels",
    "About Us",
    "Contact Us",
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#E6F3FF",
          boxShadow: "none",
          color: "black",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left: Logo and Menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src="/images/logo.png" // update your logo path
              alt="Logo"
              sx={{ height: 30 }}
            />

            {/* Desktop Nav Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link}
                  variant="text"
                  sx={{
                    color: link === "Home" ? "#0071c2" : "black",
                    fontWeight: link === "Home" ? 600 : 400,
                  }}
                >
                  {link}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Right Controls */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
            {/* Currency Dropdown */}
            <Button
              onClick={handleCurrencyClick}
              sx={{
                border: "1px solid #cce0f7",
                borderRadius: "30px",
                textTransform: "none",
                color: "black",
                px: 2,
              }}
              startIcon={<EuroIcon />}
              endIcon={<ExpandMoreIcon />}
            >
              €
            </Button>
            <Menu
              anchorEl={anchorElCurrency}
              open={Boolean(anchorElCurrency)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>€ Euro</MenuItem>
              <MenuItem onClick={handleClose}>$ USD</MenuItem>
              <MenuItem onClick={handleClose}>£ GBP</MenuItem>
            </Menu>

            {/* Language Dropdown */}
            <Button
              onClick={handleLangClick}
              sx={{
                border: "1px solid #cce0f7",
                borderRadius: "30px",
                textTransform: "none",
                color: "black",
                px: 2,
              }}
              startIcon={
                <Box
                  component="img"
                  src="https://flagcdn.com/w20/es.png"
                  alt="Spain Flag"
                  sx={{ height: 20, borderRadius: "3px" }}
                />
              }
              endIcon={<ExpandMoreIcon />}
            >
            </Button>
            <Menu
              anchorEl={anchorElLang}
              open={Boolean(anchorElLang)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>🇪🇸 Spanish</MenuItem>
              <MenuItem onClick={handleClose}>🇬🇧 English</MenuItem>
              <MenuItem onClick={handleClose}>🇫🇷 French</MenuItem>
            </Menu>

            {/* List Your Property */}
            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                borderColor: "#cce0f7",
                color: "#0071c2",
                textTransform: "none",
                fontWeight: 500,
                px: 2,
              }}
              endIcon={<ArrowForwardIcon />}
            >
              List your property
            </Button>

            {/* Notifications */}
            <IconButton sx={{ color: "#0071c2" }}>
              <NotificationsIcon />
            </IconButton>

            {/* User Profile */}
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                border: "1px solid #cce0f7",
                px: 1,
              }}
              startIcon={
                <Avatar
                  sx={{
                    width: 30,
                    height: 30,
                    fontSize: "0.875rem",
                    bgcolor: "#2e7d32",
                  }}
                >
                  J
                </Avatar>
              }
            >
              Sunan
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250, p: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((text) => (
             <ListItem disablePadding key={text}>
  <ListItemButton>
    <ListItemText primary={text} />
  </ListItemButton>
</ListItem>
            ))}
          </List>

          {/* Mobile only controls */}
          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            <Button
              variant="outlined"
              startIcon={<EuroIcon />}
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                borderColor: "#cce0f7",
                color: "black",
              }}
            >
              Currency
            </Button>
            <Button
              variant="outlined"
              startIcon={
                <Box
                  component="img"
                  src="https://flagcdn.com/w20/es.png"
                  alt="Spain Flag"
                  sx={{ height: 20 }}
                />
              }
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                borderColor: "#cce0f7",
                color: "black",
              }}
            >
              Language
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                textTransform: "none",
                bgcolor: "#0071c2",
                color: "#fff",
              }}
              endIcon={<ArrowForwardIcon />}
            >
              List your property
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
