import data from "../../data.json";
import styles from "./Movies.module.css";

export default function Movies() {
  let movies = data.filter((obj) => obj.category === "Movie");

  return (
    <div className={styles["movies-div"]}>
      <h1 className={styles["movies-div-title"]}>Movies</h1>
      <div className={styles["movies-img-container"]}>
        {movies.map((movie, index) => {
          return (
            <div key={index} className={styles["movies-img-div"]}>
              <div className={styles["movies-img-box"]}>
                <img
                  className={styles["movies-image"]}
                  src={movie.thumbnail.regular.small}
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
                    src="./assets/PlayIcon.png"
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
                    src="./assets/MoviesLogoActive.png"
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
  );
}
