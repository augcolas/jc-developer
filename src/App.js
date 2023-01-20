import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyMap from './Components/MyMap';
import CityList from './Components/CityList';
import { openDB } from 'idb';

export const MyContext = React.createContext();

export const dbPromise = openDB('myDatabase', 1, {
    upgrade(db) {
        db.createObjectStore('stations', { keyPath: 'id' });
    },
});

 
//Fonction pour récupérer des données de la base de données
export const getData = async () => {
        const db = await dbPromise;
        const tx = db.transaction('stations', 'readonly');
        const store = tx.objectStore('stations');
        return store.getAll();
    };

class App extends Component {
    ApiKey = "7886a12c53604b2668a08582a04795afcc9375b0";
    state = {
        stations: [],
        isOnline: true,
    }



    //Fonction pour stocker des données dans la base de données
    storeData = async (data) => {
        const db = await dbPromise;
        const tx = db.transaction('stations', 'readwrite');
        const store = tx.objectStore('stations');
        store.put(data);
        return tx.complete;
    };



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
                this.storeData(data)
            });


    }

    handleConnectionChange = () => {
        const condition = navigator.onLine ? 'online' : 'offline';
        this.setState({ isOnline: condition === 'online' });
        if (!this.state.isOnline) {
            //Récupération des données hors ligne
            this.getDataFromIndexedDB();
        }
    }

    getDataFromIndexedDB = async () => {
        const data = await getData();
        this.setState({ data });
    }



    render() {
        const value = {
            updateContract: this.updateContract
        };
        return (
            <div>
                <MyContext.Provider value={value}><CityList></CityList> </MyContext.Provider>
                <MyMap stations={this.state.stations}></MyMap>
            </div>
        )
    }
}
export default App;