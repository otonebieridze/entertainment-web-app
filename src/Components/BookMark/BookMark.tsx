import data from "../../data.json";
import styles from "./BookMark.module.css";
import PlayIcon from "../../assets/PlayIcon.png";
import MoviesLogoActive from "../../assets/MoviesLogoActive.png";
import TvSeriesLogoActive from "../../assets/TvSeriesLogoActive.png";

export default function Movies() {
  let bookMarkedMovies = data.filter(
    (obj) => obj.isBookmarked && obj.category === "Movie"
  );
  let bookMarkedTvSeries = data.filter(
    (obj) => obj.isBookmarked && obj.category === "TV Series"
  );

  return (
    <>
      <div className={styles["movies-div"]}>
        <h1 className={styles["movies-div-title"]}>Bookmarked Movies</h1>
        <div className={styles["movies-img-container"]}>
          {bookMarkedMovies.map((movie, index) => {
            return (
              <div key={index} className={styles["movies-img-div"]}>
                <div className={styles["movies-img-box"]}>
                  <img
                    className={styles["movies-image"]}
                    src={`/entertainment-web-app/src/${movie.thumbnail.regular.small}`}
                    alt="movie-img"
                  />
                  <div className={styles.circle}>
                    {movie.isBookmarked ? (
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
                <div className={styles["movies-movie-description"]}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{movie.year}</span>
                    <div className={styles["mini-circle"]}></div>
                    <img
                      style={{ width: "12px", height: "12px" }}
                      src={MoviesLogoActive}
                      alt="movies-logo"
                    />
                    <span>{movie.category}</span>
                    <div className={styles["mini-circle"]}></div>
                    <span>{movie.rating}</span>
                  </div>
                  <p>{movie.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles["tvseries-div"]}>
        <h1 className={styles["tvseries-div-title"]}>Bookmarked TV Series</h1>
        <div className={styles["tvseries-img-container"]}>
          {bookMarkedTvSeries.map((item, index) => {
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
    </>
  );
}
