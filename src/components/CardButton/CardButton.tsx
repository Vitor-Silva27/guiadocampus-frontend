import Link from 'next/link';
import style from './style.module.css';
import { icons } from '@/styles/icons';

type CardButtonProps = {
    link: string;
    icon: string;
    title: string;
    main?: boolean;
}

export const CardButton = ({ link, title, icon, main }: CardButtonProps) => {
  const Icon = icons[icon];
  return (
    <Link className={`${style.container} ${main && style.main}`} href={link}>
            <div className={style.dataWrapper}>
            <Icon className={style.icon} />
                <p className='subtitle-2'>{title}</p>
            </div>
    </Link>
  )
}
