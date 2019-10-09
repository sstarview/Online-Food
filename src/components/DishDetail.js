import React from "react";
import data from "{__dirname}/../../public/data.json";

function DishDetail({ match }) {
  const myData = data.find(data => data.foodName === match.params.name);
  return (
    <section>
      <h1>Add to My Plate</h1>
      <div>
        <h4>{myData.foodName}</h4>
        <h6>{myData.rating}</h6>
        <h6>{myData.totalUserRating} </h6>
        <h6>{myData.cuisine}</h6>
        <h6>{myData.price}</h6>
        <input type="number" />
        <h6>{myData.description}</h6>
        <h5>Note to Chef</h5>
        <input type="text"></input>
      </div>
    </section>
  );
}

export default DishDetail;
