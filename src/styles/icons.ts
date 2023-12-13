import { IconType } from "react-icons";
import {
  RiComputerLine,
  RiRobot2Line,
  RiGraduationCapLine,
} from "react-icons/ri";
import {
  IoDocumentOutline,
  IoPersonOutline,
  IoSunnyOutline,
  IoMoonOutline,
  IoCode,
} from "react-icons/io5";
import { BsBook, BsCalendarCheck, BsClock } from "react-icons/bs";
import { CiMap } from "react-icons/ci";
import {
  PiBooks,
  PiPresentationLight,
  PiPlant,
  PiCertificateLight,
} from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineFoodBank, MdOutlineCancel } from "react-icons/md";

export const icons: { [key: string]: IconType } = {
  desktop: RiComputerLine,
  robot: RiRobot2Line,
  book: BsBook,
  hat: RiGraduationCapLine,
  calendar: BsCalendarCheck,
  clock: BsClock,
  map: CiMap,
  doc: IoDocumentOutline,
  shelf: PiBooks,
  class: SiGoogleclassroom,
  person: IoPersonOutline,
  presentation: PiPresentationLight,
  sun: IoSunnyOutline,
  moon: IoMoonOutline,
  code: IoCode,
  adm: GrUserManager,
  food: MdOutlineFoodBank,
  plant: PiPlant,
  cancel: MdOutlineCancel,
  certificate: PiCertificateLight,
};
