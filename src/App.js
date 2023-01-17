import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyMap from './Components/MyMap';
import CityList from './Components/CityList';

export const MyContext = React.createContext();

class App extends Component {
    ApiKey = "7886a12c53604b2668a08582a04795afcc9375b0";
    state = {
        contract: "marseille",
        stations: []
    }



    updateContract = (myContract) => {
        this.setState({
            contract: myContract
        });
        this.changeStations()
    }


    changeStations() {
        fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${this.state.contract}&apiKey=${this.ApiKey}`)
          .then(response => response.json())
          .then(data => this.setState({ stations: data }));
    
      }

    render() {
        const value = {
            contract: this.state.contract,
            updateContract: this.updateContract
        };
        console.log(this.state.stations)
        return (
            <div>
                <MyContext.Provider value={value}><CityList></CityList> </MyContext.Provider>
                <MyMap contract={this.state.stations}></MyMap>
            </div>
        )
    }
}
export default App;