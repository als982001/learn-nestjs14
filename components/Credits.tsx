import { getCredits } from "../utils/apis";
import camelcaseKeys from "camelcase-keys";
import styles from "../styles/credits.module.css";

interface IProps {
  id: string;
}

export default async function Credits({ id }: IProps) {
  const credits: ICredit[] = camelcaseKeys(await getCredits(id), {
    deep: true,
  });

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Credits</h2>
      <div className={styles.container}>
        {credits.map((credit) => (
          <div key={credit.id} className={styles.credit}>
            <img src={credit.profilePath} className={styles.img} />
            <h4 className={styles.name}>{credit.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
