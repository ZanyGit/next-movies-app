import { BASE_IMAGE_PATH } from "@/app/constants";
import Image from "next/image";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}
const HighlightCard = (props: Movie) => {
  return (
    <div className="aspect-[5/3] relative rounded-lg overflow-hidden w-full ">
      <Image
        src={BASE_IMAGE_PATH + props.poster_path}
        alt="cold"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute bottom-0 bg-gradient-to-r from-black/80 to-transparent w-full px-4 pt-4 pb-2">
        <h3 className="text-white/90 font-bold">{props.title}</h3>
        <small className="text-white/60">{props.release_date}</small>
      </div>
    </div>
  );
};

export default HighlightCard;
