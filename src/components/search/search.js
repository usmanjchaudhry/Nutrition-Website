import React, { Component, useState } from "react";
import "./search.css"
import $ from 'jquery'
import RecipeList from "./RecipeList"

function Search() {

    const [recipeData, setRecipeData] = useState(null);
    const [query, setQuery] = useState("burger");
    
   function getRecipeData(){
       fetch(
    `https://api.spoonacular.com/recipes/search?apiKey=cabe11c03f694e5fa82994e4d70adc60&number=10&query=${query}`,
       )
       .then((response) => response.json())
       .then((data) => {
         setRecipeData(data);
         console.log(data)
       })
       .catch(() => {
         console.log("error");
       });
   }
    function handleChange(e) {
       setQuery(e.target.value);
      }
    
   
    return (
        <div className="App">
        <h1 class = "words">"Our bodies are our gardens, to which our wills are our gardeners." - William Shakespeare 
 </h1>
        <input type ="text" id="searchField" placeholder ="Search a Recipe..." onChange = {handleChange}/>
        <button onClick = {getRecipeData}>Search </button>
        <div id = "output"></div>
        {recipeData && <RecipeList recipeData = {recipeData} />}
        </div>
);
}
export default Search;
