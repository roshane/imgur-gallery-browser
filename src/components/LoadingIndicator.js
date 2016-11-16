/**
 * Created by roshane on 11/15/16.
 */
import React,{Component} from 'react';

class LoadingIndicator extends Component{

    render(){
        return <div>
            <div className="center-block">
                <h1 className="text-center">
                    <i className="fa fa-spinner fa-spin fa-2x fa-fw text-success"></i>
                    <span className="sr-only">Loading...</span>
                    <br/>
                </h1>
            </div>
        </div>
    }
}

export default LoadingIndicator;