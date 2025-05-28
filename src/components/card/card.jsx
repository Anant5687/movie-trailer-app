import React from 'react';

import MovieLogo from '../../assests/movie.jpeg';

import './style.css';

const Card = () => {
  return (
    <article className="movie_card">
      <a href="#">
        <div>
          <img src={MovieLogo} alt="MovieLogo" />
        </div>
      </a>
    </article>
  );
};

export default Card;
