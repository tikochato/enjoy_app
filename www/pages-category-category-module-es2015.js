(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #content>\n  <div class=\"mainContent\">\n    <div class=\"restContent\" [style.backgroundImage]=\"'url('+cover+')'\">\n      <div class=\"btnss\">\n        <ion-icon (click)=\"back()\" class=\"backIcon\" color=\"light\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n        <ion-label class=\"moreInfo\" (click)=\"openDetails()\">{{'View more' | translate}}</ion-label>\n      </div>\n    </div>\n    <div class=\"foodsContent\">\n      <ion-label class=\"restname\">{{name}}</ion-label>\n      <ion-label class=\"cusine\">{{getCusine(cusine)}}</ion-label>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"9\">\n            <div class=\"ratting\">\n              <ion-icon [name]=\"totalRatting >= 1 ? 'star-outline':'star'\"\n                [color]=\"totalRatting >= 1 ? 'warning':'medium'\">\n              </ion-icon>\n              <ion-icon [name]=\"totalRatting >= 2 ? 'star-outline':'star'\"\n                [color]=\"totalRatting >= 2 ? 'warning':'medium'\">\n              </ion-icon>\n              <ion-icon [name]=\"totalRatting >= 3 ? 'star-outline':'star'\"\n                [color]=\"totalRatting >= 3 ? 'warning':'medium'\">\n              </ion-icon>\n              <ion-icon [name]=\"totalRatting >= 4 ? 'star-outline':'star'\"\n                [color]=\"totalRatting >= 4 ? 'warning':'medium'\">\n              </ion-icon>\n              <ion-icon [name]=\"totalRatting >= 5 ? 'star-outline':'star'\"\n                [color]=\"totalRatting >= 5 ? 'warning':'medium'\">\n              </ion-icon>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"deliveryAddress\">\n              <img src=\"assets/pin.png\" alt=\"\" class=\"pin\">\n              <p class=\"address\"> {{getAddress()}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div *ngFor=\"let item of dummy\">\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div *ngFor=\"let cate of categories\">\n        <ion-label class=\"cateTitle\" [id]=\"cate.id\">{{cate.name}}</ion-label>\n        <div class=\"card_div\">\n\n          <div class=\"card\" *ngFor=\"let item of foods;let i = index\">\n            <div *ngIf=\"cate.id == item.cid.id\" class=\"mainCat\">\n              <img [src]=\"item.cover\" alt=\"\" class=\"image_div\">\n              <div class=\"desc_div\">\n                <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n                <ion-label class=\"medium_lbl\">{{item.desc}}</ion-label>\n                <ion-label class=\"price_lbl\">{{'currencyCode' | translate}} {{item.price}}</ion-label>\n              </div>\n              <div class=\"cartBtn\" *ngIf=\"item.quantiy <= 0\">\n                <ion-label class=\"btns\" (click)=\"add(i)\">{{'Add' | translate}}</ion-label>\n                <!-- <ion-button (click)=\"add(i)\" size=\"small\" expand=\"block\" fill=\"outline\" shape=\"round\">\n                  {{'Add' | translate}}\n                </ion-button> -->\n              </div>\n              <div class=\"cartBtn2\" *ngIf=\"item.quantiy > 0\">\n                <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </ion-button>\n                <p class=\"qunitity\">{{item.quantiy}}</p>\n                <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <app-popover></app-popover> -->\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"presentPopover($event)\">\n    <ion-fab-button color=\"light\" mode=\"ios\">\n      <ion-icon name=\"list\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">{{'Menu' | translate}}</ion-label>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n<ion-footer *ngIf=\"totalItem >0\">\n  <ion-toolbar color=\"primary\">\n    <ion-label color=\"light\" *ngIf=\"totalItem ===1\">{{totalItem}} {{'ITEM' | translate}}</ion-label>\n    <ion-label color=\"light\" *ngIf=\"totalItem >1\">{{totalItem}} {{'ITEMS' | translate}}</ion-label>\n    <ion-label color=\"light\">{{'currencyCode' | translate}} {{totalPrice}}</ion-label>\n    <ion-button (click)=\"viewCart()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n      {{'View Cart' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/category/category-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function() { return CategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/pages/category/category-routing.module.ts");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");
/* harmony import */ var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");










let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
    })
], CategoryPageModule);



/***/ }),

