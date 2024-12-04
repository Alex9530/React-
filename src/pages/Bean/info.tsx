import React from "react";
import { Bean } from "../../types/bean";

interface InfoProps {
  beanData: Bean;
}

const Info: React.FC<InfoProps> = ({ beanData }) => {
  const informations = [
    { theme: "Color Group:", details: beanData.colorGroup },
    { theme: "Hexadecimal Color:", details: beanData.backgroundColor },
    { theme: "Bean ID:", details: beanData.beanId },
    { theme: "Kosher:", details: beanData.kosher ? "Yes" : "No" },
    { theme: "Seasonal:", details: beanData.seasonal ? "Yes" : "No" },
    { theme: "Gluten Free:", details: beanData.glutenFree ? "Yes" : "No" },
    { theme: "Sugar Free:", details: beanData.sugarFree ? "Yes" : "No" },
  ];

  return (
    <div>
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <div>{info.theme}</div>
            <div>{info.details}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
