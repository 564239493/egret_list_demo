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
var ListPanel = (function (_super) {
    __extends(ListPanel, _super);
    function ListPanel() {
        var _this = _super.call(this) || this;
        _this.dataArray = new eui.ArrayCollection();
        ListPanel.instance = _this;
        _this.skinName = "resource/skins/ListPanelSkin.exml";
        return _this;
    }
    ListPanel.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.btnGet.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getChooseArray.bind(this), this);
        this.btnAdd.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addItem.bind(this), this);
        // 初始化List
        this.dataList.dataProvider = this.dataArray;
        this.dataList.itemRenderer = ListItem;
        var data = this.initData();
        // 渲染List
        this.dataArray.replaceAll(data);
    };
    ListPanel.prototype.initData = function () {
        var tempArray = [];
        for (var i = 0; i < 40; i++) {
            tempArray.push({ index: i, msg: i + "文本内容", status: 0 });
        }
        return tempArray;
    };
    ListPanel.prototype.getChooseArray = function () {
        var choose = "";
        for (var i = 0; i < this.dataArray.length; ++i) {
            if (this.dataArray.getItemAt(i).status == 1) {
                choose += this.dataArray.getItemAt(i).index + ";";
            }
        }
        this.txtTitle.text = choose;
    };
    // 在list末尾添加
    ListPanel.prototype.addItem = function () {
        var index = this.dataArray.length;
        var data = { index: index, msg: index + "文本内容", status: 0 };
        this.dataArray.addItem(data);
    };
    // 在item当前位置添加
    ListPanel.prototype.addItem2 = function (data, index) {
        this.dataArray.addItemAt(data, index);
    };
    ListPanel.prototype.deleteItem = function (index) {
        // var location = this.dataArray.getItemIndex(item);
        // if (location != -1) {
        //     this.dataArray.removeItemAt(location);
        // }
        this.dataArray.removeItemAt(index);
    };
    return ListPanel;
}(eui.Component));
__reflect(ListPanel.prototype, "ListPanel");
//# sourceMappingURL=ListPanel.js.map