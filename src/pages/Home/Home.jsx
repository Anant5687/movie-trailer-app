import React from 'react';

import './style.css';
import Card from '../../components/card/card';

const Home = () => {
  return (
    <div className="container">
      <div className='search-bar'>
        <input type="text" className='text-bar' placeholder='Search Your Movie' />
      </div>
      <div className="home_page">
        {[1, 2, 3, 4, 5, 6].map((ele, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
