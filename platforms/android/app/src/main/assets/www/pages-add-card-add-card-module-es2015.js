(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-card-add-card-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Add New Card' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_content\">\n    <ion-label class=\"lbl_card\">{{'Your Credit / Debit Card' | translate}}</ion-label>\n\n    <div class=\"div_card\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"email\" placeholder=\"demo@gmail.com\" [(ngModel)]=\"email\" class=\"input_all\">\n          </ion-input>\n          <ion-label class=\"card_number\">{{'Email Address' | translate}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top : 20px;\">\n        <ion-col size=\"6\">\n          <ion-input type=\"number\" placeholder=\"424242*********4242\" [(ngModel)]=\"cnumber\" class=\"input_all\">\n          </ion-input>\n          <ion-label class=\"card_number\">{{'Card Number' | translate}}</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <img src=\"assets/visa.png\" class=\"img_visa\" />\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row style=\"margin-top : 20px;\">\n        <ion-col size=\"6\">\n          <ion-input type=\"text\" placeholder=\"Joe\" [(ngModel)]=\"cname\" class=\"input_all\"></ion-input>\n          <ion-label class=\"card_number\">{{'Card Holder Name' | translate}}</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-datetime min=\"2020\" max=\"2030\" display-format=\"MMM, YYYY\" [(ngModel)]=\"date\" class=\"input_date\"\n            placeholder=\"Jan, 2019\">\n          </ion-datetime>\n          <ion-label class=\"card_number\">{{'Expiration Date' | translate}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-label class=\"lbl_card\">CVC</ion-label>\n    <ion-input type=\"text\" maxlength=\"3\" [(ngModel)]=\"cvc\" class=\"in_cvc\"></ion-input>\n\n    <ion-button expand=\"full\" color=\"primary\" class=\"btn_addcard\" (click)=\"addcard()\">{{'ADD CARD' | translate}}\n    </ion-button>\n  </div>\n  <p class=\"title\">NOTE : For DEMO USE </p>\n  <p class=\"sub\">CN : 4242 4242 4242 4242</p>\n  <p class=\"sub\">EXP : 12/2022</p>\n  <p class=\"sub\">CVC : 220</p>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/add-card/add-card-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-card/add-card-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function() { return AddCardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-card.page */ "./src/app/pages/add-card/add-card.page.ts");




const routes = [
    {
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
    }
];
let AddCardPageRoutingModule = class AddCardPageRoutingModule {
};
AddCardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/add-card/add-card.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.module.ts ***!
  \***************************************************/
/*! exports provided: AddCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-card-routing.module */ "./src/app/pages/add-card/add-card-routing.module.ts");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-card.page */ "./src/app/pages/add-card/add-card.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let AddCardPageModule = class AddCardPageModule {
};
AddCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
    })
], AddCardPageModule);



/***/ }),

