import React from "react";
import './navbar.css'
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */



/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
 
// Here, we display our Navbar
const Navbar = () => {
  return (
  
<header class="header" id="header">
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
            <div class="nav container ">
                <a href="/landing" class="nav__logo">Nutrifacts</a>

                <div class="nav__menu show-menu" id="nav-menu">
                    <ul class="nav__list grid">
                        <li class="nav__item">
                            <a href="/landing" class="nav__link active-link">
                                <i class="uil uil-home nav__icon"></i> Home
                            </a>

                        </li>
                        <li class="nav__item">
                            <a href="/mealPlanner" class="nav__link">
                            <i class="uil uil-calendar-alt nav__icon"></i> Meal Planner
                            </a>
                            
                        </li>
                        <li class="nav__item">
                            <a href="/foodScanner" class="nav__link">
                            <i class="uil uil-qrcode-scan nav__icon"></i> Food Scanner
                            </a>
                            
                        </li>
                      

                    </ul>
                </div>

                <div class="nav__btns">
                  



                    <div class="nav__toggle" id="nav-toggle">
                        <i class="uil uil-apps"></i>
                    </div>
                </div>
            </div>
        </header>
  );
};
 
export default Navbar;