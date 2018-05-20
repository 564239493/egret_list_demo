class List2Panel extends eui.Component {
    /**
     * 针对项目的实际应用进行联系
     */

    constructor() {
        super();
        this.skinName = "resource/skins/list2/List2PanelSkin.exml";
    }
    public txtTitle: eui.Label;
    public btnDelete: eui.Label;
    public dataList: eui.List;

    private dataArray: eui.ArrayCollection = new eui.ArrayCollection();

    protected createChildren(): void {
        super.createChildren();
        this.btnDelete.addEventListener(egret.TouchEvent.TOUCH_TAP, this.delete1.bind(this), this);
        // 初始化List
        this.dataList.dataProvider = this.dataArray;
        this.dataList.itemRenderer = List2Item;

        var data = this.initData();
        // 渲染List
        this.dataArray.replaceAll(data);
    }

    private initData(): any {
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
    }

    // 删除装备4两个
    public delete1(): void {
       
    }
}