import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";

export default function HomeNew() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/2w9yxl4o2fyy/environments/master/entries?access_token=MNVzh3524dp7m4Nihpw3Zm2ejz8unr_zTJ2BisD3_Ao"
      )
      .then((response) => setPlaces(response.data.items));

    /* console.log(places);
    console.log(places[0].sys.createdAt); */
  }, []);

  /* Zugriff auf einzelne Places-Einträge
  console.log(places[0].fields); */

  return (
    <>
      <Searchbar />

      {places.map((place, index) => (
        <div
          className="test"
          key={index}
          style={{
            backgroundImage: `url(${place.fields.imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            <h1>{place.fields.name}</h1>
            <p>{place.fields.description}</p>
            <p>Posted at: {place.sys.createdAt}</p>
          </div>
        </div>
      ))}
    </>
  );
}
