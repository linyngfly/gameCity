
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.hitMole {
    export class GameUI extends View {
		public timeBar:Laya.ProgressBar;
		public scoreNums:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":193,"x":158,"name":"item0"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":23,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":191,"x":345,"name":"item1"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":23,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":196,"x":540,"name":"item2"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":23,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":282,"x":126,"name":"item3"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":23,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":285,"x":344,"name":"item4"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":23,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":284,"x":546,"name":"item5"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":23,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":382,"x":122,"name":"item6"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":23,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388,"x":346,"name":"item7"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":23,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388,"x":566,"name":"item8"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":23,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":14,"x":14,"var":"timeBar","value":1,"skin":"ui/progress_time.png"}},{"type":"Box","props":{"y":48,"x":24,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.hitMole.GameUI.uiView);

        }

    }
}

module ui.hitMole {
    export class GameOverUI extends View {
		public restartBtn:Laya.Button;
		public scoreNums:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"width":500,"skin":"ui/overBg.png","sizeGrid":"22,22,21,23","height":400}},{"type":"Image","props":{"y":37,"x":19,"skin":"ui/total Score.png"}},{"type":"Button","props":{"y":277,"x":161,"var":"restartBtn","stateNum":2,"skin":"ui/btn_restart.png"}},{"type":"Box","props":{"y":169,"x":160,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.hitMole.GameOverUI.uiView);

        }

    }
}

module ui.hitMole {
    export class GameStartUI extends View {
		public startBtn:Laya.Button;

        public static  uiView:any ={"type":"View","child":[{"props":{"x":38.5,"y":55.5,"skin":"ui/help.png"},"type":"Image"},{"props":{"x":311,"y":430,"skin":"ui/btn_start.png","stateNum":2,"var":"startBtn"},"type":"Button"}],"props":{"width":800,"height":600}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.hitMole.GameStartUI.uiView);

        }

    }
}

module ui.hitMole {
    export class HammerUI extends View {
		public hit:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","child":[{"props":{"x":64,"y":60,"skin":"ui/hammer.png","width":98,"height":77,"pivotX":56,"pivotY":49,"rotation":20},"type":"Image","compId":2}],"props":{"width":100,"height":100},"animations":[{"id":1,"name":"hit","frameRate":24,"nodes":[{"target":2,"keyframes":{"x":[{"index":0,"value":64,"tween":true,"tweenMethod":"linearNone","key":"x","target":2},{"index":1,"value":62,"tween":true,"tweenMethod":"linearNone","key":"x","target":2},{"index":5,"value":64,"tween":true,"tweenMethod":"linearNone","key":"x","target":2}],"y":[{"index":0,"value":60,"tween":true,"tweenMethod":"linearNone","key":"y","target":2},{"index":1,"value":57,"tween":true,"tweenMethod":"linearNone","key":"y","target":2},{"index":5,"value":60,"tween":true,"tweenMethod":"linearNone","key":"y","target":2}],"rotation":[{"index":0,"value":20,"tween":true,"tweenMethod":"linearNone","key":"rotation","target":2},{"index":1,"value":-20,"tween":true,"tweenMethod":"linearNone","key":"rotation","target":2},{"index":5,"value":20,"tween":true,"tweenMethod":"linearNone","key":"rotation","target":2}]}}],"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.hitMole.HammerUI.uiView);

        }

    }
}
