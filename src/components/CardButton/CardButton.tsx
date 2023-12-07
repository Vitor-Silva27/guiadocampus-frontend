import Link from 'next/link';
import style from './style.module.css';
import Image from 'next/image';

type CardButtonProps = {
    link: string;
    icon: string;
    title: string;
    main?: boolean;
}

export const CardButton = ({ link, title, icon, main }: CardButtonProps) => {
  return (
    <Link className={`${style.container} ${main && style.main}`} href={link}>
            <div className={style.dataWrapper}>
                <Image src={icon} width={32} height={32} alt='' />
                <p className='subtitle-2'>{title}</p>
            </div>
    </Link>
  )
}
