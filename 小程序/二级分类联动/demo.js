var app = getApp();
Page({
    data: {
        categories: null
    },
    onLoad(){
        var page=this;
        page.getCategories();
    },
    getCategories:function (){
        var page=this;
        app.post({
            url:'entry/wxapp/GetGoodsCateTree',
            data:{},
            success:function (e){
                e.unshift({id:0, cat_name: "全部分类",children:[]});
                page.setData({
                    categories:e,
                    cateRange:[e,[{id:0, cat_name: "全部分类",children:[]}]],
                    multiIndex:[0,0]
                });
            }
        })
    },
    multiPickerChange:function (e){

    },
    multiPickerColumnChange:function (e){
        var page=this;
        var range=e.currentTarget.dataset.range;
        var index=e.currentTarget.dataset.index;
        var data={};
        data[index]=page.data[index];
        data[index][e.detail.column]=e.detail.value;
        if(e.detail.column==0){
            page.data[range][1]=page.data[range][0][e.detail.value]['children'].concat();//删除引用
            page.data[range][1].unshift({id:0, cat_name: "全部分类",children:[]});
            data[range]=page.data[range];
        }
        page.setData(data);
    }
})