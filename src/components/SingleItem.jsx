import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function SingleItem({
  product,
  addToFavorite,
  addToCard,
  setFavProducts,
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isFavProduct, setIsFavProduct] = useState(false);

  const { title, description, image, price, id } = product;

  const [count, setCount] = React.useState(0);

  const handleChange = (event) => {
    setCount(event.target.value);
  };
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleFavorite = () => {
    setIsFavProduct((prevIsFavorite) => {
      const newIsFavorite = !prevIsFavorite;
      addToFavorite(id, newIsFavorite);
      return newIsFavorite;
    });
  };
  return (
    <Card
      style={{
        width: "14rem",
        alignItems: "center",
        margin: "0px",
        height: "22rem",
      }}
    >
      <img
        alt="Sample"
        src={image}
        style={{
          width: "10rem",
          height: "10rem",
          padding: "13px",
          paddingBottom: 0,
        }}
      />
      <span onClick={toggleFavorite} className="favIcon-cont">
        {isFavProduct ? (
          <FavoriteIcon fontSize="small" style={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon fontSize="small" className="fav-icon" />
        )}
      </span>
      <CardBody
        style={{
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }}
      >
        <CardTitle style={{ fontFamily: "inherit", fontFamily: "bolder" }}>
          {title}
        </CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          {` $${price}`}
        </CardSubtitle>
        <CardText>{!isCollapsed && description}</CardText>{" "}
        <span
          onClick={toggleCollapse}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            fontStyle: "italic",
          }}
        >
          {" "}
          {isCollapsed ? "+ Description" : "Read Less"}{" "}
        </span>
        <div
          style={{
            marginTop: "10px",
            alignItems: "center",
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            alignSelf: "stretch",
          }}
        >
          <Button
            style={{}}
            color="warning"
            size="sm"
            onClick={() => addToCard(id)}
          >
            Add to Card
            <AddShoppingCartIcon
              fontSize="small"
              style={{ marginLeft: "10px" }}
            />
          </Button>
          <div className="number">
            <FormControl>
              <Select
                style={{
                  height: "32px",
                  width: "3rem",
                  // padding: "0",
                  textAlign: "center",
                }}
                value={count}
                onChange={handleChange}
                // displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <MenuItem
                    style={{ padding: "0", textAlign: "center" }}
                    key={num}
                    value={num}
                  >
                    {num}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
