import Link from "next/link";

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
    <h1>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </h1>
  );
}
