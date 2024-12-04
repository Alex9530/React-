import style from "./style.module.css";
import redBean from "../../images/redBean.png";

const Loader = () => {
  return (
    <div className={style.container}>
      <p>...loading</p>
      <img src={redBean} alt="HappyBean" />
    </div>
  );
};
export default Loader;
