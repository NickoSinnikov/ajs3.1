!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports['ajs3_1'] = t())
    : (e['ajs3_1'] = t());
})(this, function () {
  return (function () {
    'use strict';
    var e = {};
    return (
      (e.default = {
        info: function () {
          var e = new Map();
          return e.set('name', 'ajs3_1'), e.set('version', '1.0.0'), e;
        },
      }),
      e.default
    );
  })();
});
