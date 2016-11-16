/**
 * Created by roshane on 11/14/16.
 */

var KeyBox = {

    networkState: {
        loading: "loading",
        success: "success",
        failed: "failed",
        initial: "initial"
    },
    pages: {
        home: "home",
        about: "about",
        album: "album"
    },
    gallery: {
        section: {
            values:{
                hot: "hot",
                top: "top",
                user: "user"
            },
            section: "section"
        },
        sort: {
            values:{
                viral: "viral",
                top: "top",
                time: "time"
            },
            sort: "sort"
        },
        window: {
            values:{
                day: "day",
                week: "week",
                month: "month",
                year: "year",
                all: "all"
            },
            window: "window"
        },
        showViral: "showViral"
    }
};

export default KeyBox;