"use client";

import Image from "next/image";
import style from './style.module.css';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { icons } from "@/styles/icons";
import { IoArrowBack } from "react-icons/io5";
import { useChangeTheme } from "@/services/hooks/useChangeTheme";

export const HeaderWithReturn = () => {
  const router = useRouter();
  const {resolvedTheme, handleTheme} = useChangeTheme();

  const themeIcon = resolvedTheme === 'dark'? "sun": "moon";
  const Theme = icons[themeIcon]

  return (
    <header className={style.headerContainer}>
         <IoArrowBack className={style.arrow} onClick={() => router.back()} />  
        <Link href='/'>
          <Image src="/assets/logo-small.svg" alt="logo" width={37} height={37} />
        </Link>
        <Theme className={style.theme} onClick={handleTheme}/>
    </header>
  )
}
