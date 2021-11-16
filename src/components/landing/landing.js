import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button} from 'react-bootstrap'

// This will require to npm install axios
import './landing.css'




export default class landing extends Component {

    render() {
        return (
            <body>
            <section class="home" id="home">
            <div class="home__container bd-container bd-grid">
                <div class="home__data">
                    <h1 class="home__title">Curious about food?</h1>
                    <h2 class="home__subtitle">Find out more <br/> about what you eat:</h2>
                    <Form className="d-flex">

      
          
          <Button variant="outline-success" href="/search">Search Recipes </Button>
        </Form>
                </div>

                <img src="https://o.remove.bg/downloads/91d2c120-8eb1-4463-a737-2b207ae168da/D1062_67_472_1200-removebg-preview.png" alt="" class="home__img"/>
            </div>
        </section>




      
    </body>





);


            
  }
}