async function getVideos(id: string) {
  const response = await fetch(`${process.env.MOVIES}/${id}/videos`);
  return response.json();
}

interface IProps {
  id: string;
}

export default async function MovieVideos({ id }: IProps) {
  const videos = await getVideos(id);

  return <h6>{JSON.stringify(videos)}</h6>;
}
