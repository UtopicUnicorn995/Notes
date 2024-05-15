import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx"

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false) // Display a loading state depending on the connection
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
  //   fetch("http://localhost:3000/places")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((resData) => {
  //     setAvailablePlaces(resData.places);
  //   });
    async function fetchPlaces(){
      setIsFetching(true)
      try{
        const response = await fetch("http://localhost:3000/placess")
        const resData = await response.json()

        if(!response.ok){
          throw new Error("Failed to fetch places")
        }

        setAvailablePlaces(resData.places) // SetAvailablePlaces is inside try but after !response.ok so that this code block runs if there are no errors
      } catch (error){
        // Handling errors in the catch
        setError({message: error.message || "Could not find the places, please try again later"})

      }


      setIsFetching(false)
    }

    fetchPlaces()
  }, []);

  if(error){
    return <Error title="An error occured!" message={error.message}/>
  }

  console.log(availablePlaces)

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      loadingText = "Fetching place data..."
      isLoading={isFetching}
      onSelectPlace={onSelectPlace}
    />
  );
}
