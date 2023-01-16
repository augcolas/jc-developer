import { Component } from 'react';

import Header from './Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import MyMap from './Components/MyMap';
class App extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Header></Header>
                <MyMap></MyMap>
            </div>
        )
    }
}
export default App;