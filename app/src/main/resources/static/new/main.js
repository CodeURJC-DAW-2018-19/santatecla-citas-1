(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-large-box {\r\n  margin: 16px;\r\n  border-radius: 8px;\r\n  padding: 16px;\r\n}\r\n\r\n.card {\r\n  margin: 1rem;\r\n}\r\n\r\n.histogramButton {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.enterLoginBotton {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.search {\r\n  margin-left: 12%;\r\n  width: 75%;\r\n}\r\n\r\n.upperBar {\r\n  background-color: #9ab1fa;\r\n  padding: 0.5rem;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 20;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n\r\n.themeImage {\r\n  margin-top: 0.5rem;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n  height: 5rem;\r\n}\r\n\r\n.delete {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.button {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.registButton {\r\n  position: fixed;\r\n}\r\n\r\n.right-button {\r\n  float: right;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.colorButton {\r\n  float: right;\r\n  position: fixed;\r\n  margin-top: -5.5rem;\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.right-button-theme {\r\n  float: right;\r\n  margin-right: 0.5rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.load {\r\n  float: left;\r\n  margin-left: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.inputFileButton {\r\n  width: 1.5rem;\r\n  display: none;\r\n}\r\n\r\n.loadMoreButtons {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.element-list {\r\n  padding: 0.5rem;\r\n  background-color: #f1f6fa;\r\n}\r\n\r\n.tab {\r\n  background-color: #657dcc;\r\n  border-radius: 5px 5px 0 0;\r\n  border-top: 1px solid black;\r\n  border-left: 1px solid black;\r\n  border-right: 1px solid black;\r\n  padding: 0.5rem;\r\n  margin-left: 0.5rem;\r\n  box-shadow: none;\r\n}\r\n\r\n.activeTab {\r\n  background-color: #9ab1fa;\r\n}\r\n\r\n.closeTab {\r\n  -webkit-transform: scale(0.75);\r\n          transform: scale(0.75);\r\n}\r\n\r\n.closeTab:hover {\r\n  color: #ffffff;\r\n}\r\n\r\nbody {\r\n  padding-top: 4rem;\r\n  height: auto;\r\n}\r\n\r\n.themeTitle {\r\n  position: absolute;\r\n}\r\n\r\n.authorAndBook {\r\n  background-color: #9ab1fa;\r\n  margin: 1rem;\r\n  border-radius: 8px;\r\n}\r\n\r\n.bg {\r\n  background-color: #f1f4ff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbGFyZ2UtYm94IHtcclxuICBtYXJnaW46IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5oaXN0b2dyYW1CdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uZW50ZXJMb2dpbkJvdHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLnVwcGVyQmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFiMWZhO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLnRoZW1lSW1hZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4ucmVnaXN0QnV0dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5yaWdodC1idXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5jb2xvckJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW4tdG9wOiAtNS41cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5yaWdodC1idXR0b24tdGhlbWUge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ubG9hZCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmlucHV0RmlsZUJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubG9hZE1vcmVCdXR0b25zIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZWxlbWVudC1saXN0IHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjZmYTtcclxufVxyXG5cclxuLnRhYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1N2RjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZlVGFiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFiMWZhO1xyXG59XHJcblxyXG4uY2xvc2VUYWIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XHJcbn1cclxuXHJcbi5jbG9zZVRhYjpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRoZW1lVGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmF1dGhvckFuZEJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YWIxZmE7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmJnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGZmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<link\r\nhref=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\nrel=\"stylesheet\"\r\n/>\r\n\r\n<div class=\"upperBar\">\r\n\r\n  <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\r\n      <login class=\"right-button\" style=\"margin-right: 2rem\"></login>\r\n  </div>\r\n\r\n  <div style=\"display: inline; padding: 0.1rem;\">\r\n\r\n    <button title=\"Inicio\" mat-icon-button [routerLink]=\"['/']\">\r\n      <mat-icon>home</mat-icon>\r\n    </button>\r\n\r\n    <span *ngFor = \"let tab of tabService.tabs\">\r\n\r\n      <div class=\"mat-elevation-z4 tab activeTab\" style=\"display: inline\" *ngIf=\"tab.active\">\r\n\r\n        <div [routerLink]=\"[tab.type, tab.id]\" style=\"display: inline; cursor: pointer;\">\r\n          <span *ngIf=\"(tab.type==='theme')\">\r\n              Tema {{tab.id}}\r\n          </span>\r\n          <span *ngIf=\"(tab.type==='quote')\">\r\n              Cita {{tab.id}}\r\n          </span>\r\n        </div>\r\n\r\n        <button class=\"closeTab\" [routerLink]=\"['/']\" mat-icon-button (click)=\"tabService.removeTab(tab.type, tab.id)\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n\r\n      </div>\r\n\r\n      <div class=\"mat-elevation-z4 tab\" style=\"display: inline\" *ngIf=\"!tab.active\">\r\n\r\n        <div [routerLink]=\"[tab.type, tab.id]\" style=\"display: inline; cursor: pointer;\" *ngIf=\"(tab.type==='theme')\">\r\n          Tema {{tab.id}}\r\n        </div>\r\n        <div [routerLink]=\"[tab.type, tab.id]\" style=\"display: inline; cursor: pointer;\" *ngIf=\"(tab.type==='quote')\">\r\n          Cita {{tab.id}}\r\n        </div>\r\n\r\n        <button class=\"closeTab\" mat-icon-button (click)=\"tabService.removeTab(tab.type, tab.id)\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n\r\n      </div>\r\n\r\n    </span>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabs_tab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/tab.service */ "./src/app/tabs/tab.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, loginService, tabService) {
        this.router = router;
        this.loginService = loginService;
        this.tabService = tabService;
    }
    AppComponent.prototype.logout = function () {
        this.loginService.logOut();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _tabs_tab_service__WEBPACK_IMPORTED_MODULE_3__["TabService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _theme_theme_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/theme.service */ "./src/app/theme/theme.service.ts");
/* harmony import */ var _theme_formTheme_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/formTheme.component */ "./src/app/theme/formTheme.component.ts");
/* harmony import */ var _theme_selectQuote_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/selectQuote.component */ "./src/app/theme/selectQuote.component.ts");
/* harmony import */ var _theme_formText_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme/formText.component */ "./src/app/theme/formText.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_quote_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quote/quote.service */ "./src/app/quote/quote.service.ts");
/* harmony import */ var _quote_formQuote_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quote/formQuote.component */ "./src/app/quote/formQuote.component.ts");
/* harmony import */ var _auth_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/login.component */ "./src/app/auth/login.component.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _auth_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/register.component */ "./src/app/auth/register.component.ts");
/* harmony import */ var _element_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./element-list.component */ "./src/app/element-list.component.ts");
/* harmony import */ var _tabs_tab_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tabs/tab.service */ "./src/app/tabs/tab.service.ts");
/* harmony import */ var _histogram_histogram_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./histogram/histogram.component */ "./src/app/histogram/histogram.component.ts");
/* harmony import */ var _histogram_histogram_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./histogram/histogram.service */ "./src/app/histogram/histogram.service.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _auth_error_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/error.interceptor */ "./src/app/auth/error.interceptor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





// Angular Material


