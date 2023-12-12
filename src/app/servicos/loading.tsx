import { SimpleHeader } from '@/components/SimpleHeader';
import styles from './page.module.css'
import { Loading } from '@/components/Loading/Loading';

export default function servicesLoading() {
  return (
    <div className={styles.container}>
      <SimpleHeader />
      <Loading />
    </div>
  );
}
