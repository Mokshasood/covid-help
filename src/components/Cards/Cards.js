import React from 'react';
import death from '../../assets/assets/deaths.jpg';
import recover from '../../assets/assets/recovered.jpg';
import active from '../../assets/assets/positive.jpg'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }
    //console.log(data);
    return (
        <div>
            <div class="card-deck">
                <div class="card">


                    <div class="card-body">
                        <img class="card-img-top" src={active} alt="Card image cap" height="200px" width="auto" />
                        <h5 class="card-text" style={{ fontSize: 'bold' }}>Number of Active COVID-19 cases</h5>
                        
                        
                        <h4 class="card-text">{confirmed.value}</h4>
                        <p class="card-text">{new Date(lastUpdate).toDateString()} </p>


                    </div>
                </div>
                <div class="card">


                    <div class="card-body">
                        <img class="card-img-top" src={recover} alt="Card image cap" height="200px" width="auto" />
                        <h5 class="card-text" style={{ fontSize: 'bold' }}>No. of Recovered COVID-19 cases</h5>
                        
                            
                        <h4 class="card-text">{recovered.value} </h4>
                        
                        <p class="card-text">{new Date(lastUpdate).toDateString()} </p>



                    </div>
                </div>
                <div class="card">


                    <div class="card-body">
                        <img class="card-img-top" src={death} alt="Card image cap" height="200px" width="auto" />
                        <h5 class="card-text" style={{ fontSize: 'bold' }}>No. of Deaths due to COVID-19</h5>
                        
                        
                        <h4 class="card-text"> {deaths.value}</h4>
                        <p class="card-text">{new Date(lastUpdate).toDateString()} </p>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards;
