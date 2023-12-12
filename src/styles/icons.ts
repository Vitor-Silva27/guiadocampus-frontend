import { IconType } from "react-icons";
import {
  RiComputerLine,
  RiRobot2Line,
  RiGraduationCapLine,
} from "react-icons/ri";
import { IoDocumentOutline, IoPersonOutline } from "react-icons/io5";
import { BsBook, BsCalendarCheck, BsClock } from "react-icons/bs";
import { CiMap } from "react-icons/ci";
import { PiBooks, PiPresentationLight } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";

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
};
