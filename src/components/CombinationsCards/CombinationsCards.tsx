import style from "./style.module.css";
import { useState, useEffect, FC } from "react";
import redBean from "../../images/redBean.png";
import { combination } from "../../types/combination";
import CombinationsCard from "../CombinationsCard/CombinationsCard";

type Props = {
  filterValue: string | null;
};

const CombinationsCards: FC<Props> = ({ filterValue }) => {
  const [initialCombinationsCard, setInitialCombinations] = useState<
    null | combination[]
  >(null); // Начальные данные
  const [updateCombinationsCard, setUpdateCombinations] = useState<
    null | combination[]
  >(null); // Отфильтрованные данные
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/combinations?pageIndex=1&pageSize=100"
      );
      const data = await req.json();
      setIsLoading(false);
      setInitialCombinations(data.items);
      setUpdateCombinations(data.items);
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
      const newArray = initialCombinationsCard?.filter((item) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      newArray && setUpdateCombinations(newArray);
    } else {
      setUpdateCombinations(initialCombinationsCard);
    }
  }, [filterValue, initialCombinationsCard]);

  return (
    <div className={style.container}>
      {isLoading && <p>...loading</p>}
      {isError && <p>Перезагрузите страницу!</p>}
      <div className={style.grid}>
        {/* Отображение изображения на месте первого факта */}
        <div className={style.imgWrapper}>
          <img src={redBean} alt="HappyBean" />
        </div>
        {/* Факты, начиная со второго */}
        {updateCombinationsCard &&
          updateCombinationsCard
            .slice(0, 3)
            .map((combination) => (
              <CombinationsCard
                data={combination}
                key={combination.combinationId}
              />
            ))}
      </div>
      <div className={style.grid}>
        {/* Оставшиеся факты */}
        {updateCombinationsCard &&
          updateCombinationsCard
            .slice(3)
            .map((combination) => (
              <CombinationsCard
                data={combination}
                key={combination.combinationId}
              />
            ))}
      </div>
    </div>
  );
};

export default CombinationsCards;
