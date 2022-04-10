// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"IwUp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/* \u8BA9\u6211\u4EEC\u5F00\u59CB\u753B\u51B0\u58A9\u58A9\u5427\uFF01*/\n* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font: 15px \"Microsoft YaHei\", Arial, Helvetica, sans-serif;\n  color: #000;\n  background: #d4ebf1;\n}\n\n/* \u9996\u5148\u753B\u8EAB\u4F53 */\n.m_body {\n  position: absolute;\n  left: 109px;\n  top: -30px;\n  margin: 50px auto;\n  width: 362px;\n  height: 410px;\n  border: #393939 8px solid;\n  border-radius: 88% 88% 62% 68% / 82% 82% 95% 84%;\n  background: #fff;\n}\n\n/* \u7136\u540E\u51C6\u5907\u8033\u6735~ */\n.ear1,\n.ear2 {\n  position: absolute;\n  width: 81px;\n  height: 115px;\n  border-radius: 50%;\n  z-index: -1;\n  background: #393939;\n}\n.ear1 {\n  top: 26px;\n  left: 150px;\n  transform: rotate(-10deg);\n}\n.ear2 {\n  top: 28px;\n  left: 362px;\n  transform: rotate(10deg);\n}\n\n/* \u73B0\u5728\u51C6\u5907\u773C\u7736 */\n.eye1,\n.eye2 {\n  position: absolute;\n  background: #393939;\n  width: 83px;\n  height: 115px;\n  border-radius: 50%;\n}\n.eye1 {\n  top: 122px;\n  left: 185px;\n  transform: rotate(45deg);\n}\n.eye2 {\n  top: 122px;\n  left: 329px;\n  transform: rotate(-45deg);\n}\n\n/* \u4EE5\u53CA\u773C\u775B */\n.eye1:before,\n.eye2:before {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 40px;\n  border: #fff 5px solid;\n  border-radius: 100%;\n}\n.eye1:before {\n  top: 22px;\n  right: 10px;\n}\n.eye2:before {\n  top: 22px;\n  left: 10px;\n}\n.eye1:after,\n.eye2:after {\n  position: absolute;\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  background: #9b9b9b;\n  border-radius: 100%;\n}\n.eye1:after {\n  top: 31px;\n  right: 27px;\n\n}\n.eye2:after {\n  top: 44px;\n  left: 41px;\n}\n\n/* \u73B0\u5728\u5F00\u59CB\u753B\u8138 */\n.face {\n  position: absolute;\n  border-radius: 48% 48% 44% 49%/ 53% 54% 45% 47%;\n}\n.c_blue {\n  top: 78px;\n  left: 150px;\n  width: 280px;\n  height: 224px;\n  border: #6bcdf3 5px solid;\n}\n.c_red {\n  top: 73px;\n  left: 146px;\n  width: 287px;\n  height: 233px;\n  border: #af2350 5px solid;\n}\n.c_purple {\n  top: 70px;\n  left: 142px;\n  width: 295px;\n  height: 240px;\n  border: #5d75b3 5px solid;\n}\n.c_yellow {\n  top: 65px;\n  left: 137px;\n  width: 305px;\n  height: 248px;\n  border: #ffc346 5px solid;\n}\n.c_green {\n  top: 61px; \n  left: 133px; \n  width: 313px;\n  height: 256px;\n  border: #7fcb58 5px solid;\n}\n\n/* \u7136\u540E\u662F\u624B */\n.arm1,\n.arm2 {\n  position: absolute;\n  background: #333;\n  z-index: -1;\n}\n.arm1 {\n  top: 244px;\n  left: 64px;\n  width: 75px;\n  height: 118px;\n  transform: rotate(45deg);\n  border-radius: 24% 69% 68% 76%/ 53% 95% 40% 52%;\n}\n.arm2 {  \n  top: 162px;  \n  left: 463px;\n  width: 75px;\n  height: 148px;\n  transform: rotate(37deg);\n  border-radius: 56% 62% 98% 6%/ 40% 46% 80% 58%;\n}\n\n/* \u770B\u5B83\u7684\u7231\u5FC3~ */\n.arm2:before {\n  position: absolute; \n  top: 20px;\n  left: 32px;\n  content: \"\";\n  width: 16px;\n  height: 24px;\n  transform: rotate(45deg);\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n  background: #bc242c;\n}\n.arm2:after {\n  position: absolute;\n  top: 20px;\n  left: 26px;\n  content: \"\";\n  width: 16px;\n  height: 24px;\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n  transform: rotate(-45deg);\n  background: #bc242c;\n}\n.arm_c {\n  position: absolute;\n  top: 20px;\n  left: 426px;\n  content: \"\";\n  width: 16px;\n  height: 24px;\n}\n\n/* \u5F00\u59CB\u753B\u9F3B\u5B50 */\n.nose {\n  background-color: #333333;\n}\n.nose:before,\n.nose:after {\n  position: absolute;\n  content: \"\";\n  background-color: inherit;\n}\n.nose,\n.nose:before,\n.nose:after {\n  width: 28px;\n  height: 18px;\n  border-radius: 42px 42px 60px 61px/ 30px 30px 50px 46px;\n}\n.nose {\n  position: absolute;\n  top: 187px;\n  left: 284px;\n}\n\n/* \u4EE5\u53CA\u4F1A\u5FC3\u4E00\u7B11 */\n.mouse {\n  position: absolute;\n  top: 205px;\n  left: 265px;\n  width: 68px;\n  height: 25px;\n  border: #393939 7px solid;\n  border-top: none;\n  border-left: 0;\n  border-right: 0;\n  border-radius: 48%;\n}\n\n/* \u7136\u540E\u662F\u5B83\u7684\u811A */\n.leg1,\n.leg2 {\n  position: absolute;\n  width: 83px;\n  height: 80px;\n  background: #333;\n  border-radius: 0 0 30px 30px;\n  z-index: -1;\n}\n.leg1 {\n  top: 423px;\n  left: 187px;\n}\n.leg2 {\n  top: 423px;\n  left: 328px;\n}\n.leg1:after,\n.leg2:after {\n  position: absolute;\n  content: \"\";\n  width: 43px;\n  height: 30px;\n  border-radius: 30px;\n  background: #363636;\n}\n.leg1:after {\n  right: -3px;\n  bottom: 0;\n}\n.leg2:after {\n  left: -3px;\n  bottom: 0;\n}\n\n/* \u73B0\u5728\u5927\u529F\u544A\u6210\u4E86\uFF01 */\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  // 定义定时器
  step: undefined,
  // 每次写一个字符
  n: 1,
  // 速度快慢
  speed: 50,
  //初始化
  init: function init() {
    // 这俩行代码是实现这个项目的核心
    player.ui.code.innerText = _style.default.substring(0, player.n);
    player.ui.styleTag.innerHTML = _style.default.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  ui: {
    code: document.querySelector('#code'),
    styleTag: document.querySelector('#styleTag')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      var value = player.events[key];
      document.querySelector(key).onclick = player[value];
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _style.default.length) {
      window.clearInterval(player.step);
      return;
    }

    player.ui.code.innerHTML = Prism.highlight(_style.default.substring(0, player.n), Prism.languages.css);
    player.ui.styleTag.innerHTML = _style.default.substring(0, player.n);
    player.ui.code.scrollTop = player.ui.code.scrollHeight;
  },
  // 播放
  play: function play() {
    player.step = setInterval(player.run, player.speed);
  },
  // 暂停
  pause: function pause() {
    return window.clearInterval(player.step);
  },
  // 慢速
  slow: function slow() {
    player.pause();
    player.speed = 300;
    player.play();
  },
  // 中速
  normal: function normal() {
    player.pause();
    player.speed = 50;
    player.play();
  },
  // 快速
  fast: function fast() {
    player.pause();
    player.speed = 0;
    player.play();
  }
};
player.init();
},{"./style.js":"IwUp"}]},{},["epB2"], null)
//# sourceMappingURL=main.6b1a8883.js.map