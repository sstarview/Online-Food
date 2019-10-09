import React from "react";
import { connect } from "react-redux";
import { buyFood } from "../redux/food";
import data from "{__dirname}/../../public/data.json";

function DishDetail({ match }, props) {
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
        <button onClick={props.buyFood}>Add to my plate</button>
        <h1>{props.numOfFoods}</h1>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    numOfFoods: state.numOfFoods
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyFood: () => dispatch(buyFood())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishDetail);
