import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <>
      <Searchbar />
      {data.map((pic, index) => (
        <div kex={index} className="pic_container">
          <img src={pic.image} />
          <div className="content_container">
          <div /* className="name_container" */><h3>{pic.title}</h3></div>
          <div /* className="price_container" */><h3>{pic.price},-€</h3></div>
          <div /* className="description_container" */><p>{pic.description}</p></div>
          </div>
        </div>
      ))}
    </>
  );
}
