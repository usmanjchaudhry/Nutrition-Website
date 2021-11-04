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
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
                </div>

                <img src="https://o.remove.bg/downloads/98f64833-58c7-477c-b49b-26854b949b0b/istockphoto-1131794871-1024x1024-removebg-preview.png" alt="" class="home__img"/>
            </div>
        </section>




      
    </body>





);


            
  }
}