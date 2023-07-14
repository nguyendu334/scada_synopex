//#region  create tag

function customTag(tagName, fn) {
    document.createElement(tagName);
    var tagInstances = document.getElementsByTagName(tagName);
    for (var i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}

function Display(element) {
    var canvas = document.createElement("button");
    var _Value = element.attributes.Value.value;

    canvas.style.width = element.attributes.width.value;
    canvas.style.height = element.attributes.height.value;
    var Oncolor = element.attributes.TextColor.value;
    var Offcolor = element.attributes.BackColor.value;
    var Font = element.attributes.Font.value;
    var FontSize = element.attributes.FontSize.value;


    element.VALUE = new Display1(_Value, canvas, Oncolor, Offcolor, Font, FontSize);
    element.appendChild(canvas);
    element.VALUE.setValue = _Value;
}
//#endregion
class Display1 {
    constructor(height, ele, _oncolor, _offcolor, Font, FontSize) {
        this.val = height;
        this.button = ele;
        this.Oncolor = _oncolor;
        this.Offcolor = _offcolor;
        this.Font = Font;
        this.FontSize = FontSize;
    };
    get getValue() {
        return this.val;
    };
    set setValue(val) {
        this.val = val;
        Draw_but1(this.button, this.val, this.Oncolor, this.Offcolor, this.Font, this.FontSize);
    };

}

customTag("HMI-DISPLAY", Display);


//#region risgister
function Draw_but1(can, va, _oncolor, _offcolor, Font, FontSize) {
    var button = can;
    button.innerHTML = va;
    button.style.color = _oncolor;
    button.style.backgroundColor = _offcolor;
    button.style.fontFamily = Font;
    button.style.fontSize = FontSize;






};

//#endregion