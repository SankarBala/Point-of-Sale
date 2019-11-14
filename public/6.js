(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/calculator/styles/app.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./resources/js/calculator/styles/app.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background-color: whitesmoke;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.header {\n  height: 100px;\n}\n\n.display {\n  background-color: #fff;\n  height: 100px;\n  word-wrap: break-word;\n  border: 1px solid black;\n}\n\n.keypad {\n  height: auto;\n}\n\n.keypad-row {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n}\n\n.keypad-row > button {\n  font-size: 1.6rem;\n  margin: 2px;\n  overflow: hidden;\n  height: 60px;\n  width: 100%;\n}\n\n.keypad-primary-btn {\n  background-color: #FBFBFB;\n  color: #20232A;\n  font-weight: bold;\n}\n\n.keypad-secondary-btn {\n  background-color: #F2F2F2;\n  color: #00ACC1;\n}\n\n.calculator {\n  background-color: #EAEAEA;\n  padding: 4px 4px;\n  border: 2px solid gray;\n}\n\n#gt {\n  cursor: pointer;\n  font-weight: bold;\n  box-shadow: 0 0 0 0 transparent;\n}\n\n.history {\n  background-color: #fff;\n  position: relative;\n  min-height: 300px;\n  overflow-y: scroll;\n}\n\n.history .history-item > button {\n  border-radius: 0;\n  -webkit-transition-duration: 0.4s;\n  transition-duration: 0.4s;\n}\n\n.history .history-item > button:hover {\n  background-color: #22708f;\n}\n\n.history-trash {\n  cursor: pointer;\n  left: 10px;\n  position: absolute;\n  top: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/calculator/components/Calculator/Calculator.js":
/*!*********************************************************************!*\
  !*** ./resources/js/calculator/components/Calculator/Calculator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calculator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display */ "./resources/js/calculator/components/Calculator/Display.js");
/* harmony import */ var _Keypad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Keypad */ "./resources/js/calculator/components/Calculator/Keypad.js");
/* harmony import */ var _History__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./History */ "./resources/js/calculator/components/Calculator/History.js");
/* harmony import */ var _CalculatorEngine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CalculatorEngine */ "./resources/js/calculator/components/Calculator/CalculatorEngine.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// PACKAGE REFERENCES
 // PROJECT REFERENCES





 // INITIALIZATION

var calculator = new _CalculatorEngine__WEBPACK_IMPORTED_MODULE_4__["default"]();

