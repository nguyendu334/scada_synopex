var i = 0;
var ix = false;
setInterval(hoathan, 1000);
setInterval(hoathan1, 10);

function hoathan() {
    var hoa = document.getElementById("hoathanled");
    var hoa1 = document.getElementById("hoathanled1");
    var hoa2 = document.getElementById("UF1");
    ix = !ix;
    hoa.VALUE.setValue = !ix;
    hoa1.VALUE.setValue = ix;
    //  hoa2.VALUE.setValue = ix;


}

function hoathan1() {
    var hoa = document.getElementById("hoathantank");
    hoa.cuongkool.setValue = i++;

    if (i == 10000) i = 0;
}

function onhieunv() {
    var hoa1 = document.getElementById("hoathantank1");
    var hoa = document.getElementById("dk");
    hoa1.cuongkool.setValue = hoa.value;
}