import { useState } from "react";
import style from "./style.module.css";
import RecipeCards from "../../components/RecipeCards/RecipeCards";

const Recipes = () => {
  const [filterValue] = useState("");

  return (
    <div className={style.container}>
      <h1>Explore Recipes...</h1>
      <RecipeCards filterValue={filterValue} />
    </div>
  );
};

export default Recipes;
