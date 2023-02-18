import { useState } from "react";
import styles from "./Menu.module.css";

export default function Menu({ setCurrentComponent }: any) {
  const [activeLogo, setActiveLogo] = useState("TrendingLogo");

  return (
    <section className={styles["menu-section"]}>
      <img className={styles.logo} src="./assets/Logo.png" alt="logo" />
      <div className={styles["menu"]}>
        <img
          onClick={() => {
            setActiveLogo("TrendingLogo")
            setCurrentComponent("Home")
          }}
          src={
            activeLogo === "TrendingLogo" ? "./assets/TrendingLogoActive.png" : "./assets/TrendingLogo.png"
          }
          alt="trending-logo"
        />
        <img
          onClick={() => {
            setActiveLogo("MoviesLogo")
            setCurrentComponent("Movies")
          }}
          src={activeLogo === "MoviesLogo" ? "./assets/MoviesLogoActive.png" : "./assets/MoviesLogo.png"}
          alt="movies-Logo"
        />
        <img
          onClick={() => {
            setActiveLogo("TvSeriesLogo")
            setCurrentComponent("TvSeries")
          }}
          src={
            activeLogo === "TvSeriesLogo" ? "./assets/TvSeriesLogoActive.png" : "./assets/TvSeriesLogo.png"
          }
          alt="tvseries-logo"
        />
        <img
          onClick={() => {
            setActiveLogo("BookmarkedLogo")
            setCurrentComponent("BookMark")
          }}
          src={
            activeLogo === "BookmarkedLogo"
              ? "./assets/BookmarkedLogoActive.png"
              : "./assets/BookmarkedLogo.png"
          }
          alt="tvseries-logo"
        />
      </div>
      <img
        className={styles["profile-photo"]}
        src="./assets/DefaultProfile.png"
        alt="default-profile"
      />
    </section>
  )
}
