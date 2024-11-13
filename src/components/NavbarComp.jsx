import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
}) {
  const [isOpen, setIsOpen] = useState(false);

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
          <input type="text" style={{ border: "none", outline: "none" }} />
          <SearchIcon />
        </Paper>
        <span style={{ color: "white" }}>
          <FavoriteOutlinedIcon
            fontSize="medium"
            style={{ marginRight: "10px" }}
          />
          Favorites {favProducts.length}
        </span>
        <span style={{ color: "white" }}>
          {" "}
          <AccountCircleIcon
            fontSize="medium"
            style={{ marginRight: "10px" }}
          />
          Account/ Sign In/ Sign Up
        </span>
        <div style={{ color: "white", position: "relative" }}>
          <ShoppingCartOutlinedIcon fontSize="large" />
          <span className="shopping_quantity">{addProduct.length}</span>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
