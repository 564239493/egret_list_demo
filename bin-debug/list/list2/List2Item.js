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
var List2Item = (function (_super) {
    __extends(List2Item, _super);
    function List2Item() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/list2/List2ItemSkin.exml";
        return _this;
    }
    List2Item.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    List2Item.prototype.dataChanged = function () {
    };
    return List2Item;
}(eui.ItemRenderer));
__reflect(List2Item.prototype, "List2Item");
//# sourceMappingURL=List2Item.js.map