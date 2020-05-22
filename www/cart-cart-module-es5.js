function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"mainContent\">\n    <div class=\"noData\" *ngIf=\"!haveItems\">\n      <img src=\"assets/runing.gif\" alt=\"\" class=\"noDataImg\">\n      <ion-label>{{'Your Cart is Empty' | translate}}</ion-label>\n      <ion-label>{{'Please add your favourite food' | translate}} </ion-label>\n      <ion-button (click)=\"getCart()\" expand=\"block\" fill=\"outline\">\n        {{'Browse your favourite restaurants' | translate}}\n      </ion-button>\n    </div>\n    <div *ngIf=\"haveItems\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\">\n        <ion-col size=\"4\">\n          <div class=\"image_div\" [style.backgroundImage]=\"'url('+cover+')'\"></div>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"restname\">{{name}}</ion-label>\n          <ion-label class=\"address\">{{address}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <div class=\"card_div\">\n        <div class=\"card\" *ngFor=\"let item of foods;let i = index\">\n          <div class=\"mainCat\" *ngIf=\"item.quantiy > 0\">\n            <img [src]=\"item.cover\" class=\"image_div\" alt=\"\">\n            <!-- <div class=\"image_div\" [style.backgroundImage]=\"'url('+item.cover+')'\"></div> -->\n            <div class=\"desc_div\">\n              <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n              <div class=\"ratting\">\n                <ion-icon [name]=\"item.ratting >= 1 ? 'star-outline':'star'\"\n                  [color]=\"item.ratting >= 1 ? 'warning':'medium'\">\n                </ion-icon>\n                <ion-icon [name]=\"item.ratting >= 2 ? 'star-outline':'star'\"\n                  [color]=\"item.ratting >= 2 ? 'warning':'medium'\">\n                </ion-icon>\n                <ion-icon [name]=\"item.ratting >= 3 ? 'star-outline':'star'\"\n                  [color]=\"item.ratting >= 3 ? 'warning':'medium'\">\n                </ion-icon>\n                <ion-icon [name]=\"item.ratting >= 4 ? 'star-outline':'star'\"\n                  [color]=\"item.ratting >= 4 ? 'warning':'medium'\">\n                </ion-icon>\n                <ion-icon [name]=\"item.ratting >= 5 ? 'star-outline':'star'\"\n                  [color]=\"item.ratting >= 5 ? 'warning':'medium'\">\n                </ion-icon>\n                ({{totalRatting}} {{'Rattings' | translate}})\n              </div>\n              <ion-label class=\"small_lbl\">{{item.desc}}</ion-label>\n              <ion-label class=\"small_lbl\">$ {{item.price}}</ion-label>\n            </div>\n            <div class=\"cartBtn2\">\n              <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n                <ion-icon name=\"remove\"></ion-icon>\n              </ion-button>\n              <p class=\"qunitity\">{{item.quantiy}}</p>\n              <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"coupones\" (click)=\"openCoupon()\">\n        <img src=\"assets/discount.png\" class=\"badge\" />\n        <ion-label class=\"title\">{{'Apply coupon code' | translate}} <br>\n          <p *ngIf=\"coupon\">{{'Coupon Applied' | translate}}</p>\n        </ion-label>\n      </div>\n      <div class=\"billing\">\n        <div class=\"singleRow\">\n          <ion-label class=\"headerTitle\">{{'Item Total'}}</ion-label>\n          <ion-label class=\"price\">$ {{totalPrice}}</ion-label>\n        </div>\n        <div class=\"singleRow\">\n          <ion-label class=\"headerTitle\">{{'Taxes & Charges' | translate}}</ion-label>\n          <ion-label class=\"price\">$ {{serviceTax}}</ion-label>\n        </div>\n        <div class=\"singleRow\">\n          <ion-label class=\"headerTitle\">{{'Delivery Charges' | translate}}</ion-label>\n          <ion-label class=\"price\">$ {{deliveryCharge}}</ion-label>\n        </div>\n        <div class=\"singleRow\" *ngIf=\"coupon\">\n          <ion-label class=\"headerTitle\">{{'Dicount' | translate}}</ion-label>\n          <ion-label class=\"price\">$ {{dicount}}</ion-label>\n        </div>\n        <div class=\"singleRow\">\n          <ion-label class=\"headerTotal boldClass\">{{'Grand Total' | translate}}</ion-label>\n          <ion-label class=\"priceTotal boldClass\">$ {{grandTotal}}</ion-label>\n        </div>\n      </div>\n      <p class=\"instructions\">\n        {{'Orders once placed cannot be cancelled and are non-refundable' | translate}}\n      </p>\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"haveItems\">\n  <ion-toolbar color=\"primary\">\n    <ion-label color=\"light\">{{totalItem}} {{'ITEM' | translate}}</ion-label>\n    <ion-label color=\"light\">${{grandTotal}} {{'plus taxes' | translate}}</ion-label>\n    <ion-button (click)=\"checkout()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      {{'Checkout' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/cart/cart-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CartPageRoutingModule */

  /***/
  function srcAppPagesCartCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
      return CartPageRoutingModule;
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


    var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/pages/cart/cart.page.ts");

    var routes = [{
      path: '',
      component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }];

    var CartPageRoutingModule = function CartPageRoutingModule() {
      _classCallCheck(this, CartPageRoutingModule);
    };

    CartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CartPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/cart/cart.module.ts ***!
    \*******************************************/

  /*! exports provided: CartPageModule */

  /***/
  function srcAppPagesCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
      return CartPageModule;
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


    var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart-routing.module */
    "./src/app/pages/cart/cart-routing.module.ts");
    /* harmony import */


    var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/pages/cart/cart.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var CartPageModule = function CartPageModule() {
      _classCallCheck(this, CartPageModule);
    };

    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })], CartPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/cart/cart.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label {\n  display: block;\n}\n\nion-toolbar {\n  padding: 0px 10px;\n  font-weight: bold;\n}\n\nion-toolbar ion-button {\n  font-weight: bold;\n}\n\n.mainContent {\n  padding: 20px 0px;\n}\n\n.mainContent ion-label {\n  display: block;\n}\n\n.mainContent .noData {\n  text-align: center;\n  margin-top: 30%;\n}\n\n.mainContent .noData .noDataImg {\n  width: 100%;\n}\n\n.mainContent .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.mainContent .restname {\n  margin-top: 10px;\n  font-size: 1rem;\n  color: black;\n  font-weight: bold;\n}\n\n.mainContent .address {\n  font-size: 0.8rem;\n  color: lightgray;\n}\n\n.mainContent .deliveryAddress {\n  display: flex;\n  padding: 20px 10px 0px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n\n.mainContent .deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.mainContent .deliveryAddress .changeAddress {\n  color: var(--ion-color-primary);\n}\n\n.mainContent .card_div {\n  padding-top: 10px;\n}\n\n.mainContent .card_div .card {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  padding: 5px 10px;\n}\n\n.mainContent .card_div .card .mainCat {\n  display: flex;\n}\n\n.mainContent .card_div .card .mainCat .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 80px;\n  height: 80px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div {\n  margin-left: 20px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .ratting {\n  font-size: 10px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .small_lbl {\n  font-size: 8px;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn {\n  position: absolute;\n  right: 15px;\n  width: 60px;\n  background: white;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n\n.mainContent .coupones {\n  display: flex;\n  padding: 20px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n\n.mainContent .coupones .badge {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .coupones .title {\n  padding: 0px 10px;\n  color: var(--ion-color-primary);\n}\n\n.mainContent .billing {\n  padding: 5px 10px;\n}\n\n.mainContent .billing .singleRow {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0px;\n  border-bottom: 1px dashed lightgray;\n}\n\n.mainContent .billing .singleRow .headerTitle {\n  font-size: 0.8rem;\n}\n\n.mainContent .billing .singleRow .boldClass {\n  font-weight: bold;\n}\n\n.mainContent .billing .singleRow .headerTotal {\n  font-size: 1rem;\n}\n\n.mainContent .billing .singleRow .priceTotal {\n  font-size: 1rem;\n}\n\n.mainContent .billing .singleRow .price {\n  font-size: 0.8rem;\n}\n\n.mainContent .instructions {\n  color: var(--ion-color-primary);\n  padding: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0csaUJBQUE7RUFDQSxpQkFBQTtBQ0VIOztBRERHO0VBQ0ksaUJBQUE7QUNHUDs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FERkk7RUFDSSxjQUFBO0FDSVI7O0FERkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNJUjs7QURGUTtFQUNJLFdBQUE7QUNJWjs7QURESztFQUNHLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNHUjs7QURESTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0dSOztBRERJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0dSOztBRERJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0dSOztBREZRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNJWjs7QURGUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDSVo7O0FERlE7RUFDSSwrQkFBQTtBQ0laOztBRERPO0VBQ0ksaUJBQUE7QUNHWDs7QURGWTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0laOztBREhZO0VBQ0ksYUFBQTtBQ0toQjs7QURKZ0I7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTXBCOztBREpnQjtFQUNJLGlCQUFBO0FDTXBCOztBRExvQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNPeEI7O0FETG9CO0VBQ0ksZUFBQTtBQ094Qjs7QURMb0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNPeEI7O0FESGdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDS3BCOztBREhnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNLcEI7O0FESm9CO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDTXhCOztBREFJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VSOztBRERRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNHWjs7QUREUTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7QUNHWjs7QURBSTtFQUNJLGlCQUFBO0FDRVI7O0FERFE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0FDR1o7O0FERlk7RUFDSSxpQkFBQTtBQ0loQjs7QURGWTtFQUNJLGlCQUFBO0FDSWhCOztBREZZO0VBQ0ksZUFBQTtBQ0loQjs7QURGWTtFQUNJLGVBQUE7QUNJaEI7O0FERlk7RUFDSSxpQkFBQTtBQ0loQjs7QURBSTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tdG9vbGJhciB7XG4gICBwYWRkaW5nOiAwcHggMTBweDtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICB9XG59XG4ubWFpbkNvbnRlbnR7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm5vRGF0YXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgIFxuICAgICAgICAubm9EYXRhSW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgIC5yZXN0bmFtZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuYWRkcmVzc3tcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgfVxuICAgIC5kZWxpdmVyeUFkZHJlc3N7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgLnBpbntcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYW5nZUFkZHJlc3N7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbiAgICAgICAgfVxuICAgIH0gXG4gICAgICAgLmNhcmRfZGl2e1xuICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIHBhZGRpbmc6NXB4IDEwcHg7XG4gICAgICAgICAgICAubWFpbkNhdHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRlc2NfZGl2e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5yYXR0aW5ne1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jYXJ0QnRue1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jYXJ0QnRuMntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAucXVuaXRpdHl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY291cG9uZXN7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgLmJhZGdle1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmlsbGluZ3tcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIC5zaW5nbGVSb3d7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIC5oZWFkZXJUaXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib2xkQ2xhc3N7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyVG90YWx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNlVG90YWx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5pbnN0cnVjdGlvbnN7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIH1cbn0iLCJpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYWluQ29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuLm1haW5Db250ZW50IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5Db250ZW50IC5ub0RhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwJTtcbn1cbi5tYWluQ29udGVudCAubm9EYXRhIC5ub0RhdGFJbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluQ29udGVudCAuaW1hZ2VfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5tYWluQ29udGVudCAucmVzdG5hbWUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbkNvbnRlbnQgLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5tYWluQ29udGVudCAuZGVsaXZlcnlBZGRyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5kZWxpdmVyeUFkZHJlc3MgLnBpbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG4ubWFpbkNvbnRlbnQgLmRlbGl2ZXJ5QWRkcmVzcyAuYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmRlbGl2ZXJ5QWRkcmVzcyAuY2hhbmdlQWRkcmVzcyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5pbWFnZV9kaXYge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmRlc2NfZGl2IC5yYXR0aW5nIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmNhcnRCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmNhcnRCdG4yIC5xdW5pdGl0eSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubWFpbkNvbnRlbnQgLmNvdXBvbmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5jb3Vwb25lcyAuYmFkZ2Uge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLm1haW5Db250ZW50IC5jb3Vwb25lcyAudGl0bGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLm1haW5Db250ZW50IC5iaWxsaW5nIC5zaW5nbGVSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyAuc2luZ2xlUm93IC5oZWFkZXJUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLm1haW5Db250ZW50IC5iaWxsaW5nIC5zaW5nbGVSb3cgLmJvbGRDbGFzcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5Db250ZW50IC5iaWxsaW5nIC5zaW5nbGVSb3cgLmhlYWRlclRvdGFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm1haW5Db250ZW50IC5iaWxsaW5nIC5zaW5nbGVSb3cgLnByaWNlVG90YWwge1xuICBmb250LXNpemU6IDFyZW07XG59XG4ubWFpbkNvbnRlbnQgLmJpbGxpbmcgLnNpbmdsZVJvdyAucHJpY2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5tYWluQ29udGVudCAuaW5zdHJ1Y3Rpb25zIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/cart/cart.page.ts ***!
    \*****************************************/

  /*! exports provided: CartPage */

  /***/
  function srcAppPagesCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
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


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CartPage = /*#__PURE__*/function () {
      function CartPage(api, router, util, navCtrl, chMod) {
        var _this = this;

        _classCallCheck(this, CartPage);

        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.chMod = chMod;
        this.haveItems = false;
        this.vid = '';
        this.totalPrice = 0;
        this.totalItem = 0;
        this.serviceTax = 0;
        this.deliveryCharge = 5;
        this.grandTotal = 0;
        this.deliveryAddress = '';
        this.totalRatting = 0;
        this.util.getCouponObservable().subscribe(function (data) {
          if (data) {
            console.log(data);
            _this.coupon = data;
            console.log('coupon', _this.coupon);
            console.log(_this.totalPrice);
            localStorage.setItem('coupon', JSON.stringify(data));

            _this.calculate();
          }
        });
      }

      _createClass(CartPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAddress",
        value: function getAddress() {
          var add = JSON.parse(localStorage.getItem('deliveryAddress'));

          if (add && add.address) {
            this.deliveryAddress = add.address;
          }

          return this.deliveryAddress;
        }
      }, {
        key: "getVenueDetails",
        value: function getVenueDetails() {
          var _this2 = this;

          // Venue Details
          this.api.getVenueDetails(this.vid).then(function (data) {
            console.log(data);

            if (data) {
              _this2.name = data.name;
              _this2.descritions = data.descritions;
              _this2.cover = data.cover;
              _this2.address = data.address;
              _this2.time = data.time;
              _this2.totalRatting = data.totalRatting;
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
        key: "validate",
        value: function validate() {
          var _this3 = this;

          this.api.checkAuth().then(function (user) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var id, foods, recheck;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!user) {
                        _context.next = 29;
                        break;
                      }

                      _context.next = 3;
                      return localStorage.getItem('vid');

                    case 3:
                      id = _context.sent;
                      console.log('id', id);

                      if (!id) {
                        _context.next = 23;
                        break;
                      }

                      this.vid = id;
                      this.getVenueDetails();
                      _context.next = 10;
                      return localStorage.getItem('foods');

                    case 10:
                      foods = _context.sent;

                      if (!foods) {
                        _context.next = 21;
                        break;
                      }

                      _context.next = 14;
                      return JSON.parse(foods);

                    case 14:
                      this.foods = _context.sent;
                      _context.next = 17;
                      return this.foods.filter(function (x) {
                        return x.quantiy > 0;
                      });

                    case 17:
                      recheck = _context.sent;
                      console.log('vid', this.vid);
                      console.log('foods', this.foods);

                      if (this.vid && this.foods && recheck.length > 0) {
                        this.haveItems = true;
                        this.calculate();
                        this.chMod.detectChanges();
                      }

                    case 21:
                      _context.next = 25;
                      break;

                    case 23:
                      this.haveItems = false;
                      this.chMod.detectChanges();

                    case 25:
                      this.chMod.detectChanges();
                      return _context.abrupt("return", true);

                    case 29:
                      this.router.navigate(['login']);

                    case 30:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.validate();
        }
      }, {
        key: "getCart",
        value: function getCart() {
          this.navCtrl.navigateRoot(['tabs/tab1']);
        }
      }, {
        key: "addQ",
        value: function addQ(index) {
          this.foods[index].quantiy = this.foods[index].quantiy + 1;
          localStorage.setItem('foods', JSON.stringify(this.foods));
          this.calculate();
        }
      }, {
        key: "removeQ",
        value: function removeQ(index) {
          if (this.foods[index].quantiy != 0) {
            this.foods[index].quantiy = this.foods[index].quantiy - 1;
          } else {
            this.foods[index].quantiy = 0;
          }

          localStorage.setItem('foods', JSON.stringify(this.foods));
          this.calculate();
        }
      }, {
        key: "calculate",
        value: function calculate() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var item, tax, percentage, totalPrice, _tax, _totalPrice, _tax2, lng, selectedCity;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log(this.foods);
                    item = this.foods.filter(function (x) {
                      return x.quantiy > 0;
                    });
                    console.log(item);
                    this.totalPrice = 0;
                    this.totalItem = 0;
                    _context2.next = 7;
                    return item.forEach(function (element) {
                      _this4.totalItem = _this4.totalItem + element.quantiy;
                      _this4.totalPrice = _this4.totalPrice + parseFloat(element.price) * parseInt(element.quantiy);
                    });

                  case 7:
                    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                    console.log('total item', this.totalItem);
                    console.log('=====>', this.totalPrice);
                    tax = parseFloat(this.totalPrice) * 21 / 100;
                    this.serviceTax = tax.toFixed(2);
                    console.log('tax->', this.serviceTax);
                    this.deliveryCharge = 5;
                    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                    this.grandTotal = this.grandTotal.toFixed(2);

                    if (this.coupon && this.coupon.code && this.totalPrice >= this.coupon.min) {
                      if (this.coupon.type === '%') {
                        percentage = function percentage(totalValue, partialValue) {
                          return 100 * partialValue / totalValue;
                        };

                        console.log('per');
                        totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), this.coupon.discout);
                        console.log('============>>>>>>>>>>>>>>>', totalPrice);
                        this.dicount = totalPrice.toFixed(2);
                        this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
                        console.log('------------>>>>', this.totalPrice);
                        this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                        _tax = parseFloat(this.totalPrice) * 21 / 100;
                        this.serviceTax = _tax.toFixed(2);
                        console.log('tax->', this.serviceTax);
                        this.deliveryCharge = 5;
                        this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                        this.grandTotal = this.grandTotal.toFixed(2);
                      } else {
                        console.log('$');
                        console.log('per');
                        _totalPrice = parseFloat(this.totalPrice) - this.coupon.discout;
                        console.log('============>>>>>>>>>>>>>>>', _totalPrice);
                        this.dicount = this.coupon.discout;
                        this.totalPrice = parseFloat(this.totalPrice) - _totalPrice;
                        console.log('------------>>>>', this.totalPrice);
                        this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                        _tax2 = parseFloat(this.totalPrice) * 21 / 100;
                        this.serviceTax = _tax2.toFixed(2);
                        console.log('tax->', this.serviceTax);
                        this.deliveryCharge = 5;
                        this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                        this.grandTotal = this.grandTotal.toFixed(2);
                      }
                    } else {
                      console.log('not satisfied');
                      this.coupon = null;
                      localStorage.removeItem('coupon');
                    }

                    console.log('grand totla', this.grandTotal);

                    if (!(this.totalItem === 0)) {
                      _context2.next = 28;
                      break;
                    }

                    lng = localStorage.getItem('language');
                    selectedCity = localStorage.getItem('selectedCity');
                    _context2.next = 23;
                    return localStorage.clear();

                  case 23:
                    localStorage.setItem('language', lng);
                    localStorage.setItem('selectedCity', selectedCity);
                    this.totalItem = 0;
                    this.totalPrice = 0;
                    this.haveItems = false;

                  case 28:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "changeAddress",
        value: function changeAddress() {
          var navData = {
            queryParams: {
              from: 'cart'
            }
          };
          this.router.navigate(['choose-address'], navData);
        }
      }, {
        key: "checkout",
        value: function checkout() {
          var navData = {
            queryParams: {
              from: 'cart'
            }
          };
          this.router.navigate(['choose-address'], navData); // this.router.navigate(['payments']);
        }
      }, {
        key: "openCoupon",
        value: function openCoupon() {
          var navData = {
            queryParams: {
              restId: this.vid,
              name: this.name,
              totalPrice: this.totalPrice
            }
          };
          this.router.navigate(['coupons'], navData);
        }
      }]);

      return CartPage;
    }();

    CartPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/pages/cart/cart.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], CartPage);
    /***/
  }
}]);
//# sourceMappingURL=cart-cart-module-es5.js.map