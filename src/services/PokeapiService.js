import { Component } from 'react'

export default class PokeapiService extends Component {
    _apiBase = 'http://pokeapi.salestock.net/api/v2';
    _imgBase = `https://img.pokemondb.net/artwork/large`
    getResourse = async (url) => {
        let res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, ${res.status}`)
        }
        return await res.json()
    }

    getAllPokemons = async () => {
        let res = await this.getResourse(`/pokemon`);
        return res.results.map((pokemon) => { return this.getPokemon(pokemon.name) });
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
            id: this._extractId(pokemon.url),
            name: pokemon.name,
            img: this.getPokemonImage(pokemon.name)
        }
    }
    getPokemonImage = (name) => {
        return `${this._imgBase}/${name}.jpg`
    }
}
