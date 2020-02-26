import React, { useState, useEffect } from 'react';
import PokeapiService from '../../services/PokeapiService'
import Loading from '../loading'
import ErrorBoundry from '../error-boundry'

const PokemonList = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const pokeapiService = new PokeapiService()
    const { getAllPokemons, getAllAbilities } = pokeapiService
    useEffect((allPokemons) => {
        async function fetchData() {
            const res = await getAllPokemons()
            console.log(res)
            setAllPokemons(res)
        }
        fetchData()
    }, [])
    if (!allPokemons) {
        return <h1><Loading /></h1>
    }
    return (
        <ErrorBoundry>
            <div className="row">
                {allPokemons.map(pokemon => {
                    return (
                        <div className="col-sm-3 d-flex align-items-stretch p-3" key={pokemon.id}>
                            <div className="card p-3" style={{ width: "100%" }}>
                                <img className="card-img-top" style={{ height: "300px" }} src={`${pokemon.img}`} alt={`${pokemon.img}`} />
                                <span>№ {pokemon.id}</span>
                                <div className="card-body" >
                                    <h3 className="card-title text-center text-uppercase"> <a href={`/${pokemon.name}`}>{pokemon.name}</a></h3>
                                    <div className={" d-flex justify-content-center"}>
                                        {pokemon.types.map(type => {
                                            return (
                                                <div className={'m-3 p-1 rounded w-35 bg-success'} key={type.type.name}> {type.type.name}</div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </ErrorBoundry>
    );
}

export default PokemonList;