// For the histogram























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _element_list_component__WEBPACK_IMPORTED_MODULE_23__["ElementListComponent"],
                _theme_theme_component__WEBPACK_IMPORTED_MODULE_12__["ThemeComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_17__["QuoteComponent"],
                _quote_formQuote_component__WEBPACK_IMPORTED_MODULE_19__["FormQuoteComponent"],
                _theme_formTheme_component__WEBPACK_IMPORTED_MODULE_14__["FormThemeComponent"],
                _auth_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _auth_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                _histogram_histogram_component__WEBPACK_IMPORTED_MODULE_25__["HistogramComponent"],
                _theme_selectQuote_component__WEBPACK_IMPORTED_MODULE_15__["SelectQuoteComponent"],
                _theme_formText_component__WEBPACK_IMPORTED_MODULE_16__["FormTextComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["routing"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentCommonModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentLayoutModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentMediaModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentExpansionPanelModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentStepsModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentLoadingModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentDialogsModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentSearchModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentPagingModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentNotificationsModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentMenuModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentDataTableModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_7__["CovalentMessageModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["NgxChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_theme_theme_service__WEBPACK_IMPORTED_MODULE_13__["ThemeService"], _quote_quote_service__WEBPACK_IMPORTED_MODULE_18__["QuoteService"], _auth_login_service__WEBPACK_IMPORTED_MODULE_21__["LoginService"], _histogram_histogram_service__WEBPACK_IMPORTED_MODULE_26__["HistogramService"], _tabs_tab_service__WEBPACK_IMPORTED_MODULE_24__["TabService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_27__["BasicAuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_error_interceptor__WEBPACK_IMPORTED_MODULE_28__["ErrorInterceptor"], multi: true },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_29__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_29__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _theme_selectQuote_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/selectQuote.component */ "./src/app/theme/selectQuote.component.ts");
/* harmony import */ var _theme_formText_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/formText.component */ "./src/app/theme/formText.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _element_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-list.component */ "./src/app/element-list.component.ts");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _auth_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/register.component */ "./src/app/auth/register.component.ts");
/* harmony import */ var _quote_formQuote_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote/formQuote.component */ "./src/app/quote/formQuote.component.ts");
/* harmony import */ var _theme_formTheme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/formTheme.component */ "./src/app/theme/formTheme.component.ts");
/* harmony import */ var _histogram_histogram_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./histogram/histogram.component */ "./src/app/histogram/histogram.component.ts");










var appRoutes = [
    { path: '', component: _element_list_component__WEBPACK_IMPORTED_MODULE_3__["ElementListComponent"] },
    { path: 'theme/:id', component: _theme_theme_component__WEBPACK_IMPORTED_MODULE_4__["ThemeComponent"] },
    { path: 'newTheme', component: _theme_formTheme_component__WEBPACK_IMPORTED_MODULE_8__["FormThemeComponent"] },
    { path: 'theme/edit/:id', component: _theme_formTheme_component__WEBPACK_IMPORTED_MODULE_8__["FormThemeComponent"] },
    { path: 'theme/selectQuote/:id', component: _theme_selectQuote_component__WEBPACK_IMPORTED_MODULE_0__["SelectQuoteComponent"] },
    { path: 'theme/formText/:id', component: _theme_formText_component__WEBPACK_IMPORTED_MODULE_1__["FormTextComponent"] },
    { path: 'quote/:id', component: _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__["QuoteComponent"] },
    { path: 'newQuote', component: _quote_formQuote_component__WEBPACK_IMPORTED_MODULE_7__["FormQuoteComponent"] },
    { path: 'quote/edit/:id', component: _quote_formQuote_component__WEBPACK_IMPORTED_MODULE_7__["FormQuoteComponent"] },
    { path: 'register', component: _auth_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'histogram', component: _histogram_histogram_component__WEBPACK_IMPORTED_MODULE_9__["HistogramComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// Strategy based on http://jasonwatmore.com/post/2018/09/07/angular-6-basic-http-authentication-tutorial-example
var BasicAuthInterceptor = /** @class */ (function () {
    function BasicAuthInterceptor() {
    }
    BasicAuthInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with basic auth credentials if available
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user && user.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Basic " + user.authdata
                }
            });
        }
        return next.handle(request);
    };
    BasicAuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BasicAuthInterceptor);
    return BasicAuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/error.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/error.interceptor.ts ***!
  \*******************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/auth/login.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(loginService) {
        this.loginService = loginService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.loginService.removeCurrentUser();
                //location.reload(true);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/login.component.html":
/*!*******************************************!*\
  !*** ./src/app/auth/login.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div *ngIf=\"!loginService.isLogged\">\r\n    <button mat-mini-fab color=\"primary\" (click)=\"openLoginDialog()\" title=\"LogIn\" id=\"log-in-button\">\r\n      <mat-icon>person</mat-icon>\r\n    </button>\r\n    <button mat-mini-fab color=\"accent\" (click)=\"register()\" style=\"margin-right: 1rem; margin-left: 1rem;\" title=\"Registrarse\">\r\n      <mat-icon matSuffix>person_add</mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div *ngIf=\"loginService.isLogged\">\r\n    <span style=\"margin-right: 1rem\" id=\"logged-name\">\r\n      {{loginService.user.name}}\r\n    </span>\r\n    <button mat-mini-fab color=\"primary\" (click)=\"logOut()\" id=\"log-out-button\">\r\n      <mat-icon>exit_to_app</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #loginDialog let-dialogRef=\"dialogRef\">\r\n\r\n<div layout=\"column\" layout-fill>\r\n\r\n  <h2 mat-dialog-title style=\"text-align: center\">\r\n    LogIn\r\n  </h2>\r\n\r\n  <mat-dialog-content style=\"text-align: center\">\r\n    <form #loginForm=\"ngForm\" (keyup.enter)=\"logIn($event, userElement.value, passElement.value)\">\r\n\r\n      <div layout=\"row\">\r\n        <mat-form-field flex>\r\n          <input matInput #userElement #userControl=\"ngModel\" placeholder=\"Usuario\" type=\"text\"\r\n            maxlength=\"30\" name=\"username\" [(ngModel)]=\"username\" required id=\"username\">\r\n          <span matPrefix>\r\n            <mat-icon>person</mat-icon>\r\n          </span>\r\n          <mat-hint>\r\n            <span [hidden]=\"!userControl.errors?.required || userControl.pristine\"\r\n              class=\"tc-red-600\">Required</span>\r\n          </mat-hint>\r\n          <mat-hint>{{userElement.value.length}} / 30</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div layout=\"row\">\r\n        <mat-form-field flex>\r\n          <input matInput #passElement #passControl=\"ngModel\" placeholder=\"Contraseña\" type=\"password\"\r\n            name=\"password\" [(ngModel)]=\"password\" required id=\"password\">\r\n          <span matPrefix>\r\n            <mat-icon>lock</mat-icon>\r\n          </span>\r\n          <mat-hint>\r\n            <span [hidden]=\"!passControl.errors?.required || passControl.pristine\"\r\n              class=\"tc-red-600\">Required</span>\r\n          </mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n    </form>\r\n  </mat-dialog-content>\r\n\r\n  <div style=\"margin-top: 2rem; text-align: center;\">\r\n    <button type=\"button\" mat-button color=\"accent\" class=\"text-upper\" (click)=\"logIn($event, userElement.value, passElement.value)\" id=\"send-login-button\">Login</button>\r\n  </div>\r\n\r\n</div>\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/auth/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialog, router, loginService) {
        this.dialog = dialog;
        this.router = router;
        this.loginService = loginService;
    }
    LoginComponent.prototype.logIn = function (event, user, pass) {
        var _this = this;
        event.preventDefault();
        this.loginService.logIn(user, pass).subscribe(function (u) {
            _this.router.navigate(['/']);
            _this.dialogRef.close();
        }, function (error) { return alert('Invalid user or password'); });
    };
    LoginComponent.prototype.logOut = function () {
        var _this = this;
        this.loginService.logOut().subscribe(function (response) {
            _this.router.navigate(['/']);
        }, function (error) { return console.log('Error when trying to log out: ' + error); });
    };
    LoginComponent.prototype.openLoginDialog = function () {
        this.dialogRef = this.dialog.open(this.loginDialog, {
            width: '50%',
            height: '50%',
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LoginComponent.prototype, "loginDialog", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/login.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth/login.service.ts ***!
  \***************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var URL = '/api';
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.isLogged = false;
        this.isAdmin = false;
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            this.setCurrentUser(user);
        }
    }
    LoginService.prototype.logIn = function (user, pass) {
        var _this = this;
        var auth = window.btoa(user + ':' + pass);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + auth,
            'X-Requested-With': 'XMLHttpRequest',
        });
        return this.http.get('/api/user/login', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
                _this.setCurrentUser(user);
                user.authdata = auth;
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    LoginService.prototype.logOut = function () {
        var _this = this;
        return this.http.get('/api/user/logout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.removeCurrentUser();
            return response;
        }));
    };
    LoginService.prototype.saveUser = function (user) {
        var formData = new FormData();
        formData.append('name', user.name);
        formData.append('authdata', user.authdata);
        return this.http.post('/api/user/register', formData);
    };
    LoginService.prototype.setCurrentUser = function (user) {
        this.isLogged = true;
        this.user = user;
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
    };
    LoginService.prototype.removeCurrentUser = function () {
        localStorage.removeItem('currentUser');
        this.isLogged = false;
        this.isAdmin = false;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/auth/register.component.html":
/*!**********************************************!*\
  !*** ./src/app/auth/register.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n\r\n  <div *ngIf=\"user\">\r\n    <mat-card class=\"card\" >\r\n      <mat-tab-group dynamicHeight>\r\n        <mat-tab label=\"Registro\">\r\n          <form #userForm=\"ngForm\">\r\n              <mat-card class=\"card\" style=\"text-align: center\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Nombre\" [(ngModel)]=\"user.name\" #userFormElement\r\n                  #userFormControl=\"ngModel\"\r\n                  name=\"name\"\r\n                  required>\r\n                </mat-form-field>\r\n              </mat-card>\r\n              <mat-card class=\"card\" style=\"text-align: center\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Contraseña\" [(ngModel)]=\"user.authdata\" #userFormElement\r\n                  #userFormControl=\"ngModel\"\r\n                  name=\"password\"\r\n                  required>\r\n                </mat-form-field>\r\n              </mat-card>\r\n          </form>\r\n          <div  layout=\"row\" style=\"text-align: center\" class=\"enterLoginBotton\">\r\n            <button mat-raised-button color=\"primary\" class=\"button\" (click)=\"save()\"  [disabled]=\"userForm === undefined || (userForm && !userForm.valid)\">\r\n              Registrar <mat-icon>assignment</mat-icon>\r\n            </button>\r\n            <button mat-raised-button class=\"button\" color=\"accent\" (click)=\"cancel()\">Cancelar</button>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-card>\r\n  </div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/auth/register.component.ts":
/*!********************************************!*\
  !*** ./src/app/auth/register.component.ts ***!
  \********************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, activatedRoute, service) {
        this.router = router;
        this.service = service;
        this.user = { name: '', roles: ['user'], authdata: '' };
        this.newUser = true;
    }
    RegisterComponent.prototype.cancel = function () {
        window.history.back();
    };
    RegisterComponent.prototype.save = function () {
        this.service.saveUser(this.user).subscribe(function (_) { }, function (error) { return console.error('Error creating new user: ' + error); });
        window.history.back();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/element-list.component.html":
/*!*********************************************!*\
  !*** ./src/app/element-list.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"search\">\r\n    <mat-form-field appearance=\"outline\" style=\"width:100%\" (keyup.enter)=\"search(searchName)\">\r\n      <mat-label>Buscador</mat-label>\r\n      <input matInput [(ngModel)]=\"searchName\"/>\r\n      <mat-icon matSuffix (click)=\"search(searchName)\" style=\"cursor: pointer\">search</mat-icon>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div>\r\n    <mat-card class=\"card\" style=\"margin-top: -0.7rem; padding-bottom: 0\">\r\n      <mat-tab-group dynamicHeight>\r\n        <mat-tab label=\"Temas\" style=\"position: fixed\">\r\n            <div *ngFor=\"let theme of themes\" id=\"themes-list\">\r\n              <mat-card class=\"card element-list\">\r\n                <div *ngIf=\"loginService.isLogged\" style=\"padding: 0.7rem; cursor: pointer;\"\r\n                [routerLink]=\"['/theme', theme.id]\" (click)=\"tabService.addTab('theme', theme.id)\">\r\n                  {{ theme.name }}\r\n                </div>\r\n                <div *ngIf=\"!loginService.isLogged\" style=\"padding: 0.7rem\">\r\n                  {{ theme.name }}\r\n                </div>\r\n              </mat-card>\r\n            </div>\r\n\r\n          <div style=\"text-align: center\">\r\n            <p *ngIf=\"themes.length === 0\" style=\"margin: 2rem\">\r\n              Ningún resultado\r\n            </p>\r\n          </div>\r\n\r\n          <mat-progress-bar *ngIf=\"spinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n          <div style=\"margin-top: 2rem; text-align: center\" class=\"loadMoreButtons\">\r\n            <div class=\"load\">\r\n              <button *ngIf=\"loadMoreThemes\" mat-mini-fab color=\"primary\" style=\"margin-right: 1rem\" [matBadge]=\"remainingThemes\" matBadgeColor=\"accent\" title=\"Cargar más\">\r\n                <mat-icon matSuffix (click)=\"showThemesByPage(pageThemes + 1)\">\r\n                  keyboard_arrow_down\r\n                </mat-icon>\r\n              </button>\r\n\r\n              <button *ngIf=\"pageThemes !== 0\" mat-mini-fab color=\"accent\" title=\"Cargar menos\">\r\n                <mat-icon matSuffix (click)=\"loadLessThemes()\">\r\n                  keyboard_arrow_up\r\n                </mat-icon>\r\n              </button>\r\n            </div>\r\n\r\n            <button class=\"right-button\" mat-mini-fab color=\"primary\" style=\"margin-bottom: 1rem\" *ngIf=\"loginService.isAdmin\" title=\"Añadir tema\" id=\"add-theme-button\">\r\n              <mat-icon (click)=\"newTheme()\">add</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"Citas\">\r\n            <div *ngFor=\"let quote of quotes\">\r\n              <mat-card class=\"card element-list\">\r\n                <div *ngIf=\"loginService.isLogged\" style=\"padding: 0.7rem; cursor: pointer;\"\r\n                [routerLink]=\"['/quote', quote.id]\" (click)=\"tabService.addTab('quote', quote.id)\">\r\n                  {{ quote.quote }}\r\n                </div>\r\n                <div *ngIf=\"!loginService.isLogged\" style=\"padding: 0.7rem\">\r\n                  {{ quote.quote }}\r\n                </div>\r\n              </mat-card>\r\n            </div>\r\n\r\n            <div style=\"text-align: center\">\r\n              <p *ngIf=\"quotes.length === 0\" style=\"margin: 2rem\">\r\n                Ningún resultado\r\n              </p>\r\n          </div>\r\n\r\n          <mat-progress-bar *ngIf=\"spinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n          <div style=\"margin-top: 2rem; text-align: center\" class=\"loadMoreButtons\">\r\n            <div class=\"load\">\r\n              <button *ngIf=\"loadMoreQuotes\" mat-mini-fab color=\"primary\" style=\"margin-right: 1rem\" [matBadge]=\"remainingQuotes\" matBadgeColor=\"accent\" title=\"Cargar más\">\r\n                <mat-icon matSuffix (click)=\"showQuotesByPage(pageQuotes + 1)\">\r\n                  keyboard_arrow_down\r\n                </mat-icon>\r\n              </button>\r\n\r\n              <button *ngIf=\"pageQuotes !== 0\" mat-mini-fab color=\"accent\" title=\"Cargar menos\">\r\n                <mat-icon matSuffix (click)=\"loadLessQuotes()\">\r\n                  keyboard_arrow_up\r\n                </mat-icon>\r\n              </button>\r\n            </div>\r\n\r\n            <button mat-mini-fab color=\"primary\" class=\"right-button\" style=\"margin-bottom: 1rem\" *ngIf=\"loginService.isAdmin\" title=\"Añadir cita\">\r\n              <mat-icon (click)=\"newQuote()\">add</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"histogramButton\" style=\"text-align: center; margin: 1rem;\">\r\n    <button [routerLink]=\"['/histogram']\" mat-raised-button color=\"primary\">\r\n      Histograma\r\n      <mat-icon>bar_chart</mat-icon>\r\n    </button>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/element-list.component.ts":
/*!*******************************************!*\
  !*** ./src/app/element-list.component.ts ***!
  \*******************************************/
/*! exports provided: ElementListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementListComponent", function() { return ElementListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/theme.service */ "./src/app/theme/theme.service.ts");
/* harmony import */ var _quote_quote_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote/quote.service */ "./src/app/quote/quote.service.ts");
/* harmony import */ var _tabs_tab_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/tab.service */ "./src/app/tabs/tab.service.ts");







