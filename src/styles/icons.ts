import { IconType } from "react-icons";
import {
  RiComputerLine,
  RiRobot2Line,
  RiGraduationCapLine,
  RiMap2Line,
} from "react-icons/ri";
import { IoDocumentOutline } from "react-icons/io5";
import { BsBook, BsCalendarCheck, BsClock } from "react-icons/bs";
import { CiMap } from "react-icons/ci";

export const icons: { [key: string]: IconType } = {
  desktop: RiComputerLine,
  robot: RiRobot2Line,
  book: BsBook,
  hat: RiGraduationCapLine,
  calendar: BsCalendarCheck,
  clock: BsClock,
  map: CiMap,
  doc: IoDocumentOutline,
};
