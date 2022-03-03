import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";

export default function Character() {
  const { data, loading, error } = useCharacter(4);

  if (loading) return <div>spinner... </div>;

  if (error) return <div>something went wrong</div>;

  return (
    <div className="Character">
      <img
        src={data.character.image}
        width={740}
        height={750}
        alt={data.character.name}
      />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((ep) => {
            return (
              <div>
                {ep.name} - <b>{ep.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
