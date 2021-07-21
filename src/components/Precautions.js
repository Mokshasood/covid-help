import React from 'react';
import cleanhand from '../assets/assets/hand.jpg';
import social from '../assets/assets/precaution2.jpg';
import mask from '../assets/assets/mask.jpg';

function Precautions() {
    return (

        <div className="jumbotron">
            <h1 className="display-5">
                Precautions to avoid COVID.
            </h1>
            <hr style={{ backgroundColor: 'black' }} />


            <h5>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency.</h5>
            <br /><h4>To prevent the spread of COVID-19:</h4>
            <ul style={{ listStyle: 'none' }}>
                <li className="flex-container">

                            <p>Clean your hands often. Use soap and water, or an alcohol-based hand rub  </p>


                        


                    <img src={cleanhand} alt="clean" style={{ width: '35%', height: '15%' }} />
                </li>
                <br />
                <br />
                <br />
                <li className="flex-container">

                    <img src={social} alt="clean" style={{ width: '35%', height: '15%' }} />
                    <p>Maintain social distance. Especially from one who is coughing and sneezing.</p>

                </li>
                <br />
                <br /><br />
                <li className="flex-container">
                    Wear a face mask in public places to protect yourself and to protect others.
                    <img src={mask} alt="clean" style={{ width: '35%', height: '15%' }} />
                </li>
            </ul>


        </div>

    )
}

export default Precautions;
