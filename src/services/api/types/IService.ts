export interface IService {
  id: string;
  title: string;
  description: string;
  icon: string;
  embeds: IEmbed[];
}

export interface IEmbed {
  id: string;
  icon: string;
  title: string;
  link: string;
}
