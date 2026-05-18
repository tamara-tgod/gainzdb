import { useState } from "react";
import "./App.css";
import ExerciseCard from "./components/ExerciseCard";
import useFetchExercise from "./hooks/useFetchExercise";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import type { Exercise } from "./types/exercise";
import FavouritesDrawer from "./components/FavouritesDrawer";
import SkeletonCard from "./components/SkeletonCard";
import ErrorImage from "./assets/Journey-bro.png"

function App() {
  const [bodyPart, setBodyPart] = useState("All");
  const [equipment, setEquipment] = useState("All");
  const { data, loading, error } = useFetchExercise();
  const [favourite, setFavourite] = useState<Exercise[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // if (loading) return (
  //   <div className="grid grid-cols-3 gap 3">
  //     {Array.from({ length: 10}).map((_, index) => (
  //       <SkeletonCard key={index} />
  //     ))}
  //   </div>

  // );
  if (error) {
    return <p>{error instanceof Error ? error.message : error}</p>;
  }

  // filter logic
  const filteredData = data?.filter((exercise) => {
    if (
      bodyPart !== "All" &&
      exercise.bodyPart.toLowerCase() !== bodyPart.toLowerCase()
    ) {
      return false;
    }

    if (equipment !== "All" && exercise.equipment !== equipment) {
      return false;
    }

    if (
      searchQuery !== "" &&
      !exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  // bodyparts and equipment array from the api data
  const bodies = data?.map((item) => item.bodyPart) ?? [];
  const bodyParts = ["All", ...new Set(bodies)];

  const exerciseEquipments =
    data?.map((equipmentItem) => equipmentItem.equipment) ?? [];
  console.log(exerciseEquipments);
  const equipments = ["All", ...new Set(exerciseEquipments)];

  //add favourites exercises
  const addToFavourite = (exercise: Exercise): void => {
    setFavourite((prev) => {
      const existingExercise = prev.some((item) => item.id === exercise.id);
      if (existingExercise) {
        return prev;
      }
      console.log([...prev, exercise]);
      return [...prev, exercise];
    });
  };

  // handle remove button/event for FavouriteCard
  const removeFromFavourite = (exercise: Exercise): void => {
    setFavourite((prev) => {
      return prev.filter((item) => item.id !== exercise.id);
    });
  };

  // button/event handlers for save, toolbar and favouriteDrawer
  const onSavedClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Toolbar
        onSavedClick={onSavedClick}
        favouritesCount={favourite.length}
        setSearchQuery={setSearchQuery}
      />

      <FavouritesDrawer
        favourites={favourite}
        isOpen={isOpen}
        onClose={handleClose}
        removeFromFavourite={removeFromFavourite}
      />
      <div className="min-h-screen py-6 flex flex-col md:flex-row gap-6">
        <div className=" px-3 py-2 bg-white">
          <Sidebar
            bodyPart={bodyPart}
            equipment={equipment}
            handleBodyPartFilter={setBodyPart}
            handleEquipmentFilter={setEquipment}
            bodyParts={bodyParts}
            equipments={equipments}
          />
        </div>

        <div className="content-area flex-1">
          {loading ? (
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 10 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : filteredData?.length === 0 ? (
            <div className="w-full h-screen flex flex-col justify-center items-center text-center">
              <h2 className="font-semibold text-4xl">Exercise Not Available</h2>
              <img 
              src={ErrorImage} 
              alt="No exercises found matching your search criteria"
              width={400}
              height={200}
              className="mx-3 my-auto"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:flex flex-wrap gap-3 bg-(--app-bg)">
              {filteredData?.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  addToFavourite={addToFavourite}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
