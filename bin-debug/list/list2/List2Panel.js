var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
var List2Panel = (function (_super) {
    __extends(List2Panel, _super);
    /**
     * 针对项目的实际应用进行联系
     */
    function List2Panel() {
        var _this = _super.call(this) || this;
        _this.dataArray = new eui.ArrayCollection();
        _this.skinName = "resource/skins/list2/List2PanelSkin.exml";
        return _this;
    }
    List2Panel.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.btnDelete.addEventListener(egret.TouchEvent.TOUCH_TAP, this.delete1.bind(this), this);
        // 初始化List
        this.dataList.dataProvider = this.dataArray;
        this.dataList.itemRenderer = List2Item;
        var data = this.initData();
        // 渲染List
        this.dataArray.replaceAll(data);
    };
    List2Panel.prototype.initData = function () {
        var tempArray = [];
        tempArray.push({ name: "装备1", count: 10 });
        tempArray.push({ name: "装备2", count: 5 });
        tempArray.push({ name: "装备3", count: 1 });
        tempArray.push({ name: "装备4", count: 1 });
        tempArray.push({ name: "装备4", count: 1 });
        tempArray.push({ name: "装备4", count: 1 });
        tempArray.push({ name: "装备5", count: 50 });
        tempArray.push({ name: "装备6", count: 60 });
        return tempArray;
    };
    // 删除装备4两个
    List2Panel.prototype.delete1 = function () {
    };
    return List2Panel;
}(eui.Component));
__reflect(List2Panel.prototype, "List2Panel");
//# sourceMappingURL=List2Panel.js.map