/***/ "./src/app/pages/category/category.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  --border-radius:10px;\n  --padding:10px;\n  width: 80px;\n}\n\nion-label {\n  display: block;\n}\n\nion-toolbar {\n  padding: 0px 10px;\n  font-weight: bold;\n}\n\nion-toolbar ion-button {\n  font-weight: bold;\n}\n\n.mainContent .restContent {\n  width: 100%;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.mainContent .restContent .btnss {\n  background-image: linear-gradient(-230deg, #17181a63, #827777) !important;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  padding: 10px;\n  height: 150px;\n}\n\n.mainContent .restContent .btnss .backIcon {\n  font-size: 2rem;\n}\n\n.mainContent .restContent .btnss .moreInfo {\n  color: white;\n  font-weight: bold;\n}\n\n.mainContent .foodsContent {\n  position: absolute;\n  background: white;\n  height: 100%;\n  top: 100px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  width: 100%;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .restname {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .cusine {\n  font-size: 1rem;\n  color: lightgray;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .ratting {\n  font-size: 1rem;\n  margin-top: 10px;\n}\n\n.mainContent .foodsContent .deliveryAddress {\n  display: flex;\n  padding: 10px 0px 0px 0px;\n  text-align: right;\n}\n\n.mainContent .foodsContent .deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .foodsContent .deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.mainContent .foodsContent .vegSection {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .cateTitle {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .card_div .card {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  padding: 5px 10px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat {\n  display: flex;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 80px !important;\n  height: 80px !important;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div {\n  margin-left: 20px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .ratting {\n  font-size: 10px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .medium_lbl {\n  font-size: 10px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .small_lbl {\n  font-size: 8px;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .price_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n  font-weight: bold;\n  margin-top: 20px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn {\n  position: absolute;\n  right: 15px;\n  width: 60px;\n  background: white;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn .btns {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 10px;\n  padding: 2px;\n  font-size: 12px;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNHLGlCQUFBO0VBQ0EsaUJBQUE7QUNHSDs7QURGRztFQUNJLGlCQUFBO0FDSVA7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0VSOztBRERRO0VBQ0kseUVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNHWjs7QURGWTtFQUlJLGVBQUE7QUNDaEI7O0FEQ1k7RUFJSSxZQUFBO0VBQ0EsaUJBQUE7QUNGaEI7O0FET0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNOUjs7QURPUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMWjs7QURPUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTFo7O0FET1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNMWjs7QURPUTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDTFo7O0FETVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0poQjs7QURNWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDSmhCOztBRE9RO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ0xaOztBRE9RO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0xaOztBRFFZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTmhCOztBRE9nQjtFQUNJLGFBQUE7QUNMcEI7O0FETW9CO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDSnhCOztBRE1vQjtFQUNJLGlCQUFBO0FDSnhCOztBREt3QjtFQUVJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNKNUI7O0FETXdCO0VBRUksZUFBQTtBQ0w1Qjs7QURPd0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTDVCOztBRE93QjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0w1Qjs7QURPd0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0w1Qjs7QURTb0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNQeEI7O0FEUXdCO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ041Qjs7QURTb0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDUHhCOztBRFF3QjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ041QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1c1x0OjEwcHg7XG4gICAgLS1wYWRkaW5nOjEwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG59XG5pb24tbGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tdG9vbGJhciB7XG4gICBwYWRkaW5nOiAwcHggMTBweDtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICB9XG59XG4ubWFpbkNvbnRlbnR7XG4gICAgXG4gICAgLnJlc3RDb250ZW50e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAuYnRuc3N7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTIzMGRlZywgIzE3MTgxYTYzLCAjODI3Nzc3KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIC5iYWNrSWNvbntcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgLy8gbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAvLyB0b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vcmVJbmZve1xuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAvLyB0b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICAuZm9vZHNDb250ZW50e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLnJlc3RuYW1le1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY3VzaW5le1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAucmF0dGluZ3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlbGl2ZXJ5QWRkcmVzc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAucGlue1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgLnZlZ1NlY3Rpb257XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfSBcbiAgICAgICAgLmNhdGVUaXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmRfZGl2e1xuICAgICAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgLm1haW5DYXR7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRlc2NfZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhdHRpbmd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lZGl1bV9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmljZV9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJ0QnRue1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bnN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FydEJ0bjJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLnF1bml0aXR5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbiIsImlvbi1mYWItYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOjEwcHg7XG4gIC0tcGFkZGluZzoxMHB4O1xuICB3aWR0aDogODBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFpbkNvbnRlbnQgLnJlc3RDb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluQ29udGVudCAucmVzdENvbnRlbnQgLmJ0bnNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMzBkZWcsICMxNzE4MWE2MywgIzgyNzc3NykgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLm1haW5Db250ZW50IC5yZXN0Q29udGVudCAuYnRuc3MgLmJhY2tJY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLm1haW5Db250ZW50IC5yZXN0Q29udGVudCAuYnRuc3MgLm1vcmVJbmZvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDEwMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAucmVzdG5hbWUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmN1c2luZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLnJhdHRpbmcge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuZGVsaXZlcnlBZGRyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuZGVsaXZlcnlBZGRyZXNzIC5waW4ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmRlbGl2ZXJ5QWRkcmVzcyAuYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAudmVnU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXRlVGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuaW1hZ2VfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYgLnJhdHRpbmcge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmRlc2NfZGl2IC5tZWRpdW1fbGJsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYgLnByaWNlX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuIC5idG5zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuY2FydEJ0bjIgLnF1bml0aXR5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/category/category.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/category/category.page.ts ***!
  \*************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");








