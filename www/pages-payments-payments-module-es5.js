function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payments-payments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payments/payments.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payments/payments.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentsPaymentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Payments' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"header\">\n    <ion-label class=\"title\">{{'Payment Options' | translate}}</ion-label>\n  </div>\n  \n  <!-- <ion-item (click)=\"openStripe()\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/stripe.png\" />\n    </ion-thumbnail>\n    <ion-label>{{'Pay with' | translate}} Stripe</ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"payWithPaypal()\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/paypal.png\" />\n    </ion-thumbnail>\n    <ion-label>{{'Pay with' | translate}} Paypal</ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item> -->\n\n  <ion-item (click)=\"placeOrder()\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/cod.png\" />\n    </ion-thumbnail>\n    <ion-label>{{'Cash on Delivery' | translate}}</ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/payments/payments-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/payments/payments-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: PaymentsPageRoutingModule */

  /***/
  function srcAppPagesPaymentsPaymentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentsPageRoutingModule", function () {
      return PaymentsPageRoutingModule;
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


    var _payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payments.page */
    "./src/app/pages/payments/payments.page.ts");

    var routes = [{
      path: '',
      component: _payments_page__WEBPACK_IMPORTED_MODULE_3__["PaymentsPage"]
    }];

    var PaymentsPageRoutingModule = function PaymentsPageRoutingModule() {
      _classCallCheck(this, PaymentsPageRoutingModule);
    };

    PaymentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/payments/payments.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/payments/payments.module.ts ***!
    \***************************************************/

  /*! exports provided: PaymentsPageModule */

  /***/
  function srcAppPagesPaymentsPaymentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function () {
      return PaymentsPageModule;
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


    var _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payments-routing.module */
    "./src/app/pages/payments/payments-routing.module.ts");
    /* harmony import */


    var _payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payments.page */
    "./src/app/pages/payments/payments.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var PaymentsPageModule = function PaymentsPageModule() {
      _classCallCheck(this, PaymentsPageModule);
    };

    PaymentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentsPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]]
    })], PaymentsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/payments/payments.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/payments/payments.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPaymentsPaymentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  background: #f3f3f3;\n  padding: 20px;\n}\n.header .title {\n  font-size: 1rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9wYXltZW50cy9wYXltZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BheW1lbnRzL3BheW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnRzL3BheW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC50aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/payments/payments.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/payments/payments.page.ts ***!
    \*************************************************/

  /*! exports provided: PaymentsPage */

  /***/
  function srcAppPagesPaymentsPaymentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentsPage", function () {
      return PaymentsPage;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/paypal/ngx */
    "./node_modules/@ionic-native/paypal/ngx/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var PaymentsPage = /*#__PURE__*/function () {
      function PaymentsPage(router, api, util, navCtrl, payPal) {
        _classCallCheck(this, PaymentsPage);

        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.payPal = payPal;
        this.totalPrice = 0;
        this.totalItem = 0;
        this.serviceTax = 0;
        this.deliveryCharge = 5;
        this.grandTotal = 0;
        this.venueFCM = '';
        this.vid = '';
        this.payKey = '';
      }

      _createClass(PaymentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var foods, recheck, add;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return JSON.parse(localStorage.getItem('foods'));

                  case 2:
                    foods = _context.sent;
                    _context.next = 5;
                    return foods.filter(function (x) {
                      return x.quantiy > 0;
                    });

                  case 5:
                    recheck = _context.sent;
                    console.log(recheck);
                    add = JSON.parse(localStorage.getItem('deliveryAddress'));
                    this.vid = localStorage.getItem('vid');
                    this.api.getVenueUser(this.vid).then(function (data) {
                      console.log('venue', data);

                      if (data && data.fcm_token) {
                        _this.venueFCM = data.fcm_token;
                      }
                    }, function (error) {
                      _this.util.errorToast(_this.util.translate('Something went wrong'));

                      _this.router.navigate(['tabs']);
                    })["catch"](function (error) {
                      _this.util.errorToast(_this.util.translate('Something went wrong'));

                      _this.router.navigate(['tabs']);

                      console.log(error);
                    });

                    if (add && add.address) {
                      this.deliveryAddress = add;
                    }

                    this.coupon = JSON.parse(localStorage.getItem('coupon'));
                    console.log('COUPON===================', this.coupon);
                    console.log('ADDRESS===================', this.deliveryAddress);
                    this.calculate(recheck);

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "calculate",
        value: function calculate(foods) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var item, tax, percentage, totalPrice, _tax, _totalPrice, _tax2;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log(foods);
                    item = foods.filter(function (x) {
                      return x.quantiy > 0;
                    });
                    console.log(item);
                    this.totalPrice = 0;
                    this.totalItem = 0;
                    _context2.next = 7;
                    return item.forEach(function (element) {
                      _this2.totalItem = _this2.totalItem + element.quantiy;
                      _this2.totalPrice = _this2.totalPrice + parseFloat(element.price) * parseInt(element.quantiy);
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
                    console.log('grand totla', this.grandTotal);

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

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "placeOrder",
        value: function placeOrder() {
          var _this3 = this;

          console.log('place order');
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('Orders once placed cannot be cancelled and are non-refundable'),
            icon: 'question',
            showCancelButton: true,
            backdrop: false,
            background: 'white',
            confirmButtonText: this.util.translate('Yes'),
            cancelButtonText: this.util.translate('cancel')
          }).then(function (data) {
            console.log(data);

            if (data && data.value) {
              console.log('go to procesed');

              _this3.createOrder();
            }
          });
        } // For Testing Generate Credit Card American Express
        // https://developer.paypal.com/developer/creditCardGenerator/

      }, {
        key: "payWithPaypal",
        value: function payWithPaypal() {
          var _this4 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('Orders once placed cannot be cancelled and are non-refundable'),
            icon: 'question',
            showCancelButton: true,
            backdrop: false,
            background: 'white',
            confirmButtonText: this.util.translate('Yes'),
            cancelButtonText: this.util.translate('cancel')
          }).then(function (data) {
            console.log(data);

            if (data && data.value) {
              console.log('go to procesed');

              _this4.payPal.init({
                PayPalEnvironmentProduction: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].paypal.production,
                PayPalEnvironmentSandbox: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].paypal.sandbox
              }).then(function () {
                _this4.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPalConfiguration"]({})).then(function () {
                  var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPalPayment"](_this4.grandTotal, 'USD', 'Food Delivery', 'sale');

                  _this4.payPal.renderSinglePaymentUI(payment).then(function (res) {
                    console.log(res);
                    _this4.payKey = res.response.id;

                    _this4.paypalOrder();
                  }, function (error) {
                    console.log('error', error);

                    _this4.util.showToast(error, 'danger', 'bottom'); // Error or render dialog closed without being successful

                  });
                }, function (error) {
                  console.log('error', error);

                  _this4.util.showToast(error, 'danger', 'bottom'); // Error in configuration

                });
              }, function (error) {
                console.log('error', error);

                _this4.util.showToast(error, 'danger', 'bottom'); // Error in initialization, maybe PayPal isn't supported or something else

              });
            }
          });
        }
      }, {
        key: "degreesToRadians",
        value: function degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        }
      }, {
        key: "distanceInKmBetweenEarthCoordinates",
        value: function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
          console.log(lat1, lon1, lat2, lon2);
          var earthRadiusKm = 6371;
          var dLat = this.degreesToRadians(lat2 - lat1);
          var dLon = this.degreesToRadians(lon2 - lon1);
          lat1 = this.degreesToRadians(lat1);
          lat2 = this.degreesToRadians(lat2);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return earthRadiusKm * c;
        }
      }, {
        key: "createOrder",
        value: function createOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.util.show(this.util.translate('Creating order'));
                    this.api.checkAuth().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        var _this6 = this;

                        var addressId, newAddress, foods, recheck, id, uid, lng, selectedCity, param;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                console.log(data);

                                if (!data) {
                                  _context4.next = 34;
                                  break;
                                }

                                if (!(!this.deliveryAddress.id || this.deliveryAddress.id === '')) {
                                  _context4.next = 7;
                                  break;
                                }

                                addressId = this.util.makeid(10);
                                newAddress = {
                                  id: addressId,
                                  uid: data.uid,
                                  address: this.deliveryAddress.address,
                                  lat: this.deliveryAddress.lat,
                                  lng: this.deliveryAddress.lng,
                                  title: 'home',
                                  house: '',
                                  landmark: ''
                                };
                                _context4.next = 7;
                                return this.api.addNewAddress(data.uid, addressId, newAddress).then(function (data) {
                                  _this6.deliveryAddress.id = addressId;
                                }, function (error) {
                                  console.log(error);
                                })["catch"](function (error) {
                                  console.log(error);
                                });

                              case 7:
                                _context4.next = 9;
                                return JSON.parse(localStorage.getItem('foods'));

                              case 9:
                                foods = _context4.sent;
                                _context4.next = 12;
                                return foods.filter(function (x) {
                                  return x.quantiy > 0;
                                });

                              case 12:
                                recheck = _context4.sent;
                                console.log('ordered food', recheck);
                                id = this.util.makeid(10);
                                _context4.next = 17;
                                return localStorage.removeItem('foods');

                              case 17:
                                _context4.next = 19;
                                return localStorage.removeItem('vid');

                              case 19:
                                _context4.next = 21;
                                return localStorage.removeItem('totalItem');

                              case 21:
                                uid = localStorage.getItem('uid');
                                lng = localStorage.getItem('language');
                                selectedCity = localStorage.getItem('selectedCity');
                                _context4.next = 26;
                                return localStorage.clear();

                              case 26:
                                localStorage.setItem('uid', uid);
                                localStorage.setItem('language', lng);
                                localStorage.setItem('selectedCity', selectedCity);
                                param = {
                                  uid: data.uid,
                                  userId: data.uid,
                                  orderId: id,
                                  vid: this.vid,
                                  order: JSON.stringify(recheck),
                                  time: moment__WEBPACK_IMPORTED_MODULE_8__().format('llll'),
                                  address: this.deliveryAddress,
                                  total: this.totalPrice,
                                  grandTotal: this.grandTotal,
                                  serviceTax: this.serviceTax,
                                  deliveryCharge: 5,
                                  status: 'created',
                                  restId: this.vid,
                                  // driverId: this.drivers[0].uid,
                                  // dId: this.drivers[0].uid,
                                  paid: 'cod',
                                  appliedCoupon: this.coupon ? true : false,
                                  couponId: this.coupon ? this.coupon.id : 'NA',
                                  coupon: this.coupon ? JSON.stringify(this.coupon) : 'NA',
                                  dicount: this.coupon ? this.dicount : 0
                                };
                                console.log('sent', param);
                                this.api.createOrder(id, param).then(function (data) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                      while (1) {
                                        switch (_context3.prev = _context3.next) {
                                          case 0:
                                            this.util.hide();

                                            if (this.venueFCM && this.venueFCM !== '') {
                                              this.api.sendNotification(this.util.translate('New Order Received'), this.util.translate('New Order'), this.venueFCM).subscribe(function (data) {
                                                console.log('send notifications', data);
                                              }, function (error) {
                                                console.log(error);
                                              });
                                            }

                                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                                              title: this.util.translate('Success'),
                                              text: this.util.translate('Your is created succesfully'),
                                              icon: 'success',
                                              backdrop: false
                                            });
                                            this.navCtrl.navigateRoot(['tabs/tab2']);
                                            console.log(data);

                                          case 5:
                                          case "end":
                                            return _context3.stop();
                                        }
                                      }
                                    }, _callee3, this);
                                  }));
                                }, function (error) {
                                  _this6.util.hide();

                                  _this6.util.errorToast(_this6.util.translate('Something went wrong'));

                                  _this6.router.navigate(['tabs']);
                                })["catch"](function (error) {
                                  _this6.util.hide();

                                  _this6.util.errorToast(_this6.util.translate('Something went wrong'));

                                  _this6.router.navigate(['tabs']);

                                  console.log(error);
                                });
                                _context4.next = 37;
                                break;

                              case 34:
                                this.util.hide();
                                this.util.errorToast(this.util.translate('Session expired'));
                                this.router.navigate(['login']);

                              case 37:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    }, function (error) {
                      _this5.util.hide();

                      _this5.util.errorToast(_this5.util.translate('Session expired'));

                      _this5.router.navigate(['login']);
                    })["catch"](function (error) {
                      _this5.util.hide();

                      _this5.util.errorToast(_this5.util.translate('Session expired'));

                      _this5.router.navigate(['login']);

                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "paypalOrder",
        value: function paypalOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.util.show('creating order');
                    this.api.checkAuth().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        var _this8 = this;

                        var addressId, newAddress, foods, recheck, id, uid, lng, selectedCity, param;
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                console.log(data);

                                if (!data) {
                                  _context7.next = 34;
                                  break;
                                }

                                if (!(!this.deliveryAddress.id || this.deliveryAddress.id === '')) {
                                  _context7.next = 7;
                                  break;
                                }

                                addressId = this.util.makeid(10);
                                newAddress = {
                                  id: addressId,
                                  uid: data.uid,
                                  address: this.deliveryAddress.address,
                                  lat: this.deliveryAddress.lat,
                                  lng: this.deliveryAddress.lng,
                                  title: 'home',
                                  house: '',
                                  landmark: ''
                                };
                                _context7.next = 7;
                                return this.api.addNewAddress(data.uid, addressId, newAddress).then(function (data) {
                                  _this8.deliveryAddress.id = addressId;
                                }, function (error) {
                                  console.log(error);
                                })["catch"](function (error) {
                                  console.log(error);
                                });

                              case 7:
                                _context7.next = 9;
                                return JSON.parse(localStorage.getItem('foods'));

                              case 9:
                                foods = _context7.sent;
                                _context7.next = 12;
                                return foods.filter(function (x) {
                                  return x.quantiy > 0;
                                });

                              case 12:
                                recheck = _context7.sent;
                                console.log('ordered food', recheck);
                                id = this.util.makeid(10);
                                _context7.next = 17;
                                return localStorage.removeItem('foods');

                              case 17:
                                _context7.next = 19;
                                return localStorage.removeItem('vid');

                              case 19:
                                _context7.next = 21;
                                return localStorage.removeItem('totalItem');

                              case 21:
                                uid = localStorage.getItem('uid');
                                lng = localStorage.getItem('language');
                                selectedCity = localStorage.getItem('selectedCity');
                                _context7.next = 26;
                                return localStorage.clear();

                              case 26:
                                localStorage.setItem('uid', uid);
                                localStorage.setItem('language', lng);
                                localStorage.setItem('selectedCity', selectedCity);
                                param = {
                                  uid: data.uid,
                                  userId: data.uid,
                                  orderId: id,
                                  vid: this.vid,
                                  order: JSON.stringify(recheck),
                                  time: moment__WEBPACK_IMPORTED_MODULE_8__().format('llll'),
                                  address: this.deliveryAddress,
                                  total: this.totalPrice,
                                  grandTotal: this.grandTotal,
                                  serviceTax: this.serviceTax,
                                  deliveryCharge: 5,
                                  status: 'created',
                                  restId: this.vid,
                                  paid: 'paypal',
                                  paykey: this.payKey,
                                  appliedCoupon: this.coupon ? true : false,
                                  couponId: this.coupon ? this.coupon.id : 'NA',
                                  coupon: this.coupon ? JSON.stringify(this.coupon) : 'NA',
                                  dicount: this.coupon ? this.dicount : 0
                                };
                                console.log('sent', param);
                                this.api.createOrder(id, param).then(function (data) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                      while (1) {
                                        switch (_context6.prev = _context6.next) {
                                          case 0:
                                            this.util.hide();

                                            if (this.venueFCM && this.venueFCM !== '') {
                                              this.api.sendNotification(this.util.translate('New Order Received'), this.util.translate('New Order'), this.venueFCM).subscribe(function (data) {
                                                console.log('send notifications', data);
                                              }, function (error) {
                                                console.log(error);
                                              });
                                            }

                                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                                              title: this.util.translate('Success'),
                                              text: this.util.translate('Your is created succesfully'),
                                              icon: 'success',
                                              backdrop: false
                                            });
                                            this.navCtrl.navigateRoot(['tabs/tab2']);
                                            console.log(data);

                                          case 5:
                                          case "end":
                                            return _context6.stop();
                                        }
                                      }
                                    }, _callee6, this);
                                  }));
                                }, function (error) {
                                  _this8.util.hide();

                                  _this8.util.errorToast(_this8.util.translate('Something went wrong'));

                                  _this8.router.navigate(['tabs']);
                                })["catch"](function (error) {
                                  _this8.util.hide();

                                  _this8.util.errorToast(_this8.util.translate('Something went wrong'));

                                  _this8.router.navigate(['tabs']);

                                  console.log(error);
                                });
                                _context7.next = 37;
                                break;

                              case 34:
                                this.util.hide();
                                this.util.errorToast(this.util.translate('Session expired'));
                                this.router.navigate(['login']);

                              case 37:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    }, function (error) {
                      _this7.util.hide();

                      _this7.util.errorToast(_this7.util.translate('Session expired'));

                      _this7.router.navigate(['login']);
                    })["catch"](function (error) {
                      _this7.util.hide();

                      _this7.util.errorToast(_this7.util.translate('Session expired'));

                      _this7.router.navigate(['login']);

                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "openStripe",
        value: function openStripe() {
          this.router.navigate(['stripe-payments']);
        }
      }]);

      return PaymentsPage;
    }();

    PaymentsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPal"]
      }];
    };

    PaymentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payments.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payments/payments.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payments.page.scss */
      "./src/app/pages/payments/payments.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPal"]])], PaymentsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-payments-payments-module-es5.js.map