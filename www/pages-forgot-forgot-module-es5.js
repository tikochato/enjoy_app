function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-forgot-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForgotForgotPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Forgot Password?' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/icon.png\" class=\"logo_icon\" alt=\"yoga\">\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" [placeholder]=\"('Email' | translate) || '&nbsp;'\" name=\"email\"\n          #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          {{'Email is required' | translate}}\n        </p>\n      </ion-text>\n\n      <ion-row class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 20px;\">\n        <ion-col class=\"ion-no-margin ion-no-padding\">\n          <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\">\n            {{'Send Link' | translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/forgot/forgot-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/forgot/forgot-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ForgotPageRoutingModule */

  /***/
  function srcAppPagesForgotForgotRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function () {
      return ForgotPageRoutingModule;
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


    var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot.page */
    "./src/app/pages/forgot/forgot.page.ts");

    var routes = [{
      path: '',
      component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }];

    var ForgotPageRoutingModule = function ForgotPageRoutingModule() {
      _classCallCheck(this, ForgotPageRoutingModule);
    };

    ForgotPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/forgot/forgot.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/forgot/forgot.module.ts ***!
    \***********************************************/

  /*! exports provided: ForgotPageModule */

  /***/
  function srcAppPagesForgotForgotModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function () {
      return ForgotPageModule;
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


    var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot-routing.module */
    "./src/app/pages/forgot/forgot-routing.module.ts");
    /* harmony import */


    var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot.page */
    "./src/app/pages/forgot/forgot.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var ForgotPageModule = function ForgotPageModule() {
      _classCallCheck(this, ForgotPageModule);
    };

    ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })], ForgotPageModule);
    /***/
  },

  /***/
  "./src/app/pages/forgot/forgot.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/forgot/forgot.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForgotForgotPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n.btn_class {\n  color: white;\n  height: 50px;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\nion-item {\n  --ion-background-color:#f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.createAcc {\n  text-align: center;\n}\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9mb3Jnb3QvZm9yZ290LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSx1QkFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNFUjtBRENBO0VBQ1EsaUJBQUE7RUFDQSwrQkFBQTtBQ0VSO0FEQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEREE7RUFDSyxnQkFBQTtBQ0lMO0FERkE7RUFDSSxnQkFBQTtBQ0tKO0FESEE7RUFDSSxrQ0FBQTtFQUNBLFdBQUE7QUNNSjtBREpBO0VBQ0ssOEJBQUE7RUFDRCw2QkFBQTtFQUNBLGdCQUFBO0FDT0o7QURIQTtFQUNHLGtCQUFBO0FDTUg7QURMRztFQUNLLCtCQUFBO0VBQ0EsaUJBQUE7QUNPUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWxvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcmlnaHQ6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLmxvZ29faWNvbntcbiAgICAgICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sb2dpbi1uYW1le1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgIC5zdWJUaXRsZXtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG59XG4uZnJnVGFne1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmJ0bl9jbGFzc3tcbiAgICBjb2xvcjogd2hpdGUgO1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5sb2dpbi1sb2dvIGltZyB7XG4gICAgIG1heC13aWR0aDogMTUwcHg7XG59XG4ubGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmlvbi1saXN0e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24taXRlbXtcbiAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgXG59XG5cbi5jcmVhdGVBY2N7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAucmVnaXN0ZXJUYWd7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgIH1cbn0gIiwiLmxvZ2luLWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAzMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubG9naW4tbG9nbyAubG9nb19pY29uIHtcbiAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tbG9nbyAubG9naW4tbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5sb2dpbi1sb2dvIC5zdWJUaXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5mcmdUYWcge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmJ0bl9jbGFzcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9naW4tbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNyZWF0ZUFjYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jcmVhdGVBY2MgLnJlZ2lzdGVyVGFnIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/forgot/forgot.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/forgot/forgot.page.ts ***!
    \*********************************************/

  /*! exports provided: ForgotPage */

  /***/
  function srcAppPagesForgotForgotPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPage", function () {
      return ForgotPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");

    var ForgotPage = /*#__PURE__*/function () {
      function ForgotPage(navCtrl, util, api) {
        _classCallCheck(this, ForgotPage);

        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.login = {
          email: ''
        };
        this.submitted = false;
      }

      _createClass(ForgotPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          var _this = this;

          console.log('form', form);
          this.submitted = true;

          if (form.valid) {
            var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

            if (!emailfilter.test(this.login.email)) {
              this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
              return false;
            }

            this.util.show();
            this.api.resetPassword(this.login.email).then(function (data) {
              _this.util.hide();

              _this.util.showToast(_this.util.translate('Reset Password link is sent to your email'), 'dark', 'bottom');

              console.log('sent', data);

              _this.navCtrl.back();
            }, function (error) {
              console.log(error);

              _this.util.hide();

              _this.util.showErrorAlert(_this.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);

              _this.util.hide();

              _this.util.showErrorAlert(_this.util.translate('Something went wrong'));
            });
          }
        }
      }]);

      return ForgotPage;
    }();

    ForgotPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }];
    };

    ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot.page.scss */
      "./src/app/pages/forgot/forgot.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])], ForgotPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-forgot-forgot-module-es5.js.map