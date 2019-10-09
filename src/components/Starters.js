import React from "react";
import data from "{__dirname}/../../public/data.json";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateFood } from "../redux/actions/foodActions";

class Starters extends React.Component {
  constructor(props) {
    super(props);

    this.menuAdded = this.menuAdded.bind(this);
  }

  menuAdded() {
    this.props.menuAdded();
  }

  render() {
    const starters = data.filter(item => item.foodType === "Starters");
    return (
      <section>
        <h1>STARTERS</h1>
        {starters.map(item => (
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

            <button onClick={this.menuAdded}>Add</button>
          </div>
        ))}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  total: state.total
});

const mapActionsToProps = {
  menuAdded: updateFood
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Starters);
