import { useState } from "react";
import styles from "./Menu.module.css";

import Logo from "../../assets/Logo.png";
import TrendingLogo from "../../assets/TrendingLogo.png";
import TrendingLogoActive from "../../assets/TrendingLogoActive.png";
import MoviesLogo from "../../assets/MoviesLogo.png";
import MoviesLogoActive from "../../assets/MoviesLogoActive.png";
import TvSeriesLogo from "../../assets/TvSeriesLogo.png";
import TvSeriesLogoActive from "../../assets/TvSeriesLogoActive.png";
import BookmarkedLogo from "../../assets/BookmarkedLogo.png";
import BookmarkedLogoActive from "../../assets/BookmarkedLogoActive.png";
import DefaultProfile from "../../assets/DefaultProfile.png";

export default function Menu({ setCurrentComponent }: any) {
  const [activeLogo, setActiveLogo] = useState("TrendingLogo");

  return (
    <section className={styles["menu-section"]}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <div className={styles["menu"]}>
        <img
          onClick={() => {
            setActiveLogo("TrendingLogo")
            setCurrentComponent("Home")
          }}
          src={
            activeLogo === "TrendingLogo" ? TrendingLogoActive : TrendingLogo
          }
          alt="trending-logo"
        />
        <img
          onClick={() => {
            setActiveLogo("MoviesLogo")
            setCurrentComponent("Movies")
          }}
          src={activeLogo === "MoviesLogo" ? MoviesLogoActive : MoviesLogo}
          alt="movies-Logo"
        />
        <img
          onClick={() => {
            setActiveLogo("TvSeriesLogo")
            setCurrentComponent("TvSeries")
          }}
          src={
            activeLogo === "TvSeriesLogo" ? TvSeriesLogoActive : TvSeriesLogo
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
              ? BookmarkedLogoActive
              : BookmarkedLogo
          }
          alt="tvseries-logo"
        />
      </div>
      <img
        className={styles["profile-photo"]}
        src={DefaultProfile}
        alt="default-profile"
      />
    </section>
  )
}