var ElementListComponent = /** @class */ (function () {
    function ElementListComponent(router, themeService, quoteService, loginService, tabService) {
        this.router = router;
        this.themeService = themeService;
        this.quoteService = quoteService;
        this.loginService = loginService;
        this.tabService = tabService;
        this.searchName = '';
        this.spinner = false;
    }
    ElementListComponent.prototype.ngOnInit = function () {
        this.resetPages();
        this.showFirstThemesAndQuotes();
        // Pages size and matBadge init
        this.getQuotesSize();
        this.getThemesSize();
        this.pageSize = 6;
        this.loadMoreQuotes = true;
    };
    ElementListComponent.prototype.resetPages = function () {
        this.pageThemes = 0;
        this.pageQuotes = 0;
    };
    ElementListComponent.prototype.loadLessQuotes = function () {
        this.pageQuotes = 0;
        this.loadMoreQuotes = true;
        this.showFirstQuotes();
        this.getRemainingQuotes();
    };
    ElementListComponent.prototype.loadLessThemes = function () {
        this.pageThemes = 0;
        this.loadMoreThemes = true;
        this.showFirstThemes();
        this.getRemainingThemes();
    };
    ElementListComponent.prototype.search = function (name) {
        var _this = this;
        this.resetPages();
        this.searchName = name;
        if (name !== '') {
            this.themeService.searchTheme(name, this.pageQuotes).subscribe(function (data) {
                _this.themes = data['content'];
            });
            this.quoteService.searchQuote(name, this.pageQuotes).subscribe(function (data) {
                _this.quotes = data['content'];
            });
        }
        else {
            this.showFirstThemesAndQuotes();
        }
    };
    ElementListComponent.prototype.showQuotesByPage = function (page) {
        var _this = this;
        this.spinner = true;
        if (page !== 0) {
            if (this.searchName === '') {
                this.quoteService.getQuotesByPage(page).subscribe(function (data1) {
                    _this.quotes = _this.quotes.concat(data1['content']);
                    _this.spinner = false;
                });
            }
            else {
                this.quoteService.searchQuote(this.searchName, this.pageQuotes + 1).subscribe(function (data) {
                    _this.quotes = _this.quotes.concat(data['content']);
                    _this.spinner = false;
                });
            }
        }
        else {
            this.showFirstQuotes();
        }
        this.pageQuotes++;
        this.getRemainingQuotes();
    };
    ElementListComponent.prototype.showThemesByPage = function (page) {
        var _this = this;
        this.spinner = true;
        if (page !== 0) {
            if (this.searchName === '') {
                this.themeService.getThemesByPage(page).subscribe(function (data) {
                    _this.themes = _this.themes.concat(data['content']);
                    _this.spinner = false;
                });
            }
            else {
                this.themeService.searchTheme(this.searchName, this.pageQuotes + 1).subscribe(function (data) {
                    _this.themes = _this.themes.concat(data['content']);
                    _this.spinner = false;
                });
            }
        }
        else {
            this.showFirstThemes();
        }
        this.pageThemes++;
        this.getRemainingThemes();
    };
    ElementListComponent.prototype.showFirstThemesAndQuotes = function () {
        var _this = this;
        this.themeService.getThemes().subscribe(function (data) {
            _this.themes = data['content'];
        });
        this.quoteService.getQuotes().subscribe(function (data) {
            _this.quotes = data['content'];
        });
        this.getRemainingQuotes();
        this.getRemainingThemes();
    };
    ElementListComponent.prototype.showFirstThemes = function () {
        var _this = this;
        this.themeService.getThemes()
            .subscribe(function (data) { _this.themes = data['content']; });
        this.getRemainingQuotes();
    };
    ElementListComponent.prototype.showFirstQuotes = function () {
        var _this = this;
        this.quoteService.getQuotes()
            .subscribe(function (data) { return _this.quotes = data['content']; });
        this.getRemainingThemes();
    };
    ElementListComponent.prototype.newTheme = function () {
        this.router.navigate(['/newTheme']);
    };
    ElementListComponent.prototype.newQuote = function () {
        this.router.navigate(['/newQuote']);
    };
    ElementListComponent.prototype.getThemesSize = function () {
        var _this = this;
        this.themeService.getSize().subscribe(function (data) {
            _this.themesSize = data;
            _this.getRemainingThemes();
        });
    };
    ElementListComponent.prototype.getQuotesSize = function () {
        var _this = this;
        this.quoteService.getSize().subscribe(function (data) {
            _this.quotesSize = data;
            _this.getRemainingQuotes();
        });
    };
    ElementListComponent.prototype.getRemainingQuotes = function () {
        var op = this.quotesSize - this.pageSize - (this.pageSize * this.pageQuotes);
        this.remainingQuotes = (op > 0) ? op : 0;
        this.loadMoreQuotes = this.remainingQuotes !== 0;
    };
    ElementListComponent.prototype.getRemainingThemes = function () {
        var op = this.themesSize - this.pageSize - (this.pageSize * this.pageThemes);
        this.remainingThemes = (op > 0) ? op : 0;
        this.loadMoreThemes = this.remainingThemes !== 0;
    };
    ElementListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./element-list.component.html */ "./src/app/element-list.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _theme_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"],
            _quote_quote_service__WEBPACK_IMPORTED_MODULE_5__["QuoteService"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _tabs_tab_service__WEBPACK_IMPORTED_MODULE_6__["TabService"]])
    ], ElementListComponent);
    return ElementListComponent;
}());



