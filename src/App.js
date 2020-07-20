import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImg from './images/covid_new.png'

export class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  fetchCountry = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
      <img src={coronaImg} className={styles.image} alt="COVID-19"/>
      <CountryPicker fetchCountry={this.fetchCountry} />
        <Cards data={data} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
