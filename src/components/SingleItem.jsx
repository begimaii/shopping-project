import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { Box } from "@mui/material";

export default function SingleItem({
  product,
  addToFavorite,
  addToCard,
  setFavProducts,
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isFavProduct, setIsFavProduct] = useState(false);

  const { title, description, image, price, id } = product;

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
        width: "12rem",
        alignItems: "center",
      }}
    >
      <img
        alt="Sample"
        src={image}
        style={{
          width: "12rem",
          height: "12rem",
          padding: "13px",
          paddingBottom: 0,
        }}
      />
      <CardBody>
        <CardTitle tag="h6">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`Price: $${price}`}
        </CardSubtitle>
        <CardText style={{ fontSize: "13px" }}>
          {!isCollapsed && description}
        </CardText>{" "}
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
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <Button
            style={{}}
            color="warning"
            size="sm"
            onClick={() => addToCard(id)}
          >
            Add to Card
            <AddShoppingCartIcon style={{ marginLeft: "10px" }} />
          </Button>
          <span
            onClick={toggleFavorite}
            style={{ cursor: "pointer", marginLeft: "6.5px" }}
          >
            {isFavProduct ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon className="fav-icon" />
            )}
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
