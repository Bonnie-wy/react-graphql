import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./CharacterList.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function CharacterList() {
  const { error, loading, data } = useQuery(GET_CHARACTERS);
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
          <div>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
