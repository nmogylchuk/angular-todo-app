(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/todo-item/todo-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/todo-item/todo-item.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/todos.service */ "./src/app/core/services/todos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/todo-edit/todo-edit.component */ "./src/app/components/todo-edit/todo-edit.component.ts");






function TodoItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editTodo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", ctx_r0.todo.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.todo.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("todo-item__done", ctx_r0.todo.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.todo.title, " ");
} }
function TodoItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-todo-edit", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", ctx_r1.todo);
} }
class TodoItemComponent {
    constructor(todosService) {
        this.todosService = todosService;
        this.edited = false;
    }
    ngOnInit() {
    }
    completeTodo(id) {
        this.todosService.completeTodo(id);
    }
    removeTodo(id) {
        this.todosService.removeTodo(id);
    }
    editTodo() {
        console.log("dbclick todo: " + this.todo.id);
        this.edited = this.todo.completed === false;
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"])); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["app-todo-item"]], inputs: { todo: "todo" }, decls: 13, vars: 13, consts: [[1, "todo-item"], [1, "todo-item__item"], [1, "todo-item__subitem"], ["type", "checkbox", 1, "todo-item__checkbox", 3, "id", "disabled", "change"], [1, "todo-item__checkmark", 3, "for", "change"], ["class", "todo-item__subitem", 3, "completed", "click", 4, "ngIf"], [4, "ngIf"], [1, "todo-item__date"], [1, "todo-item__button", "button-remove", "button", 3, "click"], [1, "todo-item__subitem", 3, "click"], [1, "todo-item__number"], [1, "todo-item__name"], [3, "todo"]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoItemComponent_Template_input_change_3_listener() { return ctx.completeTodo(ctx.todo.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoItemComponent_Template_label_change_4_listener() { return ctx.completeTodo(ctx.todo.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoItemComponent_div_5_Template, 5, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodoItemComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_10_listener() { return ctx.removeTodo(ctx.todo.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked", ctx.todo.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.todo.id)("disabled", ctx.edited);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked", ctx.todo.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.todo.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edited);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edited);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 10, ctx.todo.date, "medium"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_4__["TodoEditComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap\")[_ngcontent-%COMP%];\n@charset \"UTF-8\";\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 18px;\n  overflow-x: hidden;\n  font-family: \"Roboto\", sans-serif;\n}\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n}\n.ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n  transition: all ease 0.2s;\n  font-weight: bold;\n  outline: none;\n}\n.todo-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-item__item[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-item__checkbox[_ngcontent-%COMP%] {\n  display: none;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-item__checkmark[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.2rem;\n  margin: 0.2rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 1px solid #45a29e;\n  border-radius: 5px;\n  background-color: #fff;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-item__checkmark[_ngcontent-%COMP%]::after {\n  content: \"\u2714\";\n  line-height: 1rem;\n  opacity: 0;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-item__checkmark.checked[_ngcontent-%COMP%] {\n  background: #45a29e;\n  color: #fff;\n  text-align: center;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-item__checkmark.checked[_ngcontent-%COMP%]::after {\n  line-height: 1rem;\n  content: \"\u2714\";\n  opacity: 1;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-item__done[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-item__number[_ngcontent-%COMP%] {\n  color: #45a29e;\n  padding: 0.2rem;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-item__name[_ngcontent-%COMP%] {\n  padding: 0.2rem;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-item__date[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4rem;\n  font-size: 0.8rem;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-item__button[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  margin: 0.2rem;\n  padding: 0.2rem;\n}\n.todo-item[_ngcontent-%COMP%]   .button-remove[_ngcontent-%COMP%] {\n  color: #ffb6b6;\n  border: 1px solid #45a29e;\n}\n.todo-item[_ngcontent-%COMP%]   .button-remove[_ngcontent-%COMP%]:hover {\n  background-color: #ffb6b6;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZXJuei9Eb2N1bWVudHMvTmF0YWxpaWEvRkUtRVBBTS9Qcm9qZWN0L0FuZ3VsYXIvYW5ndWxhci10b2RvLWFwcC90b2RvLWFwcC9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9CZXJuei9Eb2N1bWVudHMvTmF0YWxpaWEvRkUtRVBBTS9Qcm9qZWN0L0FuZ3VsYXIvYW5ndWxhci10b2RvLWFwcC90b2RvLWFwcC9zcmMvYXBwL2NvcmUvc2Nzcy9jb3JlL19nZW5lcmljLnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9Db21wb25lbnRzL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9jb3JlL3Njc3MvcGx1Z2lucy9fdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSx3RkFBQTtBQ0FSLGdCQUFnQjtBQ0FoQjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBREdGO0FDQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURHRjtBQ0FBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBREdGO0FDQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FER0Y7QUU5QkE7RUFDRSxXQUFBO0FGaUNGO0FFaENFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FGa0NKO0FFaENFO0VBQ0UsYUFBQTtBRmtDSjtBRWhDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FGa0NKO0FFakNJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBRm1DTjtBRWpDSTtFQUNFLG1CQ3BCRTtFRHFCRixXQ3RCYTtFRHVCYixrQkFBQTtBRm1DTjtBRWxDTTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUZvQ1I7QUUvQkU7RUFDRSw2QkFBQTtBRmlDSjtBRTlCRTtFQUNFLGNDcENJO0VEcUNKLGVBQUE7QUZnQ0o7QUU3QkU7RUFDRSxlQUFBO0FGK0JKO0FFNUJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUY4Qko7QUUzQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FGNkJKO0FFMUJFO0VBQ0UsY0N6REc7RUQwREgseUJBQUE7QUY0Qko7QUUzQkk7RUFDRSx5QkM1REM7RUQ2REQsV0MvRGE7QUg0Rm5CIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMCZkaXNwbGF5PXN3YXAnKTtcblxuLy9wbHVnaW5zXG5AaW1wb3J0ICcuLy4uL3NyYy9hcHAvY29yZS9zY3NzL3BsdWdpbnMvX3ZhcnMnO1xuXG4vL2NvcmVcbkBpbXBvcnQgJy4vLi4vc3JjL2FwcC9jb3JlL3Njc3MvY29yZS9fZ2VuZXJpYyc7XG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMCZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjJzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRvZG8taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvZG8taXRlbSAudG9kby1pdGVtX19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi50b2RvLWl0ZW0gLnRvZG8taXRlbV9fY2hlY2tib3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRvZG8taXRlbSAudG9kby1pdGVtX19jaGVja21hcmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC4ycmVtO1xuICBtYXJnaW46IDAuMnJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NWEyOWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi50b2RvLWl0ZW0gLnRvZG8taXRlbV9fY2hlY2ttYXJrOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pyUXCI7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBvcGFjaXR5OiAwO1xufVxuLnRvZG8taXRlbSAudG9kby1pdGVtX19jaGVja21hcmsuY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM0NWEyOWU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udG9kby1pdGVtIC50b2RvLWl0ZW1fX2NoZWNrbWFyay5jaGVja2VkOjphZnRlciB7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBjb250ZW50OiBcIuKclFwiO1xuICBvcGFjaXR5OiAxO1xufVxuLnRvZG8taXRlbSAudG9kby1pdGVtX19kb25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4udG9kby1pdGVtIC50b2RvLWl0ZW1fX251bWJlciB7XG4gIGNvbG9yOiAjNDVhMjllO1xuICBwYWRkaW5nOiAwLjJyZW07XG59XG4udG9kby1pdGVtIC50b2RvLWl0ZW1fX25hbWUge1xuICBwYWRkaW5nOiAwLjJyZW07XG59XG4udG9kby1pdGVtIC50b2RvLWl0ZW1fX2RhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi50b2RvLWl0ZW0gLnRvZG8taXRlbV9fYnV0dG9uIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgbWFyZ2luOiAwLjJyZW07XG4gIHBhZGRpbmc6IDAuMnJlbTtcbn1cbi50b2RvLWl0ZW0gLmJ1dHRvbi1yZW1vdmUge1xuICBjb2xvcjogI2ZmYjZiNjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ1YTI5ZTtcbn1cbi50b2RvLWl0ZW0gLmJ1dHRvbi1yZW1vdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNmI2O1xuICBjb2xvcjogI2ZmZjtcbn0iLCJib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4ycztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4udG9kby1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC50b2RvLWl0ZW1fX2l0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLnRvZG8taXRlbV9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnRvZG8taXRlbV9fY2hlY2ttYXJrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjJyZW07XG4gICAgbWFyZ2luOiAwLjJyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCLinJRcIjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgJi5jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcbiAgICAgIGNvbG9yOiAkZm9udC1jb2xvci13aGl0ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIGNvbnRlbnQ6IFwi4pyUXCI7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRvZG8taXRlbV9fZG9uZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cblxuICAudG9kby1pdGVtX19udW1iZXIge1xuICAgIGNvbG9yOiAkZ3JlZW47XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICB9XG5cbiAgLnRvZG8taXRlbV9fbmFtZSB7XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICB9XG5cbiAgLnRvZG8taXRlbV9fZGF0ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0cmVtO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG5cbiAgLnRvZG8taXRlbV9fYnV0dG9uIHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgbWFyZ2luOiAwLjJyZW07XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICB9XG5cbiAgLmJ1dHRvbi1yZW1vdmUge1xuICAgIGNvbG9yOiAkcGluaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JlZW47XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcbiAgICAgIGNvbG9yOiAkZm9udC1jb2xvci13aGl0ZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vd2lkdGhcbiRkZXNrdG9wOiAxMDYwcHg7XG4kdGFibGV0czogNzY4cHg7XG4kcGhvbmVzOiA0ODBweDtcblxuLy9jb2xvclxuJGZvbnQtY29sb3ItYmxhY2s6ICMwMDA7XG4kZm9udC1jb2xvci13aGl0ZTogI2ZmZjtcbiRncmVlbjogIzQ1YTI5ZTtcbiRwaW5rOiAjZmZiNmI2OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-item',
                templateUrl: './todo-item.component.html',
                styleUrls: ['./todo-item.component.scss']
            }]
    }], function () { return [{ type: _core_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"] }]; }, { todo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/Components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/services/todos.service */ "./src/app/core/services/todos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo-item/todo-item.component */ "./src/app/Components/todo-item/todo-item.component.ts");
/* harmony import */ var _core_pipes_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipes/todos-filter.pipe */ "./src/app/core/pipes/todos-filter.pipe.ts");








function TodoListComponent_div_3_ul_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-todo-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r6);
} }
function TodoListComponent_div_3_ul_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListComponent_div_3_ul_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.search = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoListComponent_div_3_ul_1_li_2_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "todosFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx_r2.todosService.todos, ctx_r2.search));
} }
function TodoListComponent_div_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Todos now!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodoListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoListComponent_div_3_ul_1_Template, 4, 5, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoListComponent_div_3_ng_template_2_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.todosService.todos.length)("ngIfElse", _r3);
} }
function TodoListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TodoListComponent {
    constructor(todosService) {
        this.todosService = todosService;
        this.loading = true;
    }
    ngOnInit() {
        this.todosService
            .fetchTodos()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(100))
            .subscribe(() => {
            this.loading = false;
        });
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"])); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["app-todo-list"]], inputs: { search: "search" }, decls: 5, vars: 2, consts: [[1, "todo-list"], [1, "todo-list__title", "title"], [4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "todo-list__list", 4, "ngIf", "ngIfElse"], ["noTodos", ""], [1, "todo-list__list"], ["type", "search", "type", "name", "placeholder", "Filter todo by title...", 1, "todo-list__filter", 3, "ngModel", "ngModelChange"], ["class", "todo-list__item", 4, "ngFor", "ngForOf"], [1, "todo-list__item"], [3, "todo"], [1, "todo-list__notodos"], [1, "loading"], [1, "loading__item"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Todo List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodoListComponent_div_3_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodoListComponent_div_4_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__["TodoItemComponent"]], pipes: [_core_pipes_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["TodosFilterPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap\")[_ngcontent-%COMP%];\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 18px;\n  overflow-x: hidden;\n  font-family: \"Roboto\", sans-serif;\n}\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n}\n.ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n  transition: all ease 0.2s;\n  font-weight: bold;\n  outline: none;\n}\n.todo-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.todo-list[_ngcontent-%COMP%]   .todo-list__title[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-size: 2rem;\n}\n.todo-list[_ngcontent-%COMP%]   .todo-list__item[_ngcontent-%COMP%] {\n  width: 70%;\n  list-style-type: none;\n  position: relative;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 0.5rem;\n  margin: 1rem auto;\n  background-color: #F8F8F8;\n  box-shadow: 1px 5px 10px -5px #45a29e;\n}\n.todo-list[_ngcontent-%COMP%]   .todo-list__filter[_ngcontent-%COMP%] {\n  width: 30%;\n  display: block;\n  border: 1px solid #ccc;\n  outline: none;\n  padding: 0.5rem;\n  margin: 0.5rem auto;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n}\n.todo-list[_ngcontent-%COMP%]   .todo-list__notodos[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n  margin: 0.5rem auto;\n}\n.loading[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.loading[_ngcontent-%COMP%]   .loading__item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n  margin: 0.5rem auto;\n  color: #45a29e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZXJuei9Eb2N1bWVudHMvTmF0YWxpaWEvRkUtRVBBTS9Qcm9qZWN0L0FuZ3VsYXIvYW5ndWxhci10b2RvLWFwcC90b2RvLWFwcC9zcmMvc3R5bGVzLnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9jb3JlL3Njc3MvY29yZS9fZ2VuZXJpYy5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9Db21wb25lbnRzL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9jb3JlL3Njc3MvcGx1Z2lucy9fdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHdGQUFBO0FDQVI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNFRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRUY7QURDQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNFRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0VGO0FDN0JBO0VBQ0UsV0FBQTtBRGdDRjtBQy9CRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FEaUNKO0FDL0JFO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtBRGlDSjtBQy9CRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FEaUNKO0FDL0JFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURpQ0o7QUM3QkE7RUFDRSxXQUFBO0FEZ0NGO0FDL0JFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ2xDSTtBRm1FUiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vcGx1Z2luc1xuQGltcG9ydCAnLi8uLi9zcmMvYXBwL2NvcmUvc2Nzcy9wbHVnaW5zL192YXJzJztcblxuLy9jb3JlXG5AaW1wb3J0ICcuLy4uL3NyYy9hcHAvY29yZS9zY3NzL2NvcmUvX2dlbmVyaWMnO1xuIiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDAmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4ycztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50b2RvLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2RvLWxpc3QgLnRvZG8tbGlzdF9fdGl0bGUge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi50b2RvLWxpc3QgLnRvZG8tbGlzdF9faXRlbSB7XG4gIHdpZHRoOiA3MCU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTBweCAtNXB4ICM0NWEyOWU7XG59XG4udG9kby1saXN0IC50b2RvLWxpc3RfX2ZpbHRlciB7XG4gIHdpZHRoOiAzMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbjogMC41cmVtIGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG59XG4udG9kby1saXN0IC50b2RvLWxpc3RfX25vdG9kb3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcbn1cblxuLmxvYWRpbmcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5sb2FkaW5nIC5sb2FkaW5nX19pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbjogMC41cmVtIGF1dG87XG4gIGNvbG9yOiAjNDVhMjllO1xufSIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbi50b2RvLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgLnRvZG8tbGlzdF9fdGl0bGUge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLnRvZG8tbGlzdF9faXRlbSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gICAgYm94LXNoYWRvdzogMXB4IDVweCAxMHB4IC01cHggJGdyZWVuO1xuICB9XG4gIC50b2RvLWxpc3RfX2ZpbHRlciB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbjogLjVyZW0gYXV0bztcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIC50b2RvLWxpc3RfX25vdG9kb3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBtYXJnaW46IC41cmVtIGF1dG87XG4gIH1cbn1cblxuLmxvYWRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgLmxvYWRpbmdfX2l0ZW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBtYXJnaW46IC41cmVtIGF1dG87XG4gICAgY29sb3I6ICRncmVlbjtcbiAgfVxufSIsIi8vd2lkdGhcbiRkZXNrdG9wOiAxMDYwcHg7XG4kdGFibGV0czogNzY4cHg7XG4kcGhvbmVzOiA0ODBweDtcblxuLy9jb2xvclxuJGZvbnQtY29sb3ItYmxhY2s6ICMwMDA7XG4kZm9udC1jb2xvci13aGl0ZTogI2ZmZjtcbiRncmVlbjogIzQ1YTI5ZTtcbiRwaW5rOiAjZmZiNmI2OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-list',
                templateUrl: './todo-list.component.html',
                styleUrls: ['./todo-list.component.scss']
            }]
    }], function () { return [{ type: _core_services_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"] }]; }, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_todo_app_todo_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todo-app/todo-app.component */ "./src/app/components/todo-app/todo-app.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");






const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'todo-app'
    },
    {
        path: 'todo-app',
        component: _components_todo_app_todo_app_component__WEBPACK_IMPORTED_MODULE_2__["TodoAppComponent"]
    },
    {
        path: '**',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_todo_app_todo_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todo-app/todo-app.component */ "./src/app/components/todo-app/todo-app.component.ts");



class AppComponent {
    constructor() {
        this.title = 'todo-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todo-app");
    } }, directives: [_components_todo_app_todo_app_component__WEBPACK_IMPORTED_MODULE_1__["TodoAppComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/material/material.module */ "./src/app/core/material/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/todo-list/todo-list.component */ "./src/app/Components/todo-list/todo-list.component.ts");
/* harmony import */ var _Components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/todo-item/todo-item.component */ "./src/app/Components/todo-item/todo-item.component.ts");
/* harmony import */ var _components_todo_app_todo_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/todo-app/todo-app.component */ "./src/app/components/todo-app/todo-app.component.ts");
/* harmony import */ var _components_todo_action_todo_action_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/todo-action/todo-action.component */ "./src/app/components/todo-action/todo-action.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/todo-form/todo-form.component */ "./src/app/components/todo-form/todo-form.component.ts");
/* harmony import */ var _components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/todo-edit/todo-edit.component */ "./src/app/components/todo-edit/todo-edit.component.ts");
/* harmony import */ var _core_services_todos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/services/todos.service */ "./src/app/core/services/todos.service.ts");
/* harmony import */ var _core_pipes_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/pipes/todos-filter.pipe */ "./src/app/core/pipes/todos-filter.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
// Modules






