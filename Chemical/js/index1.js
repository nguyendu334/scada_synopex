var MQTT_CLIENT_ID =
  "iot_web_chemical_" +
  Math.floor((1 + Math.random()) * 0x10000000000).toString(16);
var reconnect = false;
// Create a MQTT client instance
var MQTT_CLIENT = new Paho.MQTT.Client(
  "broker.hivemq.com",
  8000,
  MQTT_CLIENT_ID
);

// Tell the client instance to connect to the MQTT broker
MQTT_CLIENT.connect({ onSuccess: myClientConnected });
// Tell MQTT_CLIENT to call myMessageArrived(message) each time a new message arrives

MQTT_CLIENT.onMessageArrived = myMessageArrived;
// set callback handlers
MQTT_CLIENT.onConnectionLost = onConnectionLost;

var mqtt_isconnected = false;

// This is the function which handles subscribing to topics after a connection is made
function myClientConnected() {
  MQTT_CLIENT.subscribe("SYNOPEXVINA/IOT/MQTT/CHEMICAL");
  mqtt_isconnected = true;
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    // console.log("onConnectionLost:"+responseObject.errorMessage);
    mqtt_isconnected = false;
  }
}

//Khởi tạo các mảng cho data
var dataCuCl = [];
var datacheck = [];
var dataTime = [];
var data1;
var dataold;
var timedata = document.getElementById("timedata");
// This is the function which handles received messages
function myMessageArrived(message) {
  var topic = message.destinationName;
  var data = JSON.parse(message.payloadString);
  if (dataold != data) {
    dataold = data;
    sigmqtt = 0;
  }
  if (reconnect) {
    reconnect = false;
  }
  console.log(data);
  lineChartRightTop(data);
  lineChartRight(data);
  ShowdataDay(data);
  // onOffButtom(data);
  // dataPhantram(data);
  autoBaodong(data);
}

function lineChartRightTop(data) {
  // khởi tạo mảng để so sánh
  var checkdataCuCl = [];
  for (let m = 0; m < data.Chart_Area.CuCL2.length; m++) {
    checkdataCuCl.push(data.Chart_Area.CuCL2[m].rate);
  }
  var scheckdataCuCl = JSON.stringify(checkdataCuCl);
  var sdataCuCl = JSON.stringify(dataCuCl);

  if (sdataCuCl !== scheckdataCuCl) {
    dataCuCl = [];
    for (let m = 0; m < data.Chart_Area.CuCL2.length; m++) {
      dataCuCl.push(data.Chart_Area.CuCL2[m].rate);
    }
    new Chart("myChart", {
      type: "line",
      data: {
        labels: [
          "8",
          "",
          "",
          "",
          "12",
          "",
          "",
          "",
          "",
          "",
          "18",
          "",
          "",
          "",
          "",
          "23",
          "",
          "",
          "",
          "",
          "4",
          "",
          "",
          "",
        ],
        datasets: [
          {
            label: "CuCl2",
            data: dataCuCl,
            borderColor: "red",
            fill: true,
            backgroundColor: "#d0f1de",
            options: options,
          },
        ],
      },
      options: {
        legend: { display: false },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
              },
            },
          ],
        },
      },
    });
  }
  //End LineChart
}

function lineChartRight(data) {
  // khởi tạo mảng để so sánh
  var sosanhArray = [];
  for (let index = 0; index < data.Chart_Area.HCL.length; index++) {
    sosanhArray.push(data.Chart_Area.HCL[index].rate);
  }
  var a = JSON.stringify(sosanhArray);
  var b = JSON.stringify(datacheck);

  if (a !== b) {
    datacheck = [];
    for (let index = 0; index < data.Chart_Area.HCL.length; index++) {
      datacheck.push(data.Chart_Area.HCL[index].rate);
    }

    new Chart("myChart1", {
      type: "line",
      data: {
        labels: [
          "8",
          "",
          "",
          "",
          "12",
          "",
          "",
          "",
          "",
          "",
          "18",
          "",
          "",
          "",
          "",
          "23",
          "",
          "",
          "",
          "",
          "4",
          "",
          "",
          "",
        ],
        datasets: [
          {
            label: "My First dataset",
            data: datacheck,
            borderColor: "red",
            fill: true,
            backgroundColor: "blue",
            options: options,
          },
        ],
      },
      options: {
        legend: { display: false },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
              },
            },
          ],
        },
      },
    });
  }
  //End LineChart
}

