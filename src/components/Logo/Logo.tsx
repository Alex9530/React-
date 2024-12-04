import { Link } from "react-router";
import logo_img from "../../images/logo.png";
import style from "./style.module.css";

const Logo = () => {
  return (
    <Link to="/JellyBelly" className={style.logo}>
      <img src={logo_img} alt="logo" />
    </Link>
  );
};

export default Logo;
