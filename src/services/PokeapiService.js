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
        return new Promise(async (resolve, reject) => {
            let res = await this.getResourse(/pokemon/);
            let data = await res.results.map(pokemon => {
                return this.getPokemon(pokemon.name);
            });
            Promise.all(data)
                .then(res => resolve(res))
                .catch(err => console.log(err));
        });
    };
    getPokemon = async (id) => {
        const pokemon = await this.getResourse(`/pokemon/${id}/`);
        return this._transformPokemon(pokemon)
    }

    getAllAbilities = async (data) => {
        return new Promise(async (resolve, reject) => {
            let abilities = await data.map(ability => {
                return this.getAbility(this._extractId(ability.ability.url))
            });
            Promise.all(abilities)
                .then(res => resolve(res))
                .catch(err => console.log(err));
        })
    }
    getAbility = async (id) => {
        const ability = await this.getResourse(`/ability/${id}/`);
        return this._transformAbility(ability)
    }

    getAllTypesList = async () => {
        let res = await this.getResourse(/type/);
        return res.results

    }

    getAllTypes = async (data, label = null) => {
        return new Promise(async (resolve, reject) => {
            let types = await data.map(type => {
                return (
                    this.getType(
                        !label ?
                            this._extractId(type.type.url)
                            :
                            label
                    )
                );
            });
            Promise.all(types)
                .then(res => resolve(res))
                .catch(err => console.log(err));
        })
    }
    getType = async (id) => {
        const type = await this.getResourse(`/type/${id}/`);
        return this._transformType(type)
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.match(idRegExp)[1]
    }
    _transformPokemon = async (pokemon) => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            abilities: await this.getAllAbilities(pokemon.abilities),
            moves: pokemon.moves,
            stats: pokemon.stats,
            types: await this.getAllTypes(pokemon.types),
            weight: pokemon.weight,
            height: pokemon.height,
            img: this.getPokemonImage(pokemon.name)
        }
    }
    _transformType = async (type) => {
        return {
            id: type.id,
            name: type.name,
            damage_relations: type.damage_relations,
            move_damage_class: type.move_damage_class,
            pokemon: type.pokemon
        }
    }
    _transformAbility = (ability) => {
        return {
            id: ability.id,
            name: ability.name,
            effect_entries: ability.effect_entries
        }
    }
    getPokemonImage = (name) => {
        return `${this._imgBase}/${name}.jpg`
    }
}
