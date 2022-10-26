import React, { useEffect, useState } from "react";
import axios from "axios";
import { Counter } from "./features/counter/Counter";

import "./ProductList.css";
import Header from "./Header";

function ProductList() {
  const [limit, setLimit] = useState(6);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => {
        setData(res.data);
      });
    axios.get(`https://fakestoreapi.com/products/categories`).then((res) => {
      setCategory(res.data);
    });
  }, []);

  const handleLimit = () => {
    const count = limit + 6;
    setLimit(limit + count);
    axios
      .get(`https://fakestoreapi.com/products?limit=${count}`)
      .then((res) => {
        setData(res.data);
      });
  };

  const handleCategory = (c) => {
    axios.get(`https://fakestoreapi.com/products/category/${c}`).then((res) => {
      setData(res.data);
    });
  };
  console.log(data);
  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* Category */}
      <div className="category-container">
        {category.map((cat, i) => (
          <div key={i}>
            <button onClick={() => handleCategory(cat)}>{cat}</button>
          </div>
        ))}
      </div>
      {/* Product List */}

      <div className="products">
        {data.map((value, index) => (
          <a key={index} href={`/${value.id}`} className="productBox">
            <div className="indProduct">
              <img src={value.image} width={250} height={300} />
              <p>{value.title}</p>
              <p className="description">{value.description.slice(0, 30)}...</p>
              <p>${value.price}</p>
            </div>
          </a>
        ))}
      </div>
      {limit < 30 && (
        <div className="button-container">
          <button onClick={handleLimit}>Show more</button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
