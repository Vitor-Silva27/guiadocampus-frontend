export interface ISimpleSector {
  icon: string;
  name: string;
  id: string;
}

export interface ISector {
  id: string;
  name: string;
  description: string;
  contacts: ISectorContacts[];
  infos: ISectorInfo[];
  embeds: ISectorEmbed[];
  services: ISectorService[];
}

export interface ISectorContacts {
  id?: string;
  title: string;
  responsible: string;
  email?: string;
  phone?: string;
}

export interface ISectorInfo {
  id?: string;
  title: string;
  description: string;
  icon: string;
}

export interface ISectorEmbed {
  id?: string;
  icon: string;
  title: string;
  link: string;
}

export interface ISectorService {
  id: string;
  title: string;
}
