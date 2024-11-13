import React, { useEffect, useState } from "react";
import SingleItem from "./SingleItem";
import axios from "axios";
import { fetchFromApi } from "../utils/fetchFromApi";
import NavbarComp from "./NavbarComp";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [favProducts, setFavProducts] = useState([]);
  const [addProduct, setAddProduct] = useState([]);

  const getCategories = () => {
    fetchFromApi("categories").then((res) => {
      setCategories(res);
    });
  };

  const url = "https://fakestoreapi.com/products";

  const getAllProducts = async () => {
    const { data } = await axios.get(url);
    console.log(products);
    setProducts(data);
    setFilteredProducts(data);
  };

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  const handleFilterCategory = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const addToFavorite = (productId, isFavorite) => {
    if (isFavorite) {
      setFavProducts((prevProducts) => [
        ...prevProducts,
        products.find((product) => product.id === productId),
      ]);
    } else {
      setFavProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    }
  };

  const addToCard = (productId) => {
    const filtered = products.filter((product) => product.id === productId);
    setAddProduct([...addProduct, filtered]);
  };
  return (
    <div>
      <NavbarComp
        handleFilterCategory={handleFilterCategory}
        categories={categories}
        activeCategory={activeCategory}
        favProducts={favProducts}
        addProduct={addProduct}
      />
      <div className="home-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="home">
            <SingleItem
              product={product}
              addToFavorite={addToFavorite}
              addToCard={addToCard}
              setFavProducts={setFavProducts}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
