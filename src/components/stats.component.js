import React from 'react';
import Cards from './Cards/Cards';
import Charts from './Charts/Charts';
import Countrypicker from './Countrypicker/Countrypicker';
import { fetchdata } from '../api';
class Status extends React.Component {
	state = {
		data: {},
		country: '',
	}
	async componentDidMount() {

		const fetcheddata = await fetchdata();
		this.setState({ data: fetcheddata });
		console.log(fetcheddata);

	}
	handleCountryChange = async (country) => {
		const fetcheddata = await fetchdata(country);
		this.setState({ data: fetcheddata,country:country });
		console.log(country);

	}
	render() {
		const { data,country} = this.state;
		return (
			<div>
				<Cards data={data} />
				<br />
				<br />
				<Countrypicker handleCountryChange={this.handleCountryChange} />
				<br />
				<Charts data={data} country={country}/>



			</div>
		);

	}



}
export default Status;