function ShowdataDay(data) {
  //Table data checksheet theo giờ
  var datadataSHtheogiochecksheet = Object.values(data.Checksheet.data);
  //console.log(datadataSHtheogiochecksheet);
  var htmldatadataSHtheogiochecksheet = document.getElementById(
    "taleRightCheckSheet"
  );

  //Khởi tạo html mặc định table
  htmldatadataSHtheogiochecksheet.innerHTML =
    '<colgroup span="6" width="64"></colgroup>' +
    "<tr>" +
    '  <td colspan=7 height="41" align="center" style="background-image: linear-gradient(to bottom, #00c9ff 0%, #92fe9d 100%);" valign=middle><font size=4 color="#000000">CHEMICAL LEVEL CHECKSHEET (%)</font></td>' +
    "</tr>" +
    '<tr style="    background: beige;">' +
    '<td align="center" height="40" valign=midde><font color="#000000">HOUR</font></td>' +
    '<td align="center" height="40" valign=midde><font color="#000000">HNO3_I</font></td>' +
    '<td align="center" height="40" valign=midde><font color="#000000">HNO3_O</font></td>' +
    '<td align="center" height="40" valign=midde><font color="#000000">OXA-100</font></td>' +
    '<td align="center" height="40" valign=midde><font color="#000000">CuCl2</font></td>' +
    '<td align="center" height="40" valign=midde><font color="#000000">HCl</font></td>' +
    // '<td align="center" valign=bottom><font color="#000000">m3</font></td>' +
    "</tr>";

  //thêm các dòng theo data
  for (let index = 0; index < data.Checksheet.data.length; index++) {
    htmldatadataSHtheogiochecksheet.innerHTML +=
      "<tr>" +
      '<td height="20"  align="center" valign=bottom sdval="1" sdnum="1033;"><font color="#000000">' +
      data.Checksheet.data[index].Hour +
      "</font></td>" +
      '<td align="center" valign=bottom sdval="0" sdnum="1033;"> <font color="#000000">' +
      data.Checksheet.data[index]["S%"] +
      "</font></td>" +
      '<td align="center" valign=bottom sdval="0" sdnum="1033;"><font color="#000000">' +
      data.Checksheet.data[index]["Sm3"] +
      "</font></td>" +
      '<td align="center" valign=bottom sdval="0" sdnum="1033;"><font color="#000000">' +
      data.Checksheet.data[index]["R%"] +
      "</font></td>" +
      '<td align="center" valign=bottom sdval="0" sdnum="1033;"><font color="#000000">' +
      data.Checksheet.data[index]["Rm3"] +
      "</font></td>" +
      '<td align="center" valign=bottom sdval="0" sdnum="1033;"><font color="#000000">' +
      data.Checksheet.data[index]["DI%"] +
      "</font></td>" +
      // '<td align="center" valign=bottom sdval="0" sdnum="1033;"><font color="#000000">' + data.Checksheet.data[index]["DIm3"] + '</font></td>' +
      "</tr>";
  }
}
function onOffButtom(data) {
  // set giá trị cho các nút tín hiệu
  var hno3_inlet = document.getElementById("hno3_inlet");
  var hno3_outlet = document.getElementById("hno3_outlet");
  var oxa_100 = document.getElementById("oxa-100");
  var cucl2 = document.getElementById("cucl2");
  var hcl = document.getElementById("hcl");

  if (data.PLCConnect.HNO3_I_isconnected == true) {
    hno3_inlet.classList.add("green");
  } else {
    hno3_inlet.classList.remove("green");
  }
  if (data.PLCConnect.HNO3_O_isconnected == true) {
    hno3_outlet.classList.add("green");
  } else {
    hno3_outlet.classList.remove("green");
  }
  if (data.PLCConnect.OXA100_isconnected == true) {
    oxa_100.classList.add("green");
  } else {
    oxa_100.classList.remove("green");
  }
  if (data.PLCConnect.CuCL2_isconnected == true) {
    cucl2.classList.add("green");
  } else {
    cucl2.classList.remove("green");
  }
  if (data.PLCConnect.HCL_isconnected == true) {
    hcl.classList.add("green");
  } else {
    hcl.classList.remove("green");
  }
  if (data1 != data) {
    data1 = data;
    var dt1 = new Date();
    var month1 = dt1.getMonth() + 1;
    var year1 = dt1.getFullYear();
    var day1 = dt1.getDate();
    var h1 = dt1.getHours();
    var m1 = dt1.getMinutes();
    var s1 = dt1.getSeconds();
    if (h1 < 10) h1 = "0" + h1;
    if (m1 < 10) m1 = "0" + m1;
    if (s1 < 10) s1 = "0" + s1;
    var time =
      h1 + ":" + m1 + ":" + s1 + " " + day1 + "/" + month1 + "/" + year1;
    timedata.value = time;
  }
}

