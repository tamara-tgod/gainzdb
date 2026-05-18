import { useState, useEffect } from "react";
import type { Exercise } from "../types/exercise";
import fetchExercise from "../services/exerciseService";

const useFetchExercise = () => {
    const [data, setData] = useState<Exercise[] | null>(null)
    const [loading, setLoading ] = useState(true)
    const [error, setError] = useState<Error | null>(null)
    const [retryCount, setRetryCount] = useState(0)

    useEffect(() => {
    const loadExercise = async () => {
      setLoading(true)
      try {
        const result = await fetchExercise();

        setData(result)
        setError(null)
        // console.log(result)
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
  }, [retryCount]);

  const retry = () => {
     setRetryCount( prev => prev + 1)
  }

  return {data, loading, error, retry}
}

export default useFetchExercise;