import React from 'react';
import Charts from '../charts';
import PTabs from '../tabs/Tabs';

const SinglePokemon = (props) => {
    const { pokemon } = props
    console.log(pokemon)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className='text-uppercase'>{pokemon.name}</h1>
                    <div className='text-capitalize'>
                        <span>weight:{pokemon.weight} </span>
                        <span>height:{pokemon.height}</span>
                    </div>
                </div>

                <div className="card col-md-4 mt-5">
                    <img className="card-img-top" src={pokemon.img} alt={pokemon.img} />
                    <div className="card-body">
                        <p className="card-text text-capitalize text-center">{pokemon.name}</p>
                        <div>
                            <h4>Abilities</h4>
                            <PTabs stats={pokemon.abilities} />
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <Charts stats={pokemon.stats} />
                </div>
            </div>
        </div>
    );
}
export default SinglePokemon