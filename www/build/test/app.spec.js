"use strict";
var browser_1 = require('angular2/platform/testing/browser');
var testing_1 = require('angular2/testing');
var ionic_angular_1 = require('ionic-angular');
var app_1 = require('./app');
// this needs doing _once_ for the entire test suite, hence it's here
testing_1.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
var pianoApp = null;
function getComponentStub(name) {
    'use strict';
    var component = {
        setRoot: function () { return true; },
        close: function (root) { return true; },
    };
    return component;
}
function main() {
    'use strict';
    describe('PianoApp', function () {
        beforeEach(function () {
            var ionicApp = new ionic_angular_1.IonicApp(null, null, null);
            var platform = new ionic_angular_1.Platform();
            pianoApp = new app_1.PianoApp(ionicApp, platform);
        });
        it('initialises with two possible pages', function () {
            expect(pianoApp['pages'].length).toEqual(2);
        });
        it('initialises with a root page', function () {
            expect(pianoApp['rootPage']).not.toBe(null);
        });
        it('initialises with an app', function () {
            expect(pianoApp['app']).not.toBe(null);
        });
        //
        // it('opens a page', () => {
        //   spyOn(pianoApp['app'], 'getComponent').and.callFake(getComponentStub);
        //   pianoApp.openPage(pianoApp['pages'][1]);
        //   expect(pianoApp['app'].getComponent).toHaveBeenCalledWith('leftMenu');
        //   expect(pianoApp['app'].getComponent).toHaveBeenCalledWith('nav');
        // });
    });
}
exports.main = main;
