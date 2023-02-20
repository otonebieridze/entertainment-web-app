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
  const [data, setData] = useState(importedData);
  const [filteredData, setFilteredData] = useState<typeof data>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    setFilteredData(
      data.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

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
            onChange={handleInputChange}
          />
        </div>

        {currentComponent === "Home" && (
          <Home
            data={inputValue.length === 0 ? data : filteredData}
            setData={setData}
          />
        )}
        {currentComponent === "Movies" && (
          <Movies
            data={inputValue.length === 0 ? data : filteredData}
            setData={setData}
          />
        )}
        {currentComponent === "TvSeries" && (
          <TvSeries
            data={inputValue.length === 0 ? data : filteredData}
            setData={setData}
          />
        )}
        {currentComponent === "BookMark" && (
          <BookMark
            data={inputValue.length === 0 ? data : filteredData}
            setData={setData}
          />
        )}
      </section>
    </div>
  );
}
