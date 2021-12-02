import React from "react";
import Result from "./Result";


export default function RecipeList({ recipeData }) {

   

    return (
        <main>
        
        <br/>
        <h1>Here are your results:</h1>





        <section className="recipes">
        {recipeData.results.map((result)=>{
            return <Result key = {result.id} result = {result}/>
        })}
        </section>

        </main>
    );


}