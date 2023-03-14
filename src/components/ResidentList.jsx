import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({ residents }) => {
  return (
    <section className="w-full grid grid-cols-[repeat(auto-fill, minmax(260px,_1fr))] gap-8">
      {residents.map((resident) => (
        <ResidentInfo key={resident} urlResident={resident} />
      ))}
    </section>
  );
};

export default ResidentList;
