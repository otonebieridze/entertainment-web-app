import styles from "./TvSeries.module.css";

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

export default function TvSeries({ data, setData, inputValue }: Props) {
  let tvSeries = data.filter(
    (obj) =>
      obj.category === "TV Series" &&
      obj.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleTvSeriesBookmarkClick = (index: number) => {
    setData((prev: DataItem[]) => {
      return prev.map((item) => {
        if (item.title === tvSeries[index].title) {
          return { ...item, isBookmarked: !item.isBookmarked };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div className={styles["tvseries-div"]}>
      <h1 className={styles["tvseries-div-title"]}>TV Series</h1>
      <div className={styles["tvseries-img-container"]}>
        {tvSeries.length === 0 ? (
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
          tvSeries.map((item, index) => {
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
  );
}
