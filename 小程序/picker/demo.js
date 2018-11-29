var app = getApp();
Page({
    onLoad(){
        page.getStores();
    },
    getStores:function (){
        var page=this;
        app.post({
            url:'entry/wxapp/GetStores',
            data:{},
            success:function (e){
                e.unshift({id:0, store_name: "全部商家"});
                page.setData({
                    storeRange:e,
                    storeIndex:0
                });
            }
        })
    },
    pickerChange:function (e){
        var page=this;
        var index=e.currentTarget.dataset.index;
        var data={};
        data[index]=e.detail.value;
        this.setData(data)
    }

})