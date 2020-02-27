import React, { useState, useEffect } from 'react';
import Loading from '../loading'
import ErrorBoundry from '../error-boundry'
import PokeapiService from '../../services/PokeapiService';
import { Link } from 'react-router-dom'
const TypeList = (props) => {
    const [typeLis, setTypeList] = useState([])
    const { getAllTypesList } = new PokeapiService()
    useEffect((allPokemonsInType) => {
        async function fetchData() {
            const res = await getAllTypesList(props.itemId)
            setTypeList(res)
        }
        fetchData()
    }, [])
    return (
        <ErrorBoundry>
            <div className="row">
                {typeLis.map(type => {
                    return (
                        <div className="card col-sm-3 d-flex align-items-stretch p-3 text-center " key={type.name}>
                            <Link className="m-3 p-1 rounded w-35 bg-success text-light nav-link" to={`/type/${type.name}/`} key={type.name}>{type.name}</Link>
                        </div>
                    );
                })}
            </div>
        </ErrorBoundry>
    )
}
export default TypeList