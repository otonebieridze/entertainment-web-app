import styles from "./Home.module.css";
import importedData from "../../data.json";

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
  data: DataItem[] /* React.Dispatch<React.SetStateAction<DataItemType[]>> */;
  setData: any;
};

export default function Home({ data, setData }: Props) {
  const trends = importedData.filter((obj) => obj.isTrending === true);
  const notTrends = data.filter((obj) => obj.isTrending === false);

  const handleTrendBookmarkClick = (index: number) => {
    setData((prev: DataItem[]) => {
      return prev.map((item) => {
        if (item.title === trends[index].title) {
          return { ...item, isBookmarked: !item.isBookmarked };
        } else {
          return item;
        }
      });
    });
  };
  const handleNotTrendBookmarkClick = (index: number) => {
    setData((prev: DataItem[]) => {
      return prev.map((item) => {
        if (item.title === notTrends[index].title) {
          return { ...item, isBookmarked: !item.isBookmarked };
        } else {
          return item;
        }
      });
    });
  };

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
                  src={trend.thumbnail.trending?.small}
                  alt="trend"
                />
                <div
                  className={styles.circle}
                  onClick={() => handleTrendBookmarkClick(index)}
                >
                  <div
                    className={
                      trend.isBookmarked
                        ? styles["bookmarked-logo-active"]
                        : styles["bookmarked-logo"]
                    }
                  ></div>
                </div>
                <div className={styles["play-div"]}>
                  <img
                    className={styles["play-img"]}
                    src="./assets/PlayIcon.png"
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
                          ? "./assets/MoviesLogoActive.png"
                          : "./assets/TvSeriesLogoActive.png"
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
        <h1 className={styles["recommended-div-title"]}>Recommended for you</h1>
        <div className={styles["recommended-img-container"]}>
          {notTrends.length === 0 ? (
            <h1 style={{ color: "#be0d00", fontSize: "28px", marginTop: "50px", marginLeft: "10px" }}>
              Not Found!
            </h1>
          ) : (
            notTrends.map((notTrend, index) => {
              return (
                <div key={index} className={styles["recommended-img-div"]}>
                  <div className={styles["recommended-img-box"]}>
                    <img
                      className={styles["recommended-image"]}
                      src={notTrend.thumbnail.regular.small}
                      alt="not-trend-movie-img"
                    />
                    <div
                      className={styles.circle}
                      onClick={() => handleNotTrendBookmarkClick(index)}
                    >
                      {notTrend.isBookmarked ? (
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
                            ? "./assets/MoviesLogoActive.png"
                            : "./assets/TvSeriesLogoActive.png"
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
            })
          )}
        </div>
      </div>
    </>
  );
}
