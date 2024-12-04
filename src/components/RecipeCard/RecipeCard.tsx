import { FC } from "react";
import style from "./style.module.css";
import { recipe } from "../../types/recipe";
import { Link } from "react-router";

type Props = {
  data: recipe;
};

const RecipeCard: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <img src={data.imageUrl} alt="recipe" />
      <h4>{data.name}</h4>
      <p className={style.description}>{data.description}</p>

      {/* Условный рендеринг с зарезервированным местом */}
      <p className={`${style.make} ${!data.makingAmount ? style.hidden : ""}`}>
        {data.makingAmount && `Make: ${data.makingAmount}`}
      </p>

      <p className={`${style.time} ${!data.totalTime ? style.hidden : ""}`}>
        {data.totalTime && `Total Time: ${data.totalTime}`}
      </p>

      <Link to={`/JellyBelly/recipe/${data.recipeId}`} className={style.btn}>
        check out this recipe{" "}
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
  );
};

export default RecipeCard;
