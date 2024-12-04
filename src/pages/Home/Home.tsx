import style from "./style.module.css";
import main from "../../images/main.gif";

const Home = () => {
  return (
    <>
      <div className={style.home_container}>
        <div className={style.img}>
          <img src={main} alt="" />
        </div>

        <div className={style.info}>
          <h1>Welcome to the World of Jelly Belly:</h1>
          <h3> A Rainbow of Flavors Awaits!</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
