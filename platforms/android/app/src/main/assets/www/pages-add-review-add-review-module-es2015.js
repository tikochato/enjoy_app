(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-review-add-review-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-review/add-review.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-review/add-review.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Add Review' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-label class=\"head_lbl\">{{'Rate your Experiance' | translate}}</ion-label>\n\n    <div class=\"flex_div\">\n      <div class=\"first_div\">\n        <div class=\"rate_div\" [class.rate1]=\"rate==1\" [class.rate2]=\"rate==2\" [class.rate3]=\"rate==3\"\n          [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\" (click)=\"onClick(1)\"><span>1</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate2]=\"rate==2\" [class.rate3]=\"rate==3\" [class.rate4]=\"rate==4\"\n          [class.rate5]=\"rate==5\" (click)=\"onClick(2)\"><span>2</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate3]=\"rate==3\" [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\"\n          (click)=\"onClick(3)\"><span>3</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\" (click)=\"onClick(4)\"><span>4</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate5]=\"rate==5\" (click)=\"onClick(5)\"><span>5</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"second_div\">\n        <ion-label *ngIf=\"rate==1\" class=\"rate1\">{{'Horrible' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==2\" class=\"rate2\">{{'Bad' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==3\" class=\"rate3\">{{'Average' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==4\" class=\"rate4\">{{'Good' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==5\" class=\"rate5\">{{'Excellent' | translate}}</ion-label>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"lower_div\" (click)=\"openCamera()\" *ngIf=\"image ==''\">\n      <ion-label class=\"head_lbl2\">{{'Add Photos' | translate}}</ion-label>\n\n      <div class=\"gray_div\">\n        <ion-icon class=\"camera\" name=\"camera\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"lower_div\" (click)=\"openCamera()\" *ngIf=\"image !=''\">\n\n      <div class=\"gray_div\" class=\"back_image\" [style.backgroundImage]=\"'url('+image+')'\">\n      </div>\n    </div>\n    <div class=\"line_div\"></div>\n\n    <div class=\"lower_div\">\n      <ion-label class=\"head_lbl2\">{{'Anything else you want to add' | translate}} <span>0/100</span></ion-label>\n      <ion-textarea rows=\"4\" [(ngModel)]=\"descriptions\" placeholder=\"Write detailed review here..\"></ion-textarea>\n\n      <ion-label class=\"small_gray\">\n        {{'Be polite and friendly. This is a place for love and feedback, not hate. You can use @friends and #tags as well.' | translate}}\n      </ion-label>\n    </div>\n    <div class=\"line_div\"></div>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"addReview()\" expand=\"block\" class=\"sub_btn\">\n      {{'Submit Dinimg Review' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/add-review/add-review-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/add-review/add-review-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AddReviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageRoutingModule", function() { return AddReviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-review.page */ "./src/app/pages/add-review/add-review.page.ts");




const routes = [
    {
        path: '',
        component: _add_review_page__WEBPACK_IMPORTED_MODULE_3__["AddReviewPage"]
    }
];
let AddReviewPageRoutingModule = class AddReviewPageRoutingModule {
};
AddReviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddReviewPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/add-review/add-review.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-review/add-review.module.ts ***!
  \*******************************************************/
/*! exports provided: AddReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageModule", function() { return AddReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-review-routing.module */ "./src/app/pages/add-review/add-review-routing.module.ts");
/* harmony import */ var _add_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-review.page */ "./src/app/pages/add-review/add-review.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let AddReviewPageModule = class AddReviewPageModule {
};
AddReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_review_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddReviewPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_add_review_page__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"]]
    })
], AddReviewPageModule);



/***/ }),

