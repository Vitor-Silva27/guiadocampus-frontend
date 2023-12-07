import Image from "next/image";

export const SimpleDataIcon = ({icon}:{icon: string}) => {
  return (
    <Image src={icon} width={32} height={32} alt="" />
  );
}
