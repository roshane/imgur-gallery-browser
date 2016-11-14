/**
 * Created by roshane on 11/14/16.
 */
import Alt from './../Alt';
import ApiSource from './../ApiSource';

class ImgurActions {

    loadGallery(requestURL) {
        ApiSource.getGallery(requestURL)
            .then(this.loadGallerySuccess)
            .catch(this.loadGalleryFailed);
        return true;
    }

    loadGallerySuccess(response) {
        return response;
    }

    loadGalleryFailed(error) {
        return error;
    }

    resetGallery() {
        return true;
    }
}

export default Alt.createActions(ImgurActions);