/***/ "./src/app/pages/add-review/add-review.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-review/add-review.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding-top: 20px;\n}\n.main_content_div .head_lbl {\n  font-weight: 600;\n  font-size: 18px;\n  padding-left: 20px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 10px;\n  width: 100%;\n  align-items: center;\n  padding: 0px 20px;\n}\n.main_content_div .flex_div .first_div {\n  display: flex;\n  justify-content: space-between;\n  width: 70%;\n}\n.main_content_div .flex_div .first_div .rate_div {\n  border: 1px solid lightgray;\n  color: lightgray;\n  border-radius: 25px;\n  padding: 3px 10px;\n  display: flex;\n  flex-direction: row;\n}\n.main_content_div .flex_div .first_div .rate_div ion-icon {\n  font-size: 15px;\n}\n.main_content_div .flex_div .first_div .rate_div span {\n  font-size: 18px;\n  font-weight: 600;\n}\n.main_content_div .flex_div .first_div .rate1 {\n  background: #ed5a74;\n  color: white;\n  border: 1px solid #ed5a74;\n}\n.main_content_div .flex_div .first_div .rate2 {\n  background: #f7c007;\n  color: white;\n  border: 1px solid #f7c007;\n}\n.main_content_div .flex_div .first_div .rate3 {\n  background: #7bdb7b;\n  color: white;\n  border: 1px solid #7bdb7b;\n}\n.main_content_div .flex_div .first_div .rate4 {\n  background: #13ad13;\n  color: white;\n  border: 1px solid #13ad13;\n}\n.main_content_div .flex_div .first_div .rate5 {\n  background: #085c08;\n  color: white;\n  border: 1px solid #085c08;\n}\n.main_content_div .flex_div .second_div .rate1 {\n  color: #ed5a74;\n}\n.main_content_div .flex_div .second_div .rate2 {\n  color: #f7c007;\n}\n.main_content_div .flex_div .second_div .rate3 {\n  color: #7bdb7b;\n}\n.main_content_div .flex_div .second_div .rate4 {\n  color: #13ad13;\n}\n.main_content_div .flex_div .second_div .rate5 {\n  color: #085c08;\n}\n.main_content_div .line_div {\n  width: 100%;\n  height: 3px;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .lower_div {\n  padding: 20px;\n}\n.main_content_div .lower_div .head_lbl2 {\n  font-weight: 600;\n  font-size: 18px;\n}\n.main_content_div .lower_div .gray_div {\n  margin-top: 10px;\n  height: 70px;\n  width: 70px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  background: #f3f3f3;\n  position: relative;\n}\n.main_content_div .lower_div .gray_div .camera {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n}\n.main_content_div .lower_div ion-textarea {\n  border-bottom: 1px solid lightgray;\n}\n.main_content_div .lower_div .small_gray {\n  font-size: 12px;\n  color: gray;\n  margin-top: 10px;\n}\n.sub_btn {\n  --background: var(--ion-color-primary);\n  --border-radius: 5px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUVBLGlCQUFBO0FDQUo7QURDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NSO0FEQVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FDRVo7QURBWTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRWhCO0FERGdCO0VBQ0ksZUFBQTtBQ0dwQjtBREFnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0VwQjtBREdZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNEaEI7QURHWTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRGhCO0FER1k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0RoQjtBREdZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNEaEI7QURHWTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRGhCO0FETVk7RUFDSSxjQUFBO0FDSmhCO0FETVk7RUFDSSxjQUFBO0FDSmhCO0FETVk7RUFDSSxjQUFBO0FDSmhCO0FETVk7RUFDSSxjQUFBO0FDSmhCO0FETVk7RUFDSSxjQUFBO0FDSmhCO0FEUUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ05SO0FEU0k7RUFDSSxhQUFBO0FDUFI7QURTUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ1BaO0FEVVE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNSWjtBRFVZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ1JoQjtBRFlRO0VBQ0ksa0NBQUE7QUNWWjtBRGFRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1haO0FEZUE7RUFDSSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1yZXZpZXcvYWRkLXJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aCA6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAuaGVhZF9sYmx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAuZmxleF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICAuZmlyc3RfZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG5cbiAgICAgICAgICAgIC5yYXRlX2RpdntcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJhdGUxe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZDVhNzQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZDVhNzQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZTJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3YzAwNztcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y3YzAwNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlM3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2JkYjdiO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2JkYjdiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGU0e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxM2FkMTM7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxM2FkMTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZTV7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA4NWMwODtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzA4NWMwODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmRfZGl2e1xuICAgICAgICAgICAgLnJhdGUxe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWQ1YTc0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGUye1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjdjMDA3XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZTN7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3YmRiN2I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZTR7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMxM2FkMTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZTV7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwODVjMDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxpbmVfZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAubG93ZXJfZGl2e1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIC5oZWFkX2xibDJ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyYXlfZGl2e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLmNhbWVyYXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXRleHRhcmVhe1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbWFsbF9ncmF5e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnN1Yl9idG57XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZpcnN0X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDcwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuZmlyc3RfZGl2IC5yYXRlX2RpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZpcnN0X2RpdiAucmF0ZV9kaXYgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZpcnN0X2RpdiAucmF0ZV9kaXYgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuZmlyc3RfZGl2IC5yYXRlMSB7XG4gIGJhY2tncm91bmQ6ICNlZDVhNzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkNWE3NDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuZmlyc3RfZGl2IC5yYXRlMiB7XG4gIGJhY2tncm91bmQ6ICNmN2MwMDc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3YzAwNztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuZmlyc3RfZGl2IC5yYXRlMyB7XG4gIGJhY2tncm91bmQ6ICM3YmRiN2I7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3Yjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuZmlyc3RfZGl2IC5yYXRlNCB7XG4gIGJhY2tncm91bmQ6ICMxM2FkMTM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzYWQxMztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuZmlyc3RfZGl2IC5yYXRlNSB7XG4gIGJhY2tncm91bmQ6ICMwODVjMDg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA4NWMwODtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuc2Vjb25kX2RpdiAucmF0ZTEge1xuICBjb2xvcjogI2VkNWE3NDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuc2Vjb25kX2RpdiAucmF0ZTIge1xuICBjb2xvcjogI2Y3YzAwNztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuc2Vjb25kX2RpdiAucmF0ZTMge1xuICBjb2xvcjogIzdiZGI3Yjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuc2Vjb25kX2RpdiAucmF0ZTQge1xuICBjb2xvcjogIzEzYWQxMztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuc2Vjb25kX2RpdiAucmF0ZTUge1xuICBjb2xvcjogIzA4NWMwODtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saW5lX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5oZWFkX2xibDIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5ncmF5X2RpdiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5ncmF5X2RpdiAuY2FtZXJhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiBpb24tdGV4dGFyZWEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuc21hbGxfZ3JheSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdWJfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/add-review/add-review.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-review/add-review.page.ts ***!
  \*****************************************************/
