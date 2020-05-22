(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payments-payments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payments/payments.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payments/payments.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Payments' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"header\">\n    <ion-label class=\"title\">{{'Payment Options' | translate}}</ion-label>\n  </div>\n  <ion-item (click)=\"openStripe()\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/stripe.png\" />\n    </ion-thumbnail>\n    <ion-label>{{'Pay with' | translate}} Stripe</ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"payWithPaypal()\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/paypal.png\" />\n    </ion-thumbnail>\n    <ion-label>{{'Pay with' | translate}} Paypal</ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"placeOrder()\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/cod.png\" />\n    </ion-thumbnail>\n    <ion-label>{{'Cash on Delivery' | translate}}</ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/payments/payments-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/payments/payments-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PaymentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageRoutingModule", function() { return PaymentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments.page */ "./src/app/pages/payments/payments.page.ts");




const routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_3__["PaymentsPage"]
    }
];
let PaymentsPageRoutingModule = class PaymentsPageRoutingModule {
};
PaymentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payments/payments.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/payments/payments.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments-routing.module */ "./src/app/pages/payments/payments-routing.module.ts");
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payments.page */ "./src/app/pages/payments/payments.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let PaymentsPageModule = class PaymentsPageModule {
};
PaymentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentsPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]]
    })
], PaymentsPageModule);



/***/ }),

/***/ "./src/app/pages/payments/payments.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/payments/payments.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  background: #f3f3f3;\n  padding: 20px;\n}\n.header .title {\n  font-size: 1rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9wYXltZW50cy9wYXltZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BheW1lbnRzL3BheW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnRzL3BheW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC50aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/payments/payments.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payments/payments.page.ts ***!
  \*************************************************/
