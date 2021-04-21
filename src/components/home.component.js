import React from 'react';
import pic from '../assets/assets/virus.jpg';
import news1 from '../assets/assets/news1.webp';
import news2 from '../assets/assets/news2.webp';
import news3 from '../assets/assets/news3.jpg';
import pre1 from '../assets/assets/pre1.jpg';
import pre2 from '../assets/assets/pre2.jpg';
import pre3 from '../assets/assets/pre3.jpg';
import './Stylesheet/index.css';

const Home = () => {
	return (
		<div>
	<center><h1> Covid Help </h1></center>
	<hr style={{width: '25%', backgroundColor: 'maroon', height: 5}}/>
  <div class="containers">
  <img src={pic} height="15%" width="100%"/>
  <div class="left">Safety is our key priority</div>
  <div class="bottom-right">Protect yourself and protect others</div>

  </div>
	
	<br/><br/>
	<center><h1> Latest News </h1></center>
	<hr style={{width: '25%', backgroundColor: 'maroon', height: 5}}/>
	<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={news1} alt="Card image cap" height="200px" width="auto"/>
    <div class="card-body">
      <h5 class="card-title">Coronavirus live updates: 'Corona curfew' in Bhopal from today till April 19</h5>
      <p class="card-text">India reported over 1.60 lakh new Covid-19 cases in the last 24 hours, according to the Union health ministry. Meanwhile, Haryana became the latest state to...</p>
      <button><a target="blank" href="https://timesofindia.indiatimes.com/india/coronavirus-lockdown-in-india-covid-19-vaccine-cases-live-updates-12-april-2021/liveblog/82023278.cms"> Read More </a></button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={news2} alt="Card image cap" height="200px" width="auto"/>
    <div class="card-body">
      <h5 class="card-title">Experts clear Russia’s Sputnik Covid-19 vaccine for use in India</h5>
      <p class="card-text">The approval of Russia’s Covid-19 vaccine Sputnik V comes amid a surge in cases across several states and Union Territories. India now has three approved Covid-19 vaccines...</p>
      <button><a href="https://www.hindustantimes.com/india-news/centre-approves-russia-s-covid-19-vaccine-sputnik-v-101618220595374.html"> Read More </a></button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={news3} alt="Card image cap" height="200px" width="auto"/>
    <div class="card-body">
      <h5 class="card-title">Haridwar: Crowds surging at Kumbh Mela as India overtakes Brazil in Covid cases</h5>
      <p class="card-text">Several million Hindus have gathered to take a dip in the Ganges river as a deadly second Covid-19 wave continues to sweep India. The devotees are marking an...</p>
      <button><a href="https://www.bbc.com/news/world-asia-india-56713993">Read More</a></button>
    </div>
  </div>
</div>
<br/><br/>
	<center><h1> #Let's fight this together </h1></center>
	<hr style={{width: '25%', backgroundColor: 'maroon', height: 5}}/>
	<div class="card-deck">
	<div class="card">
	<img src={pre1} height="500px"/>
	</div>
	<div class="card">
	<img src={pre2}/>
	</div>
	<div class="card">
	<img src={pre3} height="500px"/>
	</div>
	</div>
	</div>
	);
};

export default Home;
