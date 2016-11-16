/**
 * Created by roshane on 11/16/16.
 */
import React,{Component} from 'react';
import ImgurActions from './../../actions/ImgurActions';
import KeyBox from './../../domain/KeyBox';
import Util from './../../domain/Util';
import {browserHistory} from 'react-router';

class SearchForm extends Component {


    updateSearchCriteria(key, e) {
        let value = e.target.value;
        console.info("search criteria", key, value);
        ImgurActions.updateSearchCriteria({key,value});
    }

    toggleShowViral(showViral) {
        let key = KeyBox.gallery.showViral;
        let value = showViral;
        console.info("search criteria", key, value);
        ImgurActions.updateSearchCriteria({key,value});
    }

    loadGalleries(){
        browserHistory.push(KeyBox.pages.home);
        ImgurActions.loadGallery(Util.buildGalleryURL(this.props.imgurStore));
    }


    render() {

        let {imgurStore} =this.props;

        return <div>
            <div className="modal fade" id="myModal" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content well">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title">Browse Galleries</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal">
                                <fieldset>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Show Viral</label>
                                        <div className="col-lg-10">
                                            <div className="radio">
                                                <label>
                                                    <input type="radio"
                                                           checked={imgurStore.showViral}
                                                           onChange={this.toggleShowViral.bind(this,true)}
                                                           defaultValue="true"/>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio"
                                                           checked={!imgurStore.showViral}
                                                           onChange={this.toggleShowViral.bind(this,false)}
                                                           defaultValue="false"/>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="select" className="col-lg-2 control-label">Section</label>
                                        <div className="col-lg-10">
                                            <select className="form-control" id="select"
                                                    onChange={this.updateSearchCriteria.bind(this,KeyBox.gallery.section.section)}
                                                    defaultValue={KeyBox.gallery.section.hot}>
                                                {
                                                    Object.keys(KeyBox.gallery.section.values).map((k, i)=> {
                                                        return <option key={i} value={k}>{k}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="select" className="col-lg-2 control-label">Window</label>
                                        <div className="col-lg-10">
                                            <select className="form-control" id="select"
                                                    onChange={this.updateSearchCriteria.bind(this,KeyBox.gallery.window.window)}
                                                    defaultValue={KeyBox.gallery.window.values.all}>
                                                {
                                                    Object.keys(KeyBox.gallery.window.values).map((k, i)=> {
                                                        return <option key={i} value={k}>{k}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="select" className="col-lg-2 control-label">Sort</label>
                                        <div className="col-lg-10">
                                            <select className="form-control" id="select"
                                                    onChange={this.updateSearchCriteria.bind(this,KeyBox.gallery.sort.sort)}
                                                    defaultValue={KeyBox.gallery.sort.values.viral}>
                                                {
                                                    Object.keys(KeyBox.gallery.sort.values).map((k, i)=> {
                                                        return <option key={i} value={k}>{k}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="pull-right">
                                            <button type="button" data-dismiss="modal" className="btn btn-default">
                                                Cancel
                                            </button>
                                            &nbsp;
                                            <button type="button" data-dismiss="modal"
                                                    onClick={this.loadGalleries.bind(this)}
                                                    className="btn btn-success">Submit</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SearchForm;
