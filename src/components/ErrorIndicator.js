/**
 * Created by roshane on 11/15/16.
 */
import React,{Component} from 'react';

class ErrorIndicator extends Component {

    render() {
        let {error} = this.props;
        return <div>
            <div className="center-block">
                <h1 className="text-center">
                    <i className="fa  fa-2x fa-warning text-danger"></i>
                    <br/>
                    <span className="small">{error.message}</span>
                    <span className="sr-only">{error.message}</span>
                    <br/>
                </h1>
            </div>
        </div>
    }
}

export default ErrorIndicator;