function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var DEFAULT_INTERVAL = 100;

var debounce = function debounce(callback, interval) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timerId);
    timerId = setTimeout(function () {
      return callback(args, interval);
    });
  };
};

var ScrollRestoreManager = /*#__PURE__*/function () {
  function ScrollRestoreManager() {
    var _this = this;

    _classCallCheck(this, ScrollRestoreManager);

    this.options = {
      interval: 0
    };
    this.isTick = false;
    this.handleScroll = debounce(function () {
      if (_this.isTick) {
        return;
      }

      _this.isTick = true;
      window.requestAnimationFrame(function () {
        _this.savePostion();

        _this.isTick = false;
      });
    }, this.options.interval);
    this.init();
  }

  _createClass(ScrollRestoreManager, [{
    key: "init",
    value: function init() {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    }
  }, {
    key: "savePostion",
    value: function savePostion() {
      var history = {
        postion: {
          x: window.pageXOffset,
          y: window.pageYOffset
        }
      };
      window.history.replaceState(history, '', String(window.location));
    }
  }, {
    key: "getSavedPostion",
    value: function getSavedPostion() {
      if (!window.history || !window.history.state) {
        return null;
      }

      return window.history.state.postion;
    }
  }, {
    key: "observe",
    value: function observe(options) {
      this.options = Object.assign({
        interval: DEFAULT_INTERVAL
      }, options);
      window.addEventListener('scroll', this.handleScroll, {
        passive: true
      });
    }
  }, {
    key: "unobserve",
    value: function unobserve() {
      // @see: https://github.com/microsoft/TypeScript/issues/32912#issuecomment-522142969
      var options = {
        passive: true
      };
      !!this.handleScroll && window.removeEventListener('scroll', this.handleScroll, options);
    }
  }]);

  return ScrollRestoreManager;
}();

var index = new ScrollRestoreManager();

export default index;
