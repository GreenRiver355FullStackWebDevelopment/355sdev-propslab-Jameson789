import { recipes } from "./data.js";
import RecipeContainer from "./components/RecipeContainer.jsx";

function App() {
  
  return (
      <RecipeContainer recipes={recipes}></RecipeContainer>
  )
}

export default App
