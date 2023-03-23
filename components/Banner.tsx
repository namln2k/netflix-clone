import { baseUrl } from '@/constants/movie';
import { Movie } from '@/typings';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Props {
  netflixOriginals: Movie[];
}

export default function Banner({ netflixOriginals }: Props) {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setFeaturedMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div>
      {featuredMovie && (
        <>
          <div
            className={`absolute top-0 left-0 h-[100vh] w-screen -z-10 box-border`}
          >
            <Image
              alt="banner-image"
              src={`${baseUrl}${
                featuredMovie?.backdrop_path || featuredMovie?.poster_path
              }`}
              loader={({ src }) => {
                return src;
              }}
              unoptimized
              priority
              fill
              style={{ objectFit: 'cover' }}
            ></Image>
          </div>
          <div className="pl-[10%] pt-[25vh] max-w-[75%]">
            <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
              {featuredMovie?.title ||
                featuredMovie?.name ||
                featuredMovie?.original_name}
            </h1>
            <h1>{featuredMovie?.overview}</h1>
          </div>
        </>
      )}
    </div>
  );
}
