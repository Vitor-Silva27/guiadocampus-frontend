import styles from './page.module.css'
import { Loading, SimpleHeader } from '@/components';

export default function servicesLoading() {
  return (
    <div className={styles.container}>
      <SimpleHeader />
      <Loading />
    </div>
  );
}
