var Handler = Laya.Handler;
var Loader = Laya.Loader;
var GameUI = ui.hitMole.GameUI;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(800, 600, Laya.WebGL);
        Laya.ResourceVersion.enable("version.json", Handler.create(null, this.beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
        Laya.stage.bgColor = "#ffcccc";
    }
    GameMain.prototype.beginLoad = function () {
        var resArray = [
            { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
        ];
        Laya.loader.load(resArray, Handler.create(null, this.onLoaded));
    };
    GameMain.prototype.onLoaded = function () {
        //实例UI界面
        var gameUI = new GameUI();
        Laya.stage.addChild(gameUI);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map