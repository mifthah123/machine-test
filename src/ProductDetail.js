import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "./ProductDetail.css";

function ProductDetail() {
  const { slug } = useParams();
  const [data, setData] = useState([]);

  console.log(slug);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${slug}`).then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div>
      <Header />
      <div>
        <img src={data.image} width={500} />
        <p className="title">{data.title}</p>
        <p className="description">{data.description}</p>
        <p className="category">{data.category}</p>
        <p className="price">${data.price}</p>
        <div>
          <p className="rating">
            {data.rating == undefined ? "" : data.rating.rate}
          </p>
          <p className="rating">
            {data.rating == undefined ? "" : data.rating.count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
