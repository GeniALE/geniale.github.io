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
        name: 'Erwan Derrien',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/erwan-derrien-396607210/',
        title: 'title_captain',
      },
      {
        name: 'Goulven Derrien',
        program: 'engineering_electrical',
        link: 'https://www.linkedin.com/in/goulven-derrien-2b0a1a1b6/',
        title: 'title_co_captain',
      },
      {
        name: 'Jimmy Allard',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/jimmy-allard-505613235/',
        title: 'title_chef_technology',
      },
      {
        name: 'Elliott Gillespie',
        program: 'engineering_gpa',
        link: 'https://www.linkedin.com/in/elliott-gillespie-5b476b236/',
        title: 'title_chef_production',
      },
    ],
  },
  {
    title: 'team_production_title',
    description: 'team_production_description',
    members: [
      {
        name: 'Elliott Gillespie',
        program: 'engineering_gpa',
        link: 'https://www.linkedin.com/in/elliott-gillespie-5b476b236/',
        title: 'title_chef_production',
      },
      {
        name: 'Félix Lachance',
        program: 'engineering_gpa',
        link: 'https://www.linkedin.com/in/félix-lachance-72871b32a',
      },
    ],
  },
  {
    title: 'team_technology_title',
    description: 'team_technology_description',
    members: [
      {
        name: 'Jimmy Allard',
        program: 'engineering_electrical',
        link: 'https://www.linkedin.com/in/jimmy-allard-505613235/',
        title: 'title_chef_technology',
      },
      {
        name: 'Justin Fiset',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/justinfiset/',
      },
      {
        name: 'Rémi Cloutier',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/remi-cloutier/',
      },
      {
        name: 'Aimé Melançon',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/aime1melancon/',
      },
      {
        name: 'Denis Turk',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/denisturk/',
      },
      {
        name: 'Vincent Moreau-Benoit',
        program: 'engineering_electrical',
        link: ' https://www.linkedin.com/in/moreau-benoit-vincent',
      },
      {
        name: 'Émile Gosselin',
        program: 'engineering_mechanical',
        link: 'https://www.linkedin.com',
      },
      {
        name: 'Trevys Fiorito Thériault',
        program: 'engineering_gpa',
        link: 'https://www.linkedin.com',
      },
      {
        name: 'Marc-Olivier Jetté',
        program: 'engineering_mechanical',
        link: 'https://www.linkedin.com',
      },
      {
        name: 'Xavier Drouin',
        program: 'engineering_gpa',
        link: 'https://www.linkedin.com',
      },
      {
        name: 'Baptiste Rouanet',
        program: 'master',
        link: 'https://www.linkedin.com',
      },
      {
        name: 'Bomba Romain',
        program: 'gti_master',
        link: 'https://www.linkedin.com',
      },
    ],
  },
  {
    title: 'team_communication_title',
    description: 'team_communication_description',
    members: [
      {
        name: 'Samuel Lipsteinas',
        program: 'engineering_gpa',
        link: 'https://www.linkedin.com',
      },
    ],
  },
];
