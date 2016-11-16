/**
 * Created by roshane on 11/14/16.
 */

import EndPoint from './apiRequestHandler';

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