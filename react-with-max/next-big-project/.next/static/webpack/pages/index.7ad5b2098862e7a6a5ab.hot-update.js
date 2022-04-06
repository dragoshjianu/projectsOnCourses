webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");


var _jsxFileName = "E:\\Web Development\\projectsOnCourses\\react-with-max\\next-big-project\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'Meetup Forst Item',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
  address: 'Some Address 5, 12345 City',
  description: 'This is a first Meetup'
}, {
  id: 'm2',
  title: 'Meetup Second Item',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
  address: 'Some Address 5, 12345 City',
  description: 'This is a second Meetup'
}];

var HomePage = function HomePage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      loadedMeetups = _useState[0],
      setLoadedMeetups = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    //send HTTP req and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    meetups: loadedMeetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, _this);
};

_s(HomePage, "lt95aOlOC9RW+nrRzHOiZRPQygU=");

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvYWRlZE1lZXR1cHMiLCJzZXRMb2FkZWRNZWV0dXBzIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDckI7QUFDQ0MsSUFBRSxFQUFFLElBREw7QUFFQ0MsT0FBSyxFQUFFLG1CQUZSO0FBR0NDLE9BQUssRUFDSiwwR0FKRjtBQUtDQyxTQUFPLEVBQUUsNEJBTFY7QUFNQ0MsYUFBVyxFQUFFO0FBTmQsQ0FEcUIsRUFTckI7QUFDQ0osSUFBRSxFQUFFLElBREw7QUFFQ0MsT0FBSyxFQUFFLG9CQUZSO0FBR0NDLE9BQUssRUFDSiwwR0FKRjtBQUtDQyxTQUFPLEVBQUUsNEJBTFY7QUFNQ0MsYUFBVyxFQUFFO0FBTmQsQ0FUcUIsQ0FBdEI7O0FBa0JBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDLEVBQUQsQ0FEdkI7QUFBQSxNQUNwQkMsYUFEb0I7QUFBQSxNQUNMQyxnQkFESzs7QUFHM0JDLHlEQUFTLENBQUMsWUFBTTtBQUNmO0FBQ0FELG9CQUFnQixDQUFDVixhQUFELENBQWhCO0FBQ0EsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFUztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDQSxDQVREOztHQUFNSCxROztLQUFBQSxROztBQWtCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2FkNWIyMDk4ODYyZTdhNmE1YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuXHR7XHJcblx0XHRpZDogJ20xJyxcclxuXHRcdHRpdGxlOiAnTWVldHVwIEZvcnN0IEl0ZW0nLFxyXG5cdFx0aW1hZ2U6XHJcblx0XHRcdCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzMvM2IvRnJhdWVua2lyY2hlX2FuZF9OZXVlc19SYXRoYXVzX011bmljaF9NYXJjaF8yMDEzLkpQRycsXHJcblx0XHRhZGRyZXNzOiAnU29tZSBBZGRyZXNzIDUsIDEyMzQ1IENpdHknLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZmlyc3QgTWVldHVwJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnbTInLFxyXG5cdFx0dGl0bGU6ICdNZWV0dXAgU2Vjb25kIEl0ZW0nLFxyXG5cdFx0aW1hZ2U6XHJcblx0XHRcdCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzMvM2IvRnJhdWVua2lyY2hlX2FuZF9OZXVlc19SYXRoYXVzX011bmljaF9NYXJjaF8yMDEzLkpQRycsXHJcblx0XHRhZGRyZXNzOiAnU29tZSBBZGRyZXNzIDUsIDEyMzQ1IENpdHknLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgc2Vjb25kIE1lZXR1cCcsXHJcblx0fSxcclxuXTtcclxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvL3NlbmQgSFRUUCByZXEgYW5kIGZldGNoIGRhdGFcclxuXHRcdHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17bG9hZGVkTWVldHVwc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblx0Ly9mZXRjaCBkYXRhIGZyb20gYW4gQVBJIG9yIGRhdGFiYXNlXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==