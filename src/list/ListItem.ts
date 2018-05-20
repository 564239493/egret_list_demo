class ListItem extends eui.ItemRenderer {

    constructor() {
        super();
        this.skinName = "resource/skins/ListItemSkin.exml";
    }
    public txtMsg: eui.Label;
    public btnAdd: eui.Label;
    public btnUpdate: eui.Label;
    public btnDelete: eui.Label;
    public btnChoose: eui.Label;

    protected createChildren(): void {
        super.createChildren();
        this.btnAdd.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addItem.bind(this), this);
        this.btnUpdate.addEventListener(egret.TouchEvent.TOUCH_TAP, this.updateItem.bind(this), this);
        this.btnDelete.addEventListener(egret.TouchEvent.TOUCH_TAP, this.deleteItem.bind(this), this);
        this.btnChoose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chooseItem.bind(this), this);
    }

    protected dataChanged(): void {
        // 渲染UI,{data.msg}相当于this.txtMsg.text = this.data.msg
        if (this.data.status == 1) {
            this.txtMsg.text = this.data.msg + ",已选择";
        } else {
            this.txtMsg.text = this.data.msg;
        }
    }

    private addItem(): void {
        ListPanel.instance.addItem2({ index: this.data.index + "-1", msg: "新增加", status: 0 },this.itemIndex);
    }

    private updateItem(): void {
        this.data.msg = "已修改";
    }

    private deleteItem(): void {
        ListPanel.instance.deleteItem(this.itemIndex);
    }

    private chooseItem(): void {
        if (this.data.status == 0) {
            this.data.status = 1;
        } else {
            this.data.status = 0;
        }

        this.dataChanged();
    }

}