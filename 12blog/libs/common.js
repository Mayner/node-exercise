function toDoule(n) {
    return n < 10 ? '0' + n : n;
}

module.exports = {
    time2date: function (timestamp) {
        var oDate = new Date();
        oDate.setTime(timestamp * 1000);
        return oDate.getFullYear() + '-' + toDoule(oDate.getMonth() + 1) + '-' + toDoule(oDate.getDate()) + ' ' + toDoule(oDate.getHours()) + ':' + toDoule(oDate.getMinutes()) + ':' + toDoule(oDate.getSeconds());
    }
}