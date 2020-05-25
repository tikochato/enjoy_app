function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'Recent Orders' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mainContent\">\n    <div *ngFor=\"let item of dummy\">\n      <ion-list>\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"noData\" *ngIf=\"!haveItems && !dummy?.length\">\n      <img src=\"assets/runing.gif\" alt=\"\" class=\"noDataImg\">\n      <ion-label>{{\"You haven't ordered anything\" | translate}}</ion-label>\n      <ion-label>{{'Please order your favourite food' | translate}} </ion-label>\n      <ion-button (click)=\"getCart()\" expand=\"block\" fill=\"outline\">\n        {{'Browse your favourite restaurants' | translate}}\n      </ion-button>\n    </div>\n    <div class=\"haveData\">\n\n      <div class=\"card_div\" *ngFor=\"let item of myOrders\" (click)=\"goToHistoryDetail(item.id)\">\n\n        <div class=\"resto_detail\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url('+item.vid.cover+')'\"></div>\n          <div style=\"margin-left: 20px;\">\n            <ion-label class=\"res_name\">{{item.vid.name}}</ion-label>\n            <ion-label class=\"res_location\">\n              {{item.vid.address}}\n            </ion-label>\n          </div>\n        </div>\n\n        <div class=\"line_div\"></div>\n\n        <div class=\"order_detail\">\n          <ion-label class=\"head_gray\">{{'ITEMS' | translate}}</ion-label>\n          <div class=\"small_lbl\">\n            <span *ngFor=\"let order of item.order;let ol = index\">{{order.quantiy}} X {{order.name}} <span\n                *ngIf=\"ol !=item.order.length\">,</span></span>\n          </div>\n          <ion-label class=\"head_gray\">{{'ORDERED ON' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{getDate(item.time)}} </ion-label>\n          <ion-label class=\"head_gray\">{{'TOTAL AMOUNT' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{'currencyCode' | translate}} {{item.grandTotal}}</ion-label>\n        </div>\n\n        <div class=\"line_div\"></div>\n\n        <div class=\"status_detail\" *ngIf=\"item.status =='completed' || item.status == 'delivered'\">\n          <div class=\"deliver_div\">\n            {{'Delivered' | translate}}\n          </div>\n        </div>\n        <div class=\"status_detail\" *ngIf=\"item.status =='rejected' || item.status == 'cancel'\">\n          <div class=\"deliver_div\">\n            {{'Your Order is' | translate}} {{item.status}}\n          </div>\n        </div>\n        <div class=\"status_detail\"\n          *ngIf=\"item.status =='created' || item.status =='ongoing' || item.status === 'accepted'\">\n          <div class=\"deliver_div\">\n            {{'Your Order is' | translate}} {{item.status}}\n          </div>\n          <div class=\"repeat_div\" style=\"color: green;\">\n            <ion-icon name=\"map-outline\"></ion-icon>{{'Track Order' | translate}}\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/history/history-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/history/history-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: HistoryPageRoutingModule */

  /***/
  function srcAppPagesHistoryHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function () {
      return HistoryPageRoutingModule;
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


    var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/history/history.page.ts");

    var routes = [{
      path: '',
      component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }];

    var HistoryPageRoutingModule = function HistoryPageRoutingModule() {
      _classCallCheck(this, HistoryPageRoutingModule);
    };

    HistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/history/history.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/history/history.module.ts ***!
    \*************************************************/

  /*! exports provided: HistoryPageModule */

  /***/
  function srcAppPagesHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
      return HistoryPageModule;
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


    var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./history-routing.module */
    "./src/app/pages/history/history-routing.module.ts");
    /* harmony import */


    var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/history/history.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var HistoryPageModule = function HistoryPageModule() {
      _classCallCheck(this, HistoryPageModule);
    };

    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })], HistoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/history/history.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/history/history.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainContent {\n  padding: 20px;\n}\n.mainContent ion-label {\n  display: block !important;\n}\n.mainContent .noData {\n  text-align: center;\n  margin-top: 30%;\n}\n.mainContent .noData .noDataImg {\n  width: 100%;\n}\n.mainContent .haveData .myOrders {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding: 10px;\n}\n.mainContent .haveData .myOrders .restInfo .cover {\n  height: 50px;\n  width: 50px;\n  border-radius: 5px;\n  position: absolute;\n  left: 20px;\n}\n.mainContent .haveData .myOrders .restInfo .restName {\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: black;\n  text-transform: capitalize;\n  display: block;\n}\n.mainContent .haveData .myOrders .restInfo .deliveryAddress {\n  font-size: 0.7rem;\n  display: block;\n  color: gray;\n}\n.mainContent .haveData .card_div {\n  width: 100%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 0.5px solid lightgray;\n}\n.mainContent .haveData .card_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.mainContent .haveData .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.mainContent .haveData .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  min-width: 50px;\n}\n.mainContent .haveData .card_div .resto_detail .res_name {\n  font-weight: 600;\n}\n.mainContent .haveData .card_div .resto_detail .res_location {\n  color: lightgray;\n  font-size: 14px;\n}\n.mainContent .haveData .card_div .order_detail .head_gray {\n  color: lightgray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.mainContent .haveData .card_div .order_detail .small_lbl {\n  font-size: 12px;\n  font-weight: 600;\n}\n.mainContent .haveData .card_div .status_detail {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: lightgray;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQUk7RUFDSSx5QkFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNFUjtBREFRO0VBQ0ksV0FBQTtBQ0VaO0FERVE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0FaO0FERWdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FwQjtBREVnQjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDQXBCO0FERWdCO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0FwQjtBRE1RO0VBQ0ksV0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0paO0FETVk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0poQjtBRE1ZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNKaEI7QURNZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0pwQjtBRE9nQjtFQUNFLGdCQUFBO0FDTGxCO0FET2dCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDTHBCO0FEVWdCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNScEI7QURVZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNScEI7QURXWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVGhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQ29udGVudHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm5vRGF0YXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgIFxuICAgICAgICAubm9EYXRhSW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhhdmVEYXRhe1xuICAgICAgICAubXlPcmRlcnN7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgLnJlc3RJbmZve1xuICAgICAgICAgICAgICAgIC5jb3ZlcntcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZXN0TmFtZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRlbGl2ZXJ5QWRkcmVzc3tcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG5cbiAgICAgICAgICAgIC5saW5lX2RpdntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlc3RvX2RldGFpbHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yZXNfbmFtZXtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIC5yZXNfbG9jYXRpb257XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcmRlcl9kZXRhaWx7XG4gICAgICAgICAgICAgICAgLmhlYWRfZ3JheXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0YXR1c19kZXRhaWx7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgICAgICAgIC8vIC5yYXRlX2xibHtcbiAgICAgICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogI2IyZDliMjtcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZzogMHB4IDdweDtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiLm1haW5Db250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluQ29udGVudCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLm1haW5Db250ZW50IC5ub0RhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwJTtcbn1cbi5tYWluQ29udGVudCAubm9EYXRhIC5ub0RhdGFJbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLm15T3JkZXJzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5teU9yZGVycyAucmVzdEluZm8gLmNvdmVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5teU9yZGVycyAucmVzdEluZm8gLnJlc3ROYW1lIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLm15T3JkZXJzIC5yZXN0SW5mbyAuZGVsaXZlcnlBZGRyZXNzIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAubGluZV9kaXYge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5yZXNfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5yZXNfbG9jYXRpb24ge1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5oZWFkX2dyYXkge1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAuc3RhdHVzX2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/history/history.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/history/history.page.ts ***!
    \***********************************************/

  /*! exports provided: HistoryPage */

  /***/
  function srcAppPagesHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
      return HistoryPage;
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


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);

    var HistoryPage = /*#__PURE__*/function () {
      function HistoryPage(api, util, router, adb) {
        var _this = this;

        _classCallCheck(this, HistoryPage);

        this.api = api;
        this.util = util;
        this.router = router;
        this.adb = adb;
        this.haveItems = false;
        this.myOrders = [];
        this.dummy = Array(50);

        if (localStorage.getItem('uid')) {
          this.adb.collection('orders', function (ref) {
            return ref.where('userId', '==', localStorage.getItem('uid'));
          }).snapshotChanges().subscribe(function (data) {
            if (data) {
              _this.getMyOrders();
            }
          });
        }

        this.util.subscribeLoggedIn().subscribe(function (data) {
          _this.getMyOrders();
        });
      }

      _createClass(HistoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.validate();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getMyOrders",
        value: function getMyOrders() {
          var _this2 = this;

          this.api.getMyOrders(localStorage.getItem('uid')).then(function (data) {
            console.log('my orders', data);

            if (data && data.length) {
              _this2.haveItems = true;
              data.forEach(function (element) {
                element.time = new Date(element.time);
              });
              data.sort(function (a, b) {
                return b.time - a.time;
              });
              _this2.myOrders = data;

              _this2.myOrders.forEach(function (element) {
                element.order = JSON.parse(element.order);
              });

              console.log('my order==>', _this2.myOrders);
            }

            _this2.dummy = [];
          }, function (error) {
            console.log(error);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "validate",
        value: function validate() {
          var _this3 = this;

          this.api.checkAuth().then(function (user) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (user) {
                        localStorage.setItem('uid', user.uid);
                        this.getMyOrders();
                      } else {
                        this.router.navigate(['login']);
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getCart",
        value: function getCart() {
          this.router.navigate(['/tabs']);
        }
      }, {
        key: "goToHistoryDetail",
        value: function goToHistoryDetail(orderId) {
          var navData = {
            queryParams: {
              id: orderId
            }
          };
          this.router.navigate(['/history-detail'], navData);
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_5__(date).format('llll');
        }
      }]);

      return HistoryPage;
    }();

    HistoryPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
      }];
    };

    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.page.scss */
      "./src/app/pages/history/history.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])], HistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=history-history-module-es5.js.map