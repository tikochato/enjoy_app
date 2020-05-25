(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-new-address-add-new-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-address/add-new-address.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-address/add-new-address.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Add new address' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_map\" #map></div>\n  <div class=\"informations\">\n    <ion-item>\n      <ion-label position=\"stacked\">{{'LOCATIONS' | translate}}</ion-label>\n      <ion-input [(ngModel)]=\"address\"></ion-input>\n    </ion-item>\n  </div>\n\n\n  <ion-item>\n    <ion-label position=\"stacked\">{{'HOUSE / FLAT NO' | translate}}</ion-label>\n    <ion-input [(ngModel)]=\"house\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">{{'LANDMARK' | translate}}</ion-label>\n    <ion-input [(ngModel)]=\"landmark\"></ion-input>\n  </ion-item>\n  <div style=\"margin-top: 20px;\">\n    <ion-radio-group [(ngModel)]=\"title\">\n      <ion-label class=\"title\">\n        {{'SAVE AS' | translate}}\n      </ion-label>\n      <ion-item style=\"margin-top: 10px;\">\n        <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n        <ion-label>{{'HOME' | translate}}</ion-label>\n        <ion-radio value=\"home\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n        <ion-label>{{'WORK' | translate}}</ion-label>\n        <ion-radio value=\"work\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"navigate-outline\" slot=\"start\"></ion-icon>\n        <ion-label>{{'OTHER' | translate}}</ion-label>\n        <ion-radio value=\"other\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n  <ion-button *ngIf=\"from ==='new'\" (click)=\"addAddress()\" expand=\"block\">\n    {{'Add' | translate}}\n  </ion-button>\n\n  <ion-button *ngIf=\"from ==='edit'\" (click)=\"updateAddress()\" expand=\"block\">\n    {{'Update' | translate}}\n  </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/add-new-address/add-new-address-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/add-new-address/add-new-address-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddNewAddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewAddressPageRoutingModule", function() { return AddNewAddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_new_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-new-address.page */ "./src/app/pages/add-new-address/add-new-address.page.ts");




const routes = [
    {
        path: '',
        component: _add_new_address_page__WEBPACK_IMPORTED_MODULE_3__["AddNewAddressPage"]
    }
];
let AddNewAddressPageRoutingModule = class AddNewAddressPageRoutingModule {
};
AddNewAddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddNewAddressPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/add-new-address/add-new-address.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/add-new-address/add-new-address.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddNewAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewAddressPageModule", function() { return AddNewAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_new_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-new-address-routing.module */ "./src/app/pages/add-new-address/add-new-address-routing.module.ts");
/* harmony import */ var _add_new_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-new-address.page */ "./src/app/pages/add-new-address/add-new-address.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let AddNewAddressPageModule = class AddNewAddressPageModule {
};
AddNewAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_new_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNewAddressPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_add_new_address_page__WEBPACK_IMPORTED_MODULE_6__["AddNewAddressPage"]]
    })
], AddNewAddressPageModule);



/***/ }),

/***/ "./src/app/pages/add-new-address/add-new-address.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/add-new-address/add-new-address.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_map {\n  height: 50vh;\n  width: 100%;\n  border: 1px solid gray;\n}\n\n.informations {\n  padding: 10px;\n}\n\n.informations .title {\n  font-weight: bold;\n  padding: 10px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9hcHAvc3JjL2FwcC9wYWdlcy9hZGQtbmV3LWFkZHJlc3MvYWRkLW5ldy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkLW5ldy1hZGRyZXNzL2FkZC1uZXctYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEREk7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLW5ldy1hZGRyZXNzL2FkZC1uZXctYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2X21hcHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cbi5pbmZvcm1hdGlvbnN7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbiIsIi5kaXZfbWFwIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cblxuLmluZm9ybWF0aW9ucyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uaW5mb3JtYXRpb25zIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/add-new-address/add-new-address.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/add-new-address/add-new-address.page.ts ***!
  \***************************************************************/
