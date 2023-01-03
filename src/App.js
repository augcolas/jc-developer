import { Component } from 'react';
import CityList from './Components/CityList';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Header></Header>
                <CityList></CityList>
            </div>
        )
    }
}
export default App;