import React from "react";
import { Link } from "react-router-dom";
// import data from "{__dirname}/../../public/data.json";

function CoursesMenu() {
  //console.log(data);
  // const renderData = data.map(item => item.foodType);
  return (
    <div className="CoursesMenu">
      <Link to="starters">
        <h4>Starter</h4>
      </Link>
      <Link to="mainCourse">
        <h4>Main Course</h4>
      </Link>
      <Link to="desserts">
        <h4>Desserts</h4>
      </Link>
      <Link to="beverages">
        <h4>Beverages</h4>
      </Link>
    </div>
  );
}

export default CoursesMenu;
