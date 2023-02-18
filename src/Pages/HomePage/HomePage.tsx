import { useState } from "react";
import styles from "./HomePage.module.css";

import Menu from "../../Components/Menu/Menu";
import Home from "../../Components/Home/Home";
import Movies from "../../Components/Movies/Movies";
import TvSeries from "../../Components/TvSeries/TvSeries";
import BookMark from "../../Components/BookMark/BookMark";

export default function HomePage() {
  const [currentComponent, setCurrentComponent] = useState("Home");

  return (
    <div className={styles["container"]}>
      <Menu setCurrentComponent={setCurrentComponent} />

      <section className={styles["main-section"]}>
        <div className={styles["search-div"]}>
          <img
            className={styles["search-icon"]}
            src="./assets/SearchIcon.png"
            alt="search-icon"
          />
          <input
            className={styles["search-inp"]}
            type="text"
            placeholder="Search for movies or TV series"
          />
        </div>

        {currentComponent === "Home" && <Home />}
        {currentComponent === "Movies" && <Movies />}
        {currentComponent === "TvSeries" && <TvSeries />}
        {currentComponent === "BookMark" && <BookMark />}
      </section>
    </div>
  );
}