/***/ "./src/app/pages/add-card/add-card.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_content {\n  width: 100%;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.div_content .lbl_card {\n  font-size: 16px;\n  display: block;\n  color: gray;\n  margin-top: 15px;\n}\n.div_content .div_card {\n  margin-top: 20px;\n  width: 100%;\n  border: 1px solid gray;\n  border-radius: 5px;\n  padding: 20px;\n}\n.div_content .div_card .input_all {\n  font-size: 10px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-start: 10px;\n}\n.div_content .div_card .input_date {\n  font-size: 10px;\n  padding: 0px !important;\n  color: black;\n}\n.div_content .div_card .card_number {\n  font-size: 10px;\n  color: gray;\n}\n.div_content .div_card .img_visa {\n  float: right;\n  height: 30px;\n  width: 30px;\n}\n.div_content .in_cvc {\n  border: 1px solid gray;\n  margin-top: 15px;\n  border-radius: 5px;\n  width: 135px;\n  text-align: center;\n  font-size: 10px;\n}\n.div_content .btn_addcard {\n  margin-top: 30px;\n  --box-shadow: none !important;\n}\n.title {\n  margin: 0px;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: var(--ion-color-primary);\n}\n.sub {\n  padding: 10px;\n  margin: 0px;\n  font-size: 1rem;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9hZGQtY2FyZC9hZGQtY2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZC1jYXJkL2FkZC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ1I7QURDSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ1I7QURDUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDWjtBRENRO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NaO0FEWVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ1ZaO0FEWVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNWWjtBRGNJO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1pSO0FEZUk7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0FDYlI7QURnQkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ2JKO0FEZUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1jYXJkL2FkZC1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZfY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcblxuICAgIC5sYmxfY2FyZHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgICAuZGl2X2NhcmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgLmlucHV0X2FsbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW5wdXRfZGF0ZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDNweCAhaW1wb3J0YW50OyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLy8gL2RlZXAvIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1ke1xuICAgICAgICAvLyAgICAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAvLyAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgLy8gICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudFxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIC9kZWVwLyAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3N7XG4gICAgICAgIC8vICAgICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAvLyAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50XG4gICAgICAgIC8vIH1cbiAgICAgICAgLmNhcmRfbnVtYmVye1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7ICBcbiAgICAgICAgfVxuICAgICAgICAuaW1nX3Zpc2F7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbl9jdmN7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDEzNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbiAgICAuYnRuX2FkZGNhcmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi50aXRsZXtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uc3Vie1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiIsIi5kaXZfY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG4uZGl2X2NvbnRlbnQgLmxibF9jYXJkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X2NhcmQgLmlucHV0X2FsbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X2NhcmQgLmlucHV0X2RhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9jYXJkIC5jYXJkX251bWJlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IGdyYXk7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9jYXJkIC5pbWdfdmlzYSB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cbi5kaXZfY29udGVudCAuaW5fY3ZjIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmRpdl9jb250ZW50IC5idG5fYWRkY2FyZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc3ViIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/add-card/add-card.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.ts ***!
  \*************************************************/
/*! exports provided: AddCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPage", function() { return AddCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let AddCardPage = class AddCardPage {
    constructor(util, api, navCtrl) {
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.cnumber = '';
        this.cname = '';
        this.cvc = '';
        this.date = '';
        this.email = '';
    }
    ngOnInit() {
    }
    updateRest(body) {
        this.api.updateProfile(body.uid, body).then((data) => {
            console.log(data);
        });
        this.navCtrl.back();
    }
    addcard() {
        if (this.email === '' || this.cname === '' || this.cnumber === '' ||
            this.cvc === '' || this.date === '') {
            this.util.errorToast(this.util.translate('All Fields are required'));
            return false;
        }
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!(emailfilter.test(this.email))) {
            this.util.errorToast(this.util.translate('Please enter valid email'));
            return false;
        }
        const year = this.date.split('-')[0];
        const month = this.date.split('-')[1];
        const param = {
            'card[number]': this.cnumber,
            'card[exp_month]': month,
            'card[exp_year]': year,
            'card[cvc]': this.cvc
        };
        this.util.show();
        this.api.httpPost('https://api.stripe.com/v1/tokens', param).subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                // this.token = data.id;
                const customer = {
                    description: 'Customer for food app',
                    source: data.id,
                    email: this.email
                };
                this.api.httpPost('https://api.stripe.com/v1/customers', customer).subscribe((customer) => {
                    console.log(customer);
                    this.util.hide();
                    if (customer && customer.id) {
                        // this.cid = customer.id;
                        const cid = {
                            uid: localStorage.getItem('uid'),
                            cid: customer.id
                        };
                        this.updateRest(cid);
                    }
                }, error => {
                    this.util.hide();
                    console.log();
                    if (error && error.error && error.error.error && error.error.error.message) {
                        this.util.showErrorAlert(error.error.error.message);
                        return false;
                    }
                    this.util.errorToast(this.util.translate('Something went wrong'));
                });
            }
            else {
                this.util.hide();
            }
        }, (error) => {
            console.log(error);
            this.util.hide();
            console.log();
            if (error && error.error && error.error.error && error.error.error.message) {
                this.util.showErrorAlert(error.error.error.message);
                return false;
            }
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
};
AddCardPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
AddCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-card.page.scss */ "./src/app/pages/add-card/add-card.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], AddCardPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-card-add-card-module-es2015.js.map