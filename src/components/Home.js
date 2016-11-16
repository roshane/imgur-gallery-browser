/**
 * Created by roshane on 11/14/16.
 */
import React,{Component} from 'react';
import GalleryView from './GalleryView';
import ImgurActions from './../actions/ImgurActions';
import Util from './../domain/Util';
import LoadingIndicator from './LoadingIndicator';
import ErrorIndicator from './ErrorIndicator';

class Home extends Component {

    componentDidMount() {
        let {imgurStore}=this.props;
        let requestURL = Util.buildGalleryURL(imgurStore);
        console.info("Loading homepage data");
        ImgurActions.loadGallery(requestURL);
    }

    render() {
        let {imgurStore} = this.props;
        return <div className="home">
            {
                (imgurStore.networkState.isLoading() || imgurStore.networkState.isInitial())
                && <LoadingIndicator/>
            }
            {
                imgurStore.networkState.isFailed() && <ErrorIndicator error={imgurStore.networkState.error}/>
            }
            {
                imgurStore.networkState.isSuccess() &&
                <div className="row">
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    {
                        imgurStore.pageData.data.map((data, i)=> {
                            return <GalleryView data={data}
                                                key={i}
                                                index={i}/>
                        })
                    }
                    </div>
                </div>
            }

        </div>
    }
}

export default Home;