/***/ }),

/***/ "./src/app/histogram/histogram.component.html":
/*!****************************************************!*\
  !*** ./src/app/histogram/histogram.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n\r\n  <div>\r\n    <mat-card class=\"example-large-box mat-elevation-z4\">\r\n      <mat-card-title style=\"padding: 1rem\">\r\n        <div layout=\"row\" layout-align=\"start center\">\r\n          <span flex>Citas por tema</span>\r\n        </div>\r\n      </mat-card-title>\r\n      <mat-divider></mat-divider>\r\n\r\n      <div class=\"pad\">\r\n        <div style=\"height: 25rem; padding: 0.5rem;\">\r\n          <ngx-charts-bar-vertical-2d\r\n            [scheme]=\"{ domain: [ '#4DD0E1', '#BA68C8', '#FF7043' ] }\"\r\n            [results]=\"histogram\"\r\n            [barPadding]=\"8\"\r\n            [groupPadding]=\"8\"\r\n            [gradient]=\"true\"\r\n            [xAxis]=\"true\"\r\n            [yAxis]=\"true\"\r\n            [legend]=\"false\"\r\n            [showXAxisLabel]=\"false\"\r\n            [showYAxisLabel]=\"false\">\r\n          </ngx-charts-bar-vertical-2d>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n<body>\r\n"

/***/ }),

/***/ "./src/app/histogram/histogram.component.ts":
/*!**************************************************!*\
  !*** ./src/app/histogram/histogram.component.ts ***!
  \**************************************************/
/*! exports provided: HistogramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistogramComponent", function() { return HistogramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _histogram_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./histogram.service */ "./src/app/histogram/histogram.service.ts");







var HistogramComponent = /** @class */ (function () {
    function HistogramComponent(media, dialog, _changeDetectorRef, _iconRegistry, _domSanitizer, histogramService) {
        this.media = media;
        this.dialog = dialog;
        this._changeDetectorRef = _changeDetectorRef;
        this._iconRegistry = _iconRegistry;
        this._domSanitizer = _domSanitizer;
        this.histogramService = histogramService;
        this.name = 'UI Platform';
        this.miniNav = false;
        // Dialog
        this.config = { width: '50%', height: '50%' };
    }
    Object.defineProperty(HistogramComponent.prototype, "activeTheme", {
        // Theme toggle
        get: function () {
            return localStorage.getItem('theme');
        },
        enumerable: true,
        configurable: true
    });
    HistogramComponent.prototype.theme = function (theme) {
        localStorage.setItem('theme', theme);
    };
    HistogramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._iconRegistry.addSvgIconInNamespace('assets', 'covalent', this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
        this.histogramService.getHistogram().subscribe(function (data) {
            _this.histogram = data['histogram'];
            Object.assign(_this, _this.histogram);
        });
    };
    HistogramComponent.prototype.ngAfterViewInit = function () {
        // broadcast to all listener observables when loading the page
        this.media.broadcast();
        this._changeDetectorRef.detectChanges();
    };
    HistogramComponent.prototype.openTemplate = function () {
        this.dialog.open(this.template, this.config);
    };
    // NGX Charts Axis
    HistogramComponent.prototype.axisDigits = function (val) {
        return new _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDigitsPipe"]().transform(val);
    };
    HistogramComponent.prototype.axisDate = function (val) {
        return new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en').transform(val, 'hh a');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('manageList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdLayoutManageListComponent"])
    ], HistogramComponent.prototype, "manageList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dialogContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], HistogramComponent.prototype, "template", void 0);
    HistogramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./histogram.component.html */ "./src/app/histogram/histogram.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdMediaService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _histogram_service__WEBPACK_IMPORTED_MODULE_6__["HistogramService"]])
    ], HistogramComponent);
    return HistogramComponent;
}());



/***/ }),

/***/ "./src/app/histogram/histogram.service.ts":
/*!************************************************!*\
  !*** ./src/app/histogram/histogram.service.ts ***!
  \************************************************/
/*! exports provided: HistogramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistogramService", function() { return HistogramService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HistogramService = /** @class */ (function () {
    function HistogramService(http) {
        this.http = http;
    }
    HistogramService.prototype.getHistogram = function () {
        return this.http.get('/api/histogram');
    };
    HistogramService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HistogramService);
    return HistogramService;
}());



