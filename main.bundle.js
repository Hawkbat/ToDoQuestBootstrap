webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nh1 {\r\n\tcolor: #369;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tfont-size: 250%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header class=\"col-12\">\n</app-header>\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<quest-list class=\"col-6\"></quest-list>\n\t\t<quest-info *ngIf=\"store.state.selectedQuest >= 0\" class=\"col-6\"></quest-info>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__("../../../../../src/app/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["b" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_service__["b" /* StoreService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_service__ = __webpack_require__("../../../../../src/app/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quest_list_quest_list_component__ = __webpack_require__("../../../../../src/app/quest-list/quest-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quest_info_quest_info_component__ = __webpack_require__("../../../../../src/app/quest-info/quest-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quest_item_quest_item_component__ = __webpack_require__("../../../../../src/app/quest-item/quest-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__quest_list_quest_list_component__["a" /* QuestListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__quest_info_quest_info_component__["a" /* QuestInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__quest_item_quest_item_component__["a" /* QuestItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__store_service__["b" /* StoreService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n\t<a href=\"#\" class=\"navbar-brand\">To-Do Quest</a>\n\t<div class=\"navbar-nav\">\n\t\t<a class=\"nav-item nav-link\">Level</a>\n\t\t<a class=\"nav-item nav-link\">{{store.state.level}}</a>\n\t\t<a class=\"nav-item nav-link\">XP</a>\n\t\t<a class=\"nav-item nav-link\">{{store.state.exp}}</a>\n\t</div>\n\t<ngb-progressbar class=\"nav-item\" style=\"flex: 1 0 auto;\" type=\"info\" [striped]=\"true\" [value]=\"store.state.exp\"></ngb-progressbar>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__("../../../../../src/app/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(store) {
        this.store = store;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["b" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_service__["b" /* StoreService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/quest-info/quest-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quest-info/quest-info.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!store.state.editing\">\n\t<h1>{{getQuest().name}}</h1>\n\t<b>Reward:</b> {{getQuest().exp}} XP<br>\n\t<b>Info:</b>\n\t<p>{{getQuest().info}}</p>\n\t<p></p>\n\t<ngb-accordion [closeOthers]=\"true\" activeIds=\"step-0\">\n\t\t<ngb-panel *ngFor=\"let step of getQuest().steps; let i = index\" [id]=\"'step-' + i\" [title]=\"step.name\">\n\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t<p>{{step.info}}</p>\n\t\t\t\t<ng-container *ngIf=\"getQuest().status == 2\">\n\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"getQuest().steps[i].complete\"> Completed\n\t\t\t\t</ng-container>\n\t\t\t</ng-template>\n\t\t</ngb-panel>\n\t</ngb-accordion>\n\t<p><i>{{ getCompletedSteps() }} / {{ getQuest().steps.length }} steps completed</i></p>\n\t<button *ngIf=\"getQuest().status == 2 && getProgress() == 100\" class=\"btn btn-primary\" (click)=\"store.setCurrentQuestStatus(4)\">Complete Quest</button>\n\t<button *ngIf=\"getQuest().status == 1\" class=\"btn btn-primary\" (click)=\"store.setCurrentQuestStatus(2)\">Accept Quest</button>\n\t<button *ngIf=\"getQuest().status == 1\" class=\"btn btn-secondary\" (click)=\"store.setEditing(true)\">Edit Quest</button>\n\t<button *ngIf=\"getQuest().status != 1\" class=\"btn btn-secondary\" (click)=\"store.setCurrentQuestStatus(1)\">Cancel Quest</button>\n</ng-container>\n<ng-container *ngIf=\"store.state.editing\">\n\t<h1>Editing Quest</h1>\n\t<div class=\"input-group\">\n\t\t<span class=\"input-group-addon\">Name</span>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"getQuest().name\">\n\t</div>\n\t<div class=\"input-group\">\n\t\t<span class=\"input-group-addon\">Reward</span>\n\t\t<input type=\"number\" min=\"0\" class=\"form-control\" [(ngModel)]=\"getQuest().exp\">\n\t\t<span class=\"input-group-addon\">XP</span>\n\t</div>\n\t<div class=\"input-group\">\n\t\t<span class=\"input-group-addon\">Info</span>\n\t\t<textarea class=\"form-control\" [(ngModel)]=\"getQuest().info\"></textarea>\n\t</div>\n\t<p></p>\n\t<ng-container *ngFor=\"let step of getQuest().steps; let i = index\">\n\t\t<p></p>\n\t\t<div class=\"input-group\">\n\t\t\t<span class=\"input-group-addon\">Name</span>\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"step.name\">\n\t\t\t<span class=\"input-group-addon\">Info</span>\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"step.info\">\n\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t<button class=\"btn btn-danger\" (click)=\"store.removeStep(i)\">X</button>\n\t\t\t</span>\n\t\t</div>\n\t\t<p></p>\n\t</ng-container>\n\t<button class=\"btn btn-secondary\" (click)=\"store.addNewStep()\">Add Step</button>\n\t<p></p>\n\t<button class=\"btn btn-primary\" (click)=\"store.applyEdit()\">Apply Changes</button>\n\t<button class=\"btn btn-secondary\" (click)=\"store.setEditing(false)\">Cancel Changes</button>\n\t<button class=\"btn btn-danger\" (click)=\"store.removeCurrentQuest()\">Delete Quest</button>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/quest-info/quest-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__("../../../../../src/app/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestInfoComponent = (function () {
    function QuestInfoComponent(store) {
        this.store = store;
    }
    QuestInfoComponent.prototype.ngOnInit = function () {
    };
    QuestInfoComponent.prototype.getQuest = function () {
        if (this.store.state.editing)
            return this.store.state.tempQuest;
        else
            return this.store.state.quests[this.store.state.selectedQuest];
    };
    QuestInfoComponent.prototype.getCompletedSteps = function () {
        return this.getQuest().steps.reduce(function (prev, step) { return prev + (step.complete ? 1 : 0); }, 0);
    };
    QuestInfoComponent.prototype.getProgress = function () {
        var quest = this.getQuest();
        var totalSteps = quest.steps.length;
        if (totalSteps == 0)
            return 100;
        return (this.getCompletedSteps() / totalSteps) * 100;
    };
    return QuestInfoComponent;
}());
QuestInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'quest-info',
        template: __webpack_require__("../../../../../src/app/quest-info/quest-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quest-info/quest-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["b" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_service__["b" /* StoreService */]) === "function" && _a || Object])
], QuestInfoComponent);

