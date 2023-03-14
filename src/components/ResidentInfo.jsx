import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);
  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);

      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadResidentInfo();
  }, []);
  return (
    <>
      {residentInfo && (
        <article>
          <div>
            <img src={residentInfo.image} alt={residentInfo.name} />
          </div>
          <h3>{residentInfo.name}</h3>
          <ul>
            <li>
              <span>Species: </span>
              {residentInfo.species}
            </li>
            <li>
              <span>Status: </span>
              {residentInfo.status}
            </li>
            <li>
              <span>Origin: </span>
              {residentInfo.origin.name}
            </li>
            <li>
              <span>Episode appearances: </span>
              {residentInfo.episode.length}
            </li>
          </ul>
        </article>
      )}
    </>
  );
};

export default ResidentInfo;
