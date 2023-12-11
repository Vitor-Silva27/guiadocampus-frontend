import { icons } from '@/styles/icons';
import style from './style.module.css';
export const SimpleDataIcon = ({icon}:{icon: string}) => {
  const Icon = icons[icon];
  return (
    <Icon className={style.icon} />
  );
}
