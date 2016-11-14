/**
 * Created by roshane on 11/14/16.
 */
import jquery from 'jquery';
import React,{Component} from 'react';
import Menu from './Menu';
import AltContainer from 'alt-container';

import ImgurStore from './../stores/ImgurStore';
import ImgurActions from './../actions/ImgurActions';

require('bootstrap/dist/js/bootstrap.js');

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');
require('./../resources/css/style.css');

class Layout extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div className="container">
            <Menu/>
            <hr/>
            <AltContainer
                stores={{
                    imgurStore:ImgurStore
                }}>
                {this.props.children}
            </AltContainer>
        </div>
    }
}

export default Layout;