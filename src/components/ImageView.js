/**
 * Created by roshane on 11/14/16.
 */
import React,{Component} from 'react';
import ImageLoader from 'react-imageloader';
import ImgurActions from './../actions/ImgurActions';

class ImageView extends Component {

    preLoader() {
        return <div className="center-block text-center" style={{marginTop:'25%'}}>
            <i className="fa fa-2x fa-spin fa-circle-o-notch"></i>
        </div>
    }

    showDetails() {
        ImgurActions.setSelectedImage(this.props.data);
    }

    render() {
        let {data}=this.props;

        return <div className="col-sm-6 col-md-3">
            <div className="thumbnail image-thumbnail thumbnail-bottom-border">
                <div className="image-thumbnail_image">
                    <ImageLoader src={data.link}
                                 className="img-responsive"
                                 wrapper={React.DOM.div}
                                 preloader={this.preLoader}>
                        <i className="fa fa-ban"/>
                    </ImageLoader>
                </div>
                <div className="caption">
                    <p className="small">Description:&nbsp;</p>
                    <p className="wordWrap crop small">
                        {
                            data.description || "Description N/A"
                        }
                    </p>
                    <p>
                      <span className="center-block text-center">
                          <a className="btn btn-primary" href="#imageViewModal"
                             onClick={this.showDetails.bind(this)}
                             data-toggle="modal">
                              View
                          </a>
                      </span>
                    </p>
                </div>
            </div>
        </div>
    }

}

export default ImageView;
