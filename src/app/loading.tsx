import { SimpleHeader } from '@/components/SimpleHeader';
import styles from './page.module.css'
import { Loading } from '@/components/Loading/Loading';

export default function HomeLoading() {
  return (
    <div className={styles.homeContainer}>
      <SimpleHeader />
      <Loading />
    </div>
  );
}
