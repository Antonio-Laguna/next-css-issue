import styles from "./page.module.css";
import clsx from 'clsx';

export default function Home() {
  return (
    <main>
      <p className={clsx(styles.paragraph, 'normal-paragraph')}>I should be green</p>
    </main>
  );
}
