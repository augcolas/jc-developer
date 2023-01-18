import { Component } from "react";
import '../Style/Header.css';
import CityList from "./CityList";
import image from '../Resources/logo.png';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
            <nav className="navbar navbar-expand-lg main-nav px-0">
            <a className="navbar-brand" href="/#">
					      <img src={image} alt="logo"/>
					    </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="icon-bar icon-bar-1"></span>
                              <span className="icon-bar icon-bar-2"></span>
                              <span className="icon-bar icon-bar-3"></span>
                          </button>
              <div className="collapse navbar-collapse" id="mainMenu">
                
                <CityList/>
                
              </div>
            </nav>
          </div>
        )
    }
}
export default Header;