import { useState, useEffect } from "react";
import "./Pokemon.css";
import axios from "axios";
const FetchAPI = () => {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setApiData(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setError(error);
  //         setLoading(false);
  //       });
  //   }, []);

  const fetchPokemon = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(apiData);

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }
  if (apiData) {
    return (
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={apiData.sprites.other.dream_world.front_default}
                alt={apiData.name}
                className="pokemon-image"
              />
            </figure>
            <h1>{apiData.name}</h1>
            <div className="gird-three-cols">
              <p className="pokemon-info">
                Height:<span>{apiData?.height}</span>
              </p>
              <p className="pokemon-info">
                Weight:<span>{apiData?.weight}</span>
              </p>
              <p className="pokemon-info">
                Speed:<span>{apiData?.stats[5].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
};

export default FetchAPI;
