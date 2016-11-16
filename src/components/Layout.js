/**
 * Created by roshane on 11/14/16.
 */
import $ from 'jquery';
import React,{Component} from 'react';
import Menu from './Menu';
import AltContainer from 'alt-container';

import ImgurStore from './../stores/ImgurStore';
import ImgurActions from './../actions/ImgurActions';
import SearchModal from './modal/SearchForm';
import ImageViewModal from './modal/ImageViewModal';

require('bootstrap/dist/js/bootstrap.js');

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./../resources/css/style.css');

class Layout extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div className="well no-padding no-margin no-border">
            <Menu {...this.props}/>
            <div className="container">
                <AltContainer
                stores={{
                    imgurStore:ImgurStore
                }}>
                    {this.props.children}
                    <SearchModal {...this.props} />
                    <ImageViewModal {...this.props}/>
                </AltContainer>
            </div>
        </div>
    }
}

export default Layout;