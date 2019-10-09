import React from "react";

function SpecialDish(props) {
  //   console.log(props);
  const { foodName, foodCategory } = props.dish;
  //   const dish
  return (
    <div className="SpecialDish">
      <h5>{foodName}</h5>
      <h5>{foodCategory}</h5>
    </div>
  );
}

export default SpecialDish;
