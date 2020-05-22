function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-new-address-add-new-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-address/add-new-address.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-address/add-new-address.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddNewAddressAddNewAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Add new address' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_map\" #map></div>\n  <div class=\"informations\">\n    <ion-item>\n      <ion-label position=\"stacked\">{{'LOCATIONS' | translate}}</ion-label>\n      <ion-input [(ngModel)]=\"address\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{'HOUSE / FLAT NO' | translate}}</ion-label>\n      <ion-input [(ngModel)]=\"house\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{'LANDMARK' | translate}}</ion-label>\n      <ion-input [(ngModel)]=\"landmark\"></ion-input>\n    </ion-item>\n    <ion-radio-group [(ngModel)]=\"title\">\n      <ion-label class=\"title\">\n        {{'SAVE AS' | translate}}\n      </ion-label>\n      <ion-item style=\"margin-top: 20px;\">\n        <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n        <ion-label>{{'HOME' | translate}}</ion-label>\n        <ion-radio value=\"home\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n        <ion-label>{{'WORK' | translate}}</ion-label>\n        <ion-radio value=\"work\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"navigate-outline\" slot=\"start\"></ion-icon>\n        <ion-label>{{'OTHER' | translate}}</ion-label>\n        <ion-radio value=\"other\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button *ngIf=\"from ==='new'\" (click)=\"addAddress()\" expand=\"block\">\n      {{'Add' | translate}}\n    </ion-button>\n\n    <ion-button *ngIf=\"from ==='edit'\" (click)=\"updateAddress()\" expand=\"block\">\n      {{'Update' | translate}}\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/add-new-address/add-new-address-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/add-new-address/add-new-address-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: AddNewAddressPageRoutingModule */

  /***/
  function srcAppPagesAddNewAddressAddNewAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewAddressPageRoutingModule", function () {
      return AddNewAddressPageRoutingModule;
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


    var _add_new_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-new-address.page */
    "./src/app/pages/add-new-address/add-new-address.page.ts");

    var routes = [{
      path: '',
      component: _add_new_address_page__WEBPACK_IMPORTED_MODULE_3__["AddNewAddressPage"]
    }];

    var AddNewAddressPageRoutingModule = function AddNewAddressPageRoutingModule() {
      _classCallCheck(this, AddNewAddressPageRoutingModule);
    };

    AddNewAddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddNewAddressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/add-new-address/add-new-address.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/add-new-address/add-new-address.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddNewAddressPageModule */

  /***/
  function srcAppPagesAddNewAddressAddNewAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewAddressPageModule", function () {
      return AddNewAddressPageModule;
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


    var _add_new_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-new-address-routing.module */
    "./src/app/pages/add-new-address/add-new-address-routing.module.ts");
    /* harmony import */


    var _add_new_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-new-address.page */
    "./src/app/pages/add-new-address/add-new-address.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var AddNewAddressPageModule = function AddNewAddressPageModule() {
      _classCallCheck(this, AddNewAddressPageModule);
    };

    AddNewAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_new_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNewAddressPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_add_new_address_page__WEBPACK_IMPORTED_MODULE_6__["AddNewAddressPage"]]
    })], AddNewAddressPageModule);
    /***/
  },

  /***/
  "./src/app/pages/add-new-address/add-new-address.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/add-new-address/add-new-address.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddNewAddressAddNewAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_map {\n  height: 50vh;\n  width: 100%;\n  border: 1px solid gray;\n}\n\n.informations {\n  padding: 10px;\n}\n\n.informations .title {\n  font-weight: bold;\n  padding: 10px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9hZGQtbmV3LWFkZHJlc3MvYWRkLW5ldy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkLW5ldy1hZGRyZXNzL2FkZC1uZXctYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEREk7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtbmV3LWFkZHJlc3MvYWRkLW5ldy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZfbWFwe1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuLmluZm9ybWF0aW9uc3tcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC50aXRsZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG59XG4iLCIuZGl2X21hcCB7XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5pbmZvcm1hdGlvbnMge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmluZm9ybWF0aW9ucyAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/add-new-address/add-new-address.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/add-new-address/add-new-address.page.ts ***!
    \***************************************************************/

  /*! exports provided: AddNewAddressPage */

  /***/
  function srcAppPagesAddNewAddressAddNewAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewAddressPage", function () {
      return AddNewAddressPage;
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


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddNewAddressPage = /*#__PURE__*/function () {
      function AddNewAddressPage(platform, androidPermissions, diagnostic, geolocation, navCtrl, api, util, route) {
        var _this = this;

        _classCallCheck(this, AddNewAddressPage);

        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.route = route;
        this.house = '';
        this.landmark = '';
        this.title = 'home';
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.from) {
            _this.from = 'edit';
            var info = JSON.parse(data.data);
            console.log('da===>', info);
            _this.address = info.address;
            _this.house = info.house;
            _this.id = info.id;
            _this.landmark = info.landmark;
            _this.lat = info.lat;
            _this.lng = info.lng;

            _this.loadmap(_this.lat, _this.lng, _this.mapEle);
          } else {
            _this.from = 'new';

            _this.getLocation();
          }
        });
      }

      _createClass(AddNewAddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this2 = this;

          this.platform.ready().then(function () {
            if (_this2.platform.is('android')) {
              _this2.androidPermissions.checkPermission(_this2.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) {
                return console.log('Has permission?', result.hasPermission);
              }, function (err) {
                return _this2.androidPermissions.requestPermission(_this2.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
              });

              _this2.grantRequest();
            } else if (_this2.platform.is('ios')) {
              _this2.grantRequest();
            } else {
              _this2.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('resp', resp);
                  _this2.lat = resp.coords.latitude;
                  _this2.lng = resp.coords.longitude;

                  _this2.loadmap(resp.coords.latitude, resp.coords.longitude, _this2.mapEle);

                  _this2.getAddress(_this2.lat, _this2.lng);
                }
              });
            }
          });
        }
      }, {
        key: "grantRequest",
        value: function grantRequest() {
          var _this3 = this;

          this.diagnostic.isLocationEnabled().then(function (data) {
            if (data) {
              _this3.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('resp', resp);

                  _this3.loadmap(resp.coords.latitude, resp.coords.longitude, _this3.mapEle);

                  _this3.getAddress(resp.coords.latitude, resp.coords.longitude);
                }
              });
            } else {
              _this3.diagnostic.switchToLocationSettings();

              _this3.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('ress,', resp);

                  _this3.loadmap(resp.coords.latitude, resp.coords.longitude, _this3.mapEle);

                  _this3.getAddress(resp.coords.latitude, resp.coords.longitude);
                }
              });
            }
          }, function (error) {// console.log('errir', error);
          })["catch"](function (error) {// console.log('error', error);
          });
        }
      }, {
        key: "loadmap",
        value: function loadmap(lat, lng, mapElement) {
          var location = new google.maps.LatLng(lat, lng);
          var style = [{
            featureType: 'all',
            elementType: 'all',
            stylers: [{
              saturation: -100
            }]
          }];
          var mapOptions = {
            zoom: 15,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false,
            overviewMapControl: false,
            center: location,
            mapTypeControl: false,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Foodfire5']
            }
          };
          this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
          var mapType = new google.maps.StyledMapType(style, {
            name: 'Grayscale'
          });
          this.map.mapTypes.set('Foodfire5', mapType);
          this.map.setMapTypeId('Foodfire5');
          this.addMarker(location);
        }
      }, {
        key: "getAddress",
        value: function getAddress(lat, lng) {
          var _this4 = this;

          var geocoder = new google.maps.Geocoder();
          var location = new google.maps.LatLng(lat, lng);
          geocoder.geocode({
            'location': location
          }, function (results, status) {
            console.log(results);
            _this4.address = results[0].formatted_address;
            _this4.lat = lat;
            _this4.lng = lng;
          });
        }
      }, {
        key: "addMarker",
        value: function addMarker(location) {
          var _this5 = this;

          console.log('location =>', location);
          var icon = {
            url: 'assets/icon/marker.png',
            scaledSize: new google.maps.Size(50, 50)
          };
          this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: icon,
            draggable: true,
            animation: google.maps.Animation.DROP
          });
          google.maps.event.addListener(this.marker, 'dragend', function () {
            console.log(_this5.marker);

            _this5.getDragAddress(_this5.marker);
          });
        }
      }, {
        key: "getDragAddress",
        value: function getDragAddress(event) {
          var _this6 = this;

          var geocoder = new google.maps.Geocoder();
          var location = new google.maps.LatLng(event.position.lat(), event.position.lng());
          geocoder.geocode({
            'location': location
          }, function (results, status) {
            console.log(results);
            _this6.address = results[0].formatted_address;
            _this6.lat = event.position.lat();
            _this6.lng = event.position.lng();
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          localStorage.setItem('newAddress', this.address);
          localStorage.setItem('newLng', this.lng);
          localStorage.setItem('newLat', this.lat);
          this.navCtrl.back();
        }
      }, {
        key: "addAddress",
        value: function addAddress() {
          var _this7 = this;

          if (this.address === '' || this.landmark === '' || this.house === '') {
            this.util.errorToast(this.util.translate('All Fields are required'));
            return false;
          }

          console.log('call api');
          this.util.show();
          this.api.checkAuth().then(function (data) {
            console.log(data);

            if (data) {
              var id = _this7.util.makeid(10);

              var param = {
                id: id,
                uid: data.uid,
                address: _this7.address,
                lat: _this7.lat,
                lng: _this7.lng,
                title: _this7.title,
                house: _this7.house,
                landmark: _this7.landmark
              };

              _this7.api.addNewAddress(data.uid, id, param).then(function (data) {
                _this7.util.hide();

                _this7.util.showToast(_this7.util.translate('succesfully added address'), 'success', 'bottom');

                _this7.navCtrl.back();
              }, function (error) {
                _this7.util.hide();

                console.log(error);

                _this7.util.errorToast(_this7.util.translate('Something went wrong'));
              })["catch"](function (error) {
                _this7.util.hide();

                console.log(error);

                _this7.util.errorToast(_this7.util.translate('Something went wrong'));
              });
            } else {
              _this7.util.hide();

              _this7.util.errorToast(_this7.util.translate('Something went wrong'));

              _this7.navCtrl.navigateRoot(['tabs']);
            }
          }, function (error) {
            _this7.util.hide();

            console.log(error);

            _this7.util.errorToast(_this7.util.translate('Something went wrong'));

            _this7.navCtrl.navigateRoot(['tabs']);
          })["catch"](function (error) {
            _this7.util.hide();

            console.log(error);

            _this7.util.errorToast(_this7.util.translate('Something went wrong'));

            _this7.navCtrl.navigateRoot(['tabs']);
          });
        }
      }, {
        key: "updateAddress",
        value: function updateAddress() {
          var _this8 = this;

          if (this.address === '' || this.landmark === '' || this.house === '') {
            this.util.errorToast(this.util.translate('All Fields are required'));
            return false;
          }

          var param = {
            id: this.id,
            uid: localStorage.getItem('uid'),
            address: this.address,
            lat: this.lat,
            lng: this.lng,
            title: this.title,
            house: this.house,
            landmark: this.landmark
          };
          this.util.show();
          this.api.updateAddress(localStorage.getItem('uid'), this.id, param).then(function (data) {
            _this8.util.hide();

            _this8.util.showToast('Address updated', 'success', 'bottom');

            _this8.navCtrl.back();
          })["catch"](function (error) {
            _this8.util.hide();

            console.log('error', error);

            _this8.util.errorToast(_this8.util.translate('Something went wrong'));
          });
        }
      }]);

      return AddNewAddressPage;
    }();

    AddNewAddressPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"]
      }, {
        type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddNewAddressPage.prototype, "mapEle", void 0);
    AddNewAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-new-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-new-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-address/add-new-address.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-new-address.page.scss */
      "./src/app/pages/add-new-address/add-new-address.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])], AddNewAddressPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-add-new-address-add-new-address-module-es5.js.map