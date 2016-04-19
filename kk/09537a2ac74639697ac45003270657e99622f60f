import { TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from 'angular2/platform/testing/browser';
import { setBaseTestProviders } from 'angular2/testing';
import { IonicApp, Platform }   from 'ionic-angular';
import { PianoApp }           from './app';

// this needs doing _once_ for the entire test suite, hence it's here
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

let pianoApp : PianoApp = null;

function getComponentStub(name: string): any {
  'use strict';

  let component: Object = {
    setRoot: function(): boolean { return true; },
    close: function(root: any): boolean { return true; },
  };
  return component;
}

export function main(): void {
  'use strict';

  describe('PianoApp', () => {

    beforeEach(() => {
      let ionicApp: IonicApp = new IonicApp(null, null, null);
      let platform: Platform = new Platform();
      pianoApp = new PianoApp(ionicApp, platform);
    });

    it('initialises with two possible pages', () => {
      expect(pianoApp['pages'].length).toEqual(2);
    });

    it('initialises with a root page', () => {
      expect(pianoApp['rootPage']).not.toBe(null);
    });

    it('initialises with an app', () => {
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
