import { IEmbed } from "./IService";

export interface ISearchItem {
  id?: string;
  title?: string;
  name?: string;
  course?: string;
  icon?: string;
  link?: string;
  embed?: ISearchEmbed;
}

interface ISearchEmbed {
  icon: string;
  link: string;
}
