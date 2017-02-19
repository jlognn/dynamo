"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (obj) {
  return new Dynamo(obj);
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dynamo = exports.Dynamo = function () {
  function Dynamo() {
    var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Dynamo);

    this.state = init;
    this.listeners = [];
    this.debug = false;
    this.connected = null;
  }

  _createClass(Dynamo, [{
    key: "debugMode",
    value: function debugMode() {
      this.debug = true;
    }
  }, {
    key: "get",
    value: function get() {
      return this.state;
    }
  }, {
    key: "set",
    value: function set(change) {
      Object.assign(this.state, change);
      this.connected.setState(this.state);
      if (this.debug) console.log(this.state);
    }
  }, {
    key: "connect",
    value: function connect(ref) {
      this.connected = ref;
      ref.state = this.get();
    }
  }]);

  return Dynamo;
}();
