/**
 * Created by roshane on 11/14/16.
 */
import endPoint from 'superagent';

let API_BASE = "https://api.imgur.com/3/gallery";
//let API_BASE = "/api";
let JSON = "application/json";

let request = {

    getWithAuth: function (url, authToken) {

        return new Promise(function (resolve, reject) {
            endPoint
                .get(API_BASE + url)
                .set('Accept', JSON)
                .set('Authorization', `Client-ID ${authToken}`)
                .end(function (err, res) {
                    if (err || !res.ok) {
                        reject({
                            code: "E5000",
                            message: err.message
                        })
                    } else {
                        resolve(res.body)
                    }
                })
        });
    }
};

export default request;