/***/ }),

/***/ "./src/app/quote/formQuote.component.html":
/*!************************************************!*\
  !*** ./src/app/quote/formQuote.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n\r\n  <div *ngIf=\"quote\">\r\n    <mat-card class=\"card\" >\r\n      <mat-tab-group dynamicHeight>\r\n        <mat-tab label=\"Citas\">\r\n          <form #quoteForm=\"ngForm\">\r\n            <mat-card class=\"card\" style=\"text-align: center\">\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 60%\">\r\n                <input matInput placeholder=\"Cita\" [(ngModel)]=\"quote.quote\" #quoteFormElement\r\n                #quoteFormControl=\"ngModel\" name=\"quote\" required>\r\n              </mat-form-field>\r\n            </mat-card>\r\n            <mat-card class=\"card\" style=\"text-align: center\">\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 30%\">\r\n                <input matInput placeholder=\"Autor\" [(ngModel)]=\"quote.author\" #quoteFormElement\r\n                #quoteFormControl=\"ngModel\" name=\"author\" required>\r\n              </mat-form-field>\r\n            </mat-card>\r\n            <mat-card class=\"card\" style=\"text-align: center\">\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 30%\">\r\n                <input matInput placeholder=\"Obra\" [(ngModel)]=\"quote.book\" #quoteFormElement\r\n                #quoteFormControl=\"ngModel\" name=\"book\" required>\r\n              </mat-form-field>\r\n            </mat-card>\r\n          </form>\r\n          <div  layout=\"row\" style=\"text-align: center\" class=\"enterLoginBotton\">\r\n            <button mat-raised-button class=\"button\" color=\"primary\" (click)=\"save()\" [disabled]=\"quoteForm === undefined || (quoteForm && !quoteForm.valid)\">\r\n              Guardar <mat-icon>save</mat-icon>\r\n            </button>\r\n            <button mat-raised-button class=\"button\" color=\"accent\" (click)=\"cancel()\">Cancelar</button>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-card>\r\n  </div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/quote/formQuote.component.ts":
/*!**********************************************!*\
  !*** ./src/app/quote/formQuote.component.ts ***!
  \**********************************************/
/*! exports provided: FormQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormQuoteComponent", function() { return FormQuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote.service */ "./src/app/quote/quote.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FormQuoteComponent = /** @class */ (function () {
    function FormQuoteComponent(router, activatedRoute, service) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
    }
    FormQuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.params['id'];
        if (id) {
            this.service.getQuote(id)
                .subscribe(function (data) { return _this.quote = {
                id: data['id'],
                quote: data['quote'],
                author: data['author'],
                book: data['book']
            }; });
            this.newQuote = false;
        }
        else {
            this.quote = { quote: '', author: '', book: '' };
            this.newQuote = true;
        }
    };
    FormQuoteComponent.prototype.cancel = function () {
        window.history.back();
    };
    FormQuoteComponent.prototype.save = function () {
        var _this = this;
        this.service.saveQuote(this.quote).subscribe(function (_) { _this.router.navigate(['/']); }, function (error) { return console.error('Error creating new theme: ' + error); });
    };
    FormQuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./formQuote.component.html */ "./src/app/quote/formQuote.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _quote_service__WEBPACK_IMPORTED_MODULE_1__["QuoteService"]])
    ], FormQuoteComponent);
    return FormQuoteComponent;
}());



/***/ }),

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n\r\n  <div>\r\n    <mat-card class=\"card\">\r\n      <mat-tab-group dynamicHeight>\r\n        <mat-tab label=\"Citas\">\r\n          <div class=\"example-large-box mat-elevation-z4 bg\">\r\n\r\n            <span *ngIf=\"!edit\">\r\n              <mat-card class=\"card\">\r\n                {{quote.quote}}\r\n              </mat-card>\r\n\r\n              <div style=\"padding-top: 2rem; margin-left: 2rem\">Autor</div>\r\n              <mat-card class=\"card\">\r\n                {{quote.author}}\r\n              </mat-card>\r\n\r\n              <div style=\"padding-top: 2rem; margin-left: 2rem\">Libro</div>\r\n              <mat-card class=\"card\">\r\n                {{quote.book}}\r\n              </mat-card>\r\n            </span>\r\n\r\n            <form (keyup.enter)=\"save()\" *ngIf=\"edit\">\r\n              <mat-card class=\"card\">\r\n                <input style=\"font-size: 1rem; width: 99%;\" type=\"text\" [(ngModel)]=\"name\" name=\"name\">\r\n              </mat-card>\r\n\r\n              <div style=\"padding-top: 2rem; margin-left: 2rem\">Autor</div>\r\n              <mat-card class=\"card\">\r\n                <input style=\"font-size: 1rem; width: 99%;\" type=\"text\" [(ngModel)]=\"author\" name=\"author\">\r\n              </mat-card>\r\n\r\n              <div style=\"padding-top: 2rem; margin-left: 2rem\">Libro</div>\r\n              <mat-card class=\"card\">\r\n                <input style=\"font-size: 1rem; width: 99%;\" type=\"text\" [(ngModel)]=\"book\" name=\"book\">\r\n              </mat-card>\r\n            </form>\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"loginService.isAdmin\">\r\n            <button mat-mini-fab color=\"warn\" class=\"right-button\" (click)=\"removeTheme()\" >\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n\r\n            <button *ngIf=\"edit\" mat-mini-fab color=\"primary\" class=\"right-button\" (click)=\"save()\">\r\n              <mat-icon>border_color</mat-icon>\r\n            </button>\r\n\r\n            <button *ngIf=\"!edit\" mat-mini-fab color=\"primary\" class=\"right-button\" (click)=\"editQuote()\">\r\n              <mat-icon>border_color</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-card>\r\n  </div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quote.service */ "./src/app/quote/quote.service.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");






var QuoteComponent = /** @class */ (function () {
    function QuoteComponent(router, quoteService, _dialogService, activatedRoute, loginService) {
        this.router = router;
        this.quoteService = quoteService;
        this._dialogService = _dialogService;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.edit = false;
    }
    QuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.quoteService.getQuote(id)
                .subscribe(function (data) {
                _this.quote = {
                    id: data['id'],
                    quote: data['quote'],
                    author: data['author'],
                    book: data['book']
                };
                _this.name = _this.quote.quote;
                _this.author = _this.quote.author;
                _this.book = _this.quote.book;
            });
        });
    };
    QuoteComponent.prototype.removeTheme = function () {
        var _this = this;
        this._dialogService.openConfirm({
            message: '¿ Seguro que desea eliminar la cita ' + this.quote.id + '?',
            title: 'Confirmación',
            width: '500px',
            height: '175px'
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this.quoteService
                    .removeQuote(_this.quote)
                    .subscribe(function (_) { return _this.router.navigate(['/']); }, function (error) { return console.error(error); });
            }
        });
    };
    QuoteComponent.prototype.editQuote = function () {
        this.edit = true;
    };
    QuoteComponent.prototype.save = function () {
        if ((this.name !== '') && (this.author !== '') && (this.book !== '')) {
            this.edit = false;
            this.quote.quote = this.name;
            this.quote.author = this.author;
            this.quote.book = this.book;
            this.quoteService.saveQuote(this.quote).subscribe(function (_) { }, function (error) { return console.error('Error creating new theme: ' + error); });
        }
    };
    QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_3__["TdDialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/quote/quote.service.ts":
/*!****************************************!*\
  !*** ./src/app/quote/quote.service.ts ***!
  \****************************************/
/*! exports provided: QuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteService", function() { return QuoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var QuoteService = /** @class */ (function () {
    function QuoteService(http) {
        this.http = http;
    }
    QuoteService.prototype.getQuotes = function () {
        return this.http.get('/api/quotes/');
    };
    QuoteService.prototype.getSize = function () {
        return this.http.get('/api/quotes/size');
    };
    QuoteService.prototype.getQuotesByPage = function (page) {
        return this.http.get('/api/quotes/?page=' + page);
    };
    QuoteService.prototype.getQuote = function (id) {
        return this.http.get('/api/quotes/' + id);
    };
    QuoteService.prototype.searchQuote = function (name, page) {
        return this.http.get('/api/quotes/search/' + name + '/?page=' + page);
    };
    QuoteService.prototype.saveQuote = function (quote) {
        var body = JSON.stringify(quote);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        if (!quote.id) {
            return this.http.post('/api/quotes/', body, { headers: headers });
        }
        else {
            return this.http.put('/api/quotes/' + quote.id, body, { headers: headers });
        }
    };
    QuoteService.prototype.removeQuote = function (quote) {
        return this.http.delete('/api/quotes/' + quote.id);
    };
    QuoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuoteService);
    return QuoteService;
}());



