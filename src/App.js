import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyMap from './Components/MyMap';
import CityList from './Components/CityList';


export const MyContext = React.createContext();

class App extends Component {
    ApiKey = "7886a12c53604b2668a08582a04795afcc9375b0";
    state = {
        stations: [],
    }



    updateContract = (myContract) => {
         fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${myContract}&apiKey=${this.ApiKey}`)
          .then(response => response.json())
          .then(data => this.setState({ stations: data }));
    }
    

          

    render() {
        const value = {
            updateContract: this.updateContract
        };
        return (
            <div>
                <MyContext.Provider value={value}><CityList></CityList> </MyContext.Provider>
                <MyMap stations={this.state.stations} ></MyMap>
            </div>
        )
    }
}
export default App;