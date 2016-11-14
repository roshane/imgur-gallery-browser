/**
 * Created by roshane on 11/14/16.
 */
import Alt from './../Alt';
import ImgurActions from './../actions/ImgurActions';
import KeyBox from './../domain/KeyBox';
import NetworkState from './NetworkState';

class ImgurStore {

    constructor() {

        this.page = 1;
        this.pageData = null;
        this.showViral = true;
        this.sort = KeyBox.gallery.sort.top;
        this.networkState = NetworkState.init();
        this.window = KeyBox.gallery.window.day;
        this.section = KeyBox.gallery.section.hot;

        this.bindListeners({
            loadGallery: ImgurActions.LOAD_GALLERY,
            resetGallery: ImgurActions.RESET_GALLERY,
            loadGalleryFailed: ImgurActions.LOAD_GALLERY_FAILED,
            loadGallerySuccess: ImgurActions.LOAD_GALLERY_SUCCESS
        })
    }

    updateSearchCriteria(request) {
        let {key,value}=request;
        this[key] = value;
        console.info("updated search criteria ", this.getState());
    }

    loadGallery() {
        this.networkState.load();
    }

    loadGalleryFailed(error) {
        this.networkState.fail(error);
    }

    loadGallerySuccess(response) {
        this.pageData = response;
        this.networkState.success();
    }

    resetGallery() {
        this.pageData = null;
        this.networkState.reset();
        this.section = KeyBox.gallery.section.hot;
        this.sort = KeyBox.gallery.sort.top;
        this.page = 1;
        this.window = KeyBox.gallery.window.day;
        this.showViral = true;
    }
}

export default Alt.createStore(ImgurStore, "ImgurStore");