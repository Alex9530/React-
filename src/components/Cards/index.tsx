import style from "./style.module.css";
import Card from "../Card";
import { Bean } from "../../types/bean";
import { useState, useEffect, FC } from "react";
import Loader from "../Loader/Loader";

type Props = {
  filterValue: string;
};

const Cards: FC<Props> = ({ filterValue }) => {
  const [initialBeans, setInitialBeans] = useState<null | Bean[]>(null);

  const [updateBeans, setUpdateBeans] = useState<null | Bean[]>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=100"
      );
      const data = await req.json();
      setIsLoading(false);
      setInitialBeans(data.items);
      setUpdateBeans(data.items);
    } catch (e) {
      console.log("ERROR->", e);
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (filterValue) {
      const newArray = initialBeans?.filter((item) =>
        item.flavorName.includes(filterValue)
      );
      newArray && setUpdateBeans(newArray);
    } else {
      setUpdateBeans(initialBeans);
    }
  }, [filterValue]);
  return (
    <div className={style.container}>
      {isLoading && (
        <p>
          <Loader />
        </p>
      )}
      {isError && <p>перезагрузите страницу!</p>}
      {updateBeans &&
        updateBeans.map((bean) => <Card data={bean} key={bean.beanId} />)}
    </div>
  );
};

export default Cards;
