import Recipe from "./Recipe.jsx";

function RecipeContainer({ recipes }) {
    //console.log(recipes);
    return (
        <>
        <h1 className="title">Recipes</h1>
        <div className="recipe-container">
        {
            recipes.map(recipe => (
            <Recipe recipe={recipe} key={recipe.name}></Recipe>
            ))
        }
        </div>
        </>
    )
}

export default RecipeContainer;