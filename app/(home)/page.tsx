import Link from "next/link";
import Movie from "../../components/Movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(process.env.MOVIES);
  const json = await response.json();
  return json;
}

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