// Components








// Services

// Pipe







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_core_services_todos_service__WEBPACK_IMPORTED_MODULE_14__["TodosService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _core_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _Components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"],
        _Components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__["TodoItemComponent"],
        _components_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_12__["TodoFormComponent"],
        _components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_13__["TodoEditComponent"],
        _core_pipes_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["TodosFilterPipe"],
        _components_todo_app_todo_app_component__WEBPACK_IMPORTED_MODULE_9__["TodoAppComponent"],
        _components_todo_action_todo_action_component__WEBPACK_IMPORTED_MODULE_10__["TodoActionComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _core_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _Components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"],
                    _Components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__["TodoItemComponent"],
                    _components_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_12__["TodoFormComponent"],
                    _components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_13__["TodoEditComponent"],
                    _core_pipes_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["TodosFilterPipe"],
                    _components_todo_app_todo_app_component__WEBPACK_IMPORTED_MODULE_9__["TodoAppComponent"],
                    _components_todo_action_todo_action_component__WEBPACK_IMPORTED_MODULE_10__["TodoActionComponent"],
                    _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _core_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
                ],
                providers: [_core_services_todos_service__WEBPACK_IMPORTED_MODULE_14__["TodosService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_13__["TodoEditComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Dir"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
    _Components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"],
    _Components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__["TodoItemComponent"],
    _components_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_12__["TodoFormComponent"],
    _components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_13__["TodoEditComponent"],
    _components_todo_app_todo_app_component__WEBPACK_IMPORTED_MODULE_9__["TodoAppComponent"],
    _components_todo_action_todo_action_component__WEBPACK_IMPORTED_MODULE_10__["TodoActionComponent"],
    _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["KeyValuePipe"], _core_pipes_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["TodosFilterPipe"]]);


