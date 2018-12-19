//判断是否是数组
if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

function inArray(search,array){
    for(var i in array){
        if(array[i]==search){
            return true;
        }
    }
    return false;
}