function dataPhantram(data) {
  var textCuCl2_phantram = document.getElementById("textCuCl2-phantram");
  var textHCl_phantram = document.getElementById("textHCl-phantram");
  var textHNO3_phantram1 = document.getElementById("textHNO3-phantram1");

  var soluongHNO3_i = document.getElementById("soluongHNO3-i");
  var soluongHCl = document.getElementById("soluongHCl");
  var soluongCuCl = document.getElementById("soluongCuCl");

  var textHNO3_error = document.getElementById("textHNO3-error");
  var textCuCl2_error = document.getElementById("textCuCl2-error");
  var textHCl_error = document.getElementById("textHCl-error");

  textCuCl2_phantram.value = data.Level.CuCL2.toFixed(1) + " %";
  textHCl_phantram.value = data.Level.HCL.toFixed(1) + " %";
  textHNO3_phantram1.value = data.Level.HNO3_I.toFixed(1) + " %";
  console.log(textCuCl2_phantram.value);
  document.getElementById("bentrongHNO3AU").style.height= textCuCl2_phantram.value + "%";
  soluongHNO3_i.style.height = data.Level.HNO3_I.toFixed(1) + "%";
  soluongHCl.style.height = data.Level.HCL.toFixed(1) + "%";
  soluongCuCl.style.height = data.Level.CuCL2.toFixed(1) + "%";

  if (data.Level.HNO3_I < 25 || data.Level.HNO3_I > 75) {
    soluongHNO3_i.style.backgroundColor = "red";
    textHNO3_phantram1.style.backgroundColor = "red";
    textHNO3_error.setAttribute("type", "text");
  } else {
    textHNO3_error.setAttribute("type", "hidden");
    soluongHNO3_i.style.backgroundColor = "aqua";
    textHNO3_phantram1.style.backgroundColor = "black";
  }
  if (data.Level.CuCL2 < 25 || data.Level.CuCL2 > 75) {
    soluongCuCl.style.backgroundColor = "aqua";
    textCuCl2_phantram.style.backgroundColor = "black";
    textCuCl2_error.setAttribute("type", "text");
  } else {
    textCuCl2_error.setAttribute("type", "hidden");
  }

  if (data.Level.HCL < 25 || data.Level.HCL > 75) {
    soluongHCl.style.backgroundColor = "red";
    textHCl_phantram.style.backgroundColor = "red";
    textHCl_error.setAttribute("type", "text");
  } else {
    textHCl_error.setAttribute("type", "hidden");
    soluongHCl.style.backgroundColor = "aqua";
    textHCl_phantram.style.backgroundColor = "black";
  }
}

setInterval(timer, 1000);
sigmqtt = 0;
function timer() {
  var dt = new Date();
  var month = dt.getMonth() + 1;
  var year = dt.getFullYear();
  var day = dt.getDate();
  var h = dt.getHours();
  var m = dt.getMinutes();
  var s = dt.getSeconds();
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  document.getElementById("myTime").innerHTML =
    h + ":" + m + ":" + s + "      " + day + "/" + month + "/" + year;
  var connect = document.getElementById("connect");
  sigmqtt++;

  if (!mqtt_isconnected) {
    connect.classList.remove("green");
  } else {
    connect.classList.add("green");
  }
  try {
    if (sigmqtt > 15) {
      reconnect = true;
      m = MQTT_CLIENT.isConnected;
      MQTT_CLIENT.connect({ onSuccess: myClientConnected });
      sigmqtt = 10;
      console.log("reconnect");
    }
  } catch (err) {
    loi = err.message;
  }
}

//Start Setting Line chart checksheet
var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "red",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};
console.log(
  "%cHello Guy !! WelCome To Synopex ",
  "font-weight: bold; font-size: 30px;color:green"
);
console.log(
  "%c->PLC,HMI,MCU,DCS,SCADA IOT, HTML ,CSS ,JS !! ",
  "font-weight: bold; font-size: 15px;color:#068e8e"
);

var x = document.getElementById("myAudio");
var loa = document.getElementById("loa");

// function playAudio() {
//     x.play();
//     loa.src = "images/ALARM.png";

// }

// function pauseAudio() {
//     x.pause();
//     loa.src = "images/onvolumn.png";
// }

function autoBaodong(data) {
  if (
    data.Level.CuCL2 < 25 ||
    data.Level.CuCL2 > 75 ||
    data.Level.HCL < 25 ||
    data.Level.HCL > 75 ||
    data.Level.HNO3_I < 25 ||
    data.Level.HNO3_I > 75
  ) {
    x.play();
    loa.src = "images/ALARM.png";
  } else {
    x.pause();
    loa.src = "images/onvolumn.png";
  }
  var controlsEnabled = false;
  $("#loa").on("click", function () {
    controlsEnabled = !controlsEnabled;
    if (controlsEnabled == true) {
      x.muted = true;
      loa.src = "images/volume.png";
    } else {
      x.muted = false;
      if (
        data.Level.CuCL2 < 25 ||
        data.Level.CuCL2 > 75 ||
        data.Level.HCL < 25 ||
        data.Level.HCL > 75 ||
        data.Level.HNO3_I < 25 ||
        data.Level.HNO3_I > 75
      ) {
        loa.src = "images/ALARM.png";
      } else {
        loa.src = "images/onvolumn.png";
      }
    }
  });
}

//		tank1.style.height	="76.2%";
