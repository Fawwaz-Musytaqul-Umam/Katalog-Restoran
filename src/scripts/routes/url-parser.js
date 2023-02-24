class urlParser {
    static parseUrlWithCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        const splitedUrl = this._urlSplitter(url);
        return this._urlCombiner(splitedUrl);
    }

    static parseUrlWithoutCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        return this._urlSplitter(url);
    }

    static _urlSplitter(url) {
        const splitedUrl = url.split('/');
        return {
            resource: splitedUrl[1] || null,
            id: splitedUrl[2] || null,
        };
    }

    static _urlCombiner(splitedUrl) {
        return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
               (splitedUrl.id ? '/:id' : '');
    }
};

export default urlParser;
