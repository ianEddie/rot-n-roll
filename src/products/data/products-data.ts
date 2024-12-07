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
    name: 'Night Stalkers',
    year: 2023,
    available: true,
    image: PRODUCTS_IMAGES.nightStalkers
  },
  {
    id: '04',
    collection: 'Megadeth',
    name: 'Holy wars...',
    year: 1990,
    available: true,
    image: PRODUCTS_IMAGES.holyWars
  },
  {
    id: '05',
    collection: 'Megadeth',
    name: 'Christmas',
    year: 2020,
    available: true,
    image: PRODUCTS_IMAGES.christmas
  }
];
