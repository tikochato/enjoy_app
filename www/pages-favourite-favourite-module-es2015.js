(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favourite-favourite-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>favourite</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/favourite/favourite-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/favourite/favourite-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FavouritePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePageRoutingModule", function() { return FavouritePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favourite.page */ "./src/app/pages/favourite/favourite.page.ts");




const routes = [
    {
        path: '',
        component: _favourite_page__WEBPACK_IMPORTED_MODULE_3__["FavouritePage"]
    }
];
let FavouritePageRoutingModule = class FavouritePageRoutingModule {
};
FavouritePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavouritePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/favourite/favourite.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/favourite/favourite.module.ts ***!
  \*****************************************************/
/*! exports provided: FavouritePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePageModule", function() { return FavouritePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourite-routing.module */ "./src/app/pages/favourite/favourite-routing.module.ts");
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourite.page */ "./src/app/pages/favourite/favourite.page.ts");







let FavouritePageModule = class FavouritePageModule {
};
FavouritePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritePageRoutingModule"]
        ],
        declarations: [_favourite_page__WEBPACK_IMPORTED_MODULE_6__["FavouritePage"]]
    })
], FavouritePageModule);



/***/ }),

/***/ "./src/app/pages/favourite/favourite.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/favourite/favourite.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm91cml0ZS9mYXZvdXJpdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/favourite/favourite.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/favourite/favourite.page.ts ***!
  \***************************************************/
/*! exports provided: FavouritePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePage", function() { return FavouritePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavouritePage = class FavouritePage {
    constructor() { }
    ngOnInit() {
    }
};
FavouritePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favourite',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favourite.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favourite.page.scss */ "./src/app/pages/favourite/favourite.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FavouritePage);



/***/ })

}]);
//# sourceMappingURL=pages-favourite-favourite-module-es2015.js.map