"use client";

import Image from "next/image";
import style from './style.module.css';
import Link from "next/link";
import { useRouter } from "next/navigation";

export const HeaderWithReturn = () => {
  const router = useRouter();
  return (
    <header className={style.headerContainer}>
         <Image src="/assets/return.svg" alt="logo" width={24} height={24} onClick={() => router.back()} />  
        <Link href='/'>
          <Image src="/assets/logo-small.svg" alt="logo" width={37} height={37} />
        </Link>
        <Image src="/assets/moon.svg" alt="moon" width={24} height={24}/>
    </header>
  )
}
