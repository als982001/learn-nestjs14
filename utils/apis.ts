export async function getMovies() {
  const response = await fetch(process.env.MOVIES);
  const json = await response.json();
  return json;
}

export async function getMovie(id: string) {
  const response = await fetch(`${process.env.MOVIES}/${id}`);
  return response.json();
}

export async function getVideos(id: string) {
  const response = await fetch(`${process.env.MOVIES}/${id}/videos`);
  return response.json();
}

export async function getCredits(id: string) {
  const response = await fetch(`${process.env.MOVIES}/${id}/credits`);
  return response.json();
}
