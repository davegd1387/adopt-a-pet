import React from 'react';

const Pet = ({ animal }) => {
  return (
    <a
      key={animal.id}
      href={`/${animal.type.toLowerCase()}/${animal.id}`}
      className="pet"
    >
      <article>
        <div className="pet-image-container">
          {
            <img
              className="pet-image"
              src={
                // animal.photos[0]?.medium || 'https://i.imgur.com/aEcJUFK.png'
                animal.photos[0]?.medium || 'https://i.imgur.com/Js3J8GW_d.webp?maxwidth=520&shape=thumb&fidelity=high'
              }
              alt=""
            />
          }
        </div>
        <h3>{animal.name}</h3>
        <p>Breed: {animal.breeds.primary}</p>
        <p>Color: {animal.colors.primary}</p>
        <p>Gender: {animal.gender}</p>
      </article>
    </a>
  );
};

export default Pet;
