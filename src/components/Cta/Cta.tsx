import Image from "next/image";
import style from './style.module.css';
import Link from "next/link";

type CtaProps = {
  link: string;
  text: string;
}
export const Cta = ({link, text}:CtaProps) => {
  return (
        <Link href={link} className={style.ctaContainer}>
          <p className={style.ctaText}>{text}</p>         
        </Link>
  )
}
