const baseUrl = "https://qa4fps3awk.execute-api.ap-northeast-1.amazonaws.com/items/usr-1234/ct-1001";

var request = new XMLHttpRequest();
request.open('GET', baseUrl, true);
request.responseType = 'json'

request.onload = function () {
    var data = this.response;
    console.log(data);
};