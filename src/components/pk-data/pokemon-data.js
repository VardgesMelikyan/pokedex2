import React, { useState, useEffect } from 'react';
import PokeapiService from '../../services/PokeapiService'
import Loading from '../loading'
import SinglePokemon from '../single-pokemon';
const PokemonData = (pokemon) => {
    const [singlePokemon, setSinglePokemon] = useState([])
    const { getPokemon } = new PokeapiService()
    useEffect((singlePokemon) => {
        async function fetchData() {
            const res = await getPokemon(pokemon.pokemon)
            setSinglePokemon(res)
        }
        fetchData()
    }, [])
    if (!singlePokemon || singlePokemon.length == 0) {
        return <Loading />
    }
    return (
        <SinglePokemon pokemon={singlePokemon} />
    );
}
export default PokemonData