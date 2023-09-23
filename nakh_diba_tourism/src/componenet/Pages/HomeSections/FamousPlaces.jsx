import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const  FamousPlaces=({ city })=> {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'en' with the language you want to use for Wikipedia data
    const language = 'en';

    // Create a URL to fetch data about famous places in the given city
    const apiUrl = `https://${language}.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${city.latitude}|${city.longitude}&gsradius=10000&gslimit=10&format=json`;

    axios.get(apiUrl)
      .then((response) => {
        if (response.data && response.data.query && response.data.query.geosearch) {
          setPlaces(response.data.query.geosearch);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [city]);

  if (loading) {
    return <p>Loading famous places...</p>;
  }

  return (
    <div>
      <h2>Famous Places in {city.name}</h2>
      <ul>
        {console.log(places)}
        {places.map((place) => (
          <li key={place.pageid}>
            <a
              href={`https://en.wikipedia.org/wiki/${place.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {place.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


