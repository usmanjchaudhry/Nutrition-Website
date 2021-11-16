import React, { useRef, Component, useState } from "react";
import { useForm } from 'react-hook-form';
// This will require to npm install axios
import './foodScanner.css';
import axios from 'axios';
import { data } from "jquery";



class FoodScanner extends Component {
       

        state = {
                file: null
        }


        handleUpload(e){
                console.log(this.state,"YOOOOOOOOOOOOOOOOOOOOOOO")


                let file = this.state.file
                let formdata = new FormData()

                formdata.append('file',file)



                const options = {
                        method: 'POST',
                        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/images/analyze',
                        headers: {
                          'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
                          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                          'x-rapidapi-key': '835907ab9emshe7e0ee47d7df2acp1b926djsn8ec7b1d4b220'
                        },
                        data: formdata
                      };
                      
                      axios.request(options).then(function (response) {
                              console.log(response.data);
                              
                              
                      }).catch(function (error) {
                              console.error(error);
                      });
                       
        }



       handleFile(e){

        let file  = e.target.files[0]      
         this.setState({file: file})






         
       }
    

       

 
        render(){


        return (
        <form>
        <h1 class = "words">This is the foodscanner page</h1>
        <label> Select File </label>
       
        <input  type="file" name = "file"  onChange= {(e)=> this.handleFile(e)} />
        <button type="button" onClick = {(e)=> this.handleUpload(e)}>Submit</button>
      </form>


);
}

}

  export default FoodScanner;
