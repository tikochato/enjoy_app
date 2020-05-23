function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoryCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content #content>\n  <div class=\"mainContent\">\n    <div class=\"restContent\" [style.backgroundImage]=\"'url('+cover+')'\">\n      <div class=\"btnss\">\n        <ion-icon (click)=\"back()\" class=\"backIcon\" color=\"light\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n        <ion-label class=\"moreInfo\" (click)=\"openDetails()\">{{'View more' | translate}}</ion-label>\n      </div>\n    </div>\n    <div class=\"foodsContent\">\n      <ion-label class=\"restname\">{{name}}</ion-label>\n      <ion-label class=\"cusine\">{{getCusine(cusine)}}</ion-label>\n      <div class=\"ratting\">\n        <ion-icon [name]=\"totalRatting >= 1 ? 'star-outline':'star'\" [color]=\"totalRatting >= 1 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 2 ? 'star-outline':'star'\" [color]=\"totalRatting >= 2 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 3 ? 'star-outline':'star'\" [color]=\"totalRatting >= 3 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 4 ? 'star-outline':'star'\" [color]=\"totalRatting >= 4 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 5 ? 'star-outline':'star'\" [color]=\"totalRatting >= 5 ? 'warning':'medium'\">\n        </ion-icon>\n        ({{ratting}} {{'Rattings' | translate}})\n      </div>\n      <div class=\"deliveryAddress\">\n        <img src=\"assets/pin.png\" alt=\"\" class=\"pin\">\n        <p class=\"address\"> {{getAddress()}}</p>\n\n      </div>\n      <div class=\"vegSection\">\n        <ion-label>{{'Veg Only' | translate}}</ion-label>\n        <ion-toggle color=\"success\" mode=\"ios\" (ionChange)=\"statusChange()\" [(ngModel)]=\"veg\"></ion-toggle>\n      </div>\n      <div *ngFor=\"let item of dummy\">\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div *ngFor=\"let cate of categories\">\n        <ion-label class=\"cateTitle\" [id]=\"cate.id\">{{cate.name}}</ion-label>\n        <div class=\"card_div\">\n\n          <div class=\"card\" *ngFor=\"let item of foods;let i = index\">\n            <div *ngIf=\"cate.id == item.cid.id\" class=\"mainCat\">\n              <img [src]=\"item.cover\" alt=\"\" class=\"image_div\">\n              <div class=\"desc_div\">\n                <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n                <div class=\"ratting\">\n                  <ion-icon [name]=\"item.ratting >= 1 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 1 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 2 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 2 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 3 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 3 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 4 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 4 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 5 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 5 ? 'warning':'medium'\">\n                  </ion-icon>\n                  ({{item.totalRatting ? item.totalRatting:0}}. {{'Rattings' | translate}})\n                </div>\n                <ion-label class=\"small_lbl\">{{item.desc}}</ion-label>\n                <ion-label class=\"small_lbl\">$ {{item.price}}</ion-label>\n              </div>\n              <div class=\"cartBtn\" *ngIf=\"item.quantiy <= 0\">\n                <ion-label class=\"btns\" (click)=\"add(i)\">{{'Add' | translate}}</ion-label>\n                <!-- <ion-button (click)=\"add(i)\" size=\"small\" expand=\"block\" fill=\"outline\" shape=\"round\">\n                  {{'Add' | translate}}\n                </ion-button> -->\n              </div>\n              <div class=\"cartBtn2\" *ngIf=\"item.quantiy > 0\">\n                <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </ion-button>\n                <p class=\"qunitity\">{{item.quantiy}}</p>\n                <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <app-popover></app-popover> -->\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"presentPopover($event)\">\n    <ion-fab-button color=\"light\" mode=\"ios\">\n      <ion-icon name=\"list\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">{{'Menu' | translate}}</ion-label>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n<ion-footer *ngIf=\"totalItem >0\">\n  <ion-toolbar color=\"primary\">\n    <ion-label color=\"light\">{{totalItem}} {{'ITEM' | translate}}</ion-label>\n    <ion-label color=\"light\">${{totalPrice}}</ion-label>\n    <ion-button (click)=\"viewCart()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n      {{'View Cart' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/category/category-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/category/category-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CategoryPageRoutingModule */

  /***/
  function srcAppPagesCategoryCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function () {
      return CategoryPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category.page */
    "./src/app/pages/category/category.page.ts");

    var routes = [{
      path: '',
      component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }];

    var CategoryPageRoutingModule = function CategoryPageRoutingModule() {
      _classCallCheck(this, CategoryPageRoutingModule);
    };

    CategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/category/category.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/category/category.module.ts ***!
    \***************************************************/

  /*! exports provided: CategoryPageModule */

  /***/
  function srcAppPagesCategoryCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function () {
      return CategoryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category-routing.module */
    "./src/app/pages/category/category-routing.module.ts");
    /* harmony import */


    var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category.page */
    "./src/app/pages/category/category.page.ts");
    /* harmony import */


    var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var CategoryPageModule = function CategoryPageModule() {
      _classCallCheck(this, CategoryPageModule);
    };

    CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      entryComponents: [src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]],
      declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
    })], CategoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/category/category.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/category/category.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoryCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  --border-radius:10px;\n  --padding:10px;\n  width: 80px;\n}\n\nion-label {\n  display: block;\n}\n\nion-toolbar {\n  padding: 0px 10px;\n  font-weight: bold;\n}\n\nion-toolbar ion-button {\n  font-weight: bold;\n}\n\n.mainContent .restContent {\n  width: 100%;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.mainContent .restContent .btnss {\n  background-image: linear-gradient(-230deg, #17181a63, #827777) !important;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  padding: 10px;\n  height: 150px;\n}\n\n.mainContent .restContent .btnss .backIcon {\n  font-size: 2rem;\n}\n\n.mainContent .restContent .btnss .moreInfo {\n  color: white;\n  font-weight: bold;\n}\n\n.mainContent .foodsContent {\n  position: absolute;\n  background: white;\n  height: 100%;\n  top: 100px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  width: 100%;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .restname {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .cusine {\n  font-size: 1rem;\n  color: lightgray;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .ratting {\n  font-size: 1rem;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .deliveryAddress {\n  display: flex;\n  padding: 20px 10px 0px 10px;\n}\n\n.mainContent .foodsContent .deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .foodsContent .deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.mainContent .foodsContent .vegSection {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .cateTitle {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .card_div .card {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  padding: 5px 10px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat {\n  display: flex;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 80px !important;\n  height: 80px !important;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div {\n  margin-left: 20px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .ratting {\n  font-size: 10px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .small_lbl {\n  font-size: 8px;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn {\n  position: absolute;\n  right: 15px;\n  width: 60px;\n  background: white;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn .btns {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 10px;\n  padding: 2px;\n  font-size: 12px;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNHLGlCQUFBO0VBQ0EsaUJBQUE7QUNHSDs7QURGRztFQUNJLGlCQUFBO0FDSVA7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0VSOztBRERRO0VBQ0kseUVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNHWjs7QURGWTtFQUlJLGVBQUE7QUNDaEI7O0FEQ1k7RUFJSSxZQUFBO0VBQ0EsaUJBQUE7QUNGaEI7O0FET0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNOUjs7QURPUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMWjs7QURPUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTFo7O0FET1E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNMWjs7QURPUTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQ0xaOztBRE1ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNKaEI7O0FETVk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0poQjs7QURPUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNMWjs7QURPUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMWjs7QURRWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ05oQjs7QURPZ0I7RUFDSSxhQUFBO0FDTHBCOztBRE1vQjtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0p4Qjs7QURNb0I7RUFDSSxpQkFBQTtBQ0p4Qjs7QURLd0I7RUFFSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSjVCOztBRE13QjtFQUVJLGVBQUE7QUNMNUI7O0FET3dCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTDVCOztBRFNvQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1B4Qjs7QURRd0I7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FDTjVCOztBRFNvQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNQeEI7O0FEUXdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDTjVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzXHQ6MTBweDtcbiAgICAtLXBhZGRpbmc6MTBweDtcbiAgICB3aWR0aDogODBweDtcbn1cbmlvbi1sYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi10b29sYmFyIHtcbiAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBpb24tYnV0dG9uIHtcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgIH1cbn1cbi5tYWluQ29udGVudHtcbiAgICBcbiAgICAucmVzdENvbnRlbnR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIC5idG5zc3tcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMjMwZGVnLCAjMTcxODFhNjMsICM4Mjc3NzcpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgLmJhY2tJY29ue1xuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvLyBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIC8vIHRvcDogNDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZUluZm97XG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIC8vIHRvcDogNDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIC5mb29kc0NvbnRlbnR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAucmVzdG5hbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jdXNpbmV7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yYXR0aW5ne1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZWxpdmVyeUFkZHJlc3N7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xuICAgICAgICAgICAgLnBpbntcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkcmVzc3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIC52ZWdTZWN0aW9ue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH0gXG4gICAgICAgIC5jYXRlVGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkX2RpdntcbiAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjVweCAxMHB4O1xuICAgICAgICAgICAgICAgIC5tYWluQ2F0e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAuaW1hZ2VfZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYXR0aW5ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcnRCdG57XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRuc3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJ0QnRuMntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVuaXRpdHl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuIiwiaW9uLWZhYi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6MTBweDtcbiAgLS1wYWRkaW5nOjEwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYWluQ29udGVudCAucmVzdENvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm1haW5Db250ZW50IC5yZXN0Q29udGVudCAuYnRuc3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTIzMGRlZywgIzE3MTgxYTYzLCAjODI3Nzc3KSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG4ubWFpbkNvbnRlbnQgLnJlc3RDb250ZW50IC5idG5zcyAuYmFja0ljb24ge1xuICBmb250LXNpemU6IDJyZW07XG59XG4ubWFpbkNvbnRlbnQgLnJlc3RDb250ZW50IC5idG5zcyAubW9yZUluZm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMTAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5yZXN0bmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY3VzaW5lIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAucmF0dGluZyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmRlbGl2ZXJ5QWRkcmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5kZWxpdmVyeUFkZHJlc3MgLnBpbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuZGVsaXZlcnlBZGRyZXNzIC5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC52ZWdTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhdGVUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2FyZF9kaXYgLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5pbWFnZV9kaXYge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiAuaGVhZGluZ19sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiAucmF0dGluZyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuY2FydEJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuY2FydEJ0biAuYnRucyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuY2FydEJ0bjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmNhcnRCdG4yIC5xdW5pdGl0eSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/category/category.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/category/category.page.ts ***!
    \*************************************************/

  /*! exports provided: CategoryPage */

  /***/
  function srcAppPagesCategoryCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPage", function () {
      return CategoryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");

    var CategoryPage = /*#__PURE__*/function () {
      function CategoryPage(route, api, util, navCtrl, alertController, router, popoverController) {
        _classCallCheck(this, CategoryPage);

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
        this.veg = true;
        this.totalItem = 0;
        this.totalPrice = 0;
        this.deliveryAddress = '';
      }

      _createClass(CategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (data) {
            console.log('data=>', data);

            if (data.hasOwnProperty('id')) {
              _this.id = data.id;

              _this.getVenueDetails();
            }
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var address = JSON.parse(localStorage.getItem('deliveryAddress'));

          if (address && address.address) {
            this.deliveryAddress = address.address;
          }

          return this.deliveryAddress;
        }
      }, {
        key: "getVenueDetails",
        value: function getVenueDetails() {
          var _this2 = this;

          // Venue Details
          this.api.getVenueDetails(this.id).then(function (data) {
            console.log(data);

            if (data) {
              _this2.name = data.name;
              _this2.descritions = data.descritions;
              _this2.cover = data.cover;
              _this2.address = data.address;
              _this2.ratting = data.ratting ? data.ratting : 0;
              _this2.totalRatting = data.totalRatting ? data.totalRatting : 2;
              _this2.dishPrice = data.dishPrice;
              _this2.time = data.time;
              _this2.cusine = data.cusine;
              var vid = localStorage.getItem('vid');
              console.log('id', vid, _this2.id);

              if (vid && vid !== _this2.id) {
                _this2.getCates();

                _this2.getFoods();

                _this2.changeStatus();

                _this2.totalItem = parseInt(localStorage.getItem('totalItem'));
                _this2.totalPrice = parseFloat(localStorage.getItem('totalPrice'));

                _this2.presentAlertConfirm();

                return false;
              } else if (vid && vid === _this2.id) {
                _this2.categories = JSON.parse(localStorage.getItem('categories'));
                _this2.foods = JSON.parse(localStorage.getItem('foods'));
                _this2.dummyFoods = JSON.parse(localStorage.getItem('dummyItem'));

                _this2.calculate();

                _this2.changeStatus();
              } else {
                _this2.getCates();

                _this2.getFoods();

                _this2.changeStatus();
              }
            }
          }, function (error) {
            console.log(error);

            _this2.util.errorToast(_this2.util.translate('Something went wrong'));
          })["catch"](function (error) {
            console.log(error);

            _this2.util.errorToast(_this2.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "getCates",
        value: function getCates() {
          var _this3 = this;

          this.api.getVenueCategories(this.id).then(function (cate) {
            console.log(cate);

            if (cate) {
              _this3.categories = cate;
            }
          }, function (error) {
            console.log(error);
            _this3.dummy = [];

            _this3.util.errorToast(_this3.util.translate('Something went wrong'));
          })["catch"](function (error) {
            console.log(error);
            _this3.dummy = [];

            _this3.util.errorToast(_this3.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "getFoods",
        value: function getFoods() {
          var _this4 = this;

          this.api.getFoods(this.id).then(function (foods) {
            console.log(foods);

            if (foods) {
              // if()
              _this4.dummy = [];
              _this4.foods = [];
              _this4.dummyFoods = [];
              foods.forEach(function (element) {
                if (element && element.status === true) {
                  var info = {
                    cid: {
                      id: element.cid.id
                    },
                    cover: element.cover,
                    desc: element.desc,
                    id: element.id,
                    name: element && element.variation ? element.name + ' (Regular)' : element.name,
                    price: element.price,
                    ratting: element.ratting,
                    uid: element.uid,
                    veg: element.veg,
                    quantiy: 0,
                    totalRatting: element.totalRatting ? element.totalRatting : 0
                  };

                  _this4.foods.push(info);

                  _this4.dummyFoods.push(info);

                  if (element && element.variation && element.small && element.small > 0) {
                    var _info = {
                      cid: {
                        id: element.cid.id
                      },
                      cover: element.cover,
                      desc: element.desc,
                      id: element.id,
                      name: element.name + ' (small)',
                      price: element.small,
                      ratting: element.ratting,
                      uid: element.uid,
                      veg: element.veg,
                      quantiy: 0,
                      totalRatting: element.totalRatting ? element.totalRatting : 0
                    };

                    _this4.foods.push(_info);

                    _this4.dummyFoods.push(_info);
                  }

                  if (element && element.variation && element.medium && element.medium > 0) {
                    var _info2 = {
                      cid: {
                        id: element.cid.id
                      },
                      cover: element.cover,
                      desc: element.desc,
                      id: element.id,
                      name: element.name + ' (medium)',
                      price: element.medium,
                      ratting: element.ratting,
                      uid: element.uid,
                      veg: element.veg,
                      quantiy: 0,
                      totalRatting: element.totalRatting ? element.totalRatting : 0
                    };

                    _this4.foods.push(_info2);

                    _this4.dummyFoods.push(_info2);
                  }

                  if (element && element.variation && element.large && element.large > 0) {
                    var _info3 = {
                      cid: {
                        id: element.cid.id
                      },
                      cover: element.cover,
                      desc: element.desc,
                      id: element.id,
                      name: element.name + ' (large)',
                      price: element.large,
                      ratting: element.ratting,
                      uid: element.uid,
                      veg: element.veg,
                      quantiy: 0,
                      totalRatting: element.totalRatting ? element.totalRatting : 0
                    };

                    _this4.foods.push(_info3);

                    _this4.dummyFoods.push(_info3);
                  }
                }
              });
              console.log('myfoods', _this4.foods);

              if (!_this4.foods.length || _this4.foods.length === 0) {
                _this4.util.errorToast(_this4.util.translate('No Foods found'));

                _this4.navCtrl.back();

                return false;
              }
            }
          }, function (error) {
            console.log(error);
            _this4.dummy = [];

            _this4.util.errorToast(_this4.util.translate('Something went wrong'));
          })["catch"](function (error) {
            console.log(error);
            _this4.dummy = [];

            _this4.util.errorToast(_this4.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateRoot(['tabs']);
        }
      }, {
        key: "getCusine",
        value: function getCusine(cusine) {
          return cusine.join('-');
        }
      }, {
        key: "add",
        value: function add(index) {
          var _this5 = this;

          this.api.checkAuth().then(function (user) {
            if (user) {
              var vid = localStorage.getItem('vid');

              if (vid && vid !== _this5.id) {
                _this5.presentAlertConfirm();

                return false;
              }

              console.log(_this5.foods[index]);
              _this5.foods[index].quantiy = 1;

              _this5.calculate();
            } else {
              _this5.router.navigate(['login']);
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "statusChange",
        value: function statusChange() {
          console.log('status', this.veg);
          this.changeStatus();
        }
      }, {
        key: "calculate",
        value: function calculate() {
          var _this6 = this;

          this.dummy = [];
          console.log('khaliiii', this.dummy);
          console.log(this.foods);
          var item = this.foods.filter(function (x) {
            return x.quantiy > 0;
          });
          console.log(item);
          this.totalPrice = 0;
          this.totalItem = 0;
          item.forEach(function (element) {
            _this6.totalItem = _this6.totalItem + element.quantiy;
            _this6.totalPrice = _this6.totalPrice + parseFloat(element.price) * parseInt(element.quantiy);
          });
          this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
          console.log('total item', this.totalItem);

          if (this.totalItem === 0) {
            this.totalItem = 0;
            this.totalPrice = 0;
          }
        }
      }, {
        key: "setData",
        value: function setData() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var vid;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    vid = localStorage.getItem('vid');
                    console.log('leaving the planet', vid, this.id);
                    console.log('total item', this.totalItem);

                    if (!(vid && vid === this.id && this.totalPrice > 0)) {
                      _context.next = 13;
                      break;
                    }

                    localStorage.setItem('vid', this.id);
                    _context.next = 7;
                    return localStorage.setItem('foods', JSON.stringify(this.foods));

                  case 7:
                    localStorage.setItem('categories', JSON.stringify(this.categories));
                    localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
                    localStorage.setItem('totalItem', this.totalItem);
                    localStorage.setItem('totalPrice', this.totalPrice);
                    _context.next = 24;
                    break;

                  case 13:
                    if (!(!vid && this.totalItem > 0)) {
                      _context.next = 23;
                      break;
                    }

                    localStorage.setItem('vid', this.id);
                    _context.next = 17;
                    return localStorage.setItem('foods', JSON.stringify(this.foods));

                  case 17:
                    localStorage.setItem('categories', JSON.stringify(this.categories));
                    localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
                    localStorage.setItem('totalItem', this.totalItem);
                    localStorage.setItem('totalPrice', this.totalPrice);
                    _context.next = 24;
                    break;

                  case 23:
                    if (this.totalItem == 0) {
                      this.totalItem = 0;
                      this.totalPrice = 0;
                    }

                  case 24:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.setData();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "changeStatus",
        value: function changeStatus() {
          var _this7 = this;

          this.foods = this.dummyFoods.filter(function (x) {
            return x.veg === _this7.veg;
          });
        }
      }, {
        key: "addQ",
        value: function addQ(index) {
          this.foods[index].quantiy = this.foods[index].quantiy + 1;
          this.calculate();
        }
      }, {
        key: "removeQ",
        value: function removeQ(index) {
          if (this.foods[index].quantiy !== 0) {
            this.foods[index].quantiy = this.foods[index].quantiy - 1;
          } else {
            this.foods[index].quantiy = 0;
          }

          this.calculate();
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this8 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: this.util.translate('Warning'),
                      message: this.util.translate("you already have item's in cart with different restaurant"),
                      buttons: [{
                        text: this.util.translate('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: this.util.translate('Clear cart'),
                        handler: function handler() {
                          console.log('Confirm Okay');
                          localStorage.removeItem('vid');
                          localStorage.removeItem('categories');
                          localStorage.removeItem('dummyItem');
                          localStorage.removeItem('foods');
                          _this8.totalItem = 0;
                          _this8.totalPrice = 0;
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "viewCart",
        value: function viewCart() {
          console.log('viewCart');
          this.setData();
          this.navCtrl.navigateRoot(['tabs/tab3']);
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this9 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.categories.length <= 0)) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return", false);

                  case 2:
                    _context4.next = 4;
                    return this.popoverController.create({
                      component: src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                      event: ev,
                      componentProps: {
                        data: this.categories
                      },
                      mode: 'ios'
                    });

                  case 4:
                    popover = _context4.sent;
                    popover.onDidDismiss().then(function (data) {
                      console.log(data.data);

                      if (data && data.data) {
                        var yOffset = document.getElementById(data.data.id).offsetTop;
                        var yHOffset = document.getElementById(data.data.id).offsetHeight;
                        console.log(yOffset + ' : ' + yHOffset);

                        _this9.content.scrollToPoint(0, yOffset, 1000);
                      }
                    });
                    _context4.next = 8;
                    return popover.present();

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openDetails",
        value: function openDetails() {
          var navData = {
            queryParams: {
              id: this.id
            }
          };
          this.router.navigate(['rest-details'], navData);
        }
      }]);

      return CategoryPage;
    }();

    CategoryPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryPage.prototype, "content", void 0);
    CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category.page.scss */
      "./src/app/pages/category/category.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], CategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-category-category-module-es5.js.map