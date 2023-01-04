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
            <div class="container">
            <nav class="navbar navbar-expand-lg main-nav px-0">
            <a class="navbar-brand" href="/#">
					      <img src={image} alt="logo"/>
					    </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="icon-bar icon-bar-1"></span>
                              <span class="icon-bar icon-bar-2"></span>
                              <span class="icon-bar icon-bar-3"></span>
                          </button>
              <div class="collapse navbar-collapse" id="mainMenu">
                
                <CityList/>
                
              </div>
            </nav>
          </div>
        )
    }
}
export default Header;