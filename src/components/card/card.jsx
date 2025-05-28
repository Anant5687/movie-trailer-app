import React from 'react';

import MovieLogo from '../../assests/movie.jpeg';

import './style.css';

const Card = () => {
  return (
    <article className="movie_card">
      <a href="/details/8798">
        <div className="img_container">
          <img src={MovieLogo} alt="MovieLogo" className="img" />
        </div>
      </a>
      <header>
        <h2 className='movie_name'>
          <a href="/details/8798" className='link'>
            {`Download Peaky Blinders (Season 1 – 4) Dual Audio {Hindi-English} WEB Series 480p | 720p | 1080p BluRay ESub`}
          </a>
        </h2>
      </header>
    </article>
  );
};

export default Card;
