import { API_KEY, API_URL, API_HOST } from "../constants";
import type { Exercise } from "../types/exercise";

// custom hook
async function fetchExercise(): Promise<Exercise[]> {

 const url = `${API_URL}?rapidapi-key=${API_KEY}`
  const options: RequestInit = {
    method: "GET",
    headers: {
      "x-rapidapi-host": API_HOST,
    },
  };
  
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Exercise[] = await response.json();
    return data;
  } catch (error) {
    console.log("API call failed:", error);
    throw error;
  }
}

export default fetchExercise;
