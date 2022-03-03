import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";

export default function CharacterList() {
  const { error, loading, data } = useCharacters();
  // obj.error - catch error
  // obj.loading - boolean is the fetch loading
  // obj.data - return data
  console.log({ error, loading, data });

  if (loading) return <div>spinner... </div>;

  if (error) return <div>something went wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
