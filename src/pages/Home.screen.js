import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import HomeContainer from "../components/HomeContainer";

export const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100").then((res) => {
      setPokemon(res.data.results);
    });
  }, []);

  return (
    <HomeContainer>
      {pokemon && pokemon.map((item) => {
        return <Card key={item.name} name={item.name} />;
      })}
    </HomeContainer>
  );
};

export default Home;
