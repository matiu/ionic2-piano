"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var noteService = require('../../services/note.service');
var _ = require('lodash');
var Page1 = (function () {
    function Page1(nav) {
        this.nav = nav;
        var notes = noteService.getNotes();
        this.alertMe = true;
        this.piano = true;
        this.notes = _.each(notes, function (item) {
            item.disabled = false;
            item.times = 0;
        });
    }
    Page1.prototype.play = function (item) {
        console.log('Lets play', item);
        var t = T("sin", {
            freq: item.freq,
            mul: 0.4
        });
        t.play();
        item.disabled = true;
        item.times++;
        if (item.times == 5) {
            var alert_1 = ionic_angular_1.Alert.create({
                title: '5 times',
                subTitle: "You hit " + item.name + " 5 times!",
                buttons: ['OK']
            });
            this.nav.present(alert_1);
            item.times = 0;
        }
        setTimeout(function () {
            console.log('Stopping:', item);
            t.pause();
            item.disabled = false;
        }, 1000);
    };
    Page1 = __decorate([
        ionic_angular_1.Page({
            template: "\n    <ion-navbar *navbar>\n      <ion-title>Classic Piano</ion-title>\n    </ion-navbar>\n\n    <ion-content padding class=\"page1\">\n      <i>Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.</i>\n\n      <div>\n\n      <button *ngFor=\"#item of notes\" (click)=\"play(item)\" full [disabled]=\"item.disabled\"> \n      {{item.name}} \n      <ion-badge item-right>{{item.times}}</ion-badge>\n  \n    </button>\n\n\n    <ion-item>\n      <ion-label>Alert me on 5 clicks</ion-label>\n      <ion-checkbox dark  [(ngModel)]=\"alertMe\"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Piano</ion-label>\n      <ion-toggle [(ngModel)]=\"Piano\"></ion-toggle>\n    </ion-item>\n\n      </div>\n    </ion-content>\n  ",
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], Page1);
    return Page1;
}());
exports.Page1 = Page1;
;
