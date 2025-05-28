import React from 'react';

import './style.css';
import Card from '../../components/card/card';

const Home = () => {
  return (
    <div className="home_page">
      {[1, 2, 3, 4, 5, 6].map((ele, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default Home;
