(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./resources/js/components/containers/DefaultLayout/DefaultLayout.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/containers/DefaultLayout/DefaultLayout.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../nav */ "./resources/js/components/nav.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ "./resources/js/components/routes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





 // sidebar nav config

 // routes config



var loading = function loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "animated fadeIn pt-3 text-center"
  }, "Loading...");
};

var DefaultAside = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./DefaultAside */ "./resources/js/components/containers/DefaultLayout/DefaultAside.js"));
});
var DefaultFooter = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./DefaultFooter */ "./resources/js/components/containers/DefaultLayout/DefaultFooter.js"));
});
var DefaultHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./DefaultHeader */ "./resources/js/components/containers/DefaultLayout/DefaultHeader.js"));
});

var DefaultLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultLayout, _Component);

  function DefaultLayout() {
    _classCallCheck(this, DefaultLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultLayout).apply(this, arguments));
  }

  _createClass(DefaultLayout, [{
    key: "signOut",
    value: function signOut(e) {
      e.preventDefault();
      this.props.history.push('/login');
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppHeader"], {
        fixed: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultHeader, {
        onLogout: function onLogout(e) {
          return _this.signOut(e);
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebar"], {
        fixed: true,
        display: "lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarHeader"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarForm"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarNav2"], _extends({
        navConfig: _nav__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, this.props, {
        router: react_router_dom__WEBPACK_IMPORTED_MODULE_1__
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarFooter"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarMinimizer"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumb2"], {
        appRoutes: _routes__WEBPACK_IMPORTED_MODULE_5__["default"],
        router: react_router_dom__WEBPACK_IMPORTED_MODULE_1__
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (route, idx) {
        return route.component ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          key: idx,
          path: route.path,
          exact: route.exact,
          name: route.name,
          render: function render(props) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, props);
          }
        }) : null;
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppAside"], {
        fixed: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultAside, null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: loading()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultFooter, null))));
    }
  }]);

  return DefaultLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./resources/js/components/nav.js":
/*!****************************************!*\
  !*** ./resources/js/components/nav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    name: 'Home',
    url: '/',
    icon: 'icon-home'
  }, {
    title: true,
    name: 'Inventory'
  }, {
    name: 'Product',
    url: '/products',
    icon: 'icon-layers',
    children: [{
      name: 'Add Product',
      url: '/product/add/',
      icon: 'fa fa-plus-square'
    }, {
      name: 'All Products',
      url: '/products',
      icon: 'fa fa-cubes'
    }, {
      name: 'Required List',
      url: '/product/required',
      icon: 'icon-puzzle'
    }, {
      name: 'Low Stock',
      url: '/product/low-stock',
      icon: 'fa fa-database'
    }, {
      name: 'Demand List',
      url: '/product/demand',
      icon: 'fa fa-eye'
    }]
  }, {
    name: 'Sales',
    url: '/sales',
    icon: 'fa fa-shopping-cart',
    children: [{
      name: 'New Sale',
      url: '/sale/new',
      icon: 'fa fa-cart-plus'
    }, {
      name: 'All Sales',
      url: '/sales',
      icon: 'fa fa-check-square-o'
    }, {
      name: 'Order',
      url: '/sale/order',
      icon: 'fa fa-cart-arrow-down'
    }, {
      name: 'Pending',
      url: '/sale/pending',
      icon: 'fa fa-hourglass-half'
    }, {
      name: 'Return',
      url: '/sale/return',
      icon: 'fa fa-reply'
    }]
  }, {
    title: true,
    name: 'Promotion'
  }, {
    name: 'Discount',
    url: '/discount',
    icon: 'fa fa-retweet'
  }, {
    name: 'Offer',
    url: '/offer',
    icon: 'fa fa-bullhorn'
  }, {
    title: true,
    name: 'Others'
  }, {
    name: 'Customer',
    url: '/customer/',
    icon: 'icon-people'
  }, {
    name: 'Settings',
    url: '/settings/',
    icon: 'icon-settings'
  }]
});

/***/ }),

