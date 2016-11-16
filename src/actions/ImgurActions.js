/**
 * Created by roshane on 11/14/16.
 */
import Alt from './../Alt';
import ApiSource from './../ApiSource';

class ImgurActions {

    loadGallery(requestURL) {
        ApiSource.getGallery(requestURL)
            .then(this.pageDataSuccess)
            .catch(this.pageDataFailed);
        return true;
    }

    pageDataSuccess(response) {
        return response;
    }

    pageDataFailed(error) {
        return error;
    }

    loadAlbum(requestURL) {
        ApiSource.getAlbum(requestURL)
            .then(this.pageDataSuccess)
            .catch(this.pageDataFailed);
        return true;
    }

    updateSearchCriteria(request) {
        return request;
    }

    resetPageData() {
        return true;
    }

    setSelectedImage(imgData) {
        return imgData;
    }
}

export default Alt.createActions(ImgurActions);
