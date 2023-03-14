import React from 'react';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section>
      <h2>{name}</h2>
      <ul>
        <li>
          <span>type: </span>
          {type}
        </li>
        <li>
          <span>Dimesion: </span>
          {dimension}
        </li>
        <li>
          <span>Population: </span>
          {residents.length}
        </li>
      </ul>
    </section>
  );
};

export default Location;
