import { recipes } from "./data.js";
import RecipeContainer from "./components/RecipeContainer.jsx";
import "./App.css";
function App() {
  
  return (
      <RecipeContainer recipes={recipes}></RecipeContainer>
  )
}

export default App
