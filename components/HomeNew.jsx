import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBarScroll from "/components/NavBarScroll.jsx";

export default function HomeNew() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/uagdxbu69gen/environments/master/entries?access_token=84S6RAOLTOj6erX8CIihN39tOHjBVQyWEuhqbyj9tbk&content_type=travellingDestinations"
      )
      .then((response) => setPlaces(response.data.items));

    /* console.log(places);
    console.log(places[0].sys.createdAt); */
  }, []);

  /* Zugriff auf einzelne Places-Einträge
  console.log(places[0].fields); */

  return (
    <>
      <NavBarScroll />
      <div className="test_outer">
        {places.map((place, index) => (
          <div
            className="test"
            key={index}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${place.fields.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="test_inner">
              <h1>{place.fields.placeName}</h1>
              <h3>{place.fields.country}</h3>
              <p>Description: {place.fields.description}</p>
              <p>Posted at: {place.sys.createdAt}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
