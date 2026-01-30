// Members pictures
import FelixLachance from '@geniale/data/images/Felix_Lachance.jpg';
import elliottGillespie from '@geniale/data/images/elliott_gillespie.jpg';
import erwanDerrien from '@geniale/data/images/erwan_derrien.jpg';
import xavierDrouin from '@geniale/data/images/xavier_drouin.jpg';
import remiCloutier from '@geniale/data/images/remi_cloutier.jpg';
import goulvenDerrien from '@geniale/data/images/goulven_derrien.jpg';
import victorDesilet from '@geniale/data/images/victor_desilet.jpg';
import felixNadeau from '@geniale/data/images/felix_nadeau.jpg';

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
        name: 'Goulven Derrien',
        program: 'engineering_electrical',
        link: 'https://www.linkedin.com/in/goulven-derrien-2b0a1a1b6/',
        title: 'title_captain',
        img: goulvenDerrien,
      },
      {
        name: 'Vincent Moreau-Benoit',
        program: 'engineering_electrical',
        link: ' https://www.linkedin.com/in/moreau-benoit-vincent',
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
        img: elliottGillespie,
        title: 'title_chef_production',
      },
      {
        name: 'Erwan Derrien',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/erwan-derrien-396607210/',
        title: 'title_chef_communication',
        img: erwanDerrien,
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
        img: elliottGillespie,
      },
      {
        name: 'Félix Lachance',
        program: 'engineering_gpa',
        link: 'https://www.linkedin.com/in/félix-lachance-72871b32a',
        img: FelixLachance,
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
        name: 'Xavier Drouin',
        program: 'engineering_gpa',
        link: 'https://www.linkedin.com',
        img: xavierDrouin,
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
        img: remiCloutier,
      },
      {
        name: 'Aimé Melançon',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/aime1melancon/',
      },
      {
        name: 'Simon Boudreau',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/simon-boudreau1/',
      },
      {
        name: 'Simon Bégin',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/simon-b%C3%A9gin-7a8813304/',
      },
      {
        name: 'Denis Turk',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/denisturk/',
      },
      {
        name: 'Émile Gosselin',
        program: 'engineering_mechanical',
        link: 'https://www.linkedin.com',
      },
      {
        name: 'Trevys Fiorito Thériault',
        program: 'engineering_software',
        link: 'https://ca.linkedin.com/in/trévys-fiorito-thériault-569a13230',
      },
      {
        name: 'Marc-Olivier Jetté',
        program: 'engineering_mechanical',
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
      {
        name: 'Bastien Lett',
        program: 'master_aero',
        link: 'https://fr.linkedin.com/in/bastien-lett-b5a1232a9',
      },
      {
        name: 'Félix Nadeau',
        program: 'engineering_gpa',
        link: 'https://www.linkedin.com',
        img: felixNadeau,
      },
    ],
  },
  {
    title: 'team_communication_title',
    description: 'team_communication_description',
    members: [
      {
        name: 'Erwan Derrien',
        program: 'engineering_software',
        link: 'https://www.linkedin.com/in/erwan-derrien-396607210/',
        title: 'title_chef_communication',
        img: erwanDerrien,
      },
      {
        name: 'Samuel Lipsteinas',
        program: 'engineering_software',
        link: 'https://www.linkedin.com',
      },
      {
        name: 'Victor Désilet',
        program: 'cut',
        link: 'https://www.linkedin.com/in/',
        img: victorDesilet,
      },
    ],
  },
];
