function Recipe({ recipe }) {
    const {name, ingredients, instructions} = recipe;
    console.log(name);
    return (
        <>
        <h2 className="name">{name}</h2>
        <p className="ingredients">{ingredients}</p>
        <p className="instructions">{instructions}</p>
        </>
    )
}

export default Recipe