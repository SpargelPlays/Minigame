"use strict";
var dat = require("./dat-gui");
var Vector_1 = require("./Vector");
var Player = (function () {
    function Player(input, index, render) {
        var _this = this;
        this.input = input;
        this.playerIndex = index;
        this.render = render;
        var text = {
            message: "LOL",
            lol: input.game.models["dirt"].textureSize.x,
            paint: function () {
                _this.render.paintBlocks();
            },
            attack: function () {
                _this.input.game.attack(1);
            }
        };
        var gui = new dat.GUI();
        gui.add(text, 'message');
        gui.add(text, 'paint');
        gui.add(text, 'attack');
        gui.add(text, 'lol', 0, 500).onChange(function (value) {
            input.game.models["dirt"].textureSize.x = value;
        });
        var date = Date.now();
        this.keys = {
            w: false,
            a: false,
            s: false,
            d: false,
        };
        window.addEventListener('keydown', function (e) {
            if (_this.keys.hasOwnProperty(e.key)) {
                _this.keys[e.key] = true;
                _this.input.setForce(index, _this.getDirection(_this.keys));
                e.preventDefault();
            }
        });
        window.addEventListener('keyup', function (e) {
            if (_this.keys.hasOwnProperty(e.key)) {
                _this.keys[e.key] = false;
                _this.input.setForce(index, _this.getDirection(_this.keys));
                e.preventDefault();
            }
        });
    }
    Player.prototype.getDirection = function (keys) {
        var v = new Vector_1.default(0, 0);
        if (this.keys.w) {
            v.y--;
        }
        if (this.keys.a) {
            v.x--;
        }
        if (this.keys.s) {
            v.y++;
        }
        if (this.keys.d) {
            v.x++;
        }
        return v;
    };
    return Player;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Player;
