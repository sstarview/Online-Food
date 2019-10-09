import React from "react";
import data from "{__dirname}/../../public/data.json";
import { connect } from "react-redux";
import { updateFood } from "../redux/actions/foodActions";

// class  DishDetail extends React({ match }) {
class DishDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  onClickAdd(e) {
    this.props.onClickAdd(e.target.value);
  }

  // onClickAdd(e) {
  //   this.props.onClickAdd(this.handleChange);
  // }

  render() {
    console.log(this.handleChange);
    const myData = data.find(
      data => data.foodName === this.props.match.params.name
    );
    return (
      <section>
        <h1>Add to My Plate</h1>
        <div>
          <h4>{myData.foodName}</h4>
          <h6>{myData.rating}</h6>
          <h6>{myData.totalUserRating} </h6>
          <h6>{myData.cuisine}</h6>
          <h6>{myData.price}</h6>
          <input
            type="number"
            min="0"
            defaultValue="0"
            onClick={this.onClickAdd}
          />
          <h6>{myData.description}</h6>
          <h5>Note to Chef</h5>
          <input type="text"></input>
          <button onClick={this.onClickAdd}>Add to my plate</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value,
  total: state.total
});

const mapActionsToProps = {
  onClickAdd: updateFood
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(DishDetail);
