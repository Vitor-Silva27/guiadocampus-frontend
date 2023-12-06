import Image from "next/image";
import style from './style.module.css';

export const SimpleHeader = () => {
  return (
    <header className={style.headerContainer}>
        <Image src="assets/logo-small.svg" alt="logo" width={37} height={37} />
        <div>
            <p className="body-text">Bem vindo(a) ao</p>
            <p className="subtitle-1">Guia do campus</p>
        </div>
        <Image src="assets/moon.svg" alt="moon" width={24} height={24} className={style.theme}/>
    </header>
  )
}
