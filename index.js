Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dynamo = exports.Dynamo = function () {
  function Dynamo() {
    _classCallCheck(this, Dynamo);

    this.state = {};
    this.listeners = [];
    this.debug = false;
  }

  _createClass(Dynamo, [{
    key: "debugMode",
    value: function debugMode() {
      this.debug = true;
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "dispatch",
    value: function dispatch(change) {
      Object.assign(this.state, change);
      for (var i = 0; i < this.listeners.length; i++) {
        this.listeners[i]();
      }
      if (this.debug) console.log(this.state);
    }
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.listeners.splice(1, this.listeners.length);
    }
  }]);

  return Dynamo;
}();

var Instance = new Dynamo();

exports.default = Instance;
