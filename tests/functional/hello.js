define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require) {
    registerSuite({
        name: 'simple-example',

        teardown: function() {
            this.remote.quit();
        },

        'greeting form': function () {
            return this.remote
                .get(require.toUrl('simple-example.html'))
                .setFindTimeout(5000)
                .findByCssSelector('body.loaded')
                .findById('nameField')
                    .click()
                    .type('Elaine')
                    .end()
                .findByCssSelector('#loginForm input[type=submit]')
                    .click()
                    .end()
                .findById('greeting')
                .getVisibleText()
                .then(function (text) {
                    assert.strictEqual(text, 'Hello, Elaine!',
                        'Greeting should be displayed when the form is submitted');
                });
        }
    });
});