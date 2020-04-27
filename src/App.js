import React from 'react';
import PropTypes from 'prop-types';

const musicLike =[
  {
    id: 1,
    name: "hiphop",
    image: "https://image.shutterstock.com/image-vector/vector-hiphop-graffiti-doodle-art-600w-1416068528.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "jazz",
    image: "http://www.janovecjazzband.cz/images/3-foto.png",
    rating: 3
  },
  {
    id: 3,
    name: "oldschool",
    image: "https://previews.123rf.com/images/rawpixel/rawpixel1706/rawpixel170660029/89205497-group-of-dj-mixing-the-classic-oldschool-music-vinyl-record.jpg",
    rating: 2
  }
]

function Humble({name, picture, rating}){
  return( 
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

Humble.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {musicLike.map(dish => (
        <Humble key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
