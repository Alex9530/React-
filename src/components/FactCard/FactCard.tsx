import { FC } from "react";
import style from "./style.module.css";
import { fact } from "../../types/fact";

type Props = {
  data: fact;
};

const FactCard: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <h4>
        {data.factId}. {data.title}
      </h4>
      <p>{data.description}</p>
    </div>
  );
};

export default FactCard;
