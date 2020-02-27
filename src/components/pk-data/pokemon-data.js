import React, { useState, useEffect } from 'react';
import PokeapiService from '../../services/PokeapiService'
import PokemonList from '../pokemon-list'
import Loading from '../loading'
const PokemonData = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const { getAllPokemons } = new PokeapiService()
    useEffect((allPokemons) => {
        async function fetchData() {
            const res = await getAllPokemons()
            setAllPokemons(res)
        }
        fetchData()
    }, [])
    if (!allPokemons || allPokemons.length == 0) {
        return <Loading />
    }
    return (
        <PokemonList pokemon={allPokemons} />
    );
}
export default PokemonData