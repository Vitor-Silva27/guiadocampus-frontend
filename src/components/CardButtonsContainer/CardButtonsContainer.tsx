import React from 'react';
import style from './style.module.css';

type ContainerProps = {
  children: React.ReactNode
}
export const CardButtonsContainer = ({children}:ContainerProps) => {
  return (
    <div className={style.container}>{children}</div>
  )
}
