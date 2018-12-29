"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//默认

//默认模块在js中只能出现一次


var number = exports.number = Math.floor(Math.random() * 20);

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.age = 13;
    }

    _createClass(_class, [{
        key: "sayAge",
        value: function sayAge() {
            console.log(this.age);
        }
    }]);

    return _class;
}();

exports.default = _class;