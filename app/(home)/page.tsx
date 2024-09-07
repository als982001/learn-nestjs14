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

  return <h1>{JSON.stringify(movies)}</h1>;
}
