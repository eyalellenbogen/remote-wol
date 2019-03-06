const wolService = require('./wol.service');
module.exports = function (router) {
    var wol = function (router, basePath) {
        function register() {
            router.post(basePath + '/:address', wolService)
        }

        return {
            register: register
        }
    }(router, '/wake')

    return {
        registerAll: function () {
            wol.register(router);
        }
    };
};