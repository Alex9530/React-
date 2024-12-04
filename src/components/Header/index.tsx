import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import style from "./style.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Logo />
        <Nav />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
