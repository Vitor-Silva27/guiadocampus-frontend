import style from './style.module.css';

export const ServiceDescription = ({ text }: { text: string }) => {
    const createMarkup = (html: string) => ({ __html: html });
  
    return <main className={style.container} dangerouslySetInnerHTML={createMarkup(text)} />;
  };