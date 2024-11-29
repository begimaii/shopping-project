import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router";
import { Form, FormGroup, Label, Input } from "reactstrap";
import images from "../utils/constants";
import { Box, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchFromApi } from "../utils/fetchFromApi";

function NavbarComp({
  handleFilterCategory,
  categories,
  activeCategory,
  favProducts,
  addProduct,
  handleSearch,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    setIsOpen(!isOpen);
    handleClose();
  };

  return (
    <div className="nav-bar">
      <Navbar color="dark" dark>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={images.logo}
            style={{
              height: 40,
              width: 150,
            }}
          />
        </NavbarBrand>
        <div style={{ display: "flex", gap: "40px" }}>
          <NavLink
            className={`category ${activeCategory === "All" ? "active" : ""}`}
            onClick={() => handleFilterCategory("All")}
          >
            All
          </NavLink>
          {categories.map((category, index) => (
            <div key={index}>
              <NavLink
                href="#"
                className={`category ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => handleFilterCategory(category)}
              >
                {category}
              </NavLink>
            </div>
          ))}
        </div>{" "}
        <Paper
          sx={{
            borderRadius: 20,
            border: "1px solid #e3e3e3",
            pl: 2,
            display: "flex",
            justifyContent: "space-between",
            ml: 3,
            mr: 2,
          }}
          elevation={4}
          className="search-bar"
        >
          <input
            value={input}
            type="text"
            style={{ border: "none", outline: "none" }}
            onChange={(e) => setInput(e.target.value)}
          />
          <SearchIcon onClick={() => handleSearch(input)} />
        </Paper>
        <span style={{ color: "white" }}>
          <FavoriteOutlinedIcon
            fontSize="medium"
            style={{ marginRight: "10px" }}
          />
          Favorites {favProducts.length}
        </span>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <span style={{ color: "white", cursor: "pointer" }}>
              {" "}
              <AccountCircleIcon
                fontSize="medium"
                style={{ marginRight: "10px" }}
              />
              Profile
            </span>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              {" "}
              <AccountCircleIcon
                fontSize="small"
                style={{ marginRight: "5px" }}
              />
              Profile
            </MenuItem>
            <Link to="login">
              <MenuItem onClick={handleLoginClick}>
                <LoginIcon fontSize="small" style={{ marginRight: "5px" }} />
                Login
              </MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>
              <LogoutIcon fontSize="small" />
              Logout
            </MenuItem>
          </Menu>
        </div>
        <div style={{ color: "white", position: "relative" }}>
          <ShoppingCartOutlinedIcon fontSize="large" />
          <span className="shopping_quantity">{addProduct.length}</span>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
