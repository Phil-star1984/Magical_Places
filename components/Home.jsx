import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

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
      {data.map((pic, index) => (
        <div kex={index} className="pic_container">
          <img src={pic.image} width="400" />
          <h3>{pic.title}</h3>
          <h3>{pic.price},-€</h3>
          <p>{pic.description}</p>
        </div>
      ))}
    </>
  );
}
