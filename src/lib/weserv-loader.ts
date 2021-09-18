import { ImageLoaderProps } from 'next/image';

export const weservLoader = ({
  src,
  width,
  quality = 69
}: ImageLoaderProps) => {
  return `https://images.weserv.nl/?url=${src}&w=${width}&q=${quality}&af&il&trim`;
};
