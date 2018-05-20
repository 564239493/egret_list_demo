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
var ListItem = (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ListItemSkin.exml";
        return _this;
    }
    ListItem.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.btnAdd.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addItem.bind(this), this);
        this.btnUpdate.addEventListener(egret.TouchEvent.TOUCH_TAP, this.updateItem.bind(this), this);
        this.btnDelete.addEventListener(egret.TouchEvent.TOUCH_TAP, this.deleteItem.bind(this), this);
        this.btnChoose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chooseItem.bind(this), this);
    };
    ListItem.prototype.dataChanged = function () {
        // 渲染UI,{data.msg}相当于this.txtMsg.text = this.data.msg
        if (this.data.status == 1) {
            this.txtMsg.text = this.data.msg + ",已选择";
        }
        else {
            this.txtMsg.text = this.data.msg;
        }
    };
    ListItem.prototype.addItem = function () {
        ListPanel.instance.addItem2({ index: this.data.index + "-1", msg: "新增加", status: 0 }, this.itemIndex);
    };
    ListItem.prototype.updateItem = function () {
        this.data.msg = "已修改";
    };
    ListItem.prototype.deleteItem = function () {
        ListPanel.instance.deleteItem(this.itemIndex);
    };
    ListItem.prototype.chooseItem = function () {
        if (this.data.status == 0) {
            this.data.status = 1;
        }
        else {
            this.data.status = 0;
        }
        this.dataChanged();
    };
    return ListItem;
}(eui.ItemRenderer));
__reflect(ListItem.prototype, "ListItem");
//# sourceMappingURL=ListItem.js.map