/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, consts: [[1, "notfound"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry, this page is not found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".notfound[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2em;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZXJuei9Eb2N1bWVudHMvTmF0YWxpaWEvRkUtRVBBTS9Qcm9qZWN0L0FuZ3VsYXIvYW5ndWxhci10b2RvLWFwcC90b2RvLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGZvdW5kIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgfSIsIi5ub3Rmb3VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/todo-action/todo-action.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/todo-action/todo-action.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoActionComponent", function() { return TodoActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/todos.service */ "./src/app/core/services/todos.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




class TodoActionComponent {
    constructor(todosService) {
        this.todosService = todosService;
    }
    ngOnInit() { }
    sortTodoCompleted() {
        this.todosService.sortByCompleted();
    }
    sortTodoNotCompleted() {
        this.todosService.sortByNotCompleted();
    }
    sortTodoTitle() {
        this.todosService.sortByTitle();
    }
    sortTodoId() {
        this.todosService.sortById();
    }
}
TodoActionComponent.ɵfac = function TodoActionComponent_Factory(t) { return new (t || TodoActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"])); };
TodoActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoActionComponent, selectors: [["app-todo-action"]], decls: 14, vars: 0, consts: [[1, "action"], [1, "action__list"], [1, "action__button", "button", 3, "click"]], template: function TodoActionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoActionComponent_Template_button_click_2_listener() { return ctx.sortTodoCompleted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "check_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoActionComponent_Template_button_click_5_listener() { return ctx.sortTodoNotCompleted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "check_box_outline_blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoActionComponent_Template_button_click_8_listener() { return ctx.sortTodoTitle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "sort_by_alpha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoActionComponent_Template_button_click_11_listener() { return ctx.sortTodoId(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "format_list_numbered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap\")[_ngcontent-%COMP%];\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 18px;\n  overflow-x: hidden;\n  font-family: \"Roboto\", sans-serif;\n}\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n}\n.ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n  transition: all ease 0.2s;\n  font-weight: bold;\n  outline: none;\n}\n.action[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #E8E8E8;\n}\n.action[_ngcontent-%COMP%]   .action__list[_ngcontent-%COMP%] {\n  width: 25%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  text-align: center;\n  padding: 0.5rem;\n  margin: 0 auto;\n}\n.action[_ngcontent-%COMP%]   .action__button[_ngcontent-%COMP%] {\n  width: 11rem;\n  padding: 0.2rem;\n  margin: 0.2rem auto;\n  color: #fff;\n  background-color: #45a29e;\n  border: 1px solid #45a29e;\n}\n.action[_ngcontent-%COMP%]   .action__button[_ngcontent-%COMP%]:hover {\n  background-color: #ffb6b6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZXJuei9Eb2N1bWVudHMvTmF0YWxpaWEvRkUtRVBBTS9Qcm9qZWN0L0FuZ3VsYXIvYW5ndWxhci10b2RvLWFwcC90b2RvLWFwcC9zcmMvc3R5bGVzLnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9jb3JlL3Njc3MvY29yZS9fZ2VuZXJpYy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RvZG8tYWN0aW9uL3RvZG8tYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0Jlcm56L0RvY3VtZW50cy9OYXRhbGlpYS9GRS1FUEFNL1Byb2plY3QvQW5ndWxhci9hbmd1bGFyLXRvZG8tYXBwL3RvZG8tYXBwL3NyYy9hcHAvY29tcG9uZW50cy90b2RvLWFjdGlvbi90b2RvLWFjdGlvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9CZXJuei9Eb2N1bWVudHMvTmF0YWxpaWEvRkUtRVBBTS9Qcm9qZWN0L0FuZ3VsYXIvYW5ndWxhci10b2RvLWFwcC90b2RvLWFwcC9zcmMvYXBwL2NvcmUvc2Nzcy9wbHVnaW5zL192YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsd0ZBQUE7QUNBUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ0VGO0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFRjtBRENBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0VGO0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDRUY7QUM3QkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QURnQ0Y7QUMvQkU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURpQ0o7QUMvQkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0NYZTtFRFlmLHlCQ1hJO0VEWUoseUJBQUE7QURpQ0o7QUNoQ0k7RUFDRSx5QkNiQztBRitDUCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1hY3Rpb24vdG9kby1hY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xuXG4vL3BsdWdpbnNcbkBpbXBvcnQgJy4vLi4vc3JjL2FwcC9jb3JlL3Njc3MvcGx1Z2lucy9fdmFycyc7XG5cbi8vY29yZVxuQGltcG9ydCAnLi8uLi9zcmMvYXBwL2NvcmUvc2Nzcy9jb3JlL19nZW5lcmljJztcbiIsImJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjJzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwJmRpc3BsYXk9c3dhcFwiKTtcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XG59XG4uYWN0aW9uIC5hY3Rpb25fX2xpc3Qge1xuICB3aWR0aDogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uYWN0aW9uIC5hY3Rpb25fX2J1dHRvbiB7XG4gIHdpZHRoOiAxMXJlbTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBtYXJnaW46IDAuMnJlbSBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTI5ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ1YTI5ZTtcbn1cbi5hY3Rpb24gLmFjdGlvbl9fYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjZiNjtcbn0iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4uYWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7ICBcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbiAgLmFjdGlvbl9fbGlzdCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmFjdGlvbl9fYnV0dG9uIHtcbiAgICB3aWR0aDogMTFyZW07XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICAgIG1hcmdpbjogMC4ycmVtIGF1dG87XG4gICAgY29sb3I6ICRmb250LWNvbG9yLXdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JlZW47XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcbiAgICB9XG4gIH1cbn1cbiIsIi8vd2lkdGhcbiRkZXNrdG9wOiAxMDYwcHg7XG4kdGFibGV0czogNzY4cHg7XG4kcGhvbmVzOiA0ODBweDtcblxuLy9jb2xvclxuJGZvbnQtY29sb3ItYmxhY2s6ICMwMDA7XG4kZm9udC1jb2xvci13aGl0ZTogI2ZmZjtcbiRncmVlbjogIzQ1YTI5ZTtcbiRwaW5rOiAjZmZiNmI2OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoActionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-action',
                templateUrl: './todo-action.component.html',
                styleUrls: ['./todo-action.component.scss']
            }]
    }], function () { return [{ type: _core_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/todo-app/todo-app.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/todo-app/todo-app.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAppComponent", function() { return TodoAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _todo_action_todo_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo-action/todo-action.component */ "./src/app/components/todo-action/todo-action.component.ts");
/* harmony import */ var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-form/todo-form.component */ "./src/app/components/todo-form/todo-form.component.ts");
/* harmony import */ var _Components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/todo-list/todo-list.component */ "./src/app/Components/todo-list/todo-list.component.ts");





class TodoAppComponent {
    constructor() { }
    ngOnInit() {
    }
}
TodoAppComponent.ɵfac = function TodoAppComponent_Factory(t) { return new (t || TodoAppComponent)(); };
TodoAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoAppComponent, selectors: [["app-todo-app"]], decls: 6, vars: 0, consts: [[1, "todo-app"], [1, "todo-app__title", "title"]], template: function TodoAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to Todo App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-todo-action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-todo-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-todo-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_todo_action_todo_action_component__WEBPACK_IMPORTED_MODULE_1__["TodoActionComponent"], _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_2__["TodoFormComponent"], _Components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap\")[_ngcontent-%COMP%];\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 18px;\n  overflow-x: hidden;\n  font-family: \"Roboto\", sans-serif;\n}\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n}\n.ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n  transition: all ease 0.2s;\n  font-weight: bold;\n  outline: none;\n}\n.todo-app[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.todo-app[_ngcontent-%COMP%]   .todo-app__title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  background-color: #45a29e;\n  color: #fff;\n  padding: 2rem;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZXJuei9Eb2N1bWVudHMvTmF0YWxpaWEvRkUtRVBBTS9Qcm9qZWN0L0FuZ3VsYXIvYW5ndWxhci10b2RvLWFwcC90b2RvLWFwcC9zcmMvc3R5bGVzLnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9jb3JlL3Njc3MvY29yZS9fZ2VuZXJpYy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RvZG8tYXBwL3RvZG8tYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0Jlcm56L0RvY3VtZW50cy9OYXRhbGlpYS9GRS1FUEFNL1Byb2plY3QvQW5ndWxhci9hbmd1bGFyLXRvZG8tYXBwL3RvZG8tYXBwL3NyYy9hcHAvY29tcG9uZW50cy90b2RvLWFwcC90b2RvLWFwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9CZXJuei9Eb2N1bWVudHMvTmF0YWxpaWEvRkUtRVBBTS9Qcm9qZWN0L0FuZ3VsYXIvYW5ndWxhci10b2RvLWFwcC90b2RvLWFwcC9zcmMvYXBwL2NvcmUvc2Nzcy9wbHVnaW5zL192YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsd0ZBQUE7QUNBUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ0VGO0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFRjtBRENBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0VGO0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDRUY7QUM3QkE7RUFDSSxXQUFBO0FEZ0NKO0FDL0JJO0VBQ0UsZUFBQTtFQUNBLHlCQ0VFO0VEREYsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FEaUNOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWFwcC90b2RvLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vcGx1Z2luc1xuQGltcG9ydCAnLi8uLi9zcmMvYXBwL2NvcmUvc2Nzcy9wbHVnaW5zL192YXJzJztcblxuLy9jb3JlXG5AaW1wb3J0ICcuLy4uL3NyYy9hcHAvY29yZS9zY3NzL2NvcmUvX2dlbmVyaWMnO1xuIiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDAmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4ycztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50b2RvLWFwcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvZG8tYXBwIC50b2RvLWFwcF9fdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEyOWU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW46IDA7XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLnRvZG8tYXBwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAudG9kby1hcHBfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgICAgIGNvbG9yOiAkZm9udC1jb2xvci13aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9IiwiLy93aWR0aFxuJGRlc2t0b3A6IDEwNjBweDtcbiR0YWJsZXRzOiA3NjhweDtcbiRwaG9uZXM6IDQ4MHB4O1xuXG4vL2NvbG9yXG4kZm9udC1jb2xvci1ibGFjazogIzAwMDtcbiRmb250LWNvbG9yLXdoaXRlOiAjZmZmO1xuJGdyZWVuOiAjNDVhMjllO1xuJHBpbms6ICNmZmI2YjY7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-app',
                templateUrl: './todo-app.component.html',
                styleUrls: ['./todo-app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/todo-edit/todo-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-edit/todo-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEditComponent", function() { return TodoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function TodoEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoEditComponent_div_0_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.updatedTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoEditComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.saveTodoTitle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoEditComponent_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.cancelTodo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.updatedTitle);
} }
function TodoEditComponent_app_todo_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todo-item", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", ctx_r1.updatedTodo);
} }
class TodoEditComponent {
    constructor() {
        this.edited = true;
        this.updatedTitle = '';
    }
    set todo(todo) {
        this.updatedTitle = todo.title;
        this.updatedTodo = todo;
    }
    ngOnInit() {
    }
    saveTodoTitle() {
        this.updatedTodo.title = this.updatedTitle;
        this.edited = false;
    }
    cancelTodo() {
        this.edited = false;
    }
}
TodoEditComponent.ɵfac = function TodoEditComponent_Factory(t) { return new (t || TodoEditComponent)(); };
TodoEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoEditComponent, selectors: [["app-todo-edit"]], inputs: { todo: "todo" }, decls: 2, vars: 2, consts: [["class", "todo-edit", 4, "ngIf"], [3, "todo", 4, "ngIf"], [1, "todo-edit"], [1, "todo-edit__list"], [1, "todo-edit__item"], ["type", "text", "placeholder", "Edit title", 1, "todo-edit__input", 3, "ngModel", "ngModelChange"], [1, "todo-edit__button", "button-save", "button", 3, "click"], [1, "todo-edit__button", "button-cancel", "button", 3, "click"], [3, "todo"]], template: function TodoEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TodoEditComponent_div_0_Template, 11, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoEditComponent_app_todo_item_1_Template, 1, 1, "app-todo-item", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edited);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edited);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap\")[_ngcontent-%COMP%];\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 18px;\n  overflow-x: hidden;\n  font-family: \"Roboto\", sans-serif;\n}\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n}\n.ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n  transition: all ease 0.2s;\n  font-weight: bold;\n  outline: none;\n}\n.todo-edit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.todo-edit[_ngcontent-%COMP%]   .todo-edit__list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  text-align: center;\n}\n.todo-edit[_ngcontent-%COMP%]   .todo-edit__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  text-align: center;\n  flex-direction: column;\n}\n.todo-edit[_ngcontent-%COMP%]   .todo-edit__input[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  width: 15rem;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.5rem;\n  margin: 0.5rem;\n  font-family: \"Roboto\", sans-serif;\n}\n.todo-edit[_ngcontent-%COMP%]   .todo-edit__input[_ngcontent-%COMP%]:focus {\n  border: 1px solid #ffb6b6;\n}\n.todo-edit[_ngcontent-%COMP%]   .todo-edit__button[_ngcontent-%COMP%] {\n  width: 8rem;\n  margin: 0.2rem;\n  padding: 0.2rem;\n}\n.todo-edit[_ngcontent-%COMP%]   .button-save[_ngcontent-%COMP%] {\n  background-color: #45a29e;\n  color: #fff;\n  border: 1px solid #45a29e;\n}\n.todo-edit[_ngcontent-%COMP%]   .button-save[_ngcontent-%COMP%]:hover {\n  background-color: #ffb6b6;\n}\n.todo-edit[_ngcontent-%COMP%]   .button-cancel[_ngcontent-%COMP%] {\n  color: #ffb6b6;\n  border: 1px solid #45a29e;\n}\n.todo-edit[_ngcontent-%COMP%]   .button-cancel[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #ffb6b6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZXJuei9Eb2N1bWVudHMvTmF0YWxpaWEvRkUtRVBBTS9Qcm9qZWN0L0FuZ3VsYXIvYW5ndWxhci10b2RvLWFwcC90b2RvLWFwcC9zcmMvc3R5bGVzLnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9jb3JlL3Njc3MvY29yZS9fZ2VuZXJpYy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RvZG8tZWRpdC90b2RvLWVkaXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9jb21wb25lbnRzL3RvZG8tZWRpdC90b2RvLWVkaXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9jb3JlL3Njc3MvcGx1Z2lucy9fdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHdGQUFBO0FDQVI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNFRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRUY7QURDQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNFRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0VGO0FDN0JBO0VBQ0UsV0FBQTtBRGdDRjtBQy9CRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRGlDSjtBQy9CRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FEaUNKO0FDL0JFO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QURpQ0o7QUNoQ0k7RUFDRSx5QkFBQTtBRGtDTjtBQzlCRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRGdDSjtBQzdCRTtFQUNFLHlCQzlCSTtFRCtCSixXQUFBO0VBQ0EseUJBQUE7QUQrQko7QUM5Qkk7RUFDRSx5QkNqQ0M7QUZpRVA7QUM1QkU7RUFDRSxjQ3RDRztFRHVDSCx5QkFBQTtBRDhCSjtBQzdCSTtFQUNFLFdDM0NhO0VENENiLHlCQzFDQztBRnlFUCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1lZGl0L3RvZG8tZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vcGx1Z2luc1xuQGltcG9ydCAnLi8uLi9zcmMvYXBwL2NvcmUvc2Nzcy9wbHVnaW5zL192YXJzJztcblxuLy9jb3JlXG5AaW1wb3J0ICcuLy4uL3NyYy9hcHAvY29yZS9zY3NzL2NvcmUvX2dlbmVyaWMnO1xuIiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDAmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4ycztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50b2RvLWVkaXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2RvLWVkaXQgLnRvZG8tZWRpdF9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udG9kby1lZGl0IC50b2RvLWVkaXRfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udG9kby1lZGl0IC50b2RvLWVkaXRfX2lucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTVyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG4udG9kby1lZGl0IC50b2RvLWVkaXRfX2lucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYjZiNjtcbn1cbi50b2RvLWVkaXQgLnRvZG8tZWRpdF9fYnV0dG9uIHtcbiAgd2lkdGg6IDhyZW07XG4gIG1hcmdpbjogMC4ycmVtO1xuICBwYWRkaW5nOiAwLjJyZW07XG59XG4udG9kby1lZGl0IC5idXR0b24tc2F2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEyOWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDVhMjllO1xufVxuLnRvZG8tZWRpdCAuYnV0dG9uLXNhdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNmI2O1xufVxuLnRvZG8tZWRpdCAuYnV0dG9uLWNhbmNlbCB7XG4gIGNvbG9yOiAjZmZiNmI2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDVhMjllO1xufVxuLnRvZG8tZWRpdCAuYnV0dG9uLWNhbmNlbDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNmI2O1xufSIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbi50b2RvLWVkaXQge1xuICB3aWR0aDogMTAwJTsgXG4gIC50b2RvLWVkaXRfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICB9XG4gIC50b2RvLWVkaXRfX2l0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAudG9kby1lZGl0X19pbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIG1hcmdpbjogLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHBpbms7XG4gICAgfVxuICB9XG5cbiAgLnRvZG8tZWRpdF9fYnV0dG9uIHtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBtYXJnaW46IDAuMnJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW07XG4gIH1cblxuICAuYnV0dG9uLXNhdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JlZW47XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcbiAgICB9XG4gIH1cblxuICAuYnV0dG9uLWNhbmNlbCB7XG4gICAgY29sb3I6ICRwaW5rO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmVlbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkZm9udC1jb2xvci13aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xuICAgIH1cbiAgfVxufVxuIiwiLy93aWR0aFxuJGRlc2t0b3A6IDEwNjBweDtcbiR0YWJsZXRzOiA3NjhweDtcbiRwaG9uZXM6IDQ4MHB4O1xuXG4vL2NvbG9yXG4kZm9udC1jb2xvci1ibGFjazogIzAwMDtcbiRmb250LWNvbG9yLXdoaXRlOiAjZmZmO1xuJGdyZWVuOiAjNDVhMjllO1xuJHBpbms6ICNmZmI2YjY7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-edit',
                templateUrl: './todo-edit.component.html',
                styleUrls: ['./todo-edit.component.scss']
            }]
    }], null, { todo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/todo-form/todo-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-form/todo-form.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFormComponent", function() { return TodoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/todos.service */ "./src/app/core/services/todos.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





class TodoFormComponent {
    constructor(todosService) {
        this.todosService = todosService;
    }
    ngOnInit() { }
    addTodo() {
        const todo = {
            id: this.todosService.getNextTodoId(),
            userId: 123,
            title: this.title,
            completed: false,
            date: new Date()
        };
        this.todosService.addTodo(todo);
        this.title = '';
    }
}
TodoFormComponent.ɵfac = function TodoFormComponent_Factory(t) { return new (t || TodoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"])); };
TodoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoFormComponent, selectors: [["app-todo-form"]], decls: 6, vars: 1, consts: [[1, "todo-form"], [1, "todo-form__list"], ["type", "text", "placeholder", "What needs to be done?", 1, "todo-form__input", 3, "ngModel", "ngModelChange"], [1, "todo-form__button", "button-add", "button", 3, "click", "keydown.enter"]], template: function TodoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoFormComponent_Template_input_ngModelChange_2_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoFormComponent_Template_button_click_3_listener() { return ctx.addTodo(); })("keydown.enter", function TodoFormComponent_Template_button_keydown_enter_3_listener() { return ctx.addTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap\")[_ngcontent-%COMP%];\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 18px;\n  overflow-x: hidden;\n  font-family: \"Roboto\", sans-serif;\n}\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n}\n.ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n  transition: all ease 0.2s;\n  font-weight: bold;\n  outline: none;\n}\n.todo-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.todo-form[_ngcontent-%COMP%]   .todo-form__list[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 2rem auto;\n}\n.todo-form[_ngcontent-%COMP%]   .todo-form__input[_ngcontent-%COMP%] {\n  flex-basis: 95%;\n  border: 2px solid #45a29e;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  margin: 0.2rem;\n  font-family: \"Roboto\", sans-serif;\n}\n.todo-form[_ngcontent-%COMP%]   .todo-form__button[_ngcontent-%COMP%] {\n  flex-basis: 5%;\n  border: none;\n  margin-left: 0.2rem;\n  padding: 0.2rem;\n}\n.button-add[_ngcontent-%COMP%] {\n  color: #45a29e;\n}\n.button-add[_ngcontent-%COMP%]:hover {\n  color: #ffb6b6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZXJuei9Eb2N1bWVudHMvTmF0YWxpaWEvRkUtRVBBTS9Qcm9qZWN0L0FuZ3VsYXIvYW5ndWxhci10b2RvLWFwcC90b2RvLWFwcC9zcmMvc3R5bGVzLnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9jb3JlL3Njc3MvY29yZS9fZ2VuZXJpYy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RvZG8tZm9ybS90b2RvLWZvcm0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9jb21wb25lbnRzL3RvZG8tZm9ybS90b2RvLWZvcm0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQmVybnovRG9jdW1lbnRzL05hdGFsaWlhL0ZFLUVQQU0vUHJvamVjdC9Bbmd1bGFyL2FuZ3VsYXItdG9kby1hcHAvdG9kby1hcHAvc3JjL2FwcC9jb3JlL3Njc3MvcGx1Z2lucy9fdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHdGQUFBO0FDQVI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNFRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRUY7QURDQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNFRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0VGO0FDN0JBO0VBQ0UsV0FBQTtBRGdDRjtBQy9CRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FEaUNKO0FDL0JFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBRGlDSjtBQy9CRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEaUNKO0FDN0JBO0VBQ0UsY0NyQk07QUZxRFI7QUMvQkU7RUFDRSxjQ3RCRztBRnVEUCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1mb3JtL3RvZG8tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vcGx1Z2luc1xuQGltcG9ydCAnLi8uLi9zcmMvYXBwL2NvcmUvc2Nzcy9wbHVnaW5zL192YXJzJztcblxuLy9jb3JlXG5AaW1wb3J0ICcuLy4uL3NyYy9hcHAvY29yZS9zY3NzL2NvcmUvX2dlbmVyaWMnO1xuIiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDAmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4ycztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50b2RvLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2RvLWZvcm0gLnRvZG8tZm9ybV9fbGlzdCB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gYXV0bztcbn1cbi50b2RvLWZvcm0gLnRvZG8tZm9ybV9faW5wdXQge1xuICBmbGV4LWJhc2lzOiA5NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NWEyOWU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIG1hcmdpbjogMC4ycmVtO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi50b2RvLWZvcm0gLnRvZG8tZm9ybV9fYnV0dG9uIHtcbiAgZmxleC1iYXNpczogNSU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuXG4uYnV0dG9uLWFkZCB7XG4gIGNvbG9yOiAjNDVhMjllO1xufVxuLmJ1dHRvbi1hZGQ6aG92ZXIge1xuICBjb2xvcjogI2ZmYjZiNjtcbn0iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4udG9kby1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC50b2RvLWZvcm1fX2xpc3Qge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICB9XG4gIC50b2RvLWZvcm1fX2lucHV0IHtcbiAgICBmbGV4LWJhc2lzOiA5NSU7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGdyZWVuO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIG1hcmdpbjogLjJyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLnRvZG8tZm9ybV9fYnV0dG9uIHtcbiAgICBmbGV4LWJhc2lzOiA1JTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbiAgICBwYWRkaW5nOiAuMnJlbTtcbiAgfVxufVxuXG4uYnV0dG9uLWFkZCB7XG4gIGNvbG9yOiAkZ3JlZW47XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkcGluaztcbiAgfVxufVxuIiwiLy93aWR0aFxuJGRlc2t0b3A6IDEwNjBweDtcbiR0YWJsZXRzOiA3NjhweDtcbiRwaG9uZXM6IDQ4MHB4O1xuXG4vL2NvbG9yXG4kZm9udC1jb2xvci1ibGFjazogIzAwMDtcbiRmb250LWNvbG9yLXdoaXRlOiAjZmZmO1xuJGdyZWVuOiAjNDVhMjllO1xuJHBpbms6ICNmZmI2YjY7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-form',
                templateUrl: './todo-form.component.html',
                styleUrls: ['./todo-form.component.scss']
            }]
    }], function () { return [{ type: _core_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/material/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/material/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



const modules = [
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[_angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"]],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"]], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"]],
                exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pipes/todos-filter.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/core/pipes/todos-filter.pipe.ts ***!
  \*************************************************/
/*! exports provided: TodosFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosFilterPipe", function() { return TodosFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TodosFilterPipe {
    transform(todos, search = '') {
        if (!search.trim()) {
            return todos;
        }
        return todos.filter(todo => {
            return todo.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
        });
    }
}
TodosFilterPipe.ɵfac = function TodosFilterPipe_Factory(t) { return new (t || TodosFilterPipe)(); };
TodosFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "todosFilter", type: TodosFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'todosFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/todos.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/todos.service.ts ***!
  \************************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class TodosService {
    constructor(http) {
        this.http = http;
        this.todos = [];
    }
    fetchTodos() {
        return this.http
            .get('https://jsonplaceholder.typicode.com/todos?_limit=200')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(todos => (this.todos = todos)));
    }
    getTodo(id) {
        const idx = this.todos.findIndex(t => t.id === id);
        return this.todos[idx];
    }
    completeTodo(id) {
        const idx = this.todos.findIndex(t => t.id === id);
        this.todos[idx].completed = !this.todos[idx].completed;
    }
    removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    sortByCompleted() {
        this.todos.sort((a, b) => {
            if (a.completed === b.completed) {
                return 0;
            }
            if (a.completed) {
                return -1;
            }
            if (b.completed) {
                return 1;
            }
        });
    }
    sortByNotCompleted() {
        this.todos.sort((b, a) => {
            if (b.completed === a.completed) {
                return 0;
            }
            if (a.completed) {
                return -1;
            }
            if (b.completed) {
                return 1;
            }
        });
    }
    sortByTitle() {
        this.todos.sort((a, b) => a.title.localeCompare(b.title));
    }
    sortById() {
        this.todos.sort((a, b) => a.id - b.id);
    }
    getNextTodoId() {
        return this.todos.length + 1;
    }
}
TodosService.ɵfac = function TodosService_Factory(t) { return new (t || TodosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TodosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodosService, factory: TodosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Bernz/Documents/Nataliia/FE-EPAM/Project/Angular/angular-todo-app/todo-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map