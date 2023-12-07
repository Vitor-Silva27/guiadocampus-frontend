import style from './style.module.css';

export const SimpleDataTitle = ({text}:{text:string}) => {
  return (
    <h3 className={`subtitle-2 ${style.title}`}>{text}</h3>
  );
}