/***/ "./resources/js/components/routes.js":
/*!*******************************************!*\
  !*** ./resources/js/components/routes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Breadcrumbs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./views/Base/Breadcrumbs/Breadcrumbs */ "./resources/js/components/views/Base/Breadcrumbs/Breadcrumbs.jsx"));
});
var Cards = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./views/Base/Cards/Cards */ "./resources/js/components/views/Base/Cards/Cards.jsx"));
});
var Carousels = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./views/Base/Carousels/Carousels */ "./resources/js/components/views/Base/Carousels/Carousels.jsx"));
});
var Collapses = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./views/Base/Collapses/Collapses */ "./resources/js/components/views/Base/Collapses/Collapses.jsx"));
});
var Dropdowns = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./views/Base/Dropdowns/Dropdowns */ "./resources/js/components/views/Base/Dropdowns/Dropdowns.jsx"));
});
var Forms = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./views/Base/Forms/Forms */ "./resources/js/components/views/Base/Forms/Forms.jsx"));
});
var Jumbotrons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./views/Base/Jumbotrons/Jumbotrons */ "./resources/js/components/views/Base/Jumbotrons/Jumbotrons.jsx"));
});
var ListGroups = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./views/Base/ListGroups/ListGroups */ "./resources/js/components/views/Base/ListGroups/ListGroups.jsx"));
});
var Navbars = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./views/Base/Navbars/Navbars */ "./resources/js/components/views/Base/Navbars/Navbars.jsx"));
});
var Navs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./views/Base/Navs/Navs */ "./resources/js/components/views/Base/Navs/Navs.jsx"));
});
var Paginations = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./views/Base/Paginations/Pagnations */ "./resources/js/components/views/Base/Paginations/Pagnations.jsx"));
});
var Popovers = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./views/Base/Popovers/Popovers */ "./resources/js/components/views/Base/Popovers/Popovers.jsx"));
});
var ProgressBar = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./views/Base/ProgressBar/ProgressBar */ "./resources/js/components/views/Base/ProgressBar/ProgressBar.jsx"));
});
var Switches = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./views/Base/Switches/Switches */ "./resources/js/components/views/Base/Switches/Switches.jsx"));
});
var Tables = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./views/Base/Tables/Tables */ "./resources/js/components/views/Base/Tables/Tables.jsx"));
});
var Tabs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ./views/Base/Tabs/Tabs */ "./resources/js/components/views/Base/Tabs/Tabs.jsx"));
});
var Tooltips = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ./views/Base/Tooltips/Tooltips */ "./resources/js/components/views/Base/Tooltips/Tooltips.jsx"));
});
var BrandButtons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./views/Buttons/BrandButtons/BrandButtons */ "./resources/js/components/views/Buttons/BrandButtons/BrandButtons.jsx"));
});
var ButtonDropdowns = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./views/Buttons/ButtonDropdowns/ButtonDropdowns */ "./resources/js/components/views/Buttons/ButtonDropdowns/ButtonDropdowns.jsx"));
});
var ButtonGroups = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./views/Buttons/ButtonGroups/ButtonGroups */ "./resources/js/components/views/Buttons/ButtonGroups/ButtonGroups.jsx"));
});
var Buttons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ./views/Buttons/Buttons/Buttons */ "./resources/js/components/views/Buttons/Buttons/Buttons.jsx"));
});
var Charts = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./views/Charts/Charts */ "./resources/js/components/views/Charts/Charts.jsx"));
});
var Dashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./views/Dashboard/Dashboard */ "./resources/js/components/views/Dashboard/Dashboard.jsx"));
});
var CoreUIIcons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./views/Icons/CoreUIIcons/CoreUIIcons */ "./resources/js/components/views/Icons/CoreUIIcons/CoreUIIcons.jsx"));
});
var Flags = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./views/Icons/Flags/Flags */ "./resources/js/components/views/Icons/Flags/Flags.jsx"));
});
var FontAwesome = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./views/Icons/FontAwesome/FontAwesome */ "./resources/js/components/views/Icons/FontAwesome/FontAwesome.jsx"));
});
var SimpleLineIcons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ./views/Icons/SimpleLineIcons/SimpleLineIcons */ "./resources/js/components/views/Icons/SimpleLineIcons/SimpleLineIcons.jsx"));
});
var Alerts = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./views/Notifications/Alerts/Alerts */ "./resources/js/components/views/Notifications/Alerts/Alerts.jsx"));
});
var Badges = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! ./views/Notifications/Badges/Badges */ "./resources/js/components/views/Notifications/Badges/Badges.jsx"));
});
var Modals = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! ./views/Notifications/Modals/Modals */ "./resources/js/components/views/Notifications/Modals/Modals.jsx"));
});
var Colors = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(47)]).then(__webpack_require__.bind(null, /*! ./views/Theme/Colors/Colors */ "./resources/js/components/views/Theme/Colors/Colors.jsx"));
});
var Typography = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 48).then(__webpack_require__.bind(null, /*! ./views/Theme/Typography/Typography */ "./resources/js/components/views/Theme/Typography/Typography.jsx"));
});
var Widgets = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./views/Widgets/Widgets */ "./resources/js/components/views/Widgets/Widgets.jsx"));
});
var Users = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./views/Users/Users */ "./resources/js/components/views/Users/Users.jsx"));
});
var User = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./views/Users/User */ "./resources/js/components/views/Users/User.jsx"));
}); // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

