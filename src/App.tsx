import './App.css'
import useFetchExercise from './hooks/useFetchExercise'

function App() {
const {data, loading, error} = useFetchExercise()
 if(loading) return <p>Loading...</p>
 if (error) {
  return (
  <p>{error instanceof Error ? error.message : error}</p>)
 }
  
  return (
    <>
   <div>
 {data?.map((exercise) => (
 <div key={exercise.id}>
   <h2>{exercise.name}</h2>
   <p>{exercise.bodyPart}</p>
   <p>Target: {exercise.target}</p>
   <p>Equipment: {exercise.equipment}</p>
 </div>
 ))}
    </div>
    </>
  )
}

export default App
