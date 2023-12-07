import Image from "next/image";
import style from './style.module.css';
import Link from "next/link";

type HeaderProps = {
  returnLink: string;
}
export const HeaderWithReturn = ({returnLink}:HeaderProps) => {
  return (
    <header className={style.headerContainer}>
        <Link href={returnLink} className={style.returnContainer}>
          <Image src="assets/return.svg" alt="logo" width={24} height={24} />          
        </Link>
        <Link href='./'>
          <Image src="assets/logo-small.svg" alt="logo" width={37} height={37} />
        </Link>
        <Image src="assets/moon.svg" alt="moon" width={24} height={24}/>
    </header>
  )
}
