import useFetchedData from "../../hooks/useFetchedData";
import CardWrapper from "../Wrapper/CardWrapper";
import classes from "../../styles/random-movie-card.module.scss";

const RandomMovieCard = () => {
  const { data: initDatas }: any = useFetchedData("init datas");
  const { data }: any = useFetchedData("random movie");

  console.log(data);

  const getGenres = () => {
    const results: string[] = [];

    data.genre_ids.forEach((genreId: any) => {
      initDatas.genres.forEach((genre: any) => {
        if (genre.id === genreId) results.push(genre.name);
      });
    });

    return results.join(", ");
  };

  return (
    <CardWrapper>
      {data ? (
        <div className={classes.infosContainer}>
          <div className={classes.imageContainer}>
            <img
              src={"https://image.tmdb.org/t/p/original" + data.poster_path}
              alt={data.title}
              className={classes.movieImage}
            />
          </div>
          <div className={classes.infos}>
            <p>
              title: <span>{data.title}</span>
            </p>
            <p>
              overview: <span>{data.overview}</span>
            </p>
            <p>
              release date: <span>{data.release_date}</span>
            </p>
            <p>
              genres: <span>{getGenres()}</span>
            </p>
          </div>
        </div>
      ) : (
        <h1 className={classes.fetch}>
          generate a random movie to see the movies infos here.
        </h1>
      )}
    </CardWrapper>
  );
};

export default RandomMovieCard;
