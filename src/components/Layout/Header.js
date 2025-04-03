import React from "react";
import styles from "./Header.module.css";
import sushiImage from "../../assets/sushi.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Sushi story</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="sushi" />
      </div>
    </React.Fragment>
  );
};

export default Header;
