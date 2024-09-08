import Movie from "../../components/Movie";
import styles from "../../styles/home.module.css";

import { getMovies } from "../../utils/apis";

export const metadata = {
  title: "Home",
};

export default async function Page() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
