import Link from 'next/link';
import style from './style.module.css';
import { icons } from '@/styles/icons';
import { RiArrowRightSLine } from 'react-icons/ri';

type SectorCardProps = {
    id: string;
    name: string;
    icon: string;
}

export const SectorCard = ({ id, name, icon }: SectorCardProps) => {
  const Icon = icons[icon];
  return (
    <Link className={`${style.container}`} href={`./setores/${id}`}>
            <Icon className={style.backgroundIcon} />
            <div className={style.dataWrapper}>
                <Icon className={style.icon} />
                <p className={`subtitle-1 ${style.sectorName}`}>{name}</p>
                <RiArrowRightSLine className={style.arrow}/>
            </div>
    </Link>
  )
}
