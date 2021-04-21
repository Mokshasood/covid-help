import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
const Charts = ({data,country}) => {
    const [dailyData, setDailyData ] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData);
            
            
        }



        fetchAPI();
        
        

    }, []);
    const lineChart = (

            dailyData[0] ? (<Line
                data={{
                    labels: dailyData.map(({date})=>date),
                    datasets: [{
                        data:dailyData.map(({confirmed})=>confirmed),
                        label:'Infected',
                        borderColor:'#3333ff',
                        fill:true,

                    }, {



                        data:dailyData.map(({deaths})=>deaths),
                        label:'Deaths',
                        borderColor:'red',
                        backgroundColor:'rgba(255,0,0,0.5)',
                        fill:true,

                    }],

                }}
            />) : null





    );
    const barChart = (
        data.confirmed?(
        <Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'People',
                backgroundColor:['blue','green','red'],
                data:[data.confirmed.value,data.recovered.value,data.deaths.value]
            }]

        }}
        options={{
            legend:{display:false},
            title:{display:true,text:`Current status in ${country}`},

        }}


        />):null
    )


    return (
        <div>
            {country?barChart:lineChart};
        </div>
    )
}

export default Charts