var Calculator =
/*#__PURE__*/
function (_Component) {
  _inherits(Calculator, _Component);

  function Calculator(props) {
    var _this;

    _classCallCheck(this, Calculator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calculator).call(this, props));
    _this.state = {
      expression: '',
      value: '',
      history: [],
      grandTotal: '0',
      showHistory: false
    };
    _this.handleOnDigit = _this.handleOnDigit.bind(_assertThisInitialized(_this));
    _this.handleOnClear = _this.handleOnClear.bind(_assertThisInitialized(_this));
    _this.handleOnClearAll = _this.handleOnClearAll.bind(_assertThisInitialized(_this));
    _this.handleOnDelete = _this.handleOnDelete.bind(_assertThisInitialized(_this));
    _this.handleOnAdd = _this.handleOnAdd.bind(_assertThisInitialized(_this));
    _this.handleOnSubtract = _this.handleOnSubtract.bind(_assertThisInitialized(_this));
    _this.handleOnDivide = _this.handleOnDivide.bind(_assertThisInitialized(_this));
    _this.handleOnMultiply = _this.handleOnMultiply.bind(_assertThisInitialized(_this));
    _this.handleOnDecimalPoint = _this.handleOnDecimalPoint.bind(_assertThisInitialized(_this));
    _this.handleOnPercent = _this.handleOnPercent.bind(_assertThisInitialized(_this));
    _this.handleonSquareRoot = _this.handleonSquareRoot.bind(_assertThisInitialized(_this));
    _this.handleOnGrandTotal = _this.handleOnGrandTotal.bind(_assertThisInitialized(_this));
    _this.handleOnEquals = _this.handleOnEquals.bind(_assertThisInitialized(_this));
    _this.handleOnToggleSign = _this.handleOnToggleSign.bind(_assertThisInitialized(_this));
    _this.handleOnHistorySelected = _this.handleOnHistorySelected.bind(_assertThisInitialized(_this));
    _this.handleOnToggleHistory = _this.handleOnToggleHistory.bind(_assertThisInitialized(_this));
    _this.handleOnClearHistory = _this.handleOnClearHistory.bind(_assertThisInitialized(_this));
    _this.handleOnCopy = _this.handleOnCopy.bind(_assertThisInitialized(_this));
    _this.handleOnKeyPress = _this.handleOnKeyPress.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Calculator, [{
    key: "handleOnAdd",
    value: function handleOnAdd() {
      calculator.add();
      this.setState(function () {
        return {
          expression: calculator.getExpression(),
          value: calculator.getValue().toString()
        };
      });
    }
  }, {
    key: "handleOnClear",
    value: function handleOnClear() {
      calculator.clear();
      this.setState(function () {
        return {
          expression: calculator.getExpression(),
          value: calculator.getValue().toString()
        };
      });
    }
  }, {
    key: "handleOnClearAll",
    value: function handleOnClearAll() {
      calculator.clearAll();
      this.setState(function () {
        return {
          expression: calculator.getExpression(),
          history: calculator.getHistory(),
          value: calculator.getValue().toString(),
          grandTotal: calculator.getGrandTotal().toString()
        };
      });
    }
  }, {
    key: "handleOnClearHistory",
    value: function handleOnClearHistory() {
      calculator.clearHistory();
      this.setState(function () {
        return {
          history: calculator.getHistory(),
          showHistory: false
        };
      });
    }
  }, {
    key: "handleOnDecimalPoint",
    value: function handleOnDecimalPoint() {
      calculator.inputDecimal();
      this.setState(function () {
        return {
          expression: calculator.getExpression(),
          value: calculator.getValue().toString()
        };
      });
    }
  }, {
    key: "handleOnDelete",
    value: function handleOnDelete() {
      calculator["delete"]();
      this.setState(function () {
        return {
          value: calculator.getValue().toString()
        };
      });
    }
  }, {
    key: "handleOnDigit",
    value: function handleOnDigit(number) {
      calculator.inputDigit(number);
      this.setState(function () {
        return {
          value: calculator.getValue()
        };
      });
    }
  }, {
    key: "handleOnDivide",
    value: function handleOnDivide() {
      calculator.divide();
      this.setState(function () {
        return {
          expression: calculator.getExpression(),
          value: calculator.getValue().toString()
        };
      });
    }
  }, {
    key: "handleonSquareRoot",
    value: function handleonSquareRoot() {
      calculator.squareRoot();
      this.setState(function () {
        return {
          value: calculator.getValue().toString()
        };
      });
    }
  }, {
    key: "handleOnPercent",
    value: function handleOnPercent() {
      calculator.percent();
      this.setState(function () {
        return {
          expression: calculator.getExpression(),
          value: calculator.getValue().toString()
        };
      });
    }
  }, {
    key: "handleOnGrandTotal",
    value: function handleOnGrandTotal() {
      calculator.grandTotal();
      this.setState(function () {
        return {
          grandTotal: calculator.getGrandTotal().toString()
        };
      });
    }
  }, {
    key: "handleOnEquals",
    value: function handleOnEquals() {
      calculator.equals();
      this.setState(function () {
        return {
          expression: calculator.getExpression(),
          value: calculator.getResult().toString(),
          history: calculator.getHistory()
        };
      });
    }
  }, {
    key: "handleOnHistorySelected",
    value: function handleOnHistorySelected(index) {
      calculator.loadHistory(index);
      this.setState(function (prevState) {
        return {
          expression: prevState.history[index].expression,
          value: calculator.getValue().toString()
        };
      });
    }
  }, {
    key: "handleOnMultiply",
    value: function handleOnMultiply() {
      calculator.multiply();
      this.setState(function () {
        return {
          expression: calculator.getExpression(),
          value: calculator.getValue().toString()
        };
      });
    }
  }, {
    key: "handleOnSubtract",
    value: function handleOnSubtract() {
      calculator.subtract();
      this.setState(function () {
        return {
          expression: calculator.getExpression(),
          value: calculator.getValue().toString()
        };
      });
    }
  }, {
    key: "handleOnToggleHistory",
    value: function handleOnToggleHistory() {
      this.setState(function (prevState) {
        return {
          showHistory: !prevState.showHistory
        };
      });
    }
  }, {
    key: "handleOnToggleSign",
    value: function handleOnToggleSign() {
      calculator.toggleSign();
      this.setState(function () {
        return {
          value: calculator.getValue().toString()
        };
      });
    }
  }, {
    key: "handleOnCopy",
    value: function handleOnCopy() {
      var copyText = document.getElementById("gt");
      copyText.select();
      copyText.setSelectionRange(0, 99);
      document.execCommand("copy");
      document.getElementById("gtText").classList.add("text-success");
      document.getElementById("gtText").innerHTML = "Copied to clipboard";
      setTimeout(function () {
        document.getElementById("gtText").classList.remove("text-success");
        document.getElementById("gtText").innerHTML = "Grand Total";
      }, 500);
    }
  }, {
    key: "handleOnKeyPress",
    value: function handleOnKeyPress(e) {
      var keyPressed = e.keyCode;

      if (keyPressed > 95 && keyPressed < 106) {
        calculator.inputDigit(e.key);
        this.setState(function () {
          return {
            value: calculator.getValue()
          };
        });
      } else if (keyPressed == 106) {
        this.handleOnMultiply();
      } else if (keyPressed == 107) {
        this.handleOnAdd();
      } else if (keyPressed == 109) {
        this.handleOnSubtract();
      } else if (keyPressed == 111) {
        this.handleOnDivide();
      } else if (keyPressed == 13) {
        document.getElementById("gt").focus();
        this.handleOnEquals();
      } else if (keyPressed == 8) {
        this.handleOnDelete();
      } else if (keyPressed == 110) {
        this.handleOnDecimalPoint();
      } else if (keyPressed == 46) {
        this.handleOnClear();
      } else {
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "calculator col-11 mx-auto",
        onKeyDown: this.handleOnKeyPress
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Display__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: this.state.value,
        expression: this.state.expression
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row my-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupAddon"], {
        addonType: "prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupText"], {
        id: "gtText"
      }, "Grand Total")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        type: "text",
        id: "gt",
        value: this.state.grandTotal,
        onClick: this.handleOnCopy
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupText"], {
        className: "btn",
        onClick: this.handleOnToggleHistory
      }, "History"))))), !this.state.showHistory && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Keypad__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onDigit: this.handleOnDigit,
        onAdd: this.handleOnAdd,
        onSubtract: this.handleOnSubtract,
        onDivide: this.handleOnDivide,
        onMultiply: this.handleOnMultiply,
        onDecimalPoint: this.handleOnDecimalPoint,
        onSquareRoot: this.handleonSquareRoot,
        onPercent: this.handleOnPercent,
        onGrandTotal: this.handleOnGrandTotal,
        onEquals: this.handleOnEquals,
        onClear: this.handleOnClear,
        onClearAll: this.handleOnClearAll,
        onDelete: this.handleOnDelete,
        onToggleSign: this.handleOnToggleSign
      }), this.state.showHistory && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_History__WEBPACK_IMPORTED_MODULE_3__["default"], {
        history: this.state.history,
        onClearHistory: this.handleOnClearHistory,
        onSelected: this.handleOnHistorySelected
      })));
    }
  }]);

  return Calculator;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/calculator/components/Calculator/CalculatorEngine.js":
