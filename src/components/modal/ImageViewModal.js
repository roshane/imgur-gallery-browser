/**
 * Created by roshane on 11/16/16.
 */
import React,{Component} from 'react';
import KeyBox from './../../domain/KeyBox';
import ImageLoader from 'react-imageloader';

class ImageViewModal extends Component {

    preLoader() {
        return <div className="center-block text-center" style={{marginTop:'25%'}}>
            <i className="fa fa-2x fa-spin fa-circle-o-notch"></i>
        </div>
    }

    getValueOrEmptyMessage(value) {
        return value || <span className="small">N/A</span>
    }

    render() {

        let {imgurStore} = this.props;

        return <div>
            <div className="modal fade" id="imageViewModal">
                <div className="modal-dialog">
                    <div className="modal-content well">
                        <div className="modal-body">
                            {
                                imgurStore.selectedImage && <div>
                                    <img className="img-responsive"
                                         src={imgurStore.selectedImage.link}/>
                                    <hr/>
                                    <div>
                                        <p>Title:</p>
                                        <p>{this.getValueOrEmptyMessage(imgurStore.selectedImage.title)}</p>
                                        <p>Description:</p>
                                        <p className="small">
                                            {this.getValueOrEmptyMessage(imgurStore.selectedImage.description)}
                                        </p>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p>
                                                    <i className="fa fa-thumbs-up"></i>&nbsp;:&nbsp;
                                                    {this.getValueOrEmptyMessage(imgurStore.selectedImage.ups)}
                                                </p>
                                            </div>
                                            <div className="col-md-4">
                                                <p>
                                                    <i className="fa fa-thumbs-down"></i>&nbsp;:&nbsp;
                                                    {this.getValueOrEmptyMessage(imgurStore.selectedImage.downs)}
                                                </p>
                                            </div>
                                            <div className="col-md-4">
                                                <p>
                                                    <span className="small">Score</span>&nbsp;:&nbsp;
                                                    {this.getValueOrEmptyMessage(imgurStore.selectedImage.score)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="modal-footer">
                            <div className="btn-block">
                                <button type="button" data-dismiss="modal" className="btn btn-primary">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ImageViewModal;
