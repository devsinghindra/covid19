import React from "react";
import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";
import CountryPicker from "./CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "../api";

class App extends React.Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        console.log(fetchedData);
        this.setState({ data: fetchedData });
    }
    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;