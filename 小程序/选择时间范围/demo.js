var app = getApp();
var dateTimePicker = app.requirejs('dateTimePicker');
// 获取完整的年月日 时分秒，以及默认显示的数组
var obj=dateTimePicker.dateTimePicker(2000,2050);
// 精确到分的处理，将数组的秒去掉
obj.dateTimeArray.pop();
obj.dateTime.pop();
Page({
    data: {
        dateTimeArray: null,
        dateTime: null,
        startTime:'',
        endTime:''
    },
    onLoad(){
        var page=this;
        page.setData({
            dateTimeArray: obj.dateTimeArray,
            dateTime: obj.dateTime
        });
        page.setData({
            startTime:page.getTimeValue(),
            endTime:page.getTimeValue(),
        });
    },
    changeDateTime(e) {
        var page=this;
        var data={dateTime:e.detail.value};
        data[e.currentTarget.dataset.name]=page.getTimeValue();
        this.setData(data);
    },
    changeDateTimeColumn(e) {
        var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;
        arr[e.detail.column] = e.detail.value;
        dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
        this.setData({
            dateTimeArray: dateArr
        });
    },
    getTimeValue:function (){
        var page=this;
        return page.data.dateTimeArray[0][page.data.dateTime[0]]+'-'+page.data.dateTimeArray[1][page.data.dateTime[1]]+'-'+page.data.dateTimeArray[2][page.data.dateTime[2]]+' '+page.data.dateTimeArray[3][page.data.dateTime[3]]+':'+page.data.dateTimeArray[4][page.data.dateTime[4]];
    },

})
