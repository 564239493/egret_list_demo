# egret_list_demo

#### 项目介绍
Egret List Demo
增删改查选操作

码云：https://gitee.com/zhangtao3/egret_list_demo.git

GitHub:https://github.com/564239493/egret_list_demo.git
# 准备
ListPanelSkin
```
<?xml version="1.0" encoding="utf-8"?>
<e:Skin class="ListPanelSkin" width="640" height="1136" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing">
	<e:Rect width="100%" height="100%" x="0" y="0" fillColor="0xeeeeee"/>
	<e:Label id="txtTitle" text="List列表" y="50" textColor="0x000000" fontFamily="SimHei" left="20"/>
	<e:Label id="btnGet" text="[获取选择]" y="50" fontFamily="SimHei" right="20" textColor="0x00cc00"/>
	<e:Label id="btnAdd" text="[添加]" y="111" fontFamily="SimHei" textColor="0x00CC00" x="20"/>
	<e:Scroller width="620" height="976" y="158" horizontalCenter="0">
		<e:List id="dataList">
			<e:layout>
				<e:VerticalLayout gap="15"/>
			</e:layout>
		</e:List>
	</e:Scroller>
</e:Skin>
```
ListItemSkin
```
<?xml version="1.0" encoding="utf-8"?>
<e:Skin class="ListItemSkin" width="620" height="70" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing">
	<e:Rect width="100%" height="100%" x="0" y="0" fillColor="0xffffff" ellipseWidth="20"/>
	<e:Label text="{data.index}" textColor="0x000000" fontFamily="SimHei" size="25" verticalCenter="0" x="5"/>
	<e:Label id="txtMsg" text="{data.msg}" textColor="0x000000" fontFamily="SimHei" verticalCenter="0" x="153"/>
	<e:Group right="0" verticalCenter="0">
		<e:Label id="btnAdd" text="[增]" fontFamily="SimHei" textColor="0x00cc00" size="32" x="0" y="0"/>
		<e:Label id="btnUpdate" text="[改]" fontFamily="SimHei" textColor="0x00CC00" size="32" x="10" y="10"/>
		<e:Label id="btnDelete" text="[删]" fontFamily="SimHei" textColor="0x00CC00" size="32" x="20" y="20"/>
		<e:Label id="btnChoose" text="[选]" fontFamily="SimHei" textColor="0x00CC00" size="32" x="30" y="30"/>
		<e:layout>
			<e:HorizontalLayout gap="10"/>
		</e:layout>
	</e:Group>
</e:Skin>
```

# ListPanel

初始化数据源

```
 private dataArray: eui.ArrayCollection = new eui.ArrayCollection();
```
初始化List

```
 this.dataList.dataProvider = this.dataArray;
 this.dataList.itemRenderer = ListItem;
```
初始化数据

```
  private initData(): any {
        var tempArray = [];
        for (var i = 0; i < 40; i++) {
            tempArray.push({ index: i, msg: i + "文本内容", status: 0 });
        }
        return tempArray;
    }
```
渲染List

```
var data = this.initData();
// 渲染List
this.dataArray.replaceAll(data);
```

```
 // 在list末尾添加
    public addItem(): void {
        var index = this.dataArray.length;
        var data = { index: index, msg: index + "文本内容", status: 0 };
        this.dataArray.addItem(data);
    }
```

```
  // 在item当前位置添加
    public addItem2(data, index): void {
        this.dataArray.addItemAt(data, index);
    }
```

```
 public deleteItem(index): void {
        // var location = this.dataArray.getItemIndex(item);
        // if (location != -1) {
        //     this.dataArray.removeItemAt(location);
        // }
        this.dataArray.removeItemAt(index);
    }
```
# ListItem

```
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
```

比较简单的增删改查操作，主要是项目中有些复杂的增删改功能呢，本来想在此demo练习实现，实际比较复杂，没有成功，仅保留基本操作。
