import React from "react";
import SpecialDish from "./SpecialDish";
import data from "{__dirname}/../../public/data.json";
import { Link } from "react-router-dom";

function TodaysSpecial() {
  //const dishData = data;
  // console.log(dishData);

  return (
    // Hardcoded the value for demonstration purpose
    // Can randomly select the dish
    <section className="TodaysSpecial">
      <h1>TODAYS SPECIAL</h1>
      <Link to={`dishDetail/${data[0].foodName}`}>
        <SpecialDish dish={data[0]} />
      </Link>
      <Link to={`dishDetail/${data[1].foodName}`}>
        <SpecialDish dish={data[1]} />
      </Link>
      <Link to={`dishDetail/${data[2].foodName}`}>
        <SpecialDish dish={data[2]} />
      </Link>
    </section>
  );
}

export default TodaysSpecial;
