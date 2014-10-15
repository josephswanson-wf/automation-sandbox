define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require) {
    registerSuite({
        name: 'cloth-example',

        teardown: function() {
            this.remote.quit();
        },

        'cloth_test': function () {
            return this.remote
                .get(require.toUrl('cloth-example.html'))
                .setFindTimeout(5000)
                .pressFinger(300, 300)
                    .moveFinger(600, 600)
                    .releaseFinger(600, 600);
        }
    });
});