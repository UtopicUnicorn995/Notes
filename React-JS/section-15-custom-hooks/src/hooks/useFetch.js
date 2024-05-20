import { useEffect, useState } from "react";

export function usefetch(fetchFunction, initialValue){ //If there is no use in the start of the function name the react hooks will complain
    const [isFetching, setIsFetching] = useState()
    const [error, setError] = useState()
    const [fetchedData, setFetchedData] = useState(initialValue)

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFunction();
            setFetchedData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFunction]);
      return({
        isFetching,
        setIsFetching,
        fetchedData,
        setFetchedData,
        error,
      })
}