import React from "react";
import Result from "./Result";
import "./RecipeList.css"

export default function RecipeList({ recipeData }) {

   

    return (
        <main>
            
        <h1> </h1>
        <br>
        </br>





        <section className="recipes">
        {recipeData.results.map((result)=>{
            return <Result key = {result.id} result = {result}/>
        })}
        </section>

        </main>
    );


}