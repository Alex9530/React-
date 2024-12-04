import { FC } from "react";
import style from "./style.module.css";
import { combination } from "../../types/combination";

type Props = {
  data: combination;
};

const CombinationsCard: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <h4>{data.name}</h4>
      <p>{data.tag}</p>
    </div>
  );
};

export default CombinationsCard;
