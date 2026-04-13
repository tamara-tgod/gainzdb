import { useState, useEffect } from "react";
import type { Exercise } from "../types/exercise";
import fetchExercise from "../services/exerciseService";

const useFetchExercise = () => {
    const [data, setData] = useState<Exercise[] | null>(null)
    const [loading, setLoading ] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
    const loadExercise = async () => {
      try {
        const result = await fetchExercise();

        setData(result)
        setError(null)
        console.log(result?.length)
      } catch (error) {
        console.log("error:", error)
        if (error instanceof Error) {
          setError(error)
        } else {
          setError(new Error ("Something went wrong"))
        }
      } finally {
        setLoading(false)
        
      }
    };
    loadExercise()
  }, []);

  return {data, loading, error}
}

export default useFetchExercise;