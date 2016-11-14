/**
 * Created by roshane on 11/14/16.
 */
import React,{Component} from 'react';
import ThumbnailView from './ThumbnailView';
import ImgurActions from './../actions/ImgurActions';
import Util from './../domain/Util';
class Home extends Component {

    componentDidMount() {
        let {imgurStore}=this.props;
        let requestURL = Util.buildURL(imgurStore);
        ImgurActions.loadGallery(requestURL);
    }

    render() {
        let {imgurStore} = this.props;
        return <div>
            {
                imgurStore.networkState.isLoading() && <div>
                    <div class="center-block">
                        <h1 className="text-center">
                            <i className="glyphicon glyphicon-hourglass"/>
                            <br/>
                            <span>Loading</span>
                        </h1>
                    </div>
                </div>
            }
            {
                imgurStore.networkState.isFailed() && <div>
                    <strong>Sorry something went wrong ....</strong>
                </div>
            }
            {
                imgurStore.networkState.isSuccess() &&
                <div className="row">
                    {
                        imgurStore.pageData.data.map((data, i)=> {
                            return <ThumbnailView data={data} key={i}/>
                        })
                    }
                </div>
            }

        </div>
    }
}

export default Home;
