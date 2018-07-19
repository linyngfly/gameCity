
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.hitMole {
    export class GameUI extends View {
		public normal:Laya.Image;
		public hit:Laya.Image;
		public mask:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":195,"x":152},"child":[{"type":"Image","props":{"x":10,"var":"normal","skin":"ui/mouse_normal_1.png"}},{"type":"Image","props":{"y":17,"x":14,"var":"hit","skin":"ui/mouse_hit_1.png"}},{"type":"Image","props":{"y":82,"x":5,"var":"mask","skin":"ui/mask-01.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.hitMole.GameUI.uiView);

        }

    }
}
