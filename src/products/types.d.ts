import type { ImageMetadata } from 'astro';

export interface Product {
  id: string;
  collection: string;
  name: string;
  year: number;
  available: boolean;
  image: ImageMetadata;
}
export type Products = Product[];
