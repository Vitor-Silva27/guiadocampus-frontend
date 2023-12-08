import Image from 'next/image';
import style from './style.module.css';

export const Contact = () => {
    return (
      <div className={style.container}>
          <h3 className='subtitle-2'>Coordenação de ADS</h3>
          <h4 className='body-text'>Coordenador: Paulo de Oliveira Gomes Filho</h4>
          <ul className={style.contactsDataWrapper}>
            <li className={style.contactData}>
              <Image className={style.icon} src={"/assets/email.svg"} width={24} height={24} alt='' />
              <p className={`body-text ${style.contactLink}`}>biblioteca.capedii@ifpi.edu.br</p>
            </li>
            <li className={style.contactData}>
              <Image className={style.icon} src={"/assets/email.svg"} width={24} height={24} alt='' />
              <p className={`body-text ${style.contactLink}`}>biblioteca.capedii@ifpi.edu.br</p>
            </li>
          </ul>
      </div>
    );
}