import type { Exercise } from "../types/exercise";
import FavouriteCard from "./FavouriteCard";

interface FavouriteProps {
    favourites: Exercise[];
    isOpen: boolean;
    onClose: () => void;
    removeFromFavourite: (value: Exercise) => void;
}

const FavouritesDrawer = ({favourites, isOpen, onClose, removeFromFavourite}: FavouriteProps) => {
    if (!isOpen) return null;

  return (
    <div>
    <button onClick={onClose}>Close</button>
 <div>
    {favourites.map((favourite) => (
        <div
        key={favourite.id}
        >
            <FavouriteCard exercise={favourite}  removeFromFavourite={removeFromFavourite}/>
        </div>
    ))}
 </div>
    </div>
  )
}

export default FavouritesDrawer