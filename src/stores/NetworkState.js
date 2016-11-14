/**
 * Created by roshane on 11/14/16.
 */
import KeyBox from './../domain/KeyBox';

class NetworkState {

    constructor(state, error = {}) {
        this.state = state;
        this.error = error;
    }

    static init() {
        return new NetworkState(KeyBox.networkState.initial);
    }

    reset() {
        this.state = KeyBox.networkState.initial;
        this.error = {};
    }

    load() {
        this.state = KeyBox.networkState.loading;
        this.error = {};
    }

    failed(error) {
        this.state = KeyBox.networkState.failed;
        this.error = error;
    }

    success() {
        this.state = KeyBox.networkState.success;
        this.error = {};
    }

    isLoading() {
        return this.state == KeyBox.networkState.loading;
    }

    isFailed() {
        return this.state == KeyBox.networkState.failed;
    }

    isSuccess() {
        return this.state == KeyBox.networkState.success;
    }
}

export default NetworkState;