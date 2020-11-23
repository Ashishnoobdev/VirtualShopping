import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import { cardContentStructure } from './CardContentStructure';

ReactDOM.render(
  <React.StrictMode>
    <h1>Virtual Shopping Stop!</h1>
    <Card id={cardContentStructure[0].id} name={cardContentStructure[0].name} description={cardContentStructure[0].description} price={cardContentStructure[0].price} />
    <Card id={cardContentStructure[1].id} name={cardContentStructure[1].name} description={cardContentStructure[1].description} price={cardContentStructure[1].price} />
    <Card id={cardContentStructure[6].id} name={cardContentStructure[6].name} description={cardContentStructure[6].description} price={cardContentStructure[6].price} />
    <Card id={cardContentStructure[2].id} name={cardContentStructure[2].name} description={cardContentStructure[2].description} price={cardContentStructure[2].price} />
    <Card id={cardContentStructure[4].id} name={cardContentStructure[4].name} description={cardContentStructure[4].description} price={cardContentStructure[4].price} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
