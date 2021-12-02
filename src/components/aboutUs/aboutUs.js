import React from 'react'
import './aboutUs.css'

function aboutUs() {
    return (
        <div>
            <h1 class = "words">About Us</h1>

            <div class="about_us_container bd-container">    
                
                <p class="details"><i>Nutrifacts</i> - helping you tackle your personal nutrition goals one meal at a time. One of the problems we face is never knowing the exact nutrition of the foods we eat. Preparing meals and calculating calories can become time consuming and tedious. Through <i>Nutrifacts</i>, we want to deliver a one stop shop for people to be able to look up nutritional information quickly and easily, as well as a place for them to plan their meals for the week.</p>
                

                <div class="profile_container">
                    <div class="profile">
                        <img src="img/Brandon.jpg" alt=""/>
                        <p class = "details">Brandon Pacol</p>
                    </div>
                    <div class="profile">
                        <img src="img/Usman.png" alt=""/>
                        <p class = "details">Usman Chaudhry</p>
                    </div>
                    <div class="profile">
                        <img src="img/Francisco.jpg" alt=""/>
                        <p class = "details">Francisco Gomez</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default aboutUs
