import { useState } from "react";
import styles from "./HomePage.module.css";
import importedData from "../../data.json";

import Menu from "../../Components/Menu/Menu";
import Home from "../../Components/Home/Home";
import Movies from "../../Components/Movies/Movies";
import TvSeries from "../../Components/TvSeries/TvSeries";
import BookMark from "../../Components/BookMark/BookMark";

export default function HomePage() {
  const [currentComponent, setCurrentComponent] = useState("Home");
  const [data, setData] = useState(importedData)

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

        {currentComponent === "Home" && <Home data={data} setData={setData} />}
        {currentComponent === "Movies" && <Movies data={data} setData={setData} />}
        {currentComponent === "TvSeries" && <TvSeries data={data} setData={setData} />}
        {currentComponent === "BookMark" && <BookMark data={data} setData={setData} />}
      </section>
    </div>
  );
}
