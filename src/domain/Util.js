/**
 * Created by roshane on 11/14/16.
 */
class Util {

    static buildGalleryURL(criteria) {
        return `/${criteria.section}/${criteria.sort}/${criteria.window}?showViral=${criteria.showViral}`;
    }

    static buildAlbumUrl(albumId){
        return `/album/${albumId}`;
    }
}

export default Util;
