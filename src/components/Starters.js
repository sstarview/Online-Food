import React from "react";
import data from "{__dirname}/../../public/data.json";
import { Link } from "react-router-dom";

function Starters() {
  // console.log(data);
  const starters = data.filter(item => item.foodType === "Starters");
  console.log(starters);
  return (
    <section>
      <h1>STARTERS</h1>
      {starters.map(item => (
        <div key={item.foodId}>
          {/* <Link to={`dishDetail/${item.foodName}`> */}

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

export default Starters;
