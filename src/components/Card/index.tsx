import { FC } from "react";
import style from "./style.module.css";
import { Bean } from "../../types/bean";
import { Link } from "react-router";

type Props = {
  data: Bean;
};

const Card: FC<Props> = ({ data }) => {
  return (
    <Link to={`/JellyBelly/bean/${data.beanId}`} className={style.card}>
      <h4>{data.flavorName}</h4>
      <img src={data.imageUrl} alt="" />
      <p>{data.description}</p>
      {/* {data.sugarFree ? <p>Not sugar</p> : <p>with sugar</p>} */}
    </Link>
  );
};

export default Card;
