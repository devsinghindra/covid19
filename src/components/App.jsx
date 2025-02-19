import React from "react";
import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";
import CountryPicker from "./CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "../api";
import covidImage from "../images/image.png";

class App extends React.Component {

    state = {
        data: {},
        country: ""
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        console.log(fetchedData);
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        // console.log(fetchedData);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img src={covidImage} alt="covid19" className={styles.image} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;