/***/ }),

/***/ "./src/app/tabs/tab.model.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tab.model.ts ***!
  \***********************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
var Tab = /** @class */ (function () {
    function Tab(_type, _id) {
        this._type = _type;
        this._id = _id;
    }
    Object.defineProperty(Tab.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "active", {
        get: function () {
            return (window.location.href.includes(this.type + '/' + String(this.id)));
        },
        enumerable: true,
        configurable: true
    });
    return Tab;
}());



/***/ }),

/***/ "./src/app/tabs/tab.service.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tab.service.ts ***!
  \*************************************/
/*! exports provided: TabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabService", function() { return TabService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tab_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab.model */ "./src/app/tabs/tab.model.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");





var TabService = /** @class */ (function () {
    function TabService(loginService, http) {
        this.loginService = loginService;
        this.http = http;
        this._tabs = [];
    }
    TabService.prototype.addTab = function (type, id) {
        for (var _i = 0, _a = this._tabs; _i < _a.length; _i++) {
            var t = _a[_i];
            if ((t.type === type) && (t.id === id)) {
                return;
            }
        }
        this._tabs.push(new _tab_model__WEBPACK_IMPORTED_MODULE_3__["Tab"](type, id));
    };
    TabService.prototype.removeTab = function (type, id) {
        var _this = this;
        this._tabs.forEach(function (item, index) {
            if ((item.type === type) && (item.id === id)) {
                _this._tabs.splice(index, 1);
            }
        });
    };
    Object.defineProperty(TabService.prototype, "tabs", {
        get: function () {
            if (!this.loginService.isLogged) {
                this._tabs = [];
            }
            return this._tabs;
        },
        enumerable: true,
        configurable: true
    });
    TabService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TabService);
    return TabService;
}());



/***/ }),

/***/ "./src/app/theme/formText.component.html":
/*!***********************************************!*\
  !*** ./src/app/theme/formText.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n  <div *ngIf=\"text\">\r\n    <mat-card class=\"card\" >\r\n      <mat-tab-group dynamicHeight>\r\n        <mat-tab label=\"Texto\">\r\n          <form #textForm=\"ngForm\">\r\n            <div class=\"example-large-box mat-elevation-z4\" style=\"text-align: center\">\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 30%\">\r\n                <input matInput placeholder=\"Texto\" [(ngModel)]=\"text.text\" #textFormElement\r\n                #textFormControl=\"ngModel\" name=\"text\" required>\r\n              </mat-form-field>\r\n            </div>\r\n          </form>\r\n          <div  layout=\"row\" style=\"text-align: center\" class=\"enterLoginBotton\">\r\n            <button mat-raised-button class=\"button\" color=\"primary\" (click)=\"save()\" [disabled]=\"textForm === undefined || (textForm && !textForm.valid)\">\r\n              Guardar <mat-icon>save</mat-icon>\r\n            </button>\r\n            <button mat-raised-button class=\"button\" color=\"accent\" (click)=\"cancel()\">Cancelar</button>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-card>\r\n  </div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/theme/formText.component.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/formText.component.ts ***!
  \*********************************************/
/*! exports provided: FormTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTextComponent", function() { return FormTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.service */ "./src/app/theme/theme.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FormTextComponent = /** @class */ (function () {
    function FormTextComponent(router, activatedRoute, service) {
        this.router = router;
        this.service = service;
        this.id = activatedRoute.snapshot.params['id'];
        this.text = { text: '' };
        this.newTheme = true;
    }
    FormTextComponent.prototype.cancel = function () {
        window.history.back();
    };
    FormTextComponent.prototype.save = function () {
        var _this = this;
        this.service.addText(this.id, this.text).subscribe(function (_) { return _this.router.navigate(['theme/', _this.id]); }, function (error) { return console.log(error); });
    };
    FormTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./formText.component.html */ "./src/app/theme/formText.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]])
    ], FormTextComponent);
    return FormTextComponent;
}());



/***/ }),

/***/ "./src/app/theme/formTheme.component.html":
/*!************************************************!*\
  !*** ./src/app/theme/formTheme.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n\r\n  <div *ngIf=\"theme\">\r\n    <mat-card class=\"card\" >\r\n      <mat-tab-group dynamicHeight>\r\n        <mat-tab label=\"Temas\">\r\n          <form #themeForm=\"ngForm\">\r\n            <div class=\"example-large-box mat-elevation-z4\" style=\"text-align: center\">\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 30%\">\r\n                <input matInput placeholder=\"Tema\" [(ngModel)]=\"theme.name\" #themeFormElement\r\n                  #themeFormControl=\"ngModel\" name=\"name\" required id=\"theme-name\">\r\n              </mat-form-field>\r\n            </div>\r\n          </form>\r\n\r\n          <div  layout=\"row\" style=\"text-align: center\" class=\"enterLoginBotton\">\r\n            <button mat-raised-button class=\"button\" color=\"primary\" (click)=\"save()\" [disabled]=\"themeForm === undefined || (themeForm && !themeForm.valid)\" id=\"save-theme-button\">\r\n              Guardar <mat-icon>save</mat-icon>\r\n            </button>\r\n            <button mat-raised-button class=\"button\" color=\"accent\" (click)=\"cancel()\">Cancelar</button>\r\n          </div>\r\n\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-card>\r\n  </div>\r\n\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/formTheme.component.ts":
/*!**********************************************!*\
  !*** ./src/app/theme/formTheme.component.ts ***!
  \**********************************************/
/*! exports provided: FormThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormThemeComponent", function() { return FormThemeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.service */ "./src/app/theme/theme.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FormThemeComponent = /** @class */ (function () {
    function FormThemeComponent(router, activatedRoute, service) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
    }
    FormThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.params['id'];
        if (id) {
            this.service.getTheme(id)
                .subscribe(function (data) { return _this.theme = {
                id: data['id'],
                name: data['name'],
                quotes: data['quotes'],
                texts: data['texts']
            }; });
            this.newTheme = false;
        }
        else {
            this.theme = { name: '', quotes: [], texts: [] };
            this.newTheme = true;
        }
    };
    FormThemeComponent.prototype.cancel = function () {
        window.history.back();
    };
    FormThemeComponent.prototype.save = function () {
        var _this = this;
        this.service.saveTheme(this.theme).subscribe(function (_) { _this.router.navigate(['/']); }, function (error) { return console.error('Error creating new theme: ' + error); });
    };
    FormThemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./formTheme.component.html */ "./src/app/theme/formTheme.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]])
    ], FormThemeComponent);
    return FormThemeComponent;
}());



/***/ }),

/***/ "./src/app/theme/selectQuote.component.html":
/*!**************************************************!*\
  !*** ./src/app/theme/selectQuote.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"search\">\r\n    <mat-form-field appearance=\"outline\" style=\"width:100%\" (keyup.enter)=\"search(searchName)\">\r\n      <mat-label>Buscador</mat-label>\r\n      <input matInput [(ngModel)]=\"searchName\" />\r\n      <mat-icon matSuffix (click)=\"search(searchName)\" style=\"cursor: pointer\">search</mat-icon>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div>\r\n    <mat-card class=\"card\" style=\"margin-top: -1rem\">\r\n      <mat-tab-group dynamicHeight>\r\n        <mat-tab label=\"Citas\">\r\n          <div *ngFor=\"let quote of quotes\">\r\n            <mat-card class=\"card element-list\">\r\n              <div style=\"padding: 0.7rem; cursor: pointer;\" (click)=\"add(quote.id)\">\r\n                {{ quote.quote }}\r\n              </div>\r\n            </mat-card>\r\n          </div>\r\n\r\n          <div style=\"text-align: center\">\r\n            <p *ngIf=\"quotes.length === 0\" style=\"margin: 2rem\">\r\n              Ningún resultado\r\n            </p>\r\n          </div>\r\n\r\n          <mat-progress-bar *ngIf=\"spinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n          <div style=\"margin-top: 2rem; text-align: center\" class=\"loadMoreButtons\">\r\n            <div class=\"load\">\r\n              <button *ngIf=\"loadMoreQuotes\" mat-mini-fab color=\"primary\" style=\"margin-right: 1rem\" [matBadge]=\"remainingQuotes\"  matBadgeColor=\"accent\" title=\"Cargar más\">\r\n                <mat-icon matSuffix (click)=\"showQuotesByPage(pageQuotes + 1)\">\r\n                  keyboard_arrow_down\r\n                </mat-icon>\r\n              </button>\r\n              <button *ngIf=\"pageQuotes !== 0\" mat-mini-fab color=\"accent\" title=\"Cargar menos\">\r\n                <mat-icon matSuffix (click)=\"loadLessQuotes()\">\r\n                  keyboard_arrow_up\r\n                </mat-icon>\r\n              </button>\r\n            </div>\r\n\r\n            <button mat-raised-button class=\"right-button\" color=\"accent\" (click)=\"cancel()\">Cancelar</button>\r\n\r\n          </div>\r\n\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-card>\r\n  </div>\r\n\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/selectQuote.component.ts":
/*!************************************************!*\
  !*** ./src/app/theme/selectQuote.component.ts ***!
  \************************************************/
