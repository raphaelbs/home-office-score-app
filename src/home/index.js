import './index.css';

import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => (
  <div className="wrapper">
    <div>
      <Link to="/questionario">Iniciar teste</Link>
    </div>
  </div>
);

export default Home;
