import React from "react";
import style from "./style.module.css";

const Info: React.FC = ({}) => {
  const informations = [
    { theme: "100 +", details: "Jelly Belly beans" },
    { theme: "8", details: "Properties on each bean" },
    { theme: "99 +", details: "Facts on Jelly Belly" },
    { theme: "20 +", details: "Milestones in the Jelly Belly History" },
    { theme: "25 +", details: "Recipes" },
    { theme: "50 +", details: "Jelly Belly Combinations" },
  ];

  return (
    <div>
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <div className={style.theme}>{info.theme}</div>
            <div className={style.details}>{info.details}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