/*! exports provided: AddReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPage", function() { return AddReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");








let AddReviewPage = class AddReviewPage {
    constructor(route, api, actionSheetController, camera, util, navCtrl) {
        this.route = route;
        this.api = api;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.util = util;
        this.navCtrl = navCtrl;
        this.rate = 1;
        this.coverImage = '';
        this.image = '';
        this.descriptions = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getDetails();
            }
        });
    }
    getDetails() {
        this.api.getVenueDetails(this.id).then((data) => {
            console.log(data);
            if (data) {
                this.ratting = data.ratting;
                this.totalRatting = data.totalRatting;
            }
        }, error => {
            console.log('errir', error);
        }).catch(error => {
            console.log(error);
        });
    }
    onClick(val) {
        this.rate = val;
    }
    onChange(val) {
        console.log(val);
    }
    addReview() {
        const myRate = (this.ratting * this.rate);
        let totalRatting = Math.round((this.totalRatting * 5) / myRate);
        console.log('total', totalRatting);
        if (!totalRatting) {
            totalRatting = this.rate;
        }
        console.log(totalRatting);
        const review = {
            id: localStorage.getItem('uid'),
            descriptions: this.descriptions,
            rate: this.rate,
            cover: this.coverImage,
            restId: this.id,
            vid: this.id,
            uid: localStorage.getItem('uid')
        };
        this.util.show();
        console.log('review', review);
        this.api.addReview(review).then((data) => {
            const restParam = {
                ratting: this.ratting + 1,
                totalRatting: totalRatting,
                uid: this.id
            };
            console.log('restParam', restParam);
            this.api.updateVenue(restParam).then((newUpdate) => {
                console.log(newUpdate);
                this.util.hide();
                this.util.showToast(this.util.translate('Review added succesfully'), 'success', 'bottom');
                this.util.publishReview('hello');
                this.navCtrl.navigateRoot(['/tabs/tab4']);
            }, error => {
                console.log('err', error);
                this.util.hide();
            }).catch(error => {
                this.util.hide();
                console.log(error);
            });
        }, error => {
            console.log('err', error);
            this.util.hide();
        }).catch(error => {
            this.util.hide();
            console.log(error);
        });
    }
    openCamera() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: this.util.translate('Choose from'),
                buttons: [{
                        text: this.util.translate('Gallery'),
                        icon: 'images',
                        handler: () => {
                            console.log('Images clicked');
                            this.opemCamera('gallery');
                        }
                    }, {
                        text: this.util.translate('Camera'),
                        icon: 'camera',
                        handler: () => {
                            console.log('camera clicked');
                            this.opemCamera('camera');
                        }
                    }, {
                        text: this.util.translate('Cancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    opemCamera(type) {
        const options = {
            quality: 100,
            targetHeight: 700,
            targetWidth: 700,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: type === 'camera' ? 1 : 0
        };
        console.log('open');
        this.camera.getPicture(options).then((imageData) => {
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            this.image = base64Image;
            this.util.show();
            const id = localStorage.getItem('uid') + '/' + this.util.makeid(10);
            firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child(localStorage.getItem('uid')).child(btoa(id) + '.jpg')
                .putString(base64Image, 'data_url').then((snapshot) => {
                this.util.hide();
                snapshot.ref.getDownloadURL().then((url) => {
                    console.log('url uploaded', url);
                    this.coverImage = url;
                });
            }, error => {
                this.util.hide();
                console.log(error);
            }).catch((error) => {
                console.log(error);
                this.util.hide();
            });
        }, (err) => {
            this.util.hide();
        });
    }
};
AddReviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
AddReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-review',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-review.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-review/add-review.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-review.page.scss */ "./src/app/pages/add-review/add-review.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], AddReviewPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-review-add-review-module-es2015.js.map