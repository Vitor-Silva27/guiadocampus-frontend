import Link from 'next/link';
import style from './style.module.css';
import Image from 'next/image';

type SectorCardProps = {
    id: string;
    name: string;
    icon: string;
}

export const SectorCard = ({ id, name, icon }: SectorCardProps) => {
  return (
    <Link className={`${style.container}`} href={`./setores/${id}`}>
            <Image className={style.backgroundIcon} src={icon} width={45} height={45} alt='' />
            <div className={style.dataWrapper}>
                <Image src={icon} width={32} height={32} alt='' />
                <p className={`subtitle-1 ${style.sectorName}`}>{name}</p>
                <Image src="./assets/arrow-right.svg" width={24} height={24} alt='' className={style.arrow}/>
            </div>
    </Link>
  )
}
