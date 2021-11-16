import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// This will require to npm install axios
import './specials.css'



function Specials() {

    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=4", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "835907ab9emshe7e0ee47d7df2acp1b926djsn8ec7b1d4b220"
        }
    })
    .then((response) => response.json())
      .then((data) => {
        console.log(data.recipes[0].im)
      })
      .catch(() => {
        console.log("error");
      });
        return (



        <section class="menu section bd-container" id="menu">
        <span class="section-subtitle">Special</span>
        <h2 class="section-title">Foods of the week</h2>

        <div class="menu__container bd-grid">
            <div class="menu__content">
                <img src="https://www.chelseasmessyapron.com/wp-content/uploads/2016/05/BBQ-Chicken-Salad-4.jpg" alt="" class="menu__img"/>
                <h3 class="menu__name">Barbecue salad</h3>
                <span class="menu__detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                <span class="menu__preci">2200 calories</span>
                <a href="/" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
            </div>

            <div class="menu__content">
                <img src="https://www.lanascooking.com/wp-content/uploads/2021/07/simple-seasoned-grilled-fish-feature-1200.jpg" alt="" class="menu__img"/>
                <h3 class="menu__name">Grilled fish</h3>
                <span class="menu__detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                <span class="menu__preci">1200 calories</span>
                <a href="/" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
            </div>
            
            <div class="menu__content">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191219-seo-steak-eggs-delish-ehg-8987-jpg-1579900349.jpg" alt="" class="menu__img"/>
                <h3 class="menu__name">Steak and Eggs</h3>
                <span class="menu__detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                <span class="menu__preci">950 calories</span>
                <a href="/" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
            </div>

            <div class="menu__content">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191219-seo-steak-eggs-delish-ehg-8987-jpg-1579900349.jpg" alt="" class="menu__img"/>
                <h3 class="menu__name">Steak and Eggs</h3>
                <span class="menu__detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                <span class="menu__preci">950 calories</span>
                <a href="/" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
            </div>

            
        </div>
    </section>
 





);


            
  }
  export default Specials;
