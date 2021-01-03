export const PokemonTypes = {
    Bug: 'Bug',
    Dark: 'Dark',
    Dragon: 'Dragon',
    Electric: 'Electric',
    Fairy: 'Fairy',
    Fighting: 'Fighting',
    Fire: 'Fire',
    Flying: 'Flying',
    Ghost: 'Ghost',
    Grass: 'Grass',
    Ground: 'Ground',
    Ice: 'Ice',
    Normal: 'Normal',
    Poison: 'Poison',
    Psychic: 'Psychic',
    Rock: 'Rock',
    Steel: 'Steel',
    Water: 'Water'
}

export const PokemonTypeStrengths = {
    Bug: [PokemonTypes.Grass, PokemonTypes.Dark, PokemonTypes.Psychic],
    Dark: [PokemonTypes.Ghost, PokemonTypes.Psychic],
    Dragon: [PokemonTypes.Dragon],
    Electric: [PokemonTypes.Flying, PokemonTypes.Water],
    Fairy: [PokemonTypes.Fighting, PokemonTypes.Dark, PokemonTypes.Dragon],
    Fighting: [PokemonTypes.Dark, PokemonTypes.Ice, PokemonTypes.Normal, PokemonTypes.Rock, PokemonTypes.Steel],
    Fire: [PokemonTypes.Bug, PokemonTypes.Grass, PokemonTypes.Ice, PokemonTypes.Steel],
    Flying: [PokemonTypes.Bug, PokemonTypes.Fighting, PokemonTypes.Grass],
    Ghost: [PokemonTypes.Ghost, PokemonTypes.Psychic],
    Grass: [PokemonTypes.Ground, PokemonTypes.Rock, PokemonTypes.Water],
    Ground: [PokemonTypes.Electric, PokemonTypes.Fire, PokemonTypes.Poison, PokemonTypes.Rock, PokemonTypes.Steel],
    Ice: [PokemonTypes.Dragon, PokemonTypes.Flying, PokemonTypes.Grass, PokemonTypes.Ground],
    Normal: [],
    Poison: [PokemonTypes.Fairy, PokemonTypes.Grass],
    Psychic: [PokemonTypes.Fighting, PokemonTypes.Poison],
    Rock: [PokemonTypes.Bug, PokemonTypes.Fire, PokemonTypes.Flying, PokemonTypes.Ice],
    Steel: [PokemonTypes.Fairy, PokemonTypes.Ice, PokemonTypes.Rock],
    Water: [PokemonTypes.Fire, PokemonTypes.Ground, PokemonTypes.Rock]
}

export const PokemonTypeWeaknesses = {
    Bug: [PokemonTypes.Fire, PokemonTypes.Flying, PokemonTypes.Rock],
    Dark: [PokemonTypes.Bug, PokemonTypes.Fairy, PokemonTypes.Fighting],
    Dragon: [PokemonTypes.Dragon, PokemonTypes.Fairy, PokemonTypes.Ice],
    Electric: [PokemonTypes.Ground],
    Fairy: [PokemonTypes.Poison, PokemonTypes.Steel],
    Fighting: [PokemonTypes.Fairy, PokemonTypes.Flying, PokemonTypes.Psychic],
    Fire: [PokemonTypes.Ground, PokemonTypes.Rock, PokemonTypes.Water],
    Flying: [PokemonTypes.Electric, PokemonTypes.Ice, PokemonTypes.Rock],
    Ghost: [PokemonTypes.Dark, PokemonTypes.Ghost],
    Grass: [PokemonTypes.Bug, PokemonTypes.Fire, PokemonTypes.Flying, PokemonTypes.Ice, PokemonTypes.Poison],
    Ground: [PokemonTypes.Grass, PokemonTypes.Ice, PokemonTypes.Water],
    Ice: [PokemonTypes.Fighting, PokemonTypes.Fire, PokemonTypes.Rock, PokemonTypes.Steel],
    Normal: [PokemonTypes.Fighting],
    Poison: [PokemonTypes.Ground, PokemonTypes.Psychic],
    Psychic: [PokemonTypes.Bug, PokemonTypes.Dark, PokemonTypes.Ghost],
    Rock: [PokemonTypes.Fighting, PokemonTypes.Grass, PokemonTypes.Ground, PokemonTypes.Steel, PokemonTypes.Water],
    Steel: [PokemonTypes.Fighting, PokemonTypes.Fire, PokemonTypes.Ground],
    Water: [PokemonTypes.Electric, PokemonTypes.Grass]
}

