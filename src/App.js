import React from "react";
import "./App.css";
import DishDetail from "./components/DishDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Starters from "./components/Starters";
import MainCourse from "./components/MainCourse";
import Beverages from "./components/Beverages";
import Desserts from "./components/Desserts";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* home component contains todays special and courses */}
          <Route path="/" exact component={Home} />
          <Route path="/dishDetail/:name" component={DishDetail} />
          <Route path="/starters" component={Starters} />
          <Route path="/mainCourse" component={MainCourse} />
          <Route path="/beverages" component={Beverages} />
          <Route path="/desserts" component={Desserts} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
