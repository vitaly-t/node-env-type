"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var flags = {
    isDev: false,
    isUAT: false,
    isSIT: false,
    isCI: false,
    isTest: false,
    isProd: true
};
var searchMap = {
    isDev: /dev/i,
    isUAT: /uat/i,
    isSIT: /sit/i,
    isCI: /ci/i,
    isTest: /test|tst/i,
    isProd: /prod/i
};
function setActiveFlag(activeFlag) {
    var keys = Object.keys(flags);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var k = keys_1[_i];
        flags[k] = k === activeFlag;
    }
    flags.isTest = flags.isTest || flags.isUAT || flags.isSIT || flags.isCI;
}
function refresh() {
    var s = process.env.NODE_ENV;
    var found;
    if (s) {
        var keys = Object.keys(flags);
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            if (s.search(searchMap[key]) >= 0) {
                found = true;
                setActiveFlag(key);
                break;
            }
        }
    }
    if (!found) {
        setActiveFlag('isProd');
    }
}
refresh();
exports.env = __assign({}, flags, { refresh: refresh });
