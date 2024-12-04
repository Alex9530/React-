import style from "./style.module.css";
import redBean from "../../images/redBean.png";

const NotFound = () => {
  return (
    <div className={style.container}>
      <p>NOT FOUND</p>
      <img src={redBean} alt="HappyBean" />
    </div>
  );
};
export default NotFound;