let CategoryPage = class CategoryPage {
    constructor(route, api, util, navCtrl, alertController, router, popoverController) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.popoverController = popoverController;
        this.cover = '';
        this.cusine = [];
        this.foods = [];
        this.dummyFoods = [];
        this.categories = [];
        this.dummy = Array(50);
        this.totalItem = 0;
        this.totalPrice = 0;
        this.deliveryAddress = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getVenueDetails();
            }
        });
    }
    getAddress() {
        const address = JSON.parse(localStorage.getItem('deliveryAddress'));
        if (address && address.address) {
            this.deliveryAddress = address.address;
        }
        return this.deliveryAddress;
    }
    getVenueDetails() {
        // Venue Details
        this.api.getVenueDetails(this.id).then(data => {
            console.log(data);
            if (data) {
                this.name = data.name;
                this.descritions = data.descritions;
                this.cover = data.cover;
                this.address = data.address;
                this.ratting = data.ratting ? data.ratting : 0;
                this.totalRatting = data.totalRatting ? data.totalRatting : 0;
                this.dishPrice = data.dishPrice;
                this.time = data.time;
                this.cusine = data.cusine;
                const vid = localStorage.getItem('vid');
                console.log('id', vid, this.id);
                if (vid && vid !== this.id) {
                    this.getCates();
                    this.getFoods();
                    this.totalItem = parseInt(localStorage.getItem('totalItem'));
                    this.totalPrice = parseFloat(localStorage.getItem('totalPrice'));
                    this.presentAlertConfirm();
                    return false;
                }
                else if (vid && vid === this.id) {
                    this.categories = JSON.parse(localStorage.getItem('categories'));
                    this.foods = JSON.parse(localStorage.getItem('foods'));
                    this.dummyFoods = JSON.parse(localStorage.getItem('dummyItem'));
                    this.calculate();
                }
                else {
                    this.getCates();
                    this.getFoods();
                }
            }
        }, error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getCates() {
        this.api.getVenueCategories(this.id).then(cate => {
            console.log(cate);
            if (cate) {
                this.categories = cate;
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getFoods() {
        this.api.getFoods(this.id).then(foods => {
            console.log(foods);
            if (foods) {
                // if()
                this.dummy = [];
                this.foods = [];
                this.dummyFoods = [];
                foods.forEach(element => {
                    if (element && element.status === true) {
                        let info = {
                            cid: {
                                id: element.cid.id,
                            },
                            cover: element.cover,
                            desc: element.desc,
                            id: element.id,
                            name: element && element.variation ? element.name + ' (Regular)' : element.name,
                            price: element.price,
                            ratting: element.ratting,
                            uid: element.uid,
                            quantiy: 0,
                            totalRatting: element.totalRatting ? element.totalRatting : 0
                        };
                        this.foods.push(info);
                        this.dummyFoods.push(info);
                        if (element && element.variation && element.small && element.small > 0) {
                            let info = {
                                cid: {
                                    id: element.cid.id,
                                },
                                cover: element.cover,
                                desc: element.desc,
                                id: element.id,
                                name: element.name + ' (small)',
                                price: element.small,
                                ratting: element.ratting,
                                uid: element.uid,
                                quantiy: 0,
                                totalRatting: element.totalRatting ? element.totalRatting : 0
                            };
                            this.foods.push(info);
                            this.dummyFoods.push(info);
                        }
                        if (element && element.variation && element.medium && element.medium > 0) {
                            let info = {
                                cid: {
                                    id: element.cid.id,
                                },
                                cover: element.cover,
                                desc: element.desc,
                                id: element.id,
                                name: element.name + ' (medium)',
                                price: element.medium,
                                ratting: element.ratting,
                                uid: element.uid,
                                quantiy: 0,
                                totalRatting: element.totalRatting ? element.totalRatting : 0
                            };
                            this.foods.push(info);
                            this.dummyFoods.push(info);
                        }
                        if (element && element.variation && element.large && element.large > 0) {
                            let info = {
                                cid: {
                                    id: element.cid.id,
                                },
                                cover: element.cover,
                                desc: element.desc,
                                id: element.id,
                                name: element.name + ' (large)',
                                price: element.large,
                                ratting: element.ratting,
                                uid: element.uid,
                                quantiy: 0,
                                totalRatting: element.totalRatting ? element.totalRatting : 0
                            };
                            this.foods.push(info);
                            this.dummyFoods.push(info);
                        }
                    }
                });
                console.log('myfoods', this.foods);
                if (!this.foods.length || this.foods.length === 0) {
                    this.util.errorToast(this.util.translate('No Foods found'));
                    this.navCtrl.back();
                    return false;
                }
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    back() {
        this.navCtrl.navigateRoot(['tabs']);
    }
    getCusine(cusine) {
        return cusine.join('-');
    }
    add(index) {
        this.api.checkAuth().then((user) => {
            if (user) {
                const vid = localStorage.getItem('vid');
                if (vid && vid !== this.id) {
                    this.presentAlertConfirm();
                    return false;
                }
                console.log(this.foods[index]);
                this.foods[index].quantiy = 1;
                this.calculate();
            }
            else {
                this.router.navigate(['login']);
            }
        }).catch(error => {
            console.log(error);
        });
    }
    calculate() {
        this.dummy = [];
        console.log('khaliiii', this.dummy);
        console.log(this.foods);
        let item = this.foods.filter(x => x.quantiy > 0);
        console.log(item);
        this.totalPrice = 0;
        this.totalItem = 0;
        item.forEach(element => {
            this.totalItem = this.totalItem + element.quantiy;
            this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
        });
        this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
        console.log('total item', this.totalItem);
        if (this.totalItem === 0) {
            this.totalItem = 0;
            this.totalPrice = 0;
        }
    }
    setData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const vid = localStorage.getItem('vid');
            console.log('leaving the planet', vid, this.id);
            console.log('total item', this.totalItem);
            if (vid && vid === this.id && this.totalPrice > 0) {
                localStorage.setItem('vid', this.id);
                yield localStorage.setItem('foods', JSON.stringify(this.foods));
                localStorage.setItem('categories', JSON.stringify(this.categories));
                localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
                localStorage.setItem('totalItem', this.totalItem);
                localStorage.setItem('totalPrice', this.totalPrice);
            }
            else if (!vid && this.totalItem > 0) {
                localStorage.setItem('vid', this.id);
                yield localStorage.setItem('foods', JSON.stringify(this.foods));
                localStorage.setItem('categories', JSON.stringify(this.categories));
                localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
                localStorage.setItem('totalItem', this.totalItem);
                localStorage.setItem('totalPrice', this.totalPrice);
            }
            else if (this.totalItem == 0) {
                this.totalItem = 0;
                this.totalPrice = 0;
            }
        });
    }
    ionViewWillLeave() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.setData();
        });
    }
    addQ(index) {
        this.foods[index].quantiy = this.foods[index].quantiy + 1;
        this.calculate();
    }
    removeQ(index) {
        if (this.foods[index].quantiy !== 0) {
            this.foods[index].quantiy = this.foods[index].quantiy - 1;
        }
        else {
            this.foods[index].quantiy = 0;
        }
        this.calculate();
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.util.translate('Warning'),
                message: this.util.translate(`you already have item's in cart with different restaurant`),
                buttons: [
                    {
                        text: this.util.translate('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: this.util.translate('Clear cart'),
                        handler: () => {
                            console.log('Confirm Okay');
                            localStorage.removeItem('vid');
                            localStorage.removeItem('categories');
                            localStorage.removeItem('dummyItem');
                            localStorage.removeItem('foods');
                            this.totalItem = 0;
                            this.totalPrice = 0;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    viewCart() {
        console.log('viewCart');
        this.setData();
        this.navCtrl.navigateRoot(['tabs/tab3']);
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.categories.length <= 0) {
                return false;
            }
            const popover = yield this.popoverController.create({
                component: src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                event: ev,
                componentProps: { data: this.categories },
                mode: 'ios',
            });
            popover.onDidDismiss().then(data => {
                console.log(data.data);
                if (data && data.data) {
                    const yOffset = document.getElementById(data.data.id).offsetTop;
                    const yHOffset = document.getElementById(data.data.id).offsetHeight;
                    console.log(yOffset + ' : ' + yHOffset);
                    this.content.scrollToPoint(0, yOffset, 1000);
                }
            });
            yield popover.present();
        });
    }
    openDetails() {
        const navData = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['rest-details'], navData);
    }
};
CategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoryPage.prototype, "content", void 0);
CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.page.scss */ "./src/app/pages/category/category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
], CategoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-category-category-module-es2015.js.map