/*! exports provided: PaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPage", function() { return PaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");










let PaymentsPage = class PaymentsPage {
    constructor(router, api, util, navCtrl, payPal) {
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
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const foods = yield JSON.parse(localStorage.getItem('foods'));
            let recheck = yield foods.filter(x => x.quantiy > 0);
            console.log(recheck);
            const add = JSON.parse(localStorage.getItem('deliveryAddress'));
            this.vid = localStorage.getItem('vid');
            this.api.getVenueUser(this.vid).then((data) => {
                console.log('venue', data);
                if (data && data.fcm_token) {
                    this.venueFCM = data.fcm_token;
                }
            }, error => {
                this.util.errorToast(this.util.translate('Something went wrong'));
                this.router.navigate(['tabs']);
            }).catch(error => {
                this.util.errorToast(this.util.translate('Something went wrong'));
                this.router.navigate(['tabs']);
                console.log(error);
            });
            if (add && add.address) {
                this.deliveryAddress = add;
            }
            this.coupon = JSON.parse(localStorage.getItem('coupon'));
            console.log('COUPON===================', this.coupon);
            console.log('ADDRESS===================', this.deliveryAddress);
            this.calculate(recheck);
        });
    }
    calculate(foods) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(foods);
            let item = foods.filter(x => x.quantiy > 0);
            console.log(item);
            this.totalPrice = 0;
            this.totalItem = 0;
            yield item.forEach(element => {
                this.totalItem = this.totalItem + element.quantiy;
                this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
            });
            this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
            console.log('total item', this.totalItem);
            console.log('=====>', this.totalPrice);
            const tax = (parseFloat(this.totalPrice) * 21) / 100;
            this.serviceTax = tax.toFixed(2);
            console.log('tax->', this.serviceTax);
            this.deliveryCharge = 5;
            this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
            this.grandTotal = this.grandTotal.toFixed(2);
            console.log('grand totla', this.grandTotal);
            if (this.coupon && this.coupon.code && this.totalPrice >= this.coupon.min) {
                if (this.coupon.type === '%') {
                    console.log('per');
                    function percentage(totalValue, partialValue) {
                        return (100 * partialValue) / totalValue;
                    }
                    const totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), this.coupon.discout);
                    console.log('============>>>>>>>>>>>>>>>', totalPrice);
                    this.dicount = totalPrice.toFixed(2);
                    this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
                    console.log('------------>>>>', this.totalPrice);
                    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                    const tax = (parseFloat(this.totalPrice) * 21) / 100;
                    this.serviceTax = tax.toFixed(2);
                    console.log('tax->', this.serviceTax);
                    this.deliveryCharge = 5;
                    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                    this.grandTotal = this.grandTotal.toFixed(2);
                }
                else {
                    console.log('$');
                    console.log('per');
                    const totalPrice = parseFloat(this.totalPrice) - this.coupon.discout;
                    console.log('============>>>>>>>>>>>>>>>', totalPrice);
                    this.dicount = this.coupon.discout;
                    this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
                    console.log('------------>>>>', this.totalPrice);
                    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                    const tax = (parseFloat(this.totalPrice) * 21) / 100;
                    this.serviceTax = tax.toFixed(2);
                    console.log('tax->', this.serviceTax);
                    this.deliveryCharge = 5;
                    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                    this.grandTotal = this.grandTotal.toFixed(2);
                }
            }
            else {
                console.log('not satisfied');
                this.coupon = null;
                localStorage.removeItem('coupon');
            }
        });
    }
    placeOrder() {
        console.log('place order');
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('Orders once placed cannot be cancelled and are non-refundable'),
            icon: 'question',
            showCancelButton: true,
            backdrop: false,
            background: 'white',
            confirmButtonText: this.util.translate('Yes'),
            cancelButtonText: this.util.translate('cancel'),
        }).then((data) => {
            console.log(data);
            if (data && data.value) {
                console.log('go to procesed');
                this.createOrder();
            }
        });
    }
    // For Testing Generate Credit Card American Express
    // https://developer.paypal.com/developer/creditCardGenerator/
    payWithPaypal() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('Orders once placed cannot be cancelled and are non-refundable'),
            icon: 'question',
            showCancelButton: true,
            backdrop: false,
            background: 'white',
            confirmButtonText: this.util.translate('Yes'),
            cancelButtonText: this.util.translate('cancel'),
        }).then((data) => {
            console.log(data);
            if (data && data.value) {
                console.log('go to procesed');
                this.payPal.init({
                    PayPalEnvironmentProduction: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].paypal.production,
                    PayPalEnvironmentSandbox: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].paypal.sandbox
                }).then(() => {
                    this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPalConfiguration"]({})).then(() => {
                        const payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPalPayment"](this.grandTotal, 'USD', 'Food Delivery', 'sale');
                        this.payPal.renderSinglePaymentUI(payment).then((res) => {
                            console.log(res);
                            this.payKey = res.response.id;
                            this.paypalOrder();
                        }, (error) => {
                            console.log('error', error);
                            this.util.showToast(error, 'danger', 'bottom');
                            // Error or render dialog closed without being successful
                        });
                    }, (error) => {
                        console.log('error', error);
                        this.util.showToast(error, 'danger', 'bottom');
                        // Error in configuration
                    });
                }, (error) => {
                    console.log('error', error);
                    this.util.showToast(error, 'danger', 'bottom');
                    // Error in initialization, maybe PayPal isn't supported or something else
                });
            }
        });
    }
    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
        console.log(lat1, lon1, lat2, lon2);
        const earthRadiusKm = 6371;
        const dLat = this.degreesToRadians(lat2 - lat1);
        const dLon = this.degreesToRadians(lon2 - lon1);
        lat1 = this.degreesToRadians(lat1);
        lat2 = this.degreesToRadians(lat2);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    }
    createOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.util.show('creating order');
            this.api.checkAuth().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(data);
                if (data) {
                    // not from saved address then create new and save
                    if (!this.deliveryAddress.id || this.deliveryAddress.id === '') {
                        const addressId = this.util.makeid(10);
                        const newAddress = {
                            id: addressId,
                            uid: data.uid,
                            address: this.deliveryAddress.address,
                            lat: this.deliveryAddress.lat,
                            lng: this.deliveryAddress.lng,
                            title: 'home',
                            house: '',
                            landmark: ''
                        };
                        yield this.api.addNewAddress(data.uid, addressId, newAddress).then((data) => {
                            this.deliveryAddress.id = addressId;
                        }, error => {
                            console.log(error);
                        }).catch(error => {
                            console.log(error);
                        });
                    }
                    const foods = yield JSON.parse(localStorage.getItem('foods'));
                    let recheck = yield foods.filter(x => x.quantiy > 0);
                    console.log('ordered food', recheck);
                    let id = this.util.makeid(10);
                    yield localStorage.removeItem('foods');
                    yield localStorage.removeItem('vid');
                    yield localStorage.removeItem('totalItem');
                    const uid = localStorage.getItem('uid');
                    const lng = localStorage.getItem('language');
                    const selectedCity = localStorage.getItem('selectedCity');
                    yield localStorage.clear();
                    localStorage.setItem('uid', uid);
                    localStorage.setItem('language', lng);
                    localStorage.setItem('selectedCity', selectedCity);
                    const param = {
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
                    this.api.createOrder(id, param).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.util.hide();
                        if (this.venueFCM && this.venueFCM !== '') {
                            this.api.sendNotification(this.util.translate('New Order Received'), this.util.translate('New Order'), this.venueFCM).subscribe((data) => {
                                console.log('send notifications', data);
                            }, error => {
                                console.log(error);
                            });
                        }
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: this.util.translate('Success'),
                            text: this.util.translate('Your is created succesfully'),
                            icon: 'success',
                            backdrop: false,
                        });
                        this.navCtrl.navigateRoot(['tabs/tab2']);
                        console.log(data);
                    }), error => {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Something went wrong'));
                        this.router.navigate(['tabs']);
                    }).catch(error => {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Something went wrong'));
                        this.router.navigate(['tabs']);
                        console.log(error);
                    });
                }
                else {
                    this.util.hide();
                    this.util.errorToast(this.util.translate('Session expired'));
                    this.router.navigate(['login']);
                }
            }), error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Session expired'));
                this.router.navigate(['login']);
            }).catch(error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Session expired'));
                this.router.navigate(['login']);
                console.log(error);
            });
        });
    }
    paypalOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.util.show('creating order');
            this.api.checkAuth().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(data);
                if (data) {
                    // not from saved address then create new and save
                    if (!this.deliveryAddress.id || this.deliveryAddress.id === '') {
                        const addressId = this.util.makeid(10);
                        const newAddress = {
                            id: addressId,
                            uid: data.uid,
                            address: this.deliveryAddress.address,
                            lat: this.deliveryAddress.lat,
                            lng: this.deliveryAddress.lng,
                            title: 'home',
                            house: '',
                            landmark: ''
                        };
                        yield this.api.addNewAddress(data.uid, addressId, newAddress).then((data) => {
                            this.deliveryAddress.id = addressId;
                        }, error => {
                            console.log(error);
                        }).catch(error => {
                            console.log(error);
                        });
                    }
                    const foods = yield JSON.parse(localStorage.getItem('foods'));
                    let recheck = yield foods.filter(x => x.quantiy > 0);
                    console.log('ordered food', recheck);
                    let id = this.util.makeid(10);
                    yield localStorage.removeItem('foods');
                    yield localStorage.removeItem('vid');
                    yield localStorage.removeItem('totalItem');
                    const uid = localStorage.getItem('uid');
                    const lng = localStorage.getItem('language');
                    const selectedCity = localStorage.getItem('selectedCity');
                    yield localStorage.clear();
                    localStorage.setItem('uid', uid);
                    localStorage.setItem('language', lng);
                    localStorage.setItem('selectedCity', selectedCity);
                    const param = {
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
                    this.api.createOrder(id, param).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.util.hide();
                        if (this.venueFCM && this.venueFCM !== '') {
                            this.api.sendNotification(this.util.translate('New Order Received'), this.util.translate('New Order'), this.venueFCM).subscribe((data) => {
                                console.log('send notifications', data);
                            }, error => {
                                console.log(error);
                            });
                        }
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: this.util.translate('Success'),
                            text: this.util.translate('Your is created succesfully'),
                            icon: 'success',
                            backdrop: false,
                        });
                        this.navCtrl.navigateRoot(['tabs/tab2']);
                        console.log(data);
                    }), error => {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Something went wrong'));
                        this.router.navigate(['tabs']);
                    }).catch(error => {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Something went wrong'));
                        this.router.navigate(['tabs']);
                        console.log(error);
                    });
                }
                else {
                    this.util.hide();
                    this.util.errorToast(this.util.translate('Session expired'));
                    this.router.navigate(['login']);
                }
            }), error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Session expired'));
                this.router.navigate(['login']);
            }).catch(error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Session expired'));
                this.router.navigate(['login']);
                console.log(error);
            });
        });
    }
    openStripe() {
        this.router.navigate(['stripe-payments']);
    }
};
PaymentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPal"] }
];
PaymentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payments.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payments/payments.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payments.page.scss */ "./src/app/pages/payments/payments.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPal"]])
], PaymentsPage);



/***/ })

}]);
//# sourceMappingURL=pages-payments-payments-module-es2015.js.map