/*!***************************************************************************!*\
  !*** ./resources/js/calculator/components/Calculator/CalculatorEngine.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var math = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/index.js");

var currentValue = '';
var register = [];
var history = [];
var result = '';
var _grandTotal = '';
var newNumber = true;
var digit = 0;

var CalculatorEngine =
/*#__PURE__*/
function () {
  function CalculatorEngine() {
    _classCallCheck(this, CalculatorEngine);

    history = [], register = [];
    currentValue = '';
    result = '';
    _grandTotal = '';
    newNumber = false;
    digit = 0;
  }

  _createClass(CalculatorEngine, [{
    key: "inputDigit",
    value: function inputDigit(digit) {
      if (isNaN(digit)) {
        throw Error('Only numeric input is allowed');
      }

      if (result !== '') {
        result = '';
        currentValue = '';
      }

      if (newNumber) {
        currentValue = digit;
        newNumber = false;
      } else {
        currentValue += digit;
      }
    }
  }, {
    key: "inputDecimal",
    value: function inputDecimal() {
      if (result !== '') {
        result = '';
        currentValue = '';
      }

      if (currentValue.indexOf('.') >= 0) {
        return;
      }

      if (currentValue === '') {
        currentValue += '0.';
      } else {
        currentValue += '.';
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      currentValue = '';
      register = [];
      result = '';
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      currentValue = '';
      register = [];
      result = '';
      _grandTotal = '';
      history = [];
    }
  }, {
    key: "clearHistory",
    value: function clearHistory() {
      history = [];
    }
  }, {
    key: "delete",
    value: function _delete() {
      if (currentValue === '') {
        return;
      }

      currentValue = currentValue.substring(0, currentValue.length - 1);
    }
  }, {
    key: "add",
    value: function add() {
      if (currentValue === '') {
        return;
      }

      register.push(currentValue);
      register.push('+');
      currentValue = '';
    }
  }, {
    key: "subtract",
    value: function subtract() {
      if (currentValue === '') {
        return;
      }

      register.push(currentValue);
      register.push('-');
      currentValue = '';
    }
  }, {
    key: "multiply",
    value: function multiply() {
      if (currentValue === '') {
        return;
      }

      register.push(currentValue);
      register.push('*');
      currentValue = '';
    }
  }, {
    key: "divide",
    value: function divide() {
      if (currentValue === '') {
        return;
      }

      register.push(currentValue);
      register.push('/');
      currentValue = '';
    }
  }, {
    key: "squareRoot",
    value: function squareRoot() {
      if (currentValue === '') {
        return;
      }

      currentValue = parseFloat(math.sqrt(Number(currentValue)).toFixed(10)).toString();
      newNumber = true;
    }
  }, {
    key: "percent",
    value: function percent() {
      if (currentValue === '') {
        return;
      }

      register.push(currentValue + '/100');
      var expression = register.join(' ');
      result = math.eval(expression);
      currentValue = result.toString();
      history.splice(0, 0, {
        expression: expression,
        result: result
      });
      register = [];
    }
  }, {
    key: "grandTotal",
    value: function grandTotal() {
      if (currentValue === '') {
        return;
      }

      _grandTotal = Number(_grandTotal) + Number(currentValue);
    }
  }, {
    key: "equals",
    value: function equals() {
      if (currentValue === '') {
        return;
      }

      register.push(currentValue);
      var expression = register.join(' ');
      result = math.eval(expression);
      currentValue = result.toString();
      history.splice(0, 0, {
        expression: expression,
        result: result
      });
      register = [];
    }
  }, {
    key: "loadHistory",
    value: function loadHistory(index) {
      currentValue = history[index].result.toString();
    }
  }, {
    key: "toggleSign",
    value: function toggleSign() {
      currentValue = (parseFloat(currentValue) * -1).toString();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return currentValue;
    }
  }, {
    key: "getExpression",
    value: function getExpression() {
      return register.join(' ');
    }
  }, {
    key: "getHistory",
    value: function getHistory() {
      return history;
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return result;
    }
  }, {
    key: "getGrandTotal",
    value: function getGrandTotal() {
      return _grandTotal;
    }
  }]);

  return CalculatorEngine;
}();

/* harmony default export */ __webpack_exports__["default"] = (CalculatorEngine);

/***/ }),

