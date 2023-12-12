import style from './style.module.css';

export const Loading = () => {
  return (
    <div className={style.loadingContainer}>
        <div className={style.wrapper}>
            <div className={style.spinner}></div>
        </div>
    </div>
  )
}