export class PokemonTypeMatchup {
    constructor(type) {
        this.type = type;
        switch (type) {
            case PokemonTypes.Bug:
                this.strengths = PokemonTypeStrengths.Bug
                this.weaknesses = PokemonTypeWeaknesses.Bug
                break
            case PokemonTypes.Dark:
                this.strengths = PokemonTypeStrengths.Dark
                this.weaknesses = PokemonTypeWeaknesses.Dark
                break
            case PokemonTypes.Dragon:
                this.strengths = PokemonTypeStrengths.Dragon
                this.weaknesses = PokemonTypeWeaknesses.Dragon
                break
            case PokemonTypes.Electric:
                this.strengths = PokemonTypeStrengths.Electric
                this.weaknesses = PokemonTypeWeaknesses.Electric
                break
            case PokemonTypes.Fairy:
                this.strengths = PokemonTypeStrengths.Fairy
                this.weaknesses = PokemonTypeWeaknesses.Fairy
                break
            case PokemonTypes.Fighting:
                this.strengths = PokemonTypeStrengths.Fighting
                this.weaknesses = PokemonTypeWeaknesses.Fighting
                break
            case PokemonTypes.Fire:
                this.strengths = PokemonTypeStrengths.Fire
                this.weaknesses = PokemonTypeWeaknesses.Fire
                break
            case PokemonTypes.Flying:
                this.strengths = PokemonTypeStrengths.Flying
                this.weaknesses = PokemonTypeWeaknesses.Flying
                break
            case PokemonTypes.Ghost:
                this.strengths = PokemonTypeStrengths.Ghost
                this.weaknesses = PokemonTypeWeaknesses.Ghost
                break
            case PokemonTypes.Grass:
                this.strengths = PokemonTypeStrengths.Grass
                this.weaknesses = PokemonTypeWeaknesses.Grass
                break
            case PokemonTypes.Ground:
                this.strengths = PokemonTypeStrengths.Ground
                this.weaknesses = PokemonTypeWeaknesses.Ground
                break
            case PokemonTypes.Ice:
                this.strengths = PokemonTypeStrengths.Ice
                this.weaknesses = PokemonTypeWeaknesses.Ice
                break
            case PokemonTypes.Normal:
                this.strengths = PokemonTypeStrengths.Normal
                this.weaknesses = PokemonTypeWeaknesses.Normal
                break
            case PokemonTypes.Poison:
                this.strengths = PokemonTypeStrengths.Poison
                this.weaknesses = PokemonTypeWeaknesses.Poison
                break
            case PokemonTypes.Psychic:
                this.strengths = PokemonTypeStrengths.Psychic
                this.weaknesses = PokemonTypeWeaknesses.Psychic
                break
            case PokemonTypes.Rock:
                this.strengths = PokemonTypeStrengths.Rock
                this.weaknesses = PokemonTypeWeaknesses.Rock
                break
            case PokemonTypes.Steel:
                this.strengths = PokemonTypeStrengths.Steel
                this.weaknesses = PokemonTypeWeaknesses.Steel
                break
            case PokemonTypes.Water:
                this.strengths = PokemonTypeStrengths.Water
                this.weaknesses = PokemonTypeWeaknesses.Water
                break
            default:
                break
        }
    }
}