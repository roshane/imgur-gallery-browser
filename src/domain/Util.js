/**
 * Created by roshane on 11/14/16.
 */
class Util {

    static buildURL(criteria) {
        return `/${criteria.section}/${criteria.sort}/${criteria.window}?showViral=${criteria.showViral}`;
    }
}

export default Util;
