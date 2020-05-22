function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tracker-tracker-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTrackerTrackerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"upper_div\">\n      <div #map id=\"map\" class=\"map\"></div>\n    </div>\n    <div class=\"lower_div\">\n      <ion-label class=\"head_lbl\">{{'Order on the Way' | translate}}</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url('+dCover+')'\"></div>\n        <div style=\"padding-left: 20px;\">\n          <ion-label class=\"boy_name\">{{dName}}</ion-label>\n          <ion-label class=\"address\">{{restAddress}}</ion-label>\n          <ion-button (click)=\"callDriver()\" size=\"small\" fill=\"outline\">\n            {{'Call' | translate}}\n          </ion-button>\n        </div>\n      </div>\n\n      <ion-label class=\"order_detail\">{{totalOrders.length}} {{'Items to deliver' | translate}}<span\n          style=\"color: var(--ion-color-primary);position: absolute;right: 20px;\">{{grandTotal}}$</span></ion-label>\n      <ion-label class=\"order_detail\">{{'Order Status' | translate}}<span class=\"order_status\">{{status}}</span>\n      </ion-label>\n\n    </div>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/tracker/tracker-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/tracker/tracker-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: TrackerPageRoutingModule */

  /***/
  function srcAppPagesTrackerTrackerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackerPageRoutingModule", function () {
      return TrackerPageRoutingModule;
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


    var _tracker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tracker.page */
    "./src/app/pages/tracker/tracker.page.ts");

    var routes = [{
      path: '',
      component: _tracker_page__WEBPACK_IMPORTED_MODULE_3__["TrackerPage"]
    }];

    var TrackerPageRoutingModule = function TrackerPageRoutingModule() {
      _classCallCheck(this, TrackerPageRoutingModule);
    };

    TrackerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TrackerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tracker/tracker.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/tracker/tracker.module.ts ***!
    \*************************************************/

  /*! exports provided: TrackerPageModule */

  /***/
  function srcAppPagesTrackerTrackerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackerPageModule", function () {
      return TrackerPageModule;
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


    var _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tracker-routing.module */
    "./src/app/pages/tracker/tracker-routing.module.ts");
    /* harmony import */


    var _tracker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tracker.page */
    "./src/app/pages/tracker/tracker.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var TrackerPageModule = function TrackerPageModule() {
      _classCallCheck(this, TrackerPageModule);
    };

    TrackerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrackerPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_tracker_page__WEBPACK_IMPORTED_MODULE_6__["TrackerPage"]]
    })], TrackerPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tracker/tracker.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/tracker/tracker.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTrackerTrackerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .upper_div {\n  height: 60vh;\n}\n.main_content_div .upper_div #map {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .lower_div {\n  height: 40vh;\n  padding: 20px;\n}\n.main_content_div .lower_div ion-label {\n  display: block;\n}\n.main_content_div .lower_div .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  margin-top: 10px;\n}\n.main_content_div .lower_div .driver_detail_div {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .lower_div .driver_detail_div .back_image {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-width: 50px;\n}\n.main_content_div .lower_div .driver_detail_div .boy_name {\n  font-weight: 600;\n}\n.main_content_div .lower_div .driver_detail_div .address {\n  color: gray;\n  width: 80%;\n}\n.main_content_div .lower_div .driver_detail_div ion-button {\n  position: absolute;\n  right: -3px;\n  top: -5px;\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .lower_div .order_detail {\n  font-weight: bold;\n  margin-top: 20px;\n}\n.main_content_div .lower_div .order_status {\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 20px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 3px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy90cmFja2VyL3RyYWNrZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90cmFja2VyL3RyYWNrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVI7QUREUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDR1o7QURBSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRVI7QUREUTtFQUNJLGNBQUE7QUNHWjtBRERRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHWjtBREFRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRVo7QUREWTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUNHaEI7QUREWTtFQUNJLGdCQUFBO0FDR2hCO0FERFk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0doQjtBRERZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNHaEI7QURDUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBRENRO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFja2VyL3RyYWNrZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC51cHBlcl9kaXZ7XG4gICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgI21hcHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sb3dlcl9kaXZ7XG4gICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyaXZlcl9kZXRhaWxfZGl2e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aCA6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm95X25hbWV7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogLTNweDtcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vcmRlcl9kZXRhaWx7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm9yZGVyX3N0YXR1c3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9ICAgXG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiB7XG4gIGhlaWdodDogNjB2aDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IHtcbiAgaGVpZ2h0OiA0MHZoO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmhlYWRfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuZHJpdmVyX2RldGFpbF9kaXYge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5kcml2ZXJfZGV0YWlsX2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmRyaXZlcl9kZXRhaWxfZGl2IC5ib3lfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5kcml2ZXJfZGV0YWlsX2RpdiAuYWRkcmVzcyB7XG4gIGNvbG9yOiBncmF5O1xuICB3aWR0aDogODAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuZHJpdmVyX2RldGFpbF9kaXYgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zcHg7XG4gIHRvcDogLTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5vcmRlcl9kZXRhaWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLm9yZGVyX3N0YXR1cyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/tracker/tracker.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/tracker/tracker.page.ts ***!
    \***********************************************/

  /*! exports provided: TrackerPage */

  /***/
  function srcAppPagesTrackerTrackerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackerPage", function () {
      return TrackerPage;
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


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var TrackerPage = /*#__PURE__*/function () {
      function TrackerPage(route, api, adb, util, navCtrl) {
        _classCallCheck(this, TrackerPage);

        this.route = route;
        this.api = api;
        this.adb = adb;
        this.util = util;
        this.navCtrl = navCtrl;
        this.latOri = '';
        this.longOri = '';
        this.latDest = '';
        this.longDest = '';
        this.id = '';
        this.dName = '';
        this.restAddress = '';
        this.dCover = '';
        this.phone = '';
        this.status = '';
        this.totalOrders = [];
      }

      _createClass(TrackerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (data) {
            console.log('data=>', data);

            if (data.hasOwnProperty('id')) {
              _this.id = data.id;

              _this.getOrder();
            }
          });
        }
      }, {
        key: "callDriver",
        value: function callDriver() {
          // window.open('tel:' + this.phone);
          window.open('https://api.whatsapp.com/send?phone=91' + this.phone);
        }
      }, {
        key: "getOrder",
        value: function getOrder() {
          var _this2 = this;

          this.util.show();
          this.api.getOrderById(this.id).then(function (data) {
            _this2.util.hide();

            console.log(data);

            if (data) {
              _this2.dName = data.dId.fullname;
              _this2.dCover = data.dId.coverImage;
              _this2.dId = data.dId.uid;
              _this2.restAddress = data.vid.address;
              _this2.phone = data.dId.phone;
              _this2.status = data.status;
              _this2.grandTotal = data.grandTotal;
              _this2.totalOrders = JSON.parse(data.order);

              _this2.getDriverInfo();

              console.log('my order', _this2.totalOrders);

              _this2.loadMap(parseFloat(data.address.lat), parseFloat(data.address.lng), parseFloat(data.vid.lat), parseFloat(data.vid.lng));
            }
          }, function (error) {
            console.log('error in orders', error);

            _this2.util.hide();

            _this2.util.errorToast('Something went wrong');
          })["catch"](function (error) {
            console.log('error in order', error);

            _this2.util.hide();

            _this2.util.errorToast('Something went wrong');
          });
        }
      }, {
        key: "getDriverInfo",
        value: function getDriverInfo() {
          var _this3 = this;

          this.adb.collection('orders').doc(this.id).snapshotChanges().subscribe(function (data) {
            console.log(data.payload.data());

            if (data) {
              _this3.status = data.payload.data().status;

              if (data.payload.data().status === 'delivered') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                  title: 'Order Delivered',
                  text: 'Your Order is Delivered',
                  icon: 'success',
                  backdrop: false
                });

                _this3.navCtrl.navigateRoot(['tabs/tab2']);
              }
            }
          }, function (error) {
            console.log(error);
          });
          this.adb.collection('users').doc(this.dId).snapshotChanges().subscribe(function (data) {
            console.log(data.payload.data());

            if (data) {
              _this3.driverLat = data.payload.data().lat;
              _this3.driverLng = data.payload.data().lng;
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "changeMarkerPosition",
        value: function changeMarkerPosition(marker, map) {
          var latlng = new google.maps.LatLng(this.driverLat, this.driverLng);
          map.setCenter(latlng);
          marker.setPosition(latlng);
          console.log("Updating runner position");
        }
      }, {
        key: "loadMap",
        value: function loadMap(latOri, lngOri, latDest, lngDest) {
          var _this4 = this;

          var directionsService = new google.maps.DirectionsService();
          var directionsDisplay = new google.maps.DirectionsRenderer();
          directionsDisplay = new google.maps.DirectionsRenderer();
          var bounds = new google.maps.LatLngBounds();
          var origin1 = {
            lat: parseFloat(latOri),
            lng: parseFloat(lngOri)
          };
          var destinationA = {
            lat: latDest,
            lng: lngDest
          };
          var destinationIcon = 'https://chart.googleapis.com/chart?' + 'chst=d_map_pin_letter&chld=D|FF0000|000000';
          var originIcon = 'https://chart.googleapis.com/chart?' + 'chst=d_map_pin_letter&chld=O|FFFF00|000000';
          var map = new google.maps.Map(this.mapElement.nativeElement, {
            center: {
              lat: latOri,
              lng: lngOri
            },
            disableDefaultUI: true,
            zoom: 100
          });
          var custPos = new google.maps.LatLng(latOri, lngOri);
          var restPos = new google.maps.LatLng(latDest, lngDest);
          var icon = {
            url: 'assets/icon.png',
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor

          };
          var marker = new google.maps.Marker({
            map: map,
            position: custPos,
            animation: google.maps.Animation.DROP,
            icon: icon
          });
          var markerCust = new google.maps.Marker({
            map: map,
            position: restPos,
            animation: google.maps.Animation.DROP
          });
          marker.setMap(map);
          markerCust.setMap(map);
          directionsDisplay.setMap(map); // directionsDisplay.setOptions({ suppressMarkers: true });

          directionsDisplay.setOptions({
            polylineOptions: {
              strokeWeight: 4,
              strokeOpacity: 1,
              strokeColor: 'red'
            },
            suppressMarkers: true
          });
          var geocoder = new google.maps.Geocoder();
          var service = new google.maps.DistanceMatrixService();
          service.getDistanceMatrix({
            origins: [origin1],
            destinations: [destinationA],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          }, function (response, status) {
            if (status !== 'OK') {
              alert('Error was: ' + status);
            } else {
              var originList = response.originAddresses;
              var destinationList = response.destinationAddresses;
              var outputDiv = document.getElementById('output'); // outputDiv.innerHTML = '';
              // deleteMarkers(markersArray);

              var showGeocodedAddressOnMap = function showGeocodedAddressOnMap(asDestination) {
                var icon = asDestination ? destinationIcon : originIcon;
                return function (results, status) {
                  if (status === 'OK') {
                    map.fitBounds(bounds.extend(results[0].geometry.location)); // markersArray.push(new google.maps.Marker({
                    //   map: map,
                    //   position: results[0].geometry.location,
                    //   icon: icon
                    // }));
                  } else {
                    alert('Geocode was not successful due to: ' + status);
                  }
                };
              };

              directionsService.route({
                origin: origin1,
                destination: destinationA,
                travelMode: 'DRIVING'
              }, function (response, status) {
                if (status === 'OK') {
                  directionsDisplay.setDirections(response);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
              });

              for (var i = 0; i < originList.length; i++) {
                var results = response.rows[i].elements;
                geocoder.geocode({
                  'address': originList[i]
                }, showGeocodedAddressOnMap(false));

                for (var j = 0; j < results.length; j++) {
                  geocoder.geocode({
                    'address': destinationList[j]
                  }, showGeocodedAddressOnMap(true));
                }
              }
            }
          });
          this.interval = setInterval(function () {
            _this4.changeMarkerPosition(marker, map);
          }, 12000);
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          console.log('leaae');
          clearInterval(this.interval);
        }
      }]);

      return TrackerPage;
    }();

    TrackerPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TrackerPage.prototype, "mapElement", void 0);
    TrackerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tracker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tracker.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tracker.page.scss */
      "./src/app/pages/tracker/tracker.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], TrackerPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tracker-tracker-module-es5.js.map