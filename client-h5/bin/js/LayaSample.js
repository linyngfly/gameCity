// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(800, 600);
        Laya.stage.bgColor = "#ffcccc";
        var resArray = [
            { url: "res/atlas/ui.json", type: Laya.Loader.ATLAS }
        ];
    }
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map