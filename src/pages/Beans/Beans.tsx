import { useState } from "react";
import Cards from "../../components/Cards";
import Search from "../../components/Search";
import style from "./style.module.css";

const Beans = () => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <div className={style.container}>
      <h1>Explore All Beans...</h1>
      <div className={style.search}>
        <Search setFilterValue={setFilterValue} />
      </div>
      <Cards filterValue={filterValue} />
    </div>
  );
};

export default Beans;
