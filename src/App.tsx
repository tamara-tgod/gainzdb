import { useState } from "react";
import "./App.css";
import ExerciseCard from "./components/ExerciseCard";
import useFetchExercise from "./hooks/useFetchExercise";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";

function App() {
  const [bodyPart, setBodyPart] = useState("All");
  const [equipment, setEquipment] = useState("All");
  const { data, loading, error } = useFetchExercise();

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>{error instanceof Error ? error.message : error}</p>;
  }

  // filter logic
  const filteredData = data?.filter((exercise) => {
   
   if (bodyPart !== "All" && exercise.bodyPart.toLowerCase() !== bodyPart.toLowerCase()) {
    return false;
   } 
   
   if (equipment !== "All" && exercise.equipment !== equipment) {
    return false
   }

    return true;
});
// bodyparts and equipment array from the api data
const bodies = data?.map(item => item.bodyPart) ?? [];
const bodyParts = ["All", ...new Set(bodies)];

const exerciseEquipments = data?.map(equipmentItem => equipmentItem.equipment) ?? [];
console.log(exerciseEquipments)
const equipments = ["All", ...new Set(exerciseEquipments)]

  return (
    <div>
      <Toolbar />
      <div className="min-h-screen py-6 flex flex-col md:flex-row gap-6">
   <div className=" px-3 py-2 bg-white">
       <Sidebar
      bodyPart={bodyPart}
      equipment={equipment}
      handleBodyPartFilter = {setBodyPart}
      handleEquipmentFilter={setEquipment}
      bodyParts={bodyParts}
      equipments={equipments}
       />
   </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-(--app-bg) ">
        {filteredData?.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
