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
var page1_1 = require('../page1/page1');
// import {Page2} from '../page2/page2';
// import {Page3} from '../page3/page3';
//
var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = page1_1.Page1;
    }
    TabsPage = __decorate([
        ionic_angular_1.Page({
            template: "\n    <ion-tabs>\n      <ion-tab [root]=\"tab1Root\" tabTitle=\"Tab 1\" tabIcon=\"pulse\"></ion-tab>\n      <ion-tab [root]=\"tab2Root\" tabTitle=\"Tab 2\" tabIcon=\"chatbubbles\"></ion-tab>\n      <ion-tab [root]=\"tab3Root\" tabTitle=\"Tab 3\" tabIcon=\"cog\"></ion-tab>\n    </ion-tabs>\n    ~               \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
exports.TabsPage = TabsPage;