/***/ "./resources/js/calculator/components/Calculator/Display.js":
/*!******************************************************************!*\
  !*** ./resources/js/calculator/components/Calculator/Display.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Display = function Display(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "",
    style: {
      position: 'relative'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pr-2 h4",
    style: {
      position: 'absolute',
      top: 0,
      right: 0
    }
  }, props.expression), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "display text-right pr-2 h3 d-md-none d-sm-block pt-5"
  }, props.value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "display text-right pr-2 h1 d-none d-lg-none d-md-block pt-4"
  }, props.value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "display text-right pr-2 display-4 d-none d-lg-block pt-4"
  }, props.value));
};

Display.defaultProps = {
  expression: '',
  value: '0'
};
Display.propTypes = {
  expression: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./resources/js/calculator/components/Calculator/History.js":
/*!******************************************************************!*\
  !*** ./resources/js/calculator/components/Calculator/History.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var History = function History(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "history"
  }, props.history.map(function (expression, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-item",
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-block btn-light",
      onClick: function onClick() {
        return props.onSelected(i);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-0 text-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, expression.expression, "\xA0="), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "font-weight-bold"
    }, expression.result))));
  }));
};

History.defaultProps = {
  history: [],
  onClearHistory: function onClearHistory() {
    return alert('clear history');
  },
  onSelected: function onSelected() {
    return alert('selected');
  }
};
History.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  onClearHistory: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (History);

/***/ }),