var _a;
//# sourceMappingURL=quest-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/quest-item/quest-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quest-item/quest-item.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"list-group-item list-group-item-action\" [class.active]=\"store.state.selectedQuest == id\" (click)=\"store.selectQuest(id)\">\n\t{{store.state.quests[id].name}} <span class=\"badge badge-secondary\">{{printStatus(store.state.quests[id].status)}}</span>\n\t<ngb-progressbar *ngIf=\"store.state.quests[id].status == 2\" style=\"flex: 1 0 auto;\" type=\"info\" [striped]=\"true\" [value]=\"getProgress()\"></ngb-progressbar>\n</button>"

/***/ }),

/***/ "../../../../../src/app/quest-item/quest-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__("../../../../../src/app/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestItemComponent = (function () {
    function QuestItemComponent(store) {
        this.store = store;
    }
    QuestItemComponent.prototype.ngOnInit = function () {
    };
    QuestItemComponent.prototype.printStatus = function (status) {
        return __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* Status */].print(this.store.state.quests[this.id].status);
    };
    QuestItemComponent.prototype.getProgress = function () {
        var quest = this.store.state.quests[this.id];
        var totalSteps = quest.steps.length;
        var completeSteps = quest.steps.reduce(function (prev, step) { return prev + (step.complete ? 1 : 0); }, 0);
        return (completeSteps / totalSteps) * 100;
    };
    return QuestItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], QuestItemComponent.prototype, "id", void 0);
QuestItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'quest-item',
        template: __webpack_require__("../../../../../src/app/quest-item/quest-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quest-item/quest-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["b" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_service__["b" /* StoreService */]) === "function" && _a || Object])
], QuestItemComponent);

var _a;
//# sourceMappingURL=quest-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/quest-list/quest-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quest-list/quest-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Quest List</h1>\n<div class=\"btn-group\">\n\t<button type=\"button\" class=\"btn btn-secondary\" [class.active]=\"isFiltered(1)\" (click)=\"store.toggleFilter(1)\">Editing</button>\n\t<button type=\"button\" class=\"btn btn-secondary\" [class.active]=\"isFiltered(2)\" (click)=\"store.toggleFilter(2)\">In Progress</button>\n\t<button type=\"button\" class=\"btn btn-secondary\" [class.active]=\"isFiltered(4)\" (click)=\"store.toggleFilter(4)\">Complete</button>\n</div>\n<p></p>\n<div class=\"list-group\">\n\t<ng-container *ngFor=\"let quest of store.state.quests.slice((page - 1)*pageSize, (page - 1)*pageSize+pageSize); let i = index\">\n\t\t<quest-item *ngIf=\"isFiltered(quest.status)\" [id]=\"i\"></quest-item>\n\t</ng-container>\n</div>\n<p><i>Displaying quests {{(page - 1) * pageSize + 1}} - {{(page - 1) * pageSize + getDisplayedCount()}} of {{getQuestCount()}} ({{store.state.quests.length}} total)</i></p>\n<ngb-pagination [collectionSize]=\"getQuestCount()\" [(page)]=\"page\" [(pageSize)]=\"pageSize\"></ngb-pagination>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"store.addNewQuest()\">Create New Quest</button>"

/***/ }),

