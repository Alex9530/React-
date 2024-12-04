import style from "./style.module.css";
import FactCard from "../FactCard/FactCard";
import { useState, useEffect, FC } from "react";
import { fact } from "../../types/fact";
import redBean from "../../images/redBean.png";
import Loader from "../Loader/Loader";

type Props = {
  filterValue: string | null;
};

const FactCards: FC<Props> = ({ filterValue }) => {
  const [initialFactCard, setInitialFact] = useState<null | fact[]>(null); // Начальные данные
  const [updateFactCard, setUpdateFact] = useState<null | fact[]>(null); // Отфильтрованные данные
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/facts?pageIndex=1&pageSize=100"
      );
      const data = await req.json();
      setIsLoading(false);
      setInitialFact(data.items);
      setUpdateFact(data.items);
    } catch (e) {
      console.error("ERROR->", e);
      setIsLoading(false);
      setIsError(true);
    }
  };

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    getData();
  }, []);

  // Фильтрация данных
  useEffect(() => {
    if (filterValue) {
      const newArray = initialFactCard?.filter((item) =>
        item.title.toLowerCase().includes(filterValue.toLowerCase())
      );
      newArray && setUpdateFact(newArray);
    } else {
      setUpdateFact(initialFactCard);
    }
  }, [filterValue, initialFactCard]);

  return (
    <div className={style.container}>
      {isLoading && (
        <p>
          <Loader />
        </p>
      )}
      {isError && <p>Перезагрузите страницу!</p>}
      <div className={style.grid}>
        {/* Отображение изображения на месте первого факта */}
        <div className={style.imgWrapper}>
          <img src={redBean} alt="HappyBean" />
        </div>
        {/* Факты, начиная со второго */}
        {updateFactCard &&
          updateFactCard
            .slice(0, 3)
            .map((fact) => <FactCard data={fact} key={fact.factId} />)}
      </div>
      <div className={style.grid}>
        {/* Оставшиеся факты */}
        {updateFactCard &&
          updateFactCard
            .slice(3)
            .map((fact) => <FactCard data={fact} key={fact.factId} />)}
      </div>
    </div>
  );
};

export default FactCards;
