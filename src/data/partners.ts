// Partners logos
import pub100 from '@geniale/assets/media/partners/pub100.avif';
import aeets from '@geniale/assets/media/partners/aeets.png';
import ets from '@geniale/assets/media/partners/Logo_ETS_TypoGrise_D_FR_1.jpg';
import ltm from '@geniale/assets/media/partners/LTM.webp';
import sdg from '@geniale/assets/media/partners/SDG.png';

interface Partner {
  name: string;
  img: string;
  url: string;
}

export const partners: Partner[] = [
  {
    name: 'Les Trois Mousquetaires',
    img: ltm,
    url: 'https://www.lestroismousquetaires.ca',
  },
  {
    name: 'ETS',
    img: ets,
    url: 'https://www.etsmtl.ca',
  },
  {
    name: 'AEETS',
    img: aeets,
    url: 'https://www.aeets.com',
  },
  {
    name: 'Pub 100 Génies',
    img: pub100,
    url: 'https://www.pub100genies.ca',
  },
  {
    name: 'Saveurs de Génie',
    img: sdg,
    url: 'https://saveursdegenie.etsmtl.ca',
  },
];
