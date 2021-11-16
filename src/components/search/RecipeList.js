import React from "react";
import Result from "./Result";


export default function RecipeList({ recipeData }) {

   

    return (
        <main>
            
        <h1>Here are the results.</h1>





        <section className="recipes">
        {recipeData.results.map((result)=>{
            return <Result key = {result.id} result = {result}/>
        })}
        </section>

        </main>
    );


}