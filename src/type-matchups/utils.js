import React from 'react';
import { PokemonTypes } from "./models"
import * as typeImages from '../img/types'

export const getTypeIcon = type => {
    switch(type) {
        case PokemonTypes.Bug:
            return <img id='typeIcon' src={typeImages.bugIcon} alt='bugIcon' />
        case PokemonTypes.Dark:
            return <img id='typeIcon' src={typeImages.darkIcon} alt='darkIcon' />
        case PokemonTypes.Dragon:
            return <img id='typeIcon' src={typeImages.dragonicon} alt='dragonicon' />
        case PokemonTypes.Electric:
            return <img id='typeIcon' src={typeImages.electricicon} alt='electricicon' />
        case PokemonTypes.Fairy:
            return <img id='typeIcon' src={typeImages.fairyicon} alt='fairyicon' />
        case PokemonTypes.Fighting:
            return <img id='typeIcon' src={typeImages.fightingicon} alt='fightingicon' />
        case PokemonTypes.Fire:
            return <img id='typeIcon' src={typeImages.fireicon} alt='fireicon' />
        case PokemonTypes.Flying:
            return <img id='typeIcon' src={typeImages.flyingicon} alt='flyingicon' />
        case PokemonTypes.Ghost:
            return <img id='typeIcon' src={typeImages.ghosticon} alt='ghosticon' />
        case PokemonTypes.Grass:
            return <img id='typeIcon' src={typeImages.grassicon} alt='grassicon' />
        case PokemonTypes.Ground:
            return <img id='typeIcon' src={typeImages.groundicon} alt='groundicon' />
        case PokemonTypes.Ice:
            return <img id='typeIcon' src={typeImages.iceicon} alt='iceicon' />
        case PokemonTypes.Normal:
            return <img id='typeIcon' src={typeImages.normalicon} alt='normalicon' />
        case PokemonTypes.Poison:
            return <img id='typeIcon' src={typeImages.poisonIcon} alt='poisonIcon' />
        case PokemonTypes.Psychic:
            return <img id='typeIcon' src={typeImages.psychicicon} alt='psychicicon' />
        case PokemonTypes.Rock:
            return <img id='typeIcon' src={typeImages.rockIcon} alt='rockIcon' />
        case PokemonTypes.Steel:
            return <img id='typeIcon' src={typeImages.steelIcon} alt='steelIcon' />
        case PokemonTypes.Water:
            return <img id='typeIcon' src={typeImages.waterIcon} alt='waterIcon' />
        default:
            return <></>
    }
}