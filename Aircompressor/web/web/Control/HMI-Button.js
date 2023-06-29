//here you should add the function from the tutorial
//How to Draw Charts Using JavaScript and HTML5 Canvas
//...
function customTag(tagName, fn) {
    document.createElement(tagName);
    //find all the tags occurrences (instances) in the document
    var tagInstances = document.getElementsByTagName(tagName);
    //for each occurrence run the associated function
    for (var i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}

function PiechartTag(element) {
    //add the canvas where to draw the piechart
    var canvas = document.createElement("canvas");
    //get the width and height from the custom tag attributes
    canvas.width = element.attributes.width.value;
    canvas.height = element.attributes.height.value;
    element.appendChild(canvas);

    //get the colors for the slices from the custom tag attribute
    var colors = element.attributes.colors.value.split(",");

    //load the chart data from the <codingdude-data> sub-tags
    var chartData = {};
    var chartDataElements = element.querySelectorAll("codingdude-data");
    for (var i = 0; i < chartDataElements.length; i++) {
        chartData[chartDataElements[i].attributes.category.value] = parseFloat(chartDataElements[i].textContent);
        //remove the data sub-tags
        chartDataElements[i].parentNode.removeChild(chartDataElements[i]);
    }

    //call the draw() function
    var data = [
        { label: 'Food', value: 90 },
        { label: 'Party', value: 150 },
        { label: 'Rent', value: 80 },
        { label: 'Chocolates', value: 120 }
    ];
    var colors1 = ['#39CCCC', '#3D9970', '#001F3F', '#85144B'];
    drawPieChart(canvas, data, colors1);

    /* new Piechart(
        {
        canvas:canvas,
        data:chartData,
        colors:colors
        }
    ).draw();*/
}

customTag("codingdude-piechart", PiechartTag);


function drawPieChart(can, data, colors) {
    var canvas = can;
    var ctx = canvas.getContext('2d');
    var x = canvas.width / 2;
    y = canvas.height / 2;
    var color,
        startAngle,
        endAngle,
        total = getTotal(data);

    for (var i = 0; i < data.length; i++) {
        color = colors[i];
        startAngle = calculateStart(data, i, total);
        endAngle = calculateEnd(data, i, total);

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(x, y);
        ctx.arc(x, y, y - 100, startAngle, endAngle);
        ctx.fill();
        ctx.rect(canvas.width - 200, y - i * 30, 12, 12);
        ctx.fill();
        ctx.font = "13px sans-serif";
        ctx.fillText(data[i].label + " - " + data[i].value + " (" + calculatePercent(data[i].value, total) + "%)", canvas.width - 200 + 20, y - i * 30 + 10);
    }
};

function calculatePercent(value, total) {

    return (value / total * 100).toFixed(2);
};

function getTotal(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += data[i].value;
    }

    return sum;
};

function calculateStart(data, index, total) {
    if (index === 0) {
        return 0;
    }

    return calculateEnd(data, index - 1, total);
};

function calculateEndAngle(data, index, total) {
    var angle = data[index].value / total * 360;
    var inc = (index === 0) ? 0 : calculateEndAngle(data, index - 1, total);

    return (angle + inc);
};

function calculateEnd(data, index, total) {

    return degreeToRadians(calculateEndAngle(data, index, total));
};

function degreeToRadians(angle) {
    return angle * Math.PI / 180
}