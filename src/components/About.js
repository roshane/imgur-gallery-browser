/**
 * Created by roshane on 11/14/16.
 */
import React,{Component} from 'react';

class About extends Component {

    render() {
        return <blockquote>
            <h4>Imgur gallery browser sample application</h4>
            <hr/>
            <h4>Tech Stack</h4>
            <ul>
                <li>ReactJS</li>
                <li>Express</li>
                <li>Node</li>
                <li>AltJS</li>
                <li>Alt Container</li>
                <li>Twitter Bootstrap</li>
            </ul>
            <div className="pull-right">
                <p className="small">developed by: roshanemadusanka@gmail.com</p>
            </div>
        </blockquote>
    }
}

export default About;