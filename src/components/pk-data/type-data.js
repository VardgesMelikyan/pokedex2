import React, { useState, useEffect } from 'react';
import Loading from '../loading'
import ErrorBoundry from '../error-boundry'
import PokeapiService from '../../services/PokeapiService';
import PokemonList from '../pokemon-list'
const TypeList = (props) => {
    const [allPokemonsInType, setAllPokemonsInType] = useState([])
    const { getAllTypes, getType, getPokemon } = new PokeapiService()
    useEffect((allPokemonsInType) => {
        async function fetchData() {
            const res = await getType(props.itemId)
            const pokemon = await new Promise(async (resolve, reject) => {
                let data = await res.pokemon.map(async pokemon => {
                    return (await getPokemon(pokemon.pokemon.name))
                })
                Promise.all(data)
                    .then(res => resolve(res))
                    .catch(err => console.log(err));
            })
            setAllPokemonsInType(pokemon)
        }

        fetchData()
    }, [])
    console.log(allPokemonsInType)
    return (
        <ErrorBoundry>
            <PokemonList pokemon={allPokemonsInType} />
        </ErrorBoundry>
    )
}
export default TypeList