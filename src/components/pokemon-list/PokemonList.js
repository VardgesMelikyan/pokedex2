import React from 'react';
import ErrorBoundry from '../error-boundry'
import Tooltip from '../tooltip/tooltip'
import { Link } from 'react-router-dom'
const PokemonList = (pokemon) => {
    return (
        <ErrorBoundry>
            <div className="row">
                {pokemon.pokemon.map(pokemon => {
                    return (
                        <div className="col-sm-3 d-flex align-items-stretch p-3" key={pokemon.id}>
                            <div className="card p-3 w-100">
                                <img className="card-img-top h-50" src={`${pokemon.img}`} alt={`${pokemon.img}`} />
                                <span>№ {pokemon.id}</span>
                                <div className="card-body" >
                                    <h3 className="card-title text-center text-uppercase">
                                        <Link className="nav-link" to={`/pokemon/${pokemon.name}/`}>{pokemon.name}</Link>
                                    </h3>
                                    <hr />
                                    <h6 className="text-center">Pokemon Type</h6>
                                    <div className=" d-flex justify-content-center">
                                        {pokemon.types.map(type => {
                                            return (
                                                <Link className="m-3 p-1 rounded w-35 bg-success text-light nav-link" to={`/type/${type.name}/`} key={type.id}>{type.name}</Link>
                                            );
                                        })}
                                    </div>
                                    <hr />
                                    <h6 className="text-center">Pokemon Abilities</h6>
                                    <div className=" d-flex justify-content-center">
                                        {pokemon.abilities.map(ability => {
                                            return (
                                                <div key={ability.id}>
                                                    <Tooltip data={ability.effect_entries[0].short_effect} label={ability.name} />
                                                </div>
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
