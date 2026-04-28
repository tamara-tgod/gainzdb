import type { Exercise } from "../types/exercise";
import FavouriteCard from "./FavouriteCard";

interface FavouriteProps {
  favourites: Exercise[];
  isOpen: boolean;
  onClose: () => void;
  removeFromFavourite: (value: Exercise) => void;
}

const FavouritesDrawer = ({
  favourites,
  isOpen,
  onClose,
  removeFromFavourite,
}: FavouriteProps) => {
  if (!isOpen) return null;

  return (
    <div className="bg-(--app-bg) fixed right-0 top-0 h-full w-full  border-2 border-green-400 overflow-y-auto">
       <button onClick={onClose} className="text-end">
          Close
        </button>
      <div className="flex flex-col md:flex-row md:flex-wrap">
         {favourites.map((favourite) => (
          <div key={favourite.id}>
            <FavouriteCard
              exercise={favourite}
              removeFromFavourite={removeFromFavourite}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesDrawer;
