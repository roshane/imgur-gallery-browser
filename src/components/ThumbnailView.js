/**
 * Created by roshane on 11/14/16.
 */
import React,{Component} from 'react';

class ThumbnailView extends Component {

    render() {
        let {data}=this.props;

        return <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
                <img src="..." alt="..."/>
                <div className="caption">
                    <h3>{data.title && data.title.substr(0,15)+" ..."}</h3>
                    <p>
                        {
                            data.description && data.description.substr(0, 50)+" ..." || "description not available"
                        }
                    </p>
                    <p>
                        <i className="glyphicon glyphicon-thumbs-up"/>&nbsp;{data.ups}
                    </p>
                    <p>
                        <i className="glyphicon glyphicon-thumbs-down"/>&nbsp;{data.downs}
                    </p>
                    <p>
                        <a href="#" className="btn btn-primary" role="button">
                            Button
                        </a>
                        <a href="#" className="btn btn-default"
                           role="button">
                            Button
                        </a>
                    </p>
                </div>
            </div>
        </div>
    }

}

export default ThumbnailView;