/***/ "./resources/js/calculator/components/Calculator/Keypad.js":
/*!*****************************************************************!*\
  !*** ./resources/js/calculator/components/Calculator/Keypad.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Keypad = function Keypad(props) {
  var handleOnDigit = function handleOnDigit(e) {
    props.onDigit(e.target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "keypad"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "keypad-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "clear-all",
    onClick: props.onClearAll
  }, "CE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "clear",
    onClick: props.onClear
  }, "C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "backspace",
    onClick: props.onDelete
  }, "\u2190"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "+-",
    onClick: props.onToggleSign
  }, "\xB1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "/",
    onClick: props.onDivide
  }, "\xF7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "keypad-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "7",
    onClick: handleOnDigit
  }, "7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "8",
    onClick: handleOnDigit
  }, "8"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "9",
    onClick: handleOnDigit
  }, "9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "\u221A",
    onClick: props.onSquareRoot
  }, "\u221A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "*",
    onClick: props.onMultiply
  }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "keypad-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "4",
    onClick: handleOnDigit
  }, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "5",
    onClick: handleOnDigit
  }, "5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "6",
    onClick: handleOnDigit
  }, "6"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "%",
    onClick: props.onPercent
  }, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "-",
    onClick: props.onSubtract
  }, "\u2212")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "keypad-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "1",
    onClick: handleOnDigit
  }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "2",
    onClick: handleOnDigit
  }, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "3",
    onClick: handleOnDigit
  }, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "gt",
    onClick: props.onGrandTotal
  }, "GT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "+",
    onClick: props.onAdd
  }, "+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "keypad-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "0",
    onClick: handleOnDigit
  }, "0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "00",
    onClick: handleOnDigit
  }, "00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: "000",
    onClick: handleOnDigit
  }, "000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "",
    value: ".",
    onClick: props.onDecimalPoint
  }, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "px-5",
    value: "=",
    onClick: props.onEquals
  }, "=")));
};

Keypad.defaultProps = {
  onDigit: function onDigit(digit) {
    return alert(digit);
  },
  onClear: function onClear() {
    return alert('clear');
  },
  onClearAll: function onClearAll() {
    return alert('clear-all');
  },
  onDelete: function onDelete() {
    return alert('delete');
  },
  onAdd: function onAdd() {
    return alert('add');
  },
  onEquals: function onEquals() {
    return alert('equals');
  },
  onDecimalPoint: function onDecimalPoint() {
    return alert('.');
  },
  onSubtract: function onSubtract() {
    return alert('subtract');
  },
  onToggleSign: function onToggleSign() {
    return alert('+/-');
  },
  onDivide: function onDivide() {
    return alert('/');
  },
  onMultiply: function onMultiply() {
    return alert('*');
  }
};
Keypad.propTypes = {
  onDigit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClearAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onAdd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onEquals: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDecimalPoint: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSubtract: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDivide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMultiply: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onToggleSign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Keypad);

/***/ }),

