async function getMovie(id: string) {
  const response = await fetch(`${process.env.MOVIES}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  const response = await fetch(`${process.env.MOVIES}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return <h1>{movie.title}</h1>;
}
