import React from 'react';

export default function Card(props) {
  // card es un objeto con las sig prop:max={Cairns.main.temp_max}min={Cairns.main.temp_min}name={Cairns.name}img={Cairns.weather[0].icon}onClose={() => alert(Cairns.name)}
  // acá va tu código
  return (
  <div>
    <button onClick ={props.onClose}>X</button>
    <h4>{props.name}</h4>
    <div>
      <p>max</p>
      <p>{props.max}</p>
      <p>min</p>
      <p>{props.min}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"img"}/>

  </div>
  )
};