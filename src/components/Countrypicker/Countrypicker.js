import React,{useState,useEffect} from 'react';
import {fetchCountries} from '../../api';



const Countrypicker=({handleCountryChange}) =>{
    const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchCountriesfun = async()=>{
            setFetchedCountries(await fetchCountries());

        }
        fetchCountriesfun();
    },[setFetchedCountries]);

    return (
        <div>
            <select onChange={(e)=>handleCountryChange(e.target.value)} class="form-select mb-2" aria-label="Default select example" style={{ width: '100%', padding:'0.5%' }}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
            </select>


        </div>
    )
}

export default Countrypicker;
