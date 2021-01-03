import { Button } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { PokemonTypes } from './models';
import { AppRoutes } from '../utils';

import './TypeMatchups.css';

export function TypeMatchupsC({ history }) {  
  const types = Object.keys(PokemonTypes)

  const onClickTypeButton = (type) => () => {
    history.replace(`${AppRoutes.TypeMatchups}/${type}`)
  }

  return (
    <>
      {types.map(t => <Button key={t} onClick={onClickTypeButton(t)}>{t}</Button>)}
    </>
  );
}

export const TypeMatchups = withRouter(TypeMatchupsC);