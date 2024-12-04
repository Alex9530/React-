import style from "./style.module.css";
import { useState, useEffect, FC } from "react";
import { recipe } from "../../types/recipe";
import RecipeCard from "../RecipeCard/RecipeCard";
import Loader from "../Loader/Loader";

type Props = {
  filterValue: string | null;
};

const RecipeCards: FC<Props> = ({ filterValue }) => {
  const [initialRecipeCard, setInitialRecipe] = useState<null | recipe[]>(null); // Начальные данные
  const [updateRecipeCard, setUpdateRecipe] = useState<null | recipe[]>(null); // Отфильтрованные данные
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/recipes?pageIndex=1&pageSize=100"
      );
      const data = await req.json();
      setIsLoading(false);
      setInitialRecipe(data.items);
      setUpdateRecipe(data.items);
    } catch (e) {
      console.error("ERROR->", e);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (filterValue) {
      const newArray = initialRecipeCard?.filter((item) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      newArray && setUpdateRecipe(newArray);
    } else {
      setUpdateRecipe(initialRecipeCard);
    }
  }, [filterValue, initialRecipeCard]);

  return (
    <div className={style.container}>
      {isLoading && (
        <p>
          <Loader />
        </p>
      )}
      {isError && <p>Перезагрузите страницу!</p>}
      <div className={style.grid}>
        {/* Факты, начиная со второго */}
        {updateRecipeCard &&
          updateRecipeCard
            .slice(0, 3)
            .map((recipe) => (
              <RecipeCard data={recipe} key={recipe.recipeId} />
            ))}
      </div>
      <div className={style.grid}>
        {/* Оставшиеся факты */}
        {updateRecipeCard &&
          updateRecipeCard
            .slice(3)
            .map((recipe) => (
              <RecipeCard data={recipe} key={recipe.recipeId} />
            ))}
      </div>
    </div>
  );
};

export default RecipeCards;
