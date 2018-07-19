var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var hitMole;
    (function (hitMole) {
        var GameUI = /** @class */ (function (_super) {
            __extends(GameUI, _super);
            function GameUI() {
                return _super.call(this) || this;
            }
            GameUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.hitMole.GameUI.uiView);
            };
            GameUI.uiView = { "type": "View", "props": { "width": 800, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 25, "x": 25, "skin": "ui/back.png" } }, { "type": "Box", "props": { "y": 195, "x": 152 }, "child": [{ "type": "Image", "props": { "x": 10, "var": "normal", "skin": "ui/mouse_normal_1.png" } }, { "type": "Image", "props": { "y": 17, "x": 14, "var": "hit", "skin": "ui/mouse_hit_1.png" } }, { "type": "Image", "props": { "y": 82, "x": 5, "var": "mask", "skin": "ui/mask-01.png" } }] }] };
            return GameUI;
        }(View));
        hitMole.GameUI = GameUI;
    })(hitMole = ui.hitMole || (ui.hitMole = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map