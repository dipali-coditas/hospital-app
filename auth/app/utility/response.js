export class ResponseHandler {
    constructor(data = null, error = null) {
        this.data = data;
        this.error = error;
    }
}

// { data: null/data, error: null/error }