import style from "./style.module.css";
import HistoryCard from "../HistoryCard/HistoryCard";
import { useState, useEffect, FC } from "react";
import redBean from "../../images/redBean.png";
import { milestones } from "../../types/milestones";
import Loader from "../Loader/Loader";

type Props = {
  filterValue: string | null;
};

const HistoryCards: FC<Props> = ({ filterValue }) => {
  const [initialHistoryCard, setInitialFact] = useState<null | milestones[]>(
    null
  );
  const [updateHistoryCard, setUpdateFact] = useState<null | milestones[]>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/mileStones?pageIndex=1&pageSize=100"
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

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (filterValue) {
      const newArray = initialHistoryCard?.filter((item) =>
        item.year.toLowerCase().includes(filterValue.toLowerCase())
      );
      newArray && setUpdateFact(newArray);
    } else {
      setUpdateFact(initialHistoryCard);
    }
  }, [filterValue, initialHistoryCard]);

  return (
    <div className={style.container}>
      {isLoading && (
        <p>
          <Loader />
        </p>
      )}
      {isError && <p>Перезагрузите страницу!</p>}
      <div className={style.grid}>
        {/* Пустой блок занимает первую колонку */}
        <div className={style.emptyBox}></div>

        {/* Один факт занимает колонки 2-3 */}
        {updateHistoryCard && updateHistoryCard.length > 0 && (
          <div className={style.largeCard}>
            <HistoryCard data={updateHistoryCard[0]} />
          </div>
        )}

        {/* Оставшиеся факты заполняют остальные ячейки */}
        {updateHistoryCard &&
          updateHistoryCard
            .slice(1)
            .map((milestone) => (
              <HistoryCard data={milestone} key={milestone.mileStoneId} />
            ))}
      </div>

      {/* Изображение в последнем боксе */}
      <div className={style.imgWrapper}>
        <img src={redBean} alt="HappyBean" />
      </div>
    </div>
  );
};

export default HistoryCards;
