/**
 * Created by roshane on 11/15/16.
 */
import $ from 'jquery';
import Util from './../domain/Util';
import React,{Component} from 'react';
import ImgurActions from './../actions/ImgurActions';
import KeyBox from './../domain/KeyBox';
import {browserHistory} from 'react-router';

class GalleryView extends Component {

    navigateToGallery(gallery) {
        let albumId = gallery.id;
        console.log('gallery', gallery);
        browserHistory.push(`/${KeyBox.pages.album}`);
        ImgurActions.loadAlbum(Util.buildAlbumUrl(albumId));
    }

    render() {

        let {data,index}=this.props;

        return <div className="col-sm-4 col-md-3 gallery-thumbnail" onClick={this.navigateToGallery.bind(this,data)}>
            <div className="thumbnail thumbnail-hover thumbnail-top-border">
                <div className="text-center">
                    <h4>{data.topic}</h4>
                </div>
                <div className="caption">
                    <hr className="gallery-thumbnail-hr"/>
                    <p className="wordWrap crop small">
                        { data.title || "Title N/A" }
                    </p>
                    <p>
                        <span className="row">
                            <span className="col-md-6">
                                <span className="text-center">
                                    <i className="fa fa-thumbs-up text-primary"/>&nbsp;{data.ups}
                                </span>
                            </span>
                            <span className="col-md-6">
                                <span className="text-center">
                                    <i className="fa fa-thumbs-down text-danger"/>&nbsp;{data.downs}
                                </span>
                            </span>
                        </span>

                    </p>

                    <p className="small">Comments:&nbsp;
                        <span className="">{data.comment_count || "N/A"}</span>
                    </p>

                    <p className="small">Images:&nbsp;
                        <span className="">{data.images_count || "N/A"}</span>
                    </p>

                </div>

            </div>
        </div>

    }
}

export default GalleryView;
