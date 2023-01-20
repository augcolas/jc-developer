import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyMap from './Components/MyMap';
import CityList from './Components/CityList';
import { openDB } from 'idb';

export const MyContext = React.createContext();

export const dbPromise = openDB('myDatabase', 1, {
    upgrade(db) {
        db.createObjectStore('stations', { keyPath: 'id', autoIncrement: true });
    },
});


//Fonction pour récupérer des données de la base de données
export const getData = async () => {
    const db = await dbPromise;
    const tx = db.transaction('stations', 'readonly');
    const store = tx.objectStore('stations');
    return store.getAll();
};

//Fonction pour stocker des données dans la base de données
export const storeData = async (data) => {
    const db = await dbPromise;
    const tx = db.transaction('stations', 'readwrite');
    const store = tx.objectStore('stations');
    store.put(data);
    return tx.complete;
};

class App extends Component {
    ApiKey = "7886a12c53604b2668a08582a04795afcc9375b0";
    state = {
        stations: [],
        isOnline: true,
    }

    componentDidMount() {
        //Détection de la connexion internet
        window.addEventListener('online', this.handleConnectionChange);
        window.addEventListener('offline', this.handleConnectionChange);
    }

    updateContract = (myContract) => {
        fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${myContract}&apiKey=${this.ApiKey}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ stations: data });
                storeData(data)
            });


    }

    handleConnectionChange = () => {
        const condition = navigator.onLine ? 'online' : 'offline';
        this.setState({ isOnline: condition === 'online' });
    }



    render() {
        var value;
        if (this.state.isOnline) {
            value = {
                updateContract: this.updateContract
            };
        }
        else {
            value = getData();
            //can't find how to await an async method in render()
            console.log(value)
        }

        return (
            <div>
                <MyContext.Provider value={value}><CityList></CityList> </MyContext.Provider>
                <MyMap stations={this.state.stations}></MyMap>
            </div>
        )
    }
}
export default App;