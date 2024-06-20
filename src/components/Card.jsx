import React from 'react';

const Card = ({ id, image, description, name, characters, showDetails, handleShowDetails }) => {

  return (
    <div id={`card-${id}`} className='card'>
      <div className='img-box'>
        <img src={image} alt={name} className='card-image' />
      </div>
      <p className='card-description'>{description}</p>
      {showDetails && <h1 className='card-title'>{name}</h1>}
      <div className='card-characters'>
        {showDetails && <span>Characters:</span>}
        {showDetails && characters.map((character, index) => (
          <div key={index} className='card-character'>{character}</div>
        ))}
      </div>
      <button onClick={() => handleShowDetails(id)} className='card-button'>View</button>
    </div>
  );
};

export default Card;