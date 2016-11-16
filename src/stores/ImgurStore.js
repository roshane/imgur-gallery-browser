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
        this.selectedImage = null;
        this.sort = KeyBox.gallery.sort.values.top;
        this.networkState = NetworkState.init();
        this.window = KeyBox.gallery.window.values.day;
        this.section = KeyBox.gallery.section.values.hot;

        this.bindListeners({
            loadAlbum: ImgurActions.LOAD_ALBUM,
            loadGallery: ImgurActions.LOAD_GALLERY,
            resetPageData: ImgurActions.RESET_PAGE_DATA,
            pageDataFailed: ImgurActions.PAGE_DATA_FAILED,
            pageDataSuccess: ImgurActions.PAGE_DATA_SUCCESS,
            setSelectedImage: ImgurActions.SET_SELECTED_IMAGE,
            updateSearchCriteria: ImgurActions.UPDATE_SEARCH_CRITERIA
        })
    }

    setSelectedImage(image) {
        this.selectedImage = image;
    }

    updateSearchCriteria(request) {
        let {key,value}=request;
        this[key] = value;
    }

    loadGallery() {
        this.networkState.load();
    }

    loadAlbum() {
        this.networkState.load();
    }

    pageDataFailed(error) {
        this.networkState.failed(error);
    }

    pageDataSuccess(response) {
        this.pageData = response;
        this.networkState.success();
    }

    resetPageData() {
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