/*! exports provided: AddNewAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewAddressPage", function() { return AddNewAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let AddNewAddressPage = class AddNewAddressPage {
    constructor(platform, androidPermissions, diagnostic, geolocation, navCtrl, api, util, route) {
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
        this.route.queryParams.subscribe(data => {
            console.log(data);
            if (data && data.from) {
                this.from = 'edit';
                const info = JSON.parse(data.data);
                console.log('da===>', info);
                this.address = info.address;
                this.house = info.house;
                this.id = info.id;
                this.landmark = info.landmark;
                this.lat = info.lat;
                this.lng = info.lng;
                this.loadmap(this.lat, this.lng, this.mapEle);
            }
            else {
                this.from = 'new';
                this.getLocation();
            }
        });
    }
    ngOnInit() {
    }
    getLocation() {
        this.platform.ready().then(() => {
            if (this.platform.is('android')) {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(result => console.log('Has permission?', result.hasPermission), err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION));
                this.grantRequest();
            }
            else if (this.platform.is('ios')) {
                this.grantRequest();
            }
            else {
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true }).then((resp) => {
                    if (resp) {
                        console.log('resp', resp);
                        this.lat = resp.coords.latitude;
                        this.lng = resp.coords.longitude;
                        this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
                        this.getAddress(this.lat, this.lng);
                    }
                });
            }
        });
    }
    grantRequest() {
        this.diagnostic.isLocationEnabled().then((data) => {
            if (data) {
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true }).then((resp) => {
                    if (resp) {
                        console.log('resp', resp);
                        this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
                        this.getAddress(resp.coords.latitude, resp.coords.longitude);
                    }
                });
            }
            else {
                this.diagnostic.switchToLocationSettings();
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true }).then((resp) => {
                    if (resp) {
                        console.log('ress,', resp);
                        this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
                        this.getAddress(resp.coords.latitude, resp.coords.longitude);
                    }
                });
            }
        }, error => {
            // console.log('errir', error);
        }).catch(error => {
            // console.log('error', error);
        });
    }
    loadmap(lat, lng, mapElement) {
        const location = new google.maps.LatLng(lat, lng);
        const style = [
            {
                featureType: 'all',
                elementType: 'all',
                stylers: [
                    { saturation: -100 }
                ]
            }
        ];
        const mapOptions = {
            zoom: 15,
            scaleControl: true,
            streetViewControl: false,
            zoomControl: true,
            overviewMapControl: true,
            center: location,
            mapTypeControl: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Foodfire5']
            }
        };
        this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
        var mapType = new google.maps.StyledMapType(style, { name: 'Grayscale' });
        this.map.mapTypes.set('Foodfire5', mapType);
        this.map.setMapTypeId('Foodfire5');
        this.addMarker(location);
        this.addLocationButton(this.map, this.marker);
    }
    getAddress(lat, lng) {
        const geocoder = new google.maps.Geocoder();
        const location = new google.maps.LatLng(lat, lng);
        geocoder.geocode({ 'location': location }, (results, status) => {
            console.log(results);
            this.address = results[0].formatted_address;
            this.lat = lat;
            this.lng = lng;
        });
    }
    addMarker(location) {
        console.log('location =>', location);
        const icon = {
            url: 'assets/icon/marker.png',
            scaledSize: new google.maps.Size(50, 50),
        };
        this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: icon,
            draggable: true,
            animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(this.marker, 'dragend', () => {
            console.log(this.marker);
            this.getDragAddress(this.marker);
        });
    }
    getDragAddress(event) {
        const geocoder = new google.maps.Geocoder();
        const location = new google.maps.LatLng(event.position.lat(), event.position.lng());
        geocoder.geocode({ 'location': location }, (results, status) => {
            console.log(results);
            this.address = results[0].formatted_address;
            this.lat = event.position.lat();
            this.lng = event.position.lng();
        });
    }
    submit() {
        localStorage.setItem('newAddress', this.address);
        localStorage.setItem('newLng', this.lng);
        localStorage.setItem('newLat', this.lat);
        this.navCtrl.back();
    }
    addAddress() {
        if (this.address === '' || this.landmark === '' || this.house === '') {
            this.util.errorToast(this.util.translate('All Fields are required'));
            return false;
        }
        console.log('call api');
        this.util.show();
        this.api.checkAuth().then((data) => {
            console.log(data);
            if (data) {
                const id = this.util.makeid(10);
                const param = {
                    id: id,
                    uid: data.uid,
                    address: this.address,
                    lat: this.lat,
                    lng: this.lng,
                    title: this.title,
                    house: this.house,
                    landmark: this.landmark
                };
                this.api.addNewAddress(data.uid, id, param).then((data) => {
                    this.util.hide();
                    this.util.showToast(this.util.translate('succesfully added address'), 'success', 'bottom');
                    this.navCtrl.back();
                }, error => {
                    this.util.hide();
                    console.log(error);
                    this.util.errorToast(this.util.translate('Something went wrong'));
                }).catch(error => {
                    this.util.hide();
                    console.log(error);
                    this.util.errorToast(this.util.translate('Something went wrong'));
                });
            }
            else {
                this.util.hide();
                this.util.errorToast(this.util.translate('Something went wrong'));
                this.navCtrl.navigateRoot(['tabs']);
            }
        }, error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
            this.navCtrl.navigateRoot(['tabs']);
        }).catch(error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
            this.navCtrl.navigateRoot(['tabs']);
        });
    }
    updateAddress() {
        if (this.address === '' || this.landmark === '' || this.house === '') {
            this.util.errorToast(this.util.translate('All Fields are required'));
            return false;
        }
        const param = {
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
        this.api.updateAddress(localStorage.getItem('uid'), this.id, param).then((data) => {
            this.util.hide();
            this.util.showToast('Address updated', 'success', 'bottom');
            this.navCtrl.back();
        }).catch(error => {
            this.util.hide();
            console.log('error', error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    addLocationButton(map, marker) {
        var controlDiv = document.createElement('div');
        var firstChild = document.createElement('button');
        firstChild.style.backgroundColor = '#fff';
        firstChild.style.border = 'none';
        firstChild.style.outline = 'none';
        firstChild.style.width = '28px';
        firstChild.style.height = '28px';
        firstChild.style.borderRadius = '2px';
        firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
        firstChild.style.cursor = 'pointer';
        firstChild.style.marginRight = '10px';
        firstChild.style.padding = '0px';
        firstChild.title = 'Your Location';
        controlDiv.appendChild(firstChild);
        var secondChild = document.createElement('div');
        secondChild.style.margin = '5px';
        secondChild.style.width = '18px';
        secondChild.style.height = '18px';
        secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
        secondChild.style.backgroundSize = '180px 18px';
        secondChild.style.backgroundPosition = '0px 0px';
        secondChild.style.backgroundRepeat = 'no-repeat';
        secondChild.id = 'you_location_img';
        firstChild.appendChild(secondChild);
        firstChild.addEventListener('click', function () {
            var imgX = '0';
            var animationInterval = setInterval(function () {
                if (imgX == '-18')
                    imgX = '0';
                else
                    imgX = '-18';
            }, 500);
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    marker.setPosition(latlng);
                    map.setCenter(latlng);
                    clearInterval(animationInterval);
                });
            }
            else {
                clearInterval(animationInterval);
            }
        });
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
    }
};
AddNewAddressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"] },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AddNewAddressPage.prototype, "mapEle", void 0);
AddNewAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-new-address',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-new-address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-address/add-new-address.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-new-address.page.scss */ "./src/app/pages/add-new-address/add-new-address.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"],
        _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
], AddNewAddressPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-new-address-add-new-address-module-es2015.js.map