import style from './style.module.css';

export const SimpleDataRoot = ({children}:{children: React.ReactNode}) => {
    return (
      <div className={style.container}>
          {children}
      </div>
    );
  }
  