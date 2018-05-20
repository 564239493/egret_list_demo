class ListPanel extends eui.Component {

    constructor() {
        super();
        ListPanel.instance = this;
        this.skinName = "resource/skins/ListPanelSkin.exml";
    }
    public txtTitle: eui.Label;
    public btnGet: eui.Label;
    public btnAdd: eui.Label;
    public dataList: eui.List;

    public static instance: ListPanel;
    private dataArray: eui.ArrayCollection = new eui.ArrayCollection();

    protected createChildren(): void {
        super.createChildren();
        this.btnGet.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getChooseArray.bind(this), this);
        this.btnAdd.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addItem.bind(this), this);
        // 初始化List
        this.dataList.dataProvider = this.dataArray;
        this.dataList.itemRenderer = ListItem;

        var data = this.initData();
        // 渲染List
        this.dataArray.replaceAll(data);
    }

    private initData(): any {
        var tempArray = [];
        for (var i = 0; i < 40; i++) {
            tempArray.push({ index: i, msg: i + "文本内容", status: 0 });
        }
        return tempArray;
    }

    private getChooseArray(): void {
        var choose = "";
        for (var i: number = 0; i < this.dataArray.length; ++i) {
            if (this.dataArray.getItemAt(i).status == 1) {
                choose += this.dataArray.getItemAt(i).index + ";";
            }
        }
        this.txtTitle.text = choose;
    }

    // 在list末尾添加
    public addItem(): void {
        var index = this.dataArray.length;
        var data = { index: index, msg: index + "文本内容", status: 0 };
        this.dataArray.addItem(data);
    }

    // 在item当前位置添加
    public addItem2(data, index): void {
        this.dataArray.addItemAt(data, index);
    }

    public deleteItem(index): void {
        // var location = this.dataArray.getItemIndex(item);
        // if (location != -1) {
        //     this.dataArray.removeItemAt(location);
        // }
        this.dataArray.removeItemAt(index);
    }
}