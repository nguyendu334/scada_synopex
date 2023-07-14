//#region  create tag

function customTag(tagName, fn) {
    document.createElement(tagName);
    var tagInstances = document.getElementsByTagName(tagName);
    for (var i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}

function DisplayERR(element) {
    var canvas = document.createElement("button");
    var _Value = element.attributes.Value.value;

    canvas.style.width = element.attributes.width.value;
    canvas.style.height = element.attributes.height.value;
    var Oncolor = element.attributes.TextColor.value;
    var Offcolor = element.attributes.BackColor.value;


    element.VALUE = new Display12(_Value, canvas, Oncolor, Offcolor);
    element.appendChild(canvas);
    element.VALUE.setValue = _Value;
}
//#endregion
class Display12 {
    constructor(height, ele, _oncolor, _offcolor) {
        this.val = height;
        this.button = ele;
        this.Oncolor = _oncolor;
        this.Offcolor = _offcolor;
    };
    get getValue() {
        return this.val;
    };
    set setValue(val) {
        this.val = val;
        Draw_but12(this.button, this.val, this.Oncolor, this.Offcolor);
    };

}

customTag("HMI-ERRSHOW", DisplayERR);


//#region risgister
function Draw_but12(can, va, _oncolor, _offcolor) {
    var button = can;
    button.innerHTML = "ERROR";
    button.style.color = _oncolor;
    button.style.backgroundColor = _offcolor;
    //if(va)
    button.style.display = va ? "block" : "none";






};

//#endregion