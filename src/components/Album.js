/**
 * Created by roshane on 11/15/16.
 */
import React,{Component} from 'react';
import LoadingIndicator from './LoadingIndicator';
import ImageView from './ImageView';
import ErrorIndicator from './ErrorIndicator';

class Album extends Component {

    render() {
        let {imgurStore}=this.props;

        return <div>
            {
                imgurStore.networkState.isLoading() && <LoadingIndicator/>
            }
            <div className="row">
                {

                    imgurStore.networkState.isSuccess() && <div>
                        {
                            imgurStore.pageData.data && imgurStore.pageData.data.images.map((image, i)=> {
                                return <ImageView key={i} data={image}/>
                            })
                        }
                    </div>
                }
            </div>
            {
                imgurStore.networkState.isFailed() && <div>
                    <ErrorIndicator error={imgurStore.networkState.error}/>
                </div>
            }
        </div>
    }
}

export default Album;
