import React from "react";
import data from "{__dirname}/../../public/data.json";

function MainCourse() {
  const mainCourse = data.filter(item => item.foodType === "Main Course");

  return (
    <section>
      <h1>STARTERS</h1>
      {mainCourse.map(item => (
        <div key={item.foodId}>
          <h5>{item.foodName}</h5>
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

export default MainCourse;
