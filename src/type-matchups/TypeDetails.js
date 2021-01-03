import React, { useEffect, useState } from 'react';
import { PokemonTypeMatchup } from './models';
import './TypeDetails.css'
import { getTypeIcon } from './utils';

export function TypeDetails() {
  const [details, setDetails] = useState({});
  
  useEffect(() => {
    const typeNameSplit = window.location.href.split('/')
    const typeName = typeNameSplit[typeNameSplit.length - 1] // generated using PokemonTypes object
    setDetails(new PokemonTypeMatchup(typeName))
  }, []);

  
  return (
    <>
      <h1 id='typeHeader'>
        {getTypeIcon(details.type)}
        {details.type}
      </h1>
      
      <h2>Strengths</h2>
      <ul>
        {Array.isArray(details.strengths) && details.strengths.map(s => <li>{s}</li>)}
      </ul>

      <h2>Weaknesses</h2>
      <ul>
        {Array.isArray(details.weaknesses) && details.weaknesses.map(w => <li>{w}</li>)}
      </ul>
    </>
  );
}