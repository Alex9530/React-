import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Bean } from "../../types/bean";
import style from "./style.module.css";
import Info from "./info";

const BeanPage = () => {
  const params = useParams();
  const [beanData, setBeanData] = useState<Bean | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(
          `https://jellybellywikiapi.onrender.com/api/beans/${params.id}`
        );
        const data = await req.json();
        setBeanData(data);
      } catch (e) {
        console.log("Error->", e);
      }
    };
    getData();
  }, [params.id]);

  return (
    <>
      <div className={style.container1}>
        {beanData && (
          <div>
            <h1>{beanData.flavorName}</h1>
            <p>{beanData.description}</p>
            <img src={beanData.imageUrl} alt="bean" />
            <h4>Group Name:</h4>
            <div>{beanData.groupName}</div>
            <h4>Ingredients:</h4>
            <div>{beanData.ingredients}</div>
            <div className={style.informations}>
              <Info beanData={beanData} />
            </div>
          </div>
        )}
        <Link to={`/JellyBelly/beans/`} className={style.btn}>
          <h4>Back to Beans</h4>
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
        </Link>
      </div>
    </>
  );
};

export default BeanPage;