/*! exports provided: SelectQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectQuoteComponent", function() { return SelectQuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.service */ "./src/app/theme/theme.service.ts");
/* harmony import */ var _quote_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../quote/quote.service */ "./src/app/quote/quote.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var SelectQuoteComponent = /** @class */ (function () {
    function SelectQuoteComponent(quoteService, themeService, activatedRoute, router) {
        this.quoteService = quoteService;
        this.themeService = themeService;
        this.router = router;
        this.searchName = '';
        this.spinner = false;
        this.id = activatedRoute.snapshot.params['id'];
    }
    SelectQuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPages();
        this.quoteService.getQuotes()
            .subscribe(function (data) { return _this.quotes = data['content']; });
        this.getQuotesSize();
        this.pageSize = 6;
        this.loadMoreQuotes = true;
    };
    SelectQuoteComponent.prototype.cancel = function () {
        window.history.back();
    };
    SelectQuoteComponent.prototype.add = function (idQ) {
        var _this = this;
        this.themeService.addQuote(this.id, idQ).subscribe(function (_) { return _this.router.navigate(['theme/', _this.id]); }, function (error) { return console.log(error); });
    };
    SelectQuoteComponent.prototype.search = function (name) {
        var _this = this;
        this.resetPages();
        if (name !== '') {
            this.quoteService.searchQuote(name, this.pageQuotes).subscribe(function (data) {
                return _this.quotes = data['content'];
            });
        }
        else {
            this.quoteService.getQuotes().subscribe(function (data) { return _this.quotes = data['content']; });
        }
    };
    SelectQuoteComponent.prototype.resetPages = function () {
        this.pageQuotes = 0;
    };
    SelectQuoteComponent.prototype.loadLessQuotes = function () {
        this.pageQuotes = 0;
        this.loadMoreQuotes = true;
        this.showFirstQuotes();
        this.getRemainingQuotes();
    };
    SelectQuoteComponent.prototype.showQuotesByPage = function (page) {
        var _this = this;
        this.spinner = true;
        if (page !== 0) {
            if (this.searchName === '') {
                this.quoteService.getQuotesByPage(page).subscribe(function (data1) {
                    _this.quotes = _this.quotes.concat(data1['content']);
                    _this.spinner = false;
                });
            }
            else {
                this.quoteService.searchQuote(this.searchName, this.pageQuotes + 1).subscribe(function (data) {
                    _this.quotes = _this.quotes.concat(data['content']);
                    _this.spinner = false;
                });
            }
        }
        else {
            this.showFirstQuotes();
        }
        this.pageQuotes++;
        this.getRemainingQuotes();
    };
    SelectQuoteComponent.prototype.showFirstQuotes = function () {
        var _this = this;
        this.quoteService.getQuotes()
            .subscribe(function (data) { return _this.quotes = data['content']; });
    };
    SelectQuoteComponent.prototype.getQuotesSize = function () {
        var _this = this;
        this.quoteService.getSize()
            .subscribe(function (data) {
            _this.quotesSize = data;
            _this.getRemainingQuotes();
        });
    };
    SelectQuoteComponent.prototype.getRemainingQuotes = function () {
        var op = this.quotesSize - this.pageSize - (this.pageSize * this.pageQuotes);
        this.remainingQuotes = (op > 0) ? op : 0;
        this.loadMoreQuotes = this.remainingQuotes !== 0;
    };
    SelectQuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            template: __webpack_require__(/*! ./selectQuote.component.html */ "./src/app/theme/selectQuote.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quote_quote_service__WEBPACK_IMPORTED_MODULE_3__["QuoteService"], _theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SelectQuoteComponent);
    return SelectQuoteComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme.component.html":
/*!********************************************!*\
  !*** ./src/app/theme/theme.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n\r\n  <div>\r\n    <mat-card class=\"card\">\r\n      <mat-tab-group dynamicHeight>\r\n        <mat-tab label=\"Temas\">\r\n          <mat-card class=\"card\">\r\n            <img [src]=\"image\" alt=\"{{theme.name}}Image\" class=\"themeImage\">\r\n            <span *ngIf=\"loginService.isAdmin\">\r\n              <button title=\"Eliminar tema\" mat-mini-fab color=\"warn\" class=\"right-button-theme\" (click)=\"removeTheme()\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n\r\n              <button *ngIf=\"edit\" title=\"Guardar nombre de tema\" mat-mini-fab color=\"primary\" class=\"right-button-theme\" (click)=\"save()\">\r\n                <mat-icon>border_color</mat-icon>\r\n              </button>\r\n\r\n              <button *ngIf=\"!edit\" title=\"Editar nombre de tema\" mat-mini-fab color=\"primary\" class=\"right-button-theme\" (click)=\"editTheme()\">\r\n                <mat-icon>border_color</mat-icon>\r\n              </button>\r\n\r\n              <button title=\"Cambiar imagen\" mat-mini-fab color=\"accent\" class=\"right-button-theme\" (click)=\"fileInput.click()\">\r\n                <input #fileInput type=\"file\" [(ngModel)]=\"newImage\" class=\"inputFileButton\" (change)=\"changeImage(fileInput)\">\r\n                <mat-icon>insert_photo</mat-icon>\r\n              </button>\r\n\r\n              <a href=\"#userView\">\r\n                <button title=\"Vista usuario\" mat-mini-fab color=\"primary\" class=\"right-button-theme\">\r\n                  <mat-icon>remove_red_eye</mat-icon>\r\n                </button>\r\n              </a>\r\n            </span>\r\n\r\n            <h1 style=\"font-size: 2rem; margin-left: 1rem;\" *ngIf=\"!edit\">{{theme?.name}}</h1>\r\n\r\n            <form *ngIf=\"edit && loginService.isAdmin\" (keyup.enter)=\"save()\">\r\n              <input style=\"font-size: 2rem; margin-left: 1rem; margin-top: 1rem;; width: 50%;\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\r\n            </form>\r\n\r\n          </mat-card>\r\n\r\n          <div class=\"example-large-box mat-elevation-z4 bg\" *ngIf=\"loginService.isAdmin && (theme?.quotes.length > 0)\">\r\n            <div style=\"margin-left: 2rem; padding-top: 0.5rem;\">\r\n              Referencias a citas\r\n            </div>\r\n            <mat-card class=\"card\" *ngFor = \"let quote of theme.quotes\">\r\n              <div style=\"margin-left: 2rem\">\r\n                Referencia cita {{quote.id}}\r\n                <button title=\"Eliminar cita\" mat-mini-fab color=\"warn\" *ngIf=\"loginService.isAdmin\" class=\"delete\" (click)=\"deleteQuote(quote.id, theme.id)\" >\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </div>\r\n              <mat-card class=\"card\">\r\n                {{quote.quote}}\r\n              </mat-card>\r\n              <mat-grid-list cols=\"2\" rowHeight=\"4.5rem\" class=\"authorAndBook\">\r\n                <mat-grid-tile>\r\n                  <mat-card class=\"card\">\r\n                    {{quote.author}}\r\n                  </mat-card>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <mat-card class=\"card\">\r\n                    {{quote.book}}\r\n                  </mat-card>\r\n                </mat-grid-tile>\r\n              </mat-grid-list>\r\n            </mat-card>\r\n          </div>\r\n\r\n          <div class=\"example-large-box mat-elevation-z4 bg\" *ngIf=\"loginService.isAdmin && (theme?.texts.length > 0)\">\r\n            <div style=\"margin-left: 2rem; padding-top: 0.5rem;\">\r\n              Textos\r\n            </div>\r\n            <mat-card class=\"card\" *ngFor = \"let text of theme.texts\">\r\n              <div style=\"margin-left: 2rem\">\r\n                Texto {{text.id}}\r\n                <button title=\"Eliminar texto\" mat-mini-fab color=\"warn\" *ngIf=\"loginService.isAdmin\" class=\"delete\" (click)=\"deleteText(text.id)\">\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </div>\r\n\r\n              <mat-card class=\"card\">\r\n                {{text.text}}\r\n              </mat-card>\r\n            </mat-card>\r\n          </div>\r\n\r\n          <div class=\"example-large-box mat-elevation-z4 bg\" *ngIf=\"loginService.isAdmin\">\r\n              <section class=\"example-section\">\r\n                <mat-radio-group [(ngModel)]=\"labelPosition\">\r\n                  <mat-radio-button class=\"example-margin\" value=\"cita\">Referencia a cita</mat-radio-button>\r\n                  <mat-radio-button class=\"example-margin\" value=\"texto\">Texto</mat-radio-button>\r\n                </mat-radio-group>\r\n                <mat-chip-list style=\"margin-left: 2rem\">\r\n                  <mat-chip color=\"accent\" selected (click)=\"add()\">Añadir</mat-chip>\r\n                </mat-chip-list>\r\n              </section>\r\n          </div>\r\n\r\n          <div id=\"userView\" class=\"example-large-box mat-elevation-z4 bg\">\r\n              <div style=\"margin-left: 2rem; padding-top: 0.5rem;\">\r\n                HTML\r\n              </div>\r\n              <mat-card class=\"card\" >\r\n                <h3 *ngIf=\"loginService.isAdmin\">{{theme?.name}}</h3>\r\n                <div *ngFor = \"let quote of theme?.quotes\">\r\n                  <p>\"{{quote.quote}}\"</p>\r\n                  <p>{{quote.author}} en {{quote.book}}</p>\r\n                </div>\r\n              </mat-card>\r\n          </div>\r\n\r\n          <div style=\"text-align: center\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"getPDF()\">\r\n              Descargar PDF\r\n              <mat-icon>picture_as_pdf</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-card>\r\n  </div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/theme/theme.component.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.service */ "./src/app/theme/theme.service.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");







