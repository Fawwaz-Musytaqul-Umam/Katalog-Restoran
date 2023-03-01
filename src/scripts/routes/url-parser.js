const UrlParser = {
    parseUrlWithCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        const splitedUrl = this._urlSplitter(url);
        return this._urlCombiner(splitedUrl);
    },

    parseUrlWithoutCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        return this._urlSplitter(url);
    },

    _urlSplitter(url) {
        const splitedUrl = url.split('/');
        return {
            resource: splitedUrl[1] || null,
            id: splitedUrl[2] || null,
        };
    },

    _urlCombiner(splitedUrl) {
        return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
               (splitedUrl.id ? '/:id' : '');
    },
};

export default UrlParser;
