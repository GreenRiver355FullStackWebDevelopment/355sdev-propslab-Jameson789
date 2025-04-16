function Recipe({ recipe }) {
    const {name, ingredients, instructions} = recipe;
    console.log(name);
    return (
        <>
        <h2 className="name">{name}</h2>
        
        <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div> 

        <p className="instructions">{instructions}</p>
        </>
    )
}

export default Recipe