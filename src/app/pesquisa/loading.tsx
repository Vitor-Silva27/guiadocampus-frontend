import { HeaderWithReturn } from '@/components/HeaderWithReturn';
import styles from './page.module.css';
import { Loading } from '@/components/Loading/Loading';

export default function SectorsLoading() {

  return (
    <div className={styles.container}>
      <HeaderWithReturn />
      <Loading />
    </div>
  );
}