/**
 * Created by roshane on 11/14/16.
 */
import React,{Component} from 'react';
import SearchActions from './../actions/ImgurActions';
import {Link} from 'react-router';
import KeyBox from './../domain/KeyBox';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: KeyBox.pages.home
        };
    }

    changeActiveMenu(path) {
        let currentState = this.state;
        currentState.activePage = path;
        this.setState(currentState);
    }

    render() {

        return <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <Link to="/home" className="navbar-brand">Gallery</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className={this.state.activePage==KeyBox.pages.home?'active':null}>
                            <Link to="/home" onClick={this.changeActiveMenu.bind(this,KeyBox.pages.home)}>
                                Home
                            </Link>
                        </li>
                        <li className={this.state.activePage==KeyBox.pages.about?'active':null}>
                            <Link to="/about" onClick={this.changeActiveMenu.bind(this,KeyBox.pages.about)}>
                                About
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#myModal" data-toggle="modal">Search</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    }
}

export default Menu;