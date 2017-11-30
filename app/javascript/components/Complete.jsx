import React from 'react';

const Complete = () => {
  let ids = window.location.pathname.match(/^\d+|\d+\b|\d+(?=\w)/g);
  let sectionId = ids[0];
  return (
    <div>
      <h3 className="title is-3">Seating Chart created!</h3>
      <a href={`/sections/${sectionId}`}>Back to Section</a>
    </div>
  );
};

export default Complete;
