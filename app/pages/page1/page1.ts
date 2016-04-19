import {Page, Alert, NavController} from 'ionic-angular';


import * as noteService from '../../services/note.service';
import * as _  from 'lodash';

declare var T: any;

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  notes: any[];
  alertMe: boolean;
  piano: boolean;

  constructor(public nav: NavController) {
    var notes = noteService.getNotes();

    this.alertMe = true;
    this.piano = true;

    this.notes = _.each(notes, item => { 
      item.disabled = false; 
      item.times = 0; 
    });
  }

  play(item) {
    console.log('Lets play', item);
    var t = T("sin", {
      freq: item.freq,
      mul: 0.4
    });
    t.play();
    item.disabled=true;
    item.times++; 

    if (item.times == 5) {
      let alert = Alert.create({
        title: '5 times',
        subTitle: `You hit ${item.name} 5 times!`,
        buttons: ['OK']
      });
      this.nav.present(alert);
      item.times=0;
    }

    setTimeout(() => {
      console.log('Stopping:', item);
      t.pause();
      item.disabled=false;
    }, 1000);
  }
};