/***/ "../../../../../src/app/quest-list/quest-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__("../../../../../src/app/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestListComponent = (function () {
    function QuestListComponent(store) {
        this.store = store;
        this.page = 0;
        this.pageSize = 10;
    }
    QuestListComponent.prototype.ngOnInit = function () {
    };
    QuestListComponent.prototype.isFiltered = function (status) {
        return (this.store.state.filter & status) == status;
    };
    QuestListComponent.prototype.getQuestCount = function () {
        var _this = this;
        return this.store.state.quests.reduce(function (prev, quest) { return prev + (_this.isFiltered(quest.status) ? 1 : 0); }, 0);
    };
    QuestListComponent.prototype.getDisplayedCount = function () {
        return Math.min(this.pageSize, this.getQuestCount() - (this.page - 1) * this.pageSize);
    };
    return QuestListComponent;
}());
QuestListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'quest-list',
        template: __webpack_require__("../../../../../src/app/quest-list/quest-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quest-list/quest-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["b" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_service__["b" /* StoreService */]) === "function" && _a || Object])
], QuestListComponent);

var _a;
//# sourceMappingURL=quest-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Status;
(function (Status) {
    Status[Status["Editing"] = 1] = "Editing";
    Status[Status["InProgress"] = 2] = "InProgress";
    Status[Status["Completed"] = 4] = "Completed";
})(Status || (Status = {}));
(function (Status) {
    function print(status) {
        if (status == Status.InProgress)
            return "In Progress";
        else
            return Status[status];
    }
    Status.print = print;
})(Status || (Status = {}));
var StoreService = (function () {
    function StoreService() {
        this.loadState();
    }
    StoreService.prototype.addNewQuest = function () {
        this.state.quests.push({ name: "New Quest", info: "", status: Status.Editing, exp: 20, steps: [{ name: "Step 1", info: "", complete: false }] });
        this.state.selectedQuest = this.state.quests.length - 1;
        this.setEditing(true);
        this.refresh();
    };
    StoreService.prototype.selectQuest = function (questId) {
        this.state.selectedQuest = questId;
        if (this.state.editing) {
            this.setEditing(false);
        }
        this.refresh();
    };
    StoreService.prototype.removeCurrentQuest = function () {
        this.state.quests.splice(this.state.selectedQuest, 1);
        this.state.selectedQuest = -1;
        this.refresh();
    };
    StoreService.prototype.setCurrentQuestStatus = function (status) {
        var quest = this.state.quests[this.state.selectedQuest];
        if (quest.status == Status.Completed && status != Status.Completed) {
            this.state.exp -= quest.exp;
            while (this.state.exp < 0) {
                this.state.exp += 100;
                this.state.level--;
            }
        }
        quest.status = status;
        if (status == Status.Completed) {
            this.state.exp += quest.exp;
            while (this.state.exp >= 100) {
                this.state.exp -= 100;
                this.state.level++;
            }
        }
        else {
            for (var i = 0; i < quest.steps.length; i++) {
                quest.steps[i].complete = false;
            }
        }
        this.refresh();
    };
    StoreService.prototype.addNewStep = function () {
        this.state.tempQuest.steps.push({ name: "Step " + (this.state.tempQuest.steps.length + 1), info: "", complete: false });
        this.refresh();
    };
    StoreService.prototype.removeStep = function (id) {
        this.state.tempQuest.steps.splice(id, 1);
        this.refresh();
    };
    StoreService.prototype.setStepCompletion = function (stepId, complete) {
        this.state.quests[this.state.selectedQuest].steps[stepId].complete = complete;
        this.refresh();
    };
    StoreService.prototype.applyEdit = function () {
        this.state.quests.splice(this.state.selectedQuest, 1, this.state.tempQuest);
        this.setEditing(false);
        this.refresh();
    };
    StoreService.prototype.setEditing = function (editing) {
        this.state.editing = editing;
        if (editing) {
            this.state.tempQuest = JSON.parse(JSON.stringify(this.state.quests[this.state.selectedQuest]));
        }
        else {
            this.state.tempQuest = null;
        }
        this.refresh();
    };
    StoreService.prototype.toggleFilter = function (status) {
        if ((this.state.filter & status) == status) {
            this.state.filter -= status;
        }
        else {
            this.state.filter += status;
        }
        this.refresh();
    };
    StoreService.prototype.refresh = function () {
        this.saveState();
    };
    StoreService.prototype.saveState = function () {
        localStorage.setItem("state", JSON.stringify(this.state));
    };
    StoreService.prototype.loadState = function () {
        if (localStorage.getItem("state")) {
            this.state = JSON.parse(localStorage.getItem("state"));
        }
        else {
            this.state = {
                quests: [],
                level: 1,
                exp: 0,
                selectedQuest: -1,
                editing: false,
                tempQuest: null,
                filter: Status.Editing | Status.InProgress
            };
        }
    };
    return StoreService;
}());
StoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StoreService);

//# sourceMappingURL=store.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map