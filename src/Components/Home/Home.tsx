import data from "../../data.json";
import styles from "./Home.module.css";
import PlayIcon from "../../assets/PlayIcon.png";
import MoviesLogoActive from "../../assets/MoviesLogoActive.png";
import TvSeriesLogoActive from "../../assets/TvSeriesLogoActive.png";

export default function Home() {
  let trends = data.filter((obj) => obj.isTrending === true);
  let notTrends = data.filter((obj) => obj.isTrending === false);

  return (
    <>
      <div className={styles["trending-div"]}>
        <h1 className={styles["trending-div-title"]}>Trending</h1>
        <div className={styles["trending-div-slider"]}>
          {trends.map((trend, index) => {
            return (
              <div key={index} className={styles["trending-img-div"]}>
                <img
                  className={styles["trending-image"]}
                  src={`./entertainment-web-app/src/${trend.thumbnail.trending?.small}`}
                  alt="trend"
                />
                <div className={styles.circle}>
                  <div className={styles["bookmarked-logo"]}></div>
                </div>
                <div className={styles["play-div"]}>
                  <img
                    className={styles["play-img"]}
                    src={PlayIcon}
                    alt="play-icon"
                  />
                  <span className={styles["play-span"]}>Play</span>
                </div>

                <div className={styles["trending-movie-description"]}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{trend.year}</span>
                    <div className={styles["mini-circle"]}></div>
                    <img
                      style={{ width: "12px", height: "12px" }}
                      src={
                        trend.category === "Movie"
                          ? MoviesLogoActive
                          : TvSeriesLogoActive
                      }
                      alt="movies-tvseries-logo"
                    />
                    <span>{trend.category}</span>
                    <div className={styles["mini-circle"]}></div>
                    <span>{trend.rating}</span>
                  </div>
                  <p>{trend.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles["recommended-div"]}>
        <h1 className={styles["recommended-div-title"]}>
          Recommended for you
        </h1>
        <div className={styles["recommended-img-container"]}>
          {notTrends.map((notTrend, index) => {
            return (
              <div key={index} className={styles["recommended-img-div"]}>
                <div className={styles["recommended-img-box"]}>
                  <img
                    className={styles["recommended-image"]}
                    src={`/entertainment-web-app/src/${notTrend.thumbnail.regular.small}`}
                    alt="not-trend-movie-img"
                  />
                  <div className={styles.circle}>
                    {notTrend.isBookmarked ? (
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
                <div className={styles["recommended-movie-description"]}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{notTrend.year}</span>
                    <div className={styles["mini-circle"]}></div>
                    <img
                      style={{ width: "12px", height: "12px" }}
                      src={
                        notTrend.category === "Movie"
                          ? MoviesLogoActive
                          : TvSeriesLogoActive
                      }
                      alt="movies-tvseries-logo"
                    />
                    <span>{notTrend.category}</span>
                    <div className={styles["mini-circle"]}></div>
                    <span>{notTrend.rating}</span>
                  </div>
                  <p>{notTrend.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
