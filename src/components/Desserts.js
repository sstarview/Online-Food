import React from "react";
import data from "{__dirname}/../../public/data.json";
import { Link } from "react-router-dom";

function Desserts() {
  const desserts = data.filter(item => item.foodType === "Desserts");

  return (
    <section>
      <h1>STARTERS</h1>
      {desserts.map(item => (
        <div key={item.foodId}>
          <Link to={`dishDetail/${item.foodName}`}>
            <div>
              <h5>{item.foodName}</h5>
            </div>
          </Link>
          <h6>{item.rating}</h6>
          <h6>{item.totalUserRating}</h6>
          <h6>{item.cuisine}</h6>
          <h6>Rs {item.price}</h6>
          <button>Add</button>
        </div>
      ))}
    </section>
  );
}

export default Desserts;
