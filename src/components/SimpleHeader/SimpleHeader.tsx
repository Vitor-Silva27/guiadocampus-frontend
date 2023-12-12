"use client";

import Image from "next/image";
import style from './style.module.css';
import { changeTheme } from "@/services/functions/changeTheme";
import { icons } from "@/styles/icons";

export const SimpleHeader = () => {
  const {resolvedTheme, handleTheme} = changeTheme();

  const themeIcon = resolvedTheme === 'dark'? "sun": "moon";
  const Icon = icons[themeIcon]
  return (
    <header className={style.headerContainer}>
        <Image src="assets/logo-small.svg" alt="logo" width={37} height={37} />
        <div>
            <p className="body-text">Bem vindo(a) ao</p>
            <p className="subtitle-1">Guia do campus</p>
        </div>
          <Icon className={style.theme} onClick={handleTheme} />
    </header>
  )
}
