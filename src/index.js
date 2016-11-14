/**
 * Created by roshane on 11/14/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {browserHistory,Router} from 'react-router';
import routes from './routes/Route';

ReactDom.render(<Router routes={routes} history={browserHistory}/>,document.getElementById("root"));
