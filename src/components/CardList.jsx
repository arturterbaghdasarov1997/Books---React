import React, { useState } from 'react';
import Card from './Card';
import NineteenEightyFourImg from '../Assets/1984.jpg';
import AlgernonImg from '../Assets/Algernon.jpg';
import FarmImg from '../Assets/Farm.jpg';
import MetamorphosisImg from '../Assets/Metamorphosis.jpg';
import MilliganImg from '../Assets/Milligan.jpg';

const books = [
  {
    id: 1,
    name: "1984",
    description: "The story of Winston Smith, a citizen of the miserable society of Oceania, who is trying to rebel against the Party and its omnipresent symbol, Big Brother.",
    image: NineteenEightyFourImg,
    characters: ['Big Brother', 'Winston Smith', 'Julia'],
  },
  {
    id: 2,
    name: "Flowers for Algernon",
    description: "It is written as progress reports of a mentally disabled man, Charlie, who undergoes experimental surgery and briefly becomes a genius before the effects tragically wear off.",
    image: AlgernonImg,
    characters: ['Professor Harold Nemur', 'Dr. Strauss', 'Algernon'],
  },
  {
    id: 3,
    name: "Animal Farm",
    description: "The story of a group of anthropomorphic farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy.",
    image: FarmImg,
    characters: ['Napoleon', 'Boxer', 'Snowball'],
  },
  {
    id: 4,
    name: "The Metamorphosis",
    description: "The story of a man named Gregor Samsa who becomes an insect. Until this incident, Gregor has worked hard to support his parents and sister.",
    image: MetamorphosisImg,
    characters: ['Grete Samsa', 'The Father', 'Gregor Samsa'],
  },
  {
    id: 5,
    name: "The Minds of Billy Milligan",
    description: "The story of Billy Milligan, the first person in U.S. history acquitted of a major crime by pleading dissociative identity disorder.",
    image: MilliganImg,
    characters: ['Billy Milligan', 'Arthur', 'Ragen Vadascovinich'],
  },
]

const CardList = () => {
  const [visibleCardId, setVisibleCardId] = useState(null);

  const handleShowDetails = (id) => {
    setVisibleCardId(id);
  };

  return (
    <div className='card-list'>
      {books.map((card) => (
        <Card key={card.id} id={card.id} image={card.image} description={card.description} name={card.name} characters={card.characters} showDetails={card.id === visibleCardId} handleShowDetails={handleShowDetails} />
      ))}
    </div>
  );
}

export default CardList;