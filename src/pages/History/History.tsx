import { useState } from "react";
import style from "./style.module.css";
import HistoryCards from "../../components/HistoryCards/HistoryCards";

const History = () => {
  const [filterValue] = useState(""); // Фильтр можно позже заменить на динамический ввод

  return (
    <div className={style.container}>
      <h1>Explore Combinations...</h1>
      <HistoryCards filterValue={filterValue} />
    </div>
  );
};

export default History;
