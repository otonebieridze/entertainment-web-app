import styles from "./BookMark.module.css";

type DataItem = {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};
type Props = {
  data: DataItem[];
  setData: any;
  inputValue: string;
};

export default function Movies({ data, setData, inputValue }: Props) {
  const bookMarkedMovies = data.filter(
    (item) =>
      item.isBookmarked &&
      item.category === "Movie" &&
      item.title.toLowerCase().includes(inputValue.toLowerCase())
  );
  const bookMarkedTvSeries = data.filter(
    (item) =>
      item.isBookmarked &&
      item.category === "TV Series" &&
      item.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleMovieBookmarkClick = (index: number) => {
    setData((prev: DataItem[]) => {
      return prev.map((item) => {
        if (item.title === bookMarkedMovies[index].title) {
          return { ...item, isBookmarked: false };
        } else {
          return item;
        }
      });
    });
  };
  const handleTvSeriesBookmarkClick = (index: number) => {
    setData((prev: DataItem[]) => {
      return prev.map((item) => {
        if (item.title === bookMarkedTvSeries[index].title) {
          return { ...item, isBookmarked: false };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <>
      <div className={styles["movies-div"]}>
        <h1 className={styles["movies-div-title"]}>Bookmarked Movies</h1>
        <div className={styles["movies-img-container"]}>
          {bookMarkedMovies.length === 0 ? (
            <h1
              style={{
                color: "#be0d00",
                fontSize: "28px",
                marginTop: "50px",
                marginLeft: "10px",
              }}
            >
              Not Found!
            </h1>
          ) : (
            bookMarkedMovies.map((movie, index) => {
              return (
                <div key={index} className={styles["movies-img-div"]}>
                  <div className={styles["movies-img-box"]}>
                    <img
                      className={styles["movies-image"]}
                      src={movie.thumbnail.regular.small}
                      alt="movie-img"
                    />
                    <div
                      className={styles.circle}
                      onClick={() => handleMovieBookmarkClick(index)}
                    >
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
            })
          )}
        </div>
      </div>

      <div className={styles["tvseries-div"]}>
        <h1 className={styles["tvseries-div-title"]}>Bookmarked TV Series</h1>
        <div className={styles["tvseries-img-container"]}>
          {bookMarkedTvSeries.length === 0 ? (
            <h1
              style={{
                color: "#be0d00",
                fontSize: "28px",
                marginTop: "50px",
                marginLeft: "10px",
              }}
            >
              Not Found!
            </h1>
          ) : (
            bookMarkedTvSeries.map((item, index) => {
              return (
                <div key={index} className={styles["tvseries-img-div"]}>
                  <div className={styles["tvseries-img-box"]}>
                    <img
                      className={styles["tvseries-image"]}
                      src={item.thumbnail.regular.small}
                      alt="tv-series-img"
                    />
                    <div
                      className={styles.circle}
                      onClick={() => handleTvSeriesBookmarkClick(index)}
                    >
                      {item.isBookmarked ? (
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
                        src="./assets/TvSeriesLogoActive.png"
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
            })
          )}
        </div>
      </div>
    </>
  );
}
