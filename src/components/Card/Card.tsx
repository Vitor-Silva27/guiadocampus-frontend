import Link from 'next/link';
import style from './style.module.css';
import { icons } from '@/styles/icons';
import { RiArrowRightSLine } from 'react-icons/ri';

type CardProps = {
    id: string;
    name: string;
    icon: string;
    link: string;
}

export const Card = ({ id, name, icon, link }: CardProps) => {
  const Icon = icons[icon];
  return (
    <Link className={`${style.container}`} href={`${link}/${id}`}>
            <Icon className={style.backgroundIcon} />
            <div className={style.dataWrapper}>
                <Icon className={style.icon} />
                <p className={`subtitle-1 ${style.name}`}>{name}</p>
                <RiArrowRightSLine className={style.arrow}/>
            </div>
    </Link>
  )
}
