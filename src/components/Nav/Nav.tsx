import { Link } from "react-router-dom";
import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css";

const Nav = () => {
  return (
    <nav className={style.container}>
      <Link to="/JellyBelly/beans">Beans</Link>
      <Link to="/JellyBelly/facts">Facts</Link>
      <Link to="/JellyBelly/recipes">Recipes</Link>
      <Link to="/JellyBelly/combinations">Combinations</Link>
      <Link to="/JellyBelly/history">History</Link>
      <Link to="/JellyBelly/about">About</Link>
      <Link to="/JellyBelly/review">Review</Link>
      <SwitchTheme />
    </nav>
  );
};

export default Nav;
