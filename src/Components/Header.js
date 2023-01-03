import { Component } from "react";
import '../Style/Header.css';
class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Vélos</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="#">Stations</a>
                            <a className="nav-link" href="#">Contrats</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Header;