var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    return ImageSnippet;
}());
var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(router, themeService, activatedRoute, loginService, _dialogService) {
        this.router = router;
        this.themeService = themeService;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this._dialogService = _dialogService;
        this.selectQuote = false;
        this.edit = false;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.themeService.getTheme(_this.id)
                .subscribe(function (data) {
                _this.theme = {
                    id: data['id'],
                    name: data['name'],
                    quotes: data['quotes'],
                    texts: data['texts']
                };
                _this.name = _this.theme.name;
            });
            _this.themeService.getImage(_this.id)
                .subscribe(function (data) {
                _this.createImageFromBlob(data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    ThemeComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.image = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    ThemeComponent.prototype.getPDF = function () {
        this.themeService.getPDF(this.id).subscribe(function (response) {
            var mediaType = 'application/pdf';
            var blob = new Blob([response], { type: mediaType });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, 'theme.pdf');
        });
    };
    ThemeComponent.prototype.removeTheme = function () {
        var _this = this;
        this._dialogService.openConfirm({
            message: '¿Seguro que desea eliminar el tema ' + this.theme.name + '?',
            title: 'Confirmación',
            cancelButton: 'Cancelar',
            acceptButton: 'Borrar',
            width: '500px',
            height: '175px'
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this.themeService
                    .removeTheme(_this.theme)
                    .subscribe(function (_) { return _this.router.navigate(['/']); }, function (error) { return console.error(error); });
            }
        });
    };
    ThemeComponent.prototype.editTheme = function () {
        this.edit = true;
    };
    ThemeComponent.prototype.add = function () {
        if (this.labelPosition === 'cita') {
            this.router.navigate(['/theme/selectQuote', this.theme.id]);
        }
        else if (this.labelPosition === 'texto') {
            this.router.navigate(['/theme/formText', this.theme.id]);
        }
    };
    ThemeComponent.prototype.deleteText = function (id) {
        var _this = this;
        this._dialogService.openConfirm({
            message: '¿Seguro que desea eliminar el texto de este tema?',
            title: 'Confirmación',
            cancelButton: 'Cancelar',
            acceptButton: 'Borrar',
            width: '500px',
            height: '200'
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this.themeService.removeText(_this.theme, id).subscribe(function (_) { return _this.ngOnInit(); }, function (error) { return console.log(error); });
            }
        });
    };
    ThemeComponent.prototype.deleteQuote = function (idQ) {
        var _this = this;
        this._dialogService.openConfirm({
            message: '¿Seguro que desea eliminar la referencia de esta cita en este tema?',
            title: 'Confirmación',
            cancelButton: 'Cancelar',
            acceptButton: 'Borrar',
            width: '500px',
            height: '200'
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this.themeService.removeQuote(_this.theme, idQ).subscribe(function (_) { return _this.ngOnInit(); }, function (error) { return console.log(error); });
            }
        });
    };
    ThemeComponent.prototype.changeImage = function (imageInput) {
        var _this = this;
        this._dialogService.openConfirm({
            message: '¿Seguro que desea cambiar la imagen de este tema?',
            title: 'Confirmación',
            cancelButton: 'Cancelar',
            acceptButton: 'Aceptar',
            width: '500px',
            height: '200'
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                var file_1 = imageInput.files[0];
                var reader = new FileReader();
                reader.addEventListener('load', function (event) {
                    _this.newImage = new ImageSnippet(event.target.result, file_1);
                    _this.themeService.uploadImage(_this.theme.id, _this.newImage.file).subscribe(function (_) {
                        _this.ngOnInit();
                    }, function (error) { return console.error('Error creating new image: ' + error); });
                });
                reader.readAsDataURL(file_1);
            }
        });
    };
    ThemeComponent.prototype.save = function () {
        if (this.name !== '') {
            this.edit = false;
            this.theme.name = this.name;
            this.themeService.saveTheme(this.theme).subscribe(function (_) { }, function (error) { return console.error('Error creating new theme: ' + error); });
        }
    };
    ThemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/theme/theme.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_6__["TdDialogService"]])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme.service.ts":
/*!****************************************!*\
  !*** ./src/app/theme/theme.service.ts ***!
  \****************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ThemeService = /** @class */ (function () {
    function ThemeService(http) {
        this.http = http;
    }
    ThemeService.prototype.getThemes = function () {
        return this.http.get('/api/themes/');
    };
    ThemeService.prototype.getSize = function () {
        return this.http.get('/api/themes/size');
    };
    ThemeService.prototype.getThemesByPage = function (page) {
        return this.http.get('/api/themes/?page=' + page);
    };
    ThemeService.prototype.getTheme = function (id) {
        return this.http.get('/api/themes/' + id);
    };
    ThemeService.prototype.getImage = function (id) {
        return this.http.get('/api/themes/' + id + '/image', { responseType: 'blob' });
    };
    ThemeService.prototype.uploadImage = function (id, file) {
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post('/api/themes/' + id + '/image', formData);
    };
    ThemeService.prototype.searchTheme = function (name, page) {
        return this.http.get('/api/themes/search/' + name + '/?page=' + page);
    };
    ThemeService.prototype.saveTheme = function (theme) {
        var body = JSON.stringify(theme);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        if (!theme.id) {
            return this.http.post('/api/themes/', body, { headers: headers });
        }
        else {
            return this.http.put('/api/themes/' + theme.id, body, { headers: headers });
        }
    };
    ThemeService.prototype.removeTheme = function (theme) {
        return this.http.delete('/api/themes/' + theme.id);
    };
    ThemeService.prototype.getPDF = function (id) {
        return this.http.get('/api/themes/' + id + '/PDF', { responseType: 'blob' });
    };
    ThemeService.prototype.addQuote = function (idT, idQ) {
        return this.http.post('/api/themes/' + idT + '/quote/' + idQ, null);
    };
    ThemeService.prototype.addText = function (id, text) {
        var formData = new FormData();
        formData.append('text', text.text);
        return this.http.post('/api/themes/' + id + '/text/', formData);
    };
    ThemeService.prototype.removeQuote = function (theme, id) {
        return this.http.delete('/api/themes/' + theme.id + '/quote/' + id);
    };
    ThemeService.prototype.removeText = function (theme, id) {
        return this.http.delete('/api/themes/' + theme.id + '/text/' + id);
    };
    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");


// Import for Angular Material



if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map