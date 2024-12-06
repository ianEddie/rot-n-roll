import type { Products } from '../types';
import { PRODUCTS_IMAGES } from './products-images';

export const PRODUCTS_DATA: Products = [
  {
    id: '01',
    collection: 'Megadeth',
    name: 'Vic goes to hell',
    year: 1991,
    available: true,
    image: PRODUCTS_IMAGES.VicGoesToHell
  },
  {
    id: '02',
    collection: 'Megadeth',
    name: 'Countdown To Extinction ',
    year: 1992,
    available: true,
    image: PRODUCTS_IMAGES.Cte
  },
  {
    id: '03',
    collection: 'Megadeth',
    name: 'Countdown To Extinction ',
    year: 1992,
    available: true,
    image: PRODUCTS_IMAGES.Cte
  }
];
