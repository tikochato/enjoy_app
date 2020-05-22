function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rate-rate-module"], {
  /***/
  "./node_modules/ionic4-rating/dist/components/rating.js":
  /*!**************************************************************!*\
    !*** ./node_modules/ionic4-rating/dist/components/rating.js ***!
    \**************************************************************/

  /*! exports provided: RatingComponent */

  /***/
  function node_modulesIonic4RatingDistComponentsRatingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
      return RatingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var RatingComponent =
    /** @class */
    function () {
      function RatingComponent() {
        this.size = 'default';
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      RatingComponent_1 = RatingComponent;

      RatingComponent.prototype.onClick = function (rate) {
        this.rate = rate;
        this.rateChange.emit(this.rate);

        this._onChange(this.rate);
      };

      RatingComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
          this.rate = value;
        }
      };

      RatingComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
      };

      RatingComponent.prototype.registerOnTouched = function (fn) {};

      RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled;
      };

      var RatingComponent_1;

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], RatingComponent.prototype, "rate", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], RatingComponent.prototype, "readonly", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], RatingComponent.prototype, "size", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], RatingComponent.prototype, "rateChange", void 0);

      RatingComponent = RatingComponent_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "rating",
        template: "\n    <ion-buttons>\n      <ion-button [disabled]=\"readonly\" fill=\"clear\" [size]=\"size\" *ngFor=\"let current of [1, 2, 3, 4, 5]; let i = index\"\n        (click)=\"onClick(i + 1)\" (mouseover)=\"hoverRate = i + 1\" (mouseleave)=\"hoverRate = 0\">\n        <ion-icon slot=\"icon-only\" name=\"star\" [class.filled]=\"(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  ",
        styles: ["\n      ion-buttons {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled] {\n        opacity: 1;\n      }\n\n      ion-icon {\n        color: gray;\n      }\n\n      ion-icon.filled {\n        color: orange;\n      }\n    "],
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return RatingComponent_1;
          }),
          multi: true
        }]
      })], RatingComponent);
      return RatingComponent;
    }(); //# sourceMappingURL=rating.js.map

    /***/

  },

  /***/
  "./node_modules/ionic4-rating/dist/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/ionic4-rating/dist/index.js ***!
    \**************************************************/

  /*! exports provided: IonicRatingModule, RatingComponent */

  /***/
  function node_modulesIonic4RatingDistIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ionic-rating.module */
    "./node_modules/ionic4-rating/dist/ionic-rating.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function () {
      return _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__["IonicRatingModule"];
    });
    /* harmony import */


    var _components_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/rating */
    "./node_modules/ionic4-rating/dist/components/rating.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
      return _components_rating__WEBPACK_IMPORTED_MODULE_1__["RatingComponent"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/ionic4-rating/dist/ionic-rating.module.js":
  /*!****************************************************************!*\
    !*** ./node_modules/ionic4-rating/dist/ionic-rating.module.js ***!
    \****************************************************************/

  /*! exports provided: IonicRatingModule */

  /***/
  function node_modulesIonic4RatingDistIonicRatingModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function () {
      return IonicRatingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/rating */
    "./node_modules/ionic4-rating/dist/components/rating.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var IonicRatingModule =
    /** @class */
    function () {
      function IonicRatingModule() {}

      IonicRatingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
        exports: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]],
        declarations: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]
      })], IonicRatingModule);
      return IonicRatingModule;
    }(); //# sourceMappingURL=ionic-rating.module.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rate/rate.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rate/rate.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRateRatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Rate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"title\"> Rate Foods</p>\n  <div *ngFor=\"let item of items\" class=\"flex_box\">\n    <ion-label class=\"name\">{{item.name}}</ion-label>\n    <rating [(ngModel)]=\"item.rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n      halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n    </rating>\n  </div>\n\n  <p class=\"title\"> Rate Driver</p>\n  <div class=\"driver\">\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"image\" onError=\"this.src='assets/imgs/paper.png'\" />\n      </ion-avatar>\n      <ion-label>{{name}}</ion-label>\n    </ion-item>\n    <rating [(ngModel)]=\"driver\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\" halfStarIconName=\"star-half\"\n      starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\"></rating>\n    <ion-textarea rows=\"5\" [(ngModel)]=\"driverNotes\" placeholder=\"Write detailed review here..\"></ion-textarea>\n  </div>\n  <ion-button (click)=\"submit()\" expand=\"block\" shape=\"round\">\n    Submit\n  </ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/module.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/module.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinModuleJs(module, exports) {
    module.exports = function (module) {
      if (!module.webpackPolyfill) {
        module.deprecate = function () {};

        module.paths = []; // module.parent = undefined by default

        if (!module.children) module.children = [];
        Object.defineProperty(module, "loaded", {
          enumerable: true,
          get: function get() {
            return module.l;
          }
        });
        Object.defineProperty(module, "id", {
          enumerable: true,
          get: function get() {
            return module.i;
          }
        });
        module.webpackPolyfill = 1;
      }

      return module;
    };
    /***/

  },

  /***/
  "./src/app/pages/rate/rate-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/rate/rate-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: RatePageRoutingModule */

  /***/
  function srcAppPagesRateRateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatePageRoutingModule", function () {
      return RatePageRoutingModule;
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


    var _rate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rate.page */
    "./src/app/pages/rate/rate.page.ts");

    var routes = [{
      path: '',
      component: _rate_page__WEBPACK_IMPORTED_MODULE_3__["RatePage"]
    }];

    var RatePageRoutingModule = function RatePageRoutingModule() {
      _classCallCheck(this, RatePageRoutingModule);
    };

    RatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RatePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/rate/rate.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/rate/rate.module.ts ***!
    \*******************************************/

  /*! exports provided: RatePageModule */

  /***/
  function srcAppPagesRateRateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatePageModule", function () {
      return RatePageModule;
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


    var _rate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rate-routing.module */
    "./src/app/pages/rate/rate-routing.module.ts");
    /* harmony import */


    var _rate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rate.page */
    "./src/app/pages/rate/rate.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/dist/index.js");

    var RatePageModule = function RatePageModule() {
      _classCallCheck(this, RatePageModule);
    };

    RatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rate_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatePageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
      declarations: [_rate_page__WEBPACK_IMPORTED_MODULE_6__["RatePage"]]
    })], RatePageModule);
    /***/
  },

  /***/
  "./src/app/pages/rate/rate.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/rate/rate.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRateRatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  background: #f3f3f3;\n  color: var(--ion-color-primary);\n  font-size: 1.3rem;\n  text-align: center;\n  font-weight: bold;\n  margin: 0px;\n  padding: 10px;\n}\n\n.flex_box {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid lightgray;\n}\n\n.flex_box .name {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.driver {\n  padding: 10px;\n}\n\n.driver ion-textarea {\n  border-bottom: 1px solid lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9yYXRlL3JhdGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yYXRlL3JhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FDRUo7O0FEREk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDR1I7O0FEQUE7RUFDSSxhQUFBO0FDR0o7O0FERkk7RUFDSSxrQ0FBQTtBQ0lSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmF0ZS9yYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uZmxleF9ib3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAubmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufVxuLmRyaXZlcntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICB9XG59IiwiLnRpdGxlIHtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmxleF9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uZmxleF9ib3ggLm5hbWUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRyaXZlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZHJpdmVyIGlvbi10ZXh0YXJlYSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/rate/rate.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/rate/rate.page.ts ***!
    \*****************************************/

  /*! exports provided: RatePage */

  /***/
  function srcAppPagesRateRatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatePage", function () {
      return RatePage;
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


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);

    var RatePage = /*#__PURE__*/function () {
      function RatePage(api, util, adb, navCtrl) {
        _classCallCheck(this, RatePage);

        this.api = api;
        this.util = util;
        this.adb = adb;
        this.navCtrl = navCtrl;
        this.driver = 3;
        this.items = [];
        var data = this.util.gerOrder();
        console.log(data);

        if (data) {
          this.items = JSON.parse(data.order);
          this.items = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["uniqBy"])(this.items, 'id');
          this.dId = data.dId.id;
          this.name = data.dId.fullname;
          this.image = data.dId.coverImage;
          console.log(this.items);
          this.items.forEach(function (element) {
            element.rate = 0;
            element.totalRatting = element.totalRatting ? element.totalRatting : 1;
          });
        }
      }

      _createClass(RatePage, [{
        key: "submit",
        value: function submit() {
          var _this = this;

          console.log(this.items);
          this.items.forEach(function (element) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var totalRatting;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('elementt', element);
                      totalRatting = 0;
                      totalRatting = element.rate * element.totalRatting / 100;
                      console.log('???', totalRatting);
                      totalRatting = totalRatting * 100;

                      if (!totalRatting) {
                        totalRatting = element.rate;
                      }

                      _context.next = 8;
                      return this.adb.collection('foods').doc(element.uid).collection('all').doc(element.id).update({
                        ratting: totalRatting,
                        totalRatting: element.totalRatting + 1
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
          var id = Math.random().toString();
          console.log('iddddd', id);
          var uid = localStorage.getItem('uid');
          console.log('----->', localStorage.getItem('uid'));
          var parm = {
            id: id,
            descriptions: this.driverNotes,
            rate: this.driver,
            dId: this.dId,
            user: uid,
            uid: uid
          };
          console.log('parma ====>', parm);
          this.api.addDriverReview(parm).then(function (data) {
            console.log('??????', data);
          })["catch"](function (error) {
            console.log(error);
          });
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Success',
            text: 'Thank you for submiting review',
            timer: 1000,
            backdrop: false,
            background: 'white',
            icon: 'success'
          });
          this.navCtrl.navigateRoot(['/tabs']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onRatingChange",
        value: function onRatingChange(event) {
          console.log(event);
        }
      }]);

      return RatePage;
    }();

    RatePage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    RatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rate.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rate/rate.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rate.page.scss */
      "./src/app/pages/rate/rate.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], RatePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-rate-rate-module-es5.js.map