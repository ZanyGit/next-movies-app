import { BASE_IMAGE_PATH } from "@/app/constants";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const CategoryDisplay = (props: { movies: Movie[]; title: string }) => {
  return (
    <>
      {props.title && (
        <h2 className="text-white text-2xl my-10">{props.title}</h2>
      )}

      <div className="grid grid-cols-2 sm:flex sm:flex-row flex-nowrap my-10 justify-between gap-4">
        {props.movies?.slice(0, 5).map((i) => (
          <div className="relative sm:min-w-[150px] flex-1 " key={i.id}>
            {i.poster_path && (
              <Image
                src={BASE_IMAGE_PATH + i.poster_path}
                alt={i.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            )}

            <div className="  absolute inset-0 hover:bg-black/50 items-center justify-center flex hover:border-2 hover:border-white text-transparent hover:text-white cursor-pointer flex-col">
              <h3 className=" sm:text-xs md:text-md lg:text-xl">{i.title}</h3>
              <small>
                {new Date(i.release_date).toLocaleDateString("en-us", {
                  year: "numeric",
                })}
              </small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryDisplay;
