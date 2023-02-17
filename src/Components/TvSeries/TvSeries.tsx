import data from "../../data.json";
import styles from "./TvSeries.module.css";
import PlayIcon from "../../assets/PlayIcon.png";
import TvSeriesLogoActive from "../../assets/TvSeriesLogoActive.png";

export default function TvSeries() {
  let tvSeries = data.filter((obj) => obj.category === "TV Series");

  return (
    <div className={styles["tvseries-div"]}>
      <h1 className={styles["tvseries-div-title"]}>TV Series</h1>
      <div className={styles["tvseries-img-container"]}>
        {tvSeries.map((item, index) => {
          return (
            <div key={index} className={styles["tvseries-img-div"]}>
              <div className={styles["tvseries-img-box"]}>
                <img
                  className={styles["tvseries-image"]}
                  src={`/entertainment-web-app/src/${item.thumbnail.regular.small}`}
                  alt="tv-series-img"
                />
                <div className={styles.circle}>
                  {item.isBookmarked ? (
                    <div className={styles["bookmarked-logo-active"]}></div>
                  ) : (
                    <div className={styles["bookmarked-logo"]}></div>
                  )}
                </div>
                <div className={styles["play-div"]}>
                  <img
                    className={styles["play-img"]}
                    src={PlayIcon}
                    alt="play-icon"
                  />
                  <span className={styles["play-span"]}>Play</span>
                </div>
              </div>
              <div className={styles["tvseries-description"]}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{item.year}</span>
                  <div className={styles["mini-circle"]}></div>
                  <img
                    style={{ width: "12px", height: "12px" }}
                    src={TvSeriesLogoActive}
                    alt="tv-series-logo"
                  />
                  <span>{item.category}</span>
                  <div className={styles["mini-circle"]}></div>
                  <span>{item.rating}</span>
                </div>
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
