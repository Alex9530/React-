import { FC } from "react";
import style from "./style.module.css";
import { milestones } from "../../types/milestones";

type Props = {
  data: milestones;
};

const HistoryCard: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.card_block1}>
        <h4>{data.year}</h4>
        <p>{data.description}</p>
      </div>
      <div className={style.card_block2}>
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
      </div>
    </div>
  );
};

export default HistoryCard;
