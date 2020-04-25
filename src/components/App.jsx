import React from "react";
import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";
import CountryPicker from "./CountryPicker/CountryPicker";
import Styles from "./App.module.css";

class App extends React.Component {
    render() {
        return (
            <div className={Styles.container}>
                <h1>App</h1>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;