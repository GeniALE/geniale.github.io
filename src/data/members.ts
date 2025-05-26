// Members pictures
export interface Member {
  name: string;
  program: string;
  img?: string; // Default to defaultAvatars
  link?: string;
  title?: string; // Default to 'Membre'
}

export interface Team {
  members: Member[];
  title: string;
  description: string;
}

export const teams: Team[] = [
  {
    title: 'team_administration_title',
    description: 'team_administration_description',
    members: [
      {
        name: 'Samuel Bolduc',
        program: 'engineering_construction',
        link: 'https://www.linkedin.com/in/samuel-bolduc-a56872209/',
        title: 'title_captain',
      },
    ],
  },
  {
    title: 'team_production_title',
    description: 'team_production_description',
    members: [],
  },
  {
    title: 'team_technology_title',
    description: 'team_technology_description',
    members: [],
  },
];
