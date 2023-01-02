import { Component } from "react";
import './Header.css';
class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Vélos</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="#">Stations</a>
                            <a class="nav-link" href="#">Contrats</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Header;