import { Component } from 'react'

export default class PokeapiService extends Component {
    _apiBase = 'https://pokeapi.co/api/v2';
    _imgBase = `https://img.pokemondb.net/artwork/large`
    getResourse = async (url) => {
        let res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, ${res.status}`)
        }
        return await res.json()
    }

    getAllPokemons = async () => {
        let res = await this.getResourse(`/pokemon/`)
        let data = await res.results.map(async (pokemon) => { return await this.getPokemon(pokemon.name) });
        console.log(data)
        return data
    }
    getPokemon = async (id) => {
        const pokemon = await this.getResourse(`/pokemon/${id}/`);
        return this._transformPokemon(pokemon)
    }
    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.match(idRegExp)[1]
    }
    _transformPokemon = (pokemon) => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            abilities: pokemon.abilities,
            moves: pokemon.moves,
            stats: pokemon.stats,
            types: pokemon.types,
            weight: pokemon.weight,
            height: pokemon.height,
            img: this.getPokemonImage(pokemon.name)
        }
    }
    getPokemonImage = (name) => {
        return `${this._imgBase}/${name}.jpg`
    }
}
