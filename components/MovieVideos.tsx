import styles from "../styles/movie-videos.module.css";

import { getVideos } from "../utils/apis";

interface IProps {
  id: string;
}

export default async function MovieVideos({ id }: IProps) {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
