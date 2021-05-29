import React from 'react';


export function Pokemon({ pokemon }){
    return (
        <div className="pokemon">
            <div className="pokemon_name">
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemon_meta">
                <span>{pokemon.maxHP}</span>
                <span>{pokemon.maxCP}</span>
            </div>
            <div className="pokemon_image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="pokemon_attacks">
                {pokemon && 
                    pokemon.attacks && 
                    pokemon.attacks.special
                        .slice(0, 3)
                        .map(attacks => (
                            <span key={`${attacks.name}-${attacks.damage}`}>
                                {attacks.name}
                            </span>
                    ))}
            </div>
        </div>
    )
}