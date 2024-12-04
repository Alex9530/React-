import { useState } from "react";
import FactCards from "../../components/FactCards/FactCards";
import style from "./style.module.css";

const Facts = () => {
  const [filterValue] = useState(""); // Фильтр можно позже заменить на динамический ввод

  return (
    <div className={style.container}>
      <h1>Explore All Facts...</h1>
      <FactCards filterValue={filterValue} />
    </div>
  );
};

export default Facts;
