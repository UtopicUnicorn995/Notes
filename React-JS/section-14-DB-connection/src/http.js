export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}

// outsources the fetch so that we could reuse the function to fetch data on another file just by importing it


export async function updateUserPlaces(places){
    const response = await fetch("http://localhost:3000/user-places", {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    const resData = await response.json()

    if(!response.ok){
        throw new Error('Failed to update data')
    }

    return resData.message
}

export async function fetchUserPlaces() {
    const response = await fetch("http://localhost:3000/user-places");
    const resData = await response.json();
    console.log(resData)
  
    if (!response.ok) {
      throw new Error("Failed to fetch user places");
    }
  
    return resData.places;
  }