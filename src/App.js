import React from "react";
import './App.css';

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar/navbar";
import Create from "./components/create";
import FoodScanner from "./components/foodScanner/foodScanner";
import Landing from "./components/landing/landing"
import Specials from "./components/specials/specials"
import Mealplanner from "./components/mealPlanner/mealPlanner";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <Route exact path="/">
      <Landing />
      <Specials />
      </Route>

      

      <Route path="/create">
        <Create />
      </Route>

      <Route path="/foodScanner">
        <FoodScanner />
      </Route>

      
      <Route path="/mealPlanner">
        <Mealplanner />
      </Route>

      <Route path="/landing">
        <Landing />
        <Specials />
        <Footer />
      </Route>
    </div>
  );
};

export default App;