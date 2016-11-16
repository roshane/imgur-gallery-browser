/**
 * Created by roshane on 11/14/16.
 */

import EndPoint from './apiRequestHandler';

//imgur api resource
//
//client id : 990ffb35716888a
//client secret : bda302afdb3af2d90e99c452dd26da00830da751

class ApiSource {

    constructor() {
        this.authToken = "990ffb35716888a";
    }

    getGallery(requestURL) {
        return EndPoint.getWithAuth(requestURL, this.authToken);
    }

    getAlbum(requestURL) {
        return EndPoint.getWithAuth(requestURL, this.authToken);
    }
}

export default new ApiSource();