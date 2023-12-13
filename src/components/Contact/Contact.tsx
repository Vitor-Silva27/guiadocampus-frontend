import style from './style.module.css';
import { ISectorContacts } from '@/services/api/types/ISector';
import { MdOutlineEmail, MdPhone} from 'react-icons/md';

export const Contact = ({title, responsible, email,phone}: ISectorContacts) => {
    return (
      <div className={style.container}>
          <h3 className='subtitle-2'>{title}</h3>
          <h4 className='caption'>{responsible}</h4>
          <ul className={style.contactsDataWrapper}>
            {email && (
              <li>
                <a href={`mailto:${email}`} className={style.contactData}>
                  <MdOutlineEmail className={style.icon}/>
                  <p className={`body-text ${style.contactLink}`}>{email}</p>
                </a>
              </li>
            )}
              {phone && (
              <li className={style.contactData}>
                  <MdPhone className={style.icon} />
                  <p className={`body-text ${style.phone}`}>{phone}</p>
              </li>
              )}
          </ul>
      </div>
    );
}