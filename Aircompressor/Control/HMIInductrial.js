//#region  create tag

function customTag(tagName, fn) {
    document.createElement(tagName);
    var tagInstances = document.getElementsByTagName(tagName);
    for (var i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}
//#endregion
//#region 
function DRAW_LED(element) {
    var canvas = document.createElement("canvas");
    canvas.width = element.attributes.width.value;
    canvas.height = element.attributes.height.value;
    var _Value = false;
    var Coloron = 'gold';
    var Coloroff = 'black';

    try {
        _Value = element.attributes.value.value;
        Coloron = element.attributes.Oncolor.value;
        Coloroff = element.attributes.Offcolor.value;
    } catch (error) {

    }
    element.VALUE = new DATALED(_Value, canvas, Coloron, Coloroff);
    element.appendChild(canvas);
    element.VALUE.setValue = _Value;
}
//#endregion
class DATALED {
    constructor(height, ele, Oncolor, Offcolor) {
        this.val = height;
        this.canvas = ele;
        this.Oncolor = Oncolor;
        this.Offcolor = Offcolor;
    };
    get getValue() {
        return this.val;
    };
    set setValue(val) {
        this.val = val;
        drawPieChart(this.canvas, this.val, this.Oncolor, this.Offcolor);
    };

}

customTag("HMI-LED", DRAW_LED);


//#region risgister
function drawPieChart(can, va, color1, color2) {
    var canvas = can;
    var Oncolor = color1;
    var Offcolor = color2;
    const ctx = canvas.getContext('2d');
    var a = canvas.width;
    var b = canvas.height;
    var x;
    if (a > b)
        x = b;
    else
        x = a;

    //vẽ
    const image = new Image();
    image.src = "/Control/img/lopduoi.png";
    image.onload = function() {
        ctx.clearRect(0, 0, x, x);
        ctx.drawImage(this, 0, 0, x, x);

        ctx.globalAlpha = 1;
        if (va)
            ctx.fillStyle = Oncolor;
        else
            ctx.fillStyle = Offcolor;
        ctx.beginPath();
        ctx.arc(x / 2, x / 2, x / 2 - 0.072 * x, 0, 2 * Math.PI);
        ctx.fill();

        const image1 = new Image(); // Using optional size for image
        image1.src = "/Control/img/loptren.png";
        image1.onload = function() {

            if (va)
                ctx.globalAlpha = 1;
            else
                ctx.globalAlpha = 1;
            ctx.drawImage(this, 0, 0, x, x);
            ctx.beginPath();

            ctx.lineWidth = '2';
            ctx.fillStyle = "grey";
            ctx.arc(x / 2, x / 2, x / 2, 0, 2 * Math.PI);
            ctx.stroke();
        };
    };






    //}//vẽ ảnh

};

//#endregion