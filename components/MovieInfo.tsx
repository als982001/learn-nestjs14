async function getMovie(id: string) {
  const response = await fetch(`${process.env.MOVIES}/${id}`);
  return response.json();
}

interface IProps {
  id: string;
}

export default async function MovieInfo({ id }: IProps) {
  const movie = await getMovie(id);

  return <h6>{JSON.stringify(movie)}</h6>;
}
