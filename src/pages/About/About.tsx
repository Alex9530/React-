import style from "./style.module.css";
import Info from "./info";

const About = () => {
  return (
    <>
      <div className={style.container1}>
        <div className={style.informations}>
          <Info />
        </div>
      </div>
    </>
  );
};

export default About;
