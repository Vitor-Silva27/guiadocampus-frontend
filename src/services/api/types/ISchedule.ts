interface Embed {
  link: string;
  icon: string;
}

export interface ISchedule {
  id: string;
  course: string;
  embed: Embed;
}
