import type { Exercise } from "../types/exercise";

interface ExerciseCardProps {
    exercise: Exercise
     addToFavourite?: (value: Exercise) => void;
}

const ExerciseCard = ({exercise, addToFavourite}: ExerciseCardProps
) => {
  return (
     <div className="bg-(--app-bg) mx-8 mt-6">
      <div className="bg-white border-2 border-gray-200  hover:border-(--card-hover) rounded-xl p-4 shadow-sm transition flex flex-col gap-1 items-start md:[30] lg:w-[40vh] m-auto">
        <h3 className="bg-(--muscle-bg) text-(--accent-text) w-fit px-3 py-1 rounded-full text-xs font-semibold">{exercise.target}</h3>
        <h4 className="text-black text-sm">{exercise.name}</h4>
        <p className="text-gray-400 text-[11px]">{exercise.equipment}</p>
        <button 
        onClick={() => 
          addToFavourite?.(exercise)
        }
        className="text-(--accent-text) text-[11px]">+Save</button>
        
    </div>
  </div>
  )
}

export default ExerciseCard