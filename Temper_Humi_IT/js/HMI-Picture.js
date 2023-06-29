function customTag(tagName, fn) {
    document.createElement(tagName);
    var tagInstances = document.getElementsByTagName(tagName);
    for (var i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}

function PICTURE(element) {
    var canvas = document.createElement("canvas");
    canvas.width = element.attributes.width.value;
    canvas.height = element.attributes.height.value;
    var _Value = true;
    var OnPic = element.attributes.OnPic.value;
    var OffPic = element.attributes.OffPic.value;

    try {
        _Value = element.attributes.value.value=="true"?true:false;
    } catch (error) {

    }
    element.VALUE = new DATAPIC(_Value, canvas, OnPic, OffPic);
    element.appendChild(canvas);
    element.VALUE.setValue = _Value;
}
//#endregion
class DATAPIC {
    constructor(height, ele, _onpic, _offpic) {
        this.val = height;
        this.canvas = ele;
        this.OnPic = _onpic;
        this.OffPic = _offpic;
    };
    get getValue() {
        return this.val;
    };
    set setValue(val) {
        this.val = val;
        Draw_Picture(this.canvas, this.val, this.OnPic, this.OffPic);
    };

}

customTag("HMI-PICTURE", PICTURE);


//#region risgister
function Draw_Picture(can, va, _onpic, _offpic) {
    var canvas = can;
    const ctx = canvas.getContext('2d');
    var a = canvas.width;
    var b = canvas.height;


    //vẽ
    const image = new Image();
    if (va)
        image.src = _onpic;
    else
        image.src = _offpic;
    image.onload = function() {
        ctx.clearRect(0, 0, a, b);
        ctx.drawImage(this, 0, 0, a, b);
    };
};

//#endregion