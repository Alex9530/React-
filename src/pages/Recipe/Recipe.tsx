import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import style from "./style.module.css";
import { recipe } from "../../types/recipe";

const Recipe = () => {
  const params = useParams();
  const [recipeData, setRecipeData] = useState<recipe | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(
          `https://jellybellywikiapi.onrender.com/api/recipes/${params.id}`
        );
        const data = await req.json();
        setRecipeData(data);
      } catch (e) {
        console.log("Error->", e);
      }
    };
    getData();
  }, [params.id]);

  return (
    <>
      <div className={style.container1}>
        {recipeData && (
          <div>
            <h1>{recipeData.name}</h1>
            <h4>{recipeData.description}</h4>
            <p>Preparation time: {recipeData.prepTime}</p>
            <p>Cook time: {recipeData.cookTime}</p>
            <p>Total time: {recipeData.totalTime}</p>
            <p>Recipe makes {recipeData.makingAmount}</p>
            <img src={recipeData.imageUrl} alt="bean" />
            <h4>Ingredients</h4>
            <div className={style.ingredients}>
              {recipeData.ingredients.map((ingredient, index) => (
                <p key={index} className={style.ingredient}>
                  {ingredient}
                </p>
              ))}
            </div>
            <h4>Directions</h4>
            <div>{recipeData.directions}</div>
          </div>
        )}
        <Link to={`/JellyBelly/recipes/`} className={style.btn}>
          <h4>Back to recipes</h4>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right"
            className="svg-inline--fa fa-arrow-right beatFade"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="var(--head-color)"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            ></path>
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Recipe;
