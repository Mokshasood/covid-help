import axios from 'axios';
const url="https://covid19.mathdro.id/api";

export const fetchdata= async (country)=>{
    let requrl=url;
    if(country)
    {
        requrl=`${url}/countries/${country}`;
    }
    try{
        const {data}= await axios.get(requrl);
        
        const requireddata={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate

        }
        return requireddata;

    }
    catch(err){

    }

}
export const fetchDailyData = async ()=>{
    
    
        try {
                 const { data } = await axios.get(`${url}/daily`);
            
                 return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
              } 
        
              

    
    catch(error){
        return(error);

    }
}
export const fetchCountries = async () =>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    }
    catch(error){


    }
}