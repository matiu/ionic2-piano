// import 'es6-shim';
import { App, IonicApp, Platform } from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})


export class PianoApp {
  private rootPage: any = TabsPage;
  private app: IonicApp;
  private platform: Platform;

  constructor(app: IonicApp, platform: Platform) {

    this.app = app;
    this.platform = platform;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
