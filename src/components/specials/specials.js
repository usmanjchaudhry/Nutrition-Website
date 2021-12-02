import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// This will require to npm install axios
import './specials.css'



function Specials() {


   
  
        return (



        <section class="menu section bd-container" id="menu">
        <span class="section-subtitle">Special</span>
        <h2 class="section-title">Foods of the week</h2>

        <div class="menu__container bd-grid">
            <div class="menu__content">
                <img src="https://spoonacular.com/recipeImages/394151-556x370.jpg" alt="" class="menu__img"/>
                <h3 class="menu__name">Breaded Turkey Slices</h3>
                <span class="menu__detail">Ready in minutes: 20</span>
                <span class="menu__preci">Type of cuisine: American</span>
                <a href='http://www.tasteofhome.com/Recipes/breaded-turkey-slices'>Go to Recipe</a>
            </div>

            <div class="menu__content">
                <img src="https://spoonacular.com/recipeImages/474896-556x370.jpg" alt="" class="menu__img"/>
                <h3 class="menu__name">Bacon Alfredo Pasta</h3>
                <span class="menu__detail">Ready in minutes: 30</span>
                <span class="menu__preci">Type of cuisine: Mediterranean, Italian, European</span>
                <a href='http://www.tasteandtellblog.com/bacon-alfredo-pasta/'>Go to Recipe</a>
            </div>
            
            <div class="menu__content">
                <img src="https://spoonacular.com/recipeImages/479543-556x370.jpg" alt="" class="menu__img"/>
                <h3 class="menu__name">Sundried Tomato Pesto Panini</h3>
                <span class="menu__detail">Ready in minutes: 45</span>
                <span class="menu__preci">Type of cuisine: Mediterranean, Italian, European</span>
                <a href='http://feedmephoebe.com/2012/02/sundried-tomato-pesto-panini/'>Go to Recipe</a>
            </div>

            <div class="menu__content">
                <img src="https://spoonacular.com/recipeImages/168677-556x370.jpg" alt="" class="menu__img"/>
                <h3 class="menu__name">Slow-Cooker Cheesy Corn Dog Casserole</h3>
                <span class="menu__detail">Ready in minutes: 30</span>
                <span class="menu__preci">Type of cuisine: American</span>
                <a href='http://www.BettyCrocker.com/recipes/slow-cooker-cheesy-corn-dog-casserole/1d556102-e932-4aa3-a282-3b21b4c2a7ef'>Go to Recipe</a>
            </div>

            
        </div>
    </section>
 





);


            
  }
  export default Specials;