var routes = [{
  path: '/',
  exact: true,
  name: 'Home'
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/theme',
  exact: true,
  name: 'Theme',
  component: Colors
}, {
  path: '/theme/colors',
  name: 'Colors',
  component: Colors
}, {
  path: '/theme/typography',
  name: 'Typography',
  component: Typography
}, {
  path: '/base',
  exact: true,
  name: 'Base',
  component: Cards
}, {
  path: '/base/cards',
  name: 'Cards',
  component: Cards
}, {
  path: '/base/forms',
  name: 'Forms',
  component: Forms
}, {
  path: '/base/switches',
  name: 'Switches',
  component: Switches
}, {
  path: '/base/tables',
  name: 'Tables',
  component: Tables
}, {
  path: '/base/tabs',
  name: 'Tabs',
  component: Tabs
}, {
  path: '/base/breadcrumbs',
  name: 'Breadcrumbs',
  component: Breadcrumbs
}, {
  path: '/base/carousels',
  name: 'Carousel',
  component: Carousels
}, {
  path: '/base/collapses',
  name: 'Collapse',
  component: Collapses
}, {
  path: '/base/dropdowns',
  name: 'Dropdowns',
  component: Dropdowns
}, {
  path: '/base/jumbotrons',
  name: 'Jumbotrons',
  component: Jumbotrons
}, {
  path: '/base/list-groups',
  name: 'List Groups',
  component: ListGroups
}, {
  path: '/base/navbars',
  name: 'Navbars',
  component: Navbars
}, {
  path: '/base/navs',
  name: 'Navs',
  component: Navs
}, {
  path: '/base/paginations',
  name: 'Paginations',
  component: Paginations
}, {
  path: '/base/popovers',
  name: 'Popovers',
  component: Popovers
}, {
  path: '/base/progress-bar',
  name: 'Progress Bar',
  component: ProgressBar
}, {
  path: '/base/tooltips',
  name: 'Tooltips',
  component: Tooltips
}, {
  path: '/buttons',
  exact: true,
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/buttons',
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/button-dropdowns',
  name: 'Button Dropdowns',
  component: ButtonDropdowns
}, {
  path: '/buttons/button-groups',
  name: 'Button Groups',
  component: ButtonGroups
}, {
  path: '/buttons/brand-buttons',
  name: 'Brand Buttons',
  component: BrandButtons
}, {
  path: '/icons',
  exact: true,
  name: 'Icons',
  component: CoreUIIcons
}, {
  path: '/icons/coreui-icons',
  name: 'CoreUI Icons',
  component: CoreUIIcons
}, {
  path: '/icons/flags',
  name: 'Flags',
  component: Flags
}, {
  path: '/icons/font-awesome',
  name: 'Font Awesome',
  component: FontAwesome
}, {
  path: '/icons/simple-line-icons',
  name: 'Simple Line Icons',
  component: SimpleLineIcons
}, {
  path: '/notifications',
  exact: true,
  name: 'Notifications',
  component: Alerts
}, {
  path: '/notifications/alerts',
  name: 'Alerts',
  component: Alerts
}, {
  path: '/notifications/badges',
  name: 'Badges',
  component: Badges
}, {
  path: '/notifications/modals',
  name: 'Modals',
  component: Modals
}, {
  path: '/widgets',
  name: 'Widgets',
  component: Widgets
}, {
  path: '/charts',
  name: 'Charts',
  component: Charts
}, {
  path: '/users',
  exact: true,
  name: 'Users',
  component: Users
}, {
  path: '/users/:id',
  exact: true,
  name: 'User Details',
  component: User
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);