/***/ "./resources/js/calculator/components/CalculatorApp.js":
/*!*************************************************************!*\
  !*** ./resources/js/calculator/components/CalculatorApp.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calculator/Calculator */ "./resources/js/calculator/components/Calculator/Calculator.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../styles/app.scss */ "./resources/js/calculator/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_2__);




var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./resources/js/calculator/styles/app.scss":
/*!*************************************************!*\
  !*** ./resources/js/calculator/styles/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./app.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/calculator/styles/app.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/assets/img/brand/logo.svg":
/*!***********************************************************!*\
  !*** ./resources/js/components/assets/img/brand/logo.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.svg?537211e7dfab145efb2185260aded04d";

/***/ }),

/***/ "./resources/js/components/assets/img/brand/sygnet.svg":
/*!*************************************************************!*\
  !*** ./resources/js/components/assets/img/brand/sygnet.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sygnet.svg?c8d5c2d9c0e8849271af0664df052817";

/***/ }),

/***/ "./resources/js/components/containers/DefaultLayout/DefaultHeader.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/containers/DefaultLayout/DefaultHeader.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _assets_img_brand_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/brand/logo.svg */ "./resources/js/components/assets/img/brand/logo.svg");
/* harmony import */ var _assets_img_brand_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_brand_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_brand_sygnet_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/brand/sygnet.svg */ "./resources/js/components/assets/img/brand/sygnet.svg");
/* harmony import */ var _assets_img_brand_sygnet_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_brand_sygnet_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _calculator_components_CalculatorApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../calculator/components/CalculatorApp */ "./resources/js/calculator/components/CalculatorApp.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
var defaultProps = {};

var DefaultHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultHeader, _Component);

  function DefaultHeader(props) {
    var _this;

    _classCallCheck(this, DefaultHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefaultHeader).call(this, props));
    _this.state = {
      modal: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DefaultHeader, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // eslint-disable-next-line
      var _this$props = this.props,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["children"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarToggler"], {
        className: "d-lg-none",
        display: "md",
        mobile: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppNavbarBrand"], {
        full: {
          src: _assets_img_brand_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
          width: 89,
          height: 25,
          alt: 'CoreUI Logo'
        },
        minimized: {
          src: _assets_img_brand_sygnet_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
          width: 30,
          height: 30,
          alt: 'CoreUI Logo'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarToggler"], {
        className: "d-md-down-none",
        display: "lg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        className: "d-md-down-none",
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn"
      }, "Click me")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        className: "ml-auto",
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        isOpen: this.state.modal,
        className: 'modal-md'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], null, "Calculator"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calculator_components_CalculatorApp__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "danger",
        onClick: this.toggle
      }, "Close")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.toggle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-calculator"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "px-1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], {
        nav: true,
        direction: "down"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
        nav: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Option"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "px-1"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
        right: true,
        className: "my-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
        header: true,
        tag: "div",
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Account")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-bell-o"
      }), " Updates", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        color: "info"
      }, "42")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-envelope-o"
      }), " Messages", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        color: "success"
      }, "42")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-tasks"
      }), " Tasks", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        color: "danger"
      }, "42")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-comments"
      }), " Comments", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        color: "warning"
      }, "42")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }), " Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-wrench"
      }), " Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-usd"
      }), " Payments", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        color: "secondary"
      }, "42")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-file"
      }), " Projects", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        color: "primary"
      }, "42")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-shield"
      }), " Lock Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
        onClick: function onClick(e) {
          return _this2.props.onLogout(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-lock"
      }), " Logout")))));
    }
  }]);

  return DefaultHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DefaultHeader);

/***/ })

}]);