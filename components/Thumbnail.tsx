import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { Movie } from "../typings";

interface Props {
  type: 
    | "small"
    | "large"
  movie: Movie | DocumentData;
}
const Thumbnail = ({ type, movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div
      onClick={() => {
        setShowModal(true);
        setCurrentMovie(movie);
      }}
      className={`relative cursor-pointer transition duration-200 ease-out ${type==='small'?"h-28 min-w-[180px] md:h-36 md:min-w-[260px]":"h-44 sm:h-36 min-w-[180px] md:h-44 md:min-w-[260px]"}`}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cove md:rounded object-fill"
        fill
        alt={"thumbnail"}
      />
    </div>
  );
};

export default Thumbnail;
