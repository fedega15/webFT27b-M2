import React from 'react';
import Card from './Card';

export default function Cards({cities}) {
  // cards es un objeto q x parametro se le esta pasando cities={data} data es unvar cities = [Londres, Cairns, Denver];
  // acá va tu código

    if (!cities) {
      return <h1>No hay ciudades disponibles</h1>
    }
    return (
    <div> 
      {
        cities && cities.map(city =>(
        <Card
        key={city.id}
        max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}  
        img={city.weather[0].icon}
        onClose={() => alert(city.name)}
      /> ))
      }
  </div>
  )
  
  
};