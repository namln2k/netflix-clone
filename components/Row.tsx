import { baseUrl } from '@/constants/movie';
import { Movie } from '@/typings';
import Image from 'next/image';

interface Props {
  title?: string;
  movies?: Movie[];
}

export default function Row({ title, movies }: Props) {
  return (
    <div className="max-w-[calc(100vw-48px)] overflow-y-auto">
      <p className="text-[18px] md:text-[2.2vw] lg:text-[2vw] xl:text-[1.2vw]">
        {title}
      </p>
      <ul className="flex justify-between gap-4 no-scrollbar">
        {movies &&
          movies.map((movie, index) => (
            <li key={index}>
              <div className={`relative h-28 min-w-[180px]`}>
                <Image
                  alt={`${movie.title}-thumbnail`}
                  src={`${baseUrl}${
                    movie?.backdrop_path || movie?.poster_path
                  }`}
                  fill
                  sizes="7rem (min-width: 180px)"
                  priority
                  className="rounded"
                ></Image>
              </div>
              <p className="pt-2 cursor-pointer">{movie.title}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
