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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"mainContent\">\n    <div class=\"noData\" *ngIf=\"!haveItems\">\n      <img src=\"assets/runing.gif\" alt=\"\" class=\"noDataImg\">\n      <ion-label>{{'Your Cart is Empty' | translate}}</ion-label>\n      <ion-label>{{'Please add your favourite food' | translate}} </ion-label>\n      <ion-button (click)=\"getCart()\" expand=\"block\" fill=\"outline\">\n        {{'Browse your favourite restaurants' | translate}}\n      </ion-button>\n    </div>\n    <div *ngIf=\"haveItems\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\">\n        <ion-col size=\"4\">\n          <div class=\"image_div\" [style.backgroundImage]=\"'url('+cover+')'\"></div>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"restname\">{{name}}</ion-label>\n          <ion-label class=\"address\">{{address}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <div class=\"card_div\">\n        <div class=\"card\" *ngFor=\"let item of foods;let i = index\">\n          <div class=\"mainCat\" *ngIf=\"item.quantiy > 0\">\n            <img [src]=\"item.cover\" class=\"image_div\" alt=\"\">\n            <!-- <div class=\"image_div\" [style.backgroundImage]=\"'url('+item.cover+')'\"></div> -->\n            <div class=\"desc_div\">\n              <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n              <ion-label class=\"medium_lbl\">{{item.desc}}</ion-label>\n              <ion-label class=\"price_lbl\">{{'currencyCode' | translate}} {{item.price}}</ion-label>\n            </div>\n            <div class=\"cartBtn2\">\n              <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n                <ion-icon name=\"remove\"></ion-icon>\n              </ion-button>\n              <p class=\"qunitity\">{{item.quantiy}}</p>\n              <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"coupones\" (click)=\"openCoupon()\">\n        <img src=\"assets/discount.png\" class=\"badge\" />\n        <ion-label class=\"title\">{{'Apply coupon code' | translate}} <br>\n          <p *ngIf=\"coupon\">{{'Coupon Applied' | translate}}</p>\n        </ion-label>\n      </div>\n      <div class=\"billing\">\n        <div class=\"singleRow\">\n          <ion-label class=\"headerTitle\">{{'Item Total'}}</ion-label>\n          <ion-label class=\"price\">{{'currencyCode' | translate}} {{totalPrice}}</ion-label>\n        </div>\n        <div class=\"singleRow\">\n          <ion-label class=\"headerTitle\">{{'Delivery Charges' | translate}}</ion-label>\n          <ion-label class=\"price\">{{'currencyCode' | translate}} {{deliveryCharge}}</ion-label>\n        </div>\n        <div class=\"singleRow\" *ngIf=\"coupon\">\n          <ion-label class=\"headerTitle\">{{'Dicount' | translate}}</ion-label>\n          <ion-label class=\"price\">{{'currencyCode' | translate}} {{dicount}}</ion-label>\n        </div>\n        <div class=\"singleRow\">\n          <ion-label class=\"headerTotal boldClass\">{{'Grand Total' | translate}}</ion-label>\n          <ion-label class=\"priceTotal boldClass\">{{'currencyCode' | translate}} {{grandTotal}}</ion-label>\n        </div>\n      </div>\n      <p class=\"instructions\">\n        {{'Orders once placed cannot be cancelled and are non-refundable' | translate}}\n      </p>\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"haveItems\">\n  <ion-toolbar color=\"primary\">\n    <ion-label color=\"light\" *ngIf=\"totalItem ===1\">{{totalItem}} {{'ITEM' | translate}}</ion-label>\n    <ion-label color=\"light\" *ngIf=\"totalItem >1\">{{totalItem}} {{'ITEMS' | translate}}</ion-label>\n    <ion-label color=\"light\">{{'currencyCode' | translate}} {{grandTotal}}</ion-label>\n    <ion-button (click)=\"checkout()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      {{'Checkout' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
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


    __webpack_exports__["default"] = "ion-label {\n  display: block;\n}\n\nion-toolbar {\n  padding: 0px 10px;\n  font-weight: bold;\n}\n\nion-toolbar ion-button {\n  font-weight: bold;\n}\n\n.mainContent {\n  padding: 20px 0px;\n}\n\n.mainContent ion-label {\n  display: block;\n}\n\n.mainContent .noData {\n  text-align: center;\n  margin-top: 30%;\n}\n\n.mainContent .noData .noDataImg {\n  width: 100%;\n}\n\n.mainContent .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.mainContent .restname {\n  margin-top: 10px;\n  font-size: 1rem;\n  color: black;\n  font-weight: bold;\n}\n\n.mainContent .address {\n  font-size: 0.8rem;\n  color: lightgray;\n}\n\n.mainContent .deliveryAddress {\n  display: flex;\n  padding: 20px 10px 0px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n\n.mainContent .deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.mainContent .deliveryAddress .changeAddress {\n  color: var(--ion-color-primary);\n}\n\n.mainContent .card_div {\n  padding-top: 10px;\n}\n\n.mainContent .card_div .card {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  padding: 5px 10px;\n}\n\n.mainContent .card_div .card .mainCat {\n  display: flex;\n}\n\n.mainContent .card_div .card .mainCat .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 80px;\n  height: 80px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div {\n  margin-left: 20px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .ratting {\n  font-size: 10px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .medium_lbl {\n  font-size: 10px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .small_lbl {\n  font-size: 8px;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .price_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n  font-weight: bold;\n  margin-top: 20px;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn {\n  position: absolute;\n  right: 15px;\n  width: 60px;\n  background: white;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n\n.mainContent .coupones {\n  display: flex;\n  padding: 20px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n\n.mainContent .coupones .badge {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .coupones .title {\n  padding: 0px 10px;\n  color: var(--ion-color-primary);\n}\n\n.mainContent .billing {\n  padding: 5px 10px;\n}\n\n.mainContent .billing .singleRow {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0px;\n  border-bottom: 1px dashed lightgray;\n}\n\n.mainContent .billing .singleRow .headerTitle {\n  font-size: 0.8rem;\n}\n\n.mainContent .billing .singleRow .boldClass {\n  font-weight: bold;\n}\n\n.mainContent .billing .singleRow .headerTotal {\n  font-size: 1rem;\n}\n\n.mainContent .billing .singleRow .priceTotal {\n  font-size: 1rem;\n}\n\n.mainContent .billing .singleRow .price {\n  font-size: 0.8rem;\n}\n\n.mainContent .instructions {\n  color: var(--ion-color-primary);\n  padding: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0csaUJBQUE7RUFDQSxpQkFBQTtBQ0VIOztBRERHO0VBQ0ksaUJBQUE7QUNHUDs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FERkk7RUFDSSxjQUFBO0FDSVI7O0FERkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNJUjs7QURGUTtFQUNJLFdBQUE7QUNJWjs7QURESztFQUNHLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNHUjs7QURESTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0dSOztBRERJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0dSOztBRERJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0dSOztBREZRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNJWjs7QURGUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDSVo7O0FERlE7RUFDSSwrQkFBQTtBQ0laOztBRERPO0VBQ0ksaUJBQUE7QUNHWDs7QURGWTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0laOztBREhZO0VBQ0ksYUFBQTtBQ0toQjs7QURKZ0I7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTXBCOztBREpnQjtFQUNJLGlCQUFBO0FDTXBCOztBRExvQjtFQUVJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNNeEI7O0FESm9CO0VBRUksZUFBQTtBQ0t4Qjs7QURIb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDS3hCOztBREhvQjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0t4Qjs7QURIb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0t4Qjs7QURGZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNJcEI7O0FERmdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0lwQjs7QURIb0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNLeEI7O0FEQ0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VaOztBREFRO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtBQ0VaOztBRENJO0VBQ0ksaUJBQUE7QUNDUjs7QURBUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7QUNFWjs7QUREWTtFQUNJLGlCQUFBO0FDR2hCOztBRERZO0VBQ0ksaUJBQUE7QUNHaEI7O0FERFk7RUFDSSxlQUFBO0FDR2hCOztBRERZO0VBQ0ksZUFBQTtBQ0doQjs7QUREWTtFQUNJLGlCQUFBO0FDR2hCOztBRENJO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi10b29sYmFyIHtcbiAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBpb24tYnV0dG9uIHtcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgIH1cbn1cbi5tYWluQ29udGVudHtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubm9EYXRhe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICAgICAgXG4gICAgICAgIC5ub0RhdGFJbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgLmltYWdlX2RpdntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gICAgLnJlc3RuYW1le1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5hZGRyZXNze1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICB9XG4gICAgLmRlbGl2ZXJ5QWRkcmVzc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAucGlue1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFkZHJlc3N7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhbmdlQWRkcmVzc3tcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xuICAgICAgICB9XG4gICAgfSBcbiAgICAgICAuY2FyZF9kaXZ7XG4gICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgcGFkZGluZzo1cHggMTBweDtcbiAgICAgICAgICAgIC5tYWluQ2F0e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgLmltYWdlX2RpdntcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGVzY19kaXZ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnJhdHRpbmd7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubWVkaXVtX2xibHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmljZV9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2FydEJ0bntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2FydEJ0bjJ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgLnF1bml0aXR5e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvdXBvbmVze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIC5iYWRnZXtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJpbGxpbmd7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAuc2luZ2xlUm93e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAuaGVhZGVyVGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm9sZENsYXNze1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlclRvdGFse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZVRvdGFse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW5zdHJ1Y3Rpb25ze1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB9XG59IiwiaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFpbkNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cbi5tYWluQ29udGVudCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluQ29udGVudCAubm9EYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMCU7XG59XG4ubWFpbkNvbnRlbnQgLm5vRGF0YSAubm9EYXRhSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbkNvbnRlbnQgLmltYWdlX2RpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG4ubWFpbkNvbnRlbnQgLnJlc3RuYW1lIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5Db250ZW50IC5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG4ubWFpbkNvbnRlbnQgLmRlbGl2ZXJ5QWRkcmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluQ29udGVudCAuZGVsaXZlcnlBZGRyZXNzIC5waW4ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLm1haW5Db250ZW50IC5kZWxpdmVyeUFkZHJlc3MgLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMHB4O1xufVxuLm1haW5Db250ZW50IC5kZWxpdmVyeUFkZHJlc3MgLmNoYW5nZUFkZHJlc3Mge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuaW1hZ2VfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmRlc2NfZGl2IC5oZWFkaW5nX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiAucmF0dGluZyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmRlc2NfZGl2IC5tZWRpdW1fbGJsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmRlc2NfZGl2IC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDhweDtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiAucHJpY2VfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuY2FydEJ0bjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuMiAucXVuaXRpdHkge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm1haW5Db250ZW50IC5jb3Vwb25lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluQ29udGVudCAuY291cG9uZXMgLmJhZGdlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cbi5tYWluQ29udGVudCAuY291cG9uZXMgLnRpdGxlIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWFpbkNvbnRlbnQgLmJpbGxpbmcge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyAuc2luZ2xlUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG59XG4ubWFpbkNvbnRlbnQgLmJpbGxpbmcgLnNpbmdsZVJvdyAuaGVhZGVyVGl0bGUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyAuc2luZ2xlUm93IC5ib2xkQ2xhc3Mge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyAuc2luZ2xlUm93IC5oZWFkZXJUb3RhbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyAuc2luZ2xlUm93IC5wcmljZVRvdGFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm1haW5Db250ZW50IC5iaWxsaW5nIC5zaW5nbGVSb3cgLnByaWNlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4ubWFpbkNvbnRlbnQgLmluc3RydWN0aW9ucyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufSJdfQ== */";
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