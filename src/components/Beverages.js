import React from "react";
import { Link } from "react-router-dom";
import data from "{__dirname}/../../public/data.json";

function Beverages() {
  const beverages = data.filter(item => item.foodType === "Beverages");

  return (
    <section>
      <h1>BEVERAGES</h1>
      {beverages.map(item => (
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

export default Beverages;
