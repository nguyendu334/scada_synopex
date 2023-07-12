var MQTT_CLIENT_ID =
  "iot_web_firealarm_" +
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
  MQTT_CLIENT.subscribe("SYNOPEX/IOT/FIREALARM/NM3");
  mqtt_isconnected = true;
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
    mqtt_isconnected = false;
  }
}

//Khởi tạo các mảng cho data
var dataCuCl = [];
var datacheck = [];
var dataTime = [];
var data1;
var dataold;
var text;
var data;
var timedata = document.getElementById("timedata");
// This is the function which handles received messages
function myMessageArrived(message) {
  var topic = message.destinationName;
  var text = JSON.parse(message.payloadString);
  data = text;
  if (dataold != data) {
    dataold = data;
    sigmqtt = 0;
  }
  alarm(data);
  timedata.value = data.ts;
}
setInterval(connectST,1000);
function connectST(){
    // console.log(mqtt_isconnected);

    var connect = document.getElementById("connect");
    sigmqtt++;
    if (!mqtt_isconnected) {
      connect.classList.remove("on");
    } else {
      connect.classList.add("on");
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
// setInterval(() => {
//     read();
// }, 100);

// var connect = document.getElementById('connect');
// const read = async () => {
//     try {
//         const response = await axios.get('./firealarm.json');
//         connect.classList.add('green');
//         connectAll(response.data);
        
//     } catch {}
// };

var connectAll = (data) => {
    let SPINKLER = document.getElementById('SPINKLER');
    let pumpPlc = document.getElementById('pumpPlc');
    let mqtt = document.getElementById('mqtt');
    let timedata = document.getElementById('timedata');

    if (data.PLCConnect.Spinkler_isconnected == true) {
        SPINKLER.classList.add('green');
    } else {
        SPINKLER.classList.remove('green');
    }

    if (data.PLCConnect.MQTT_isconnected == true) {
        mqtt.classList.add('green');
    } else {
        mqtt.classList.remove('green');
    }

    if (data.PLCConnect.PLC_isconnected == true) {
        pumpPlc.classList.add('green');
    } else {
        pumpPlc.classList.remove('green');
    }
    
    // timedata.value = data.Timespan;
};

const alarm = (data) => {
    var dataAlarm = data.datazone;
    var soundAlarm = document.getElementById('myAudio');
    var loa = document.getElementById('loa');

    for (var i = 0; i < 30; i++) {
        if (Object.values(dataAlarm)[i] === true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`lamp ${i + 1}`).style.opacity = '0';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`lamp ${i + 1}`).style.animation = 'opacity 0.5s infinite linear';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`cab ${i + 1}`).style.animation = 'fill 0.5s infinite linear';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`zone ${i + 1}`).style.animation = 'fill 0.5s infinite linear';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`smoke${i + 1}`).style.opacity = '0.8';

            soundAlarm.play();
            loa.src = 'img/ALARM.png';
            loa.style.cursor = 'pointer';

            $('#loa').click(function () {
                loa.style.opacity = '0';
                soundAlarm.muted = true;
            });

            if (loa.style.opacity === '0') {
                $('#loa').click(function () {
                    loa.style.opacity = '1';
                    soundAlarm.muted = false;
                });
            }
        }

        if (Object.values(dataAlarm).every((item) => item === false)) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`lamp ${i + 1}`).style.opacity = '1';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`lamp ${i + 1}`).style.animation = 'none';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`cab ${i + 1}`).style.animation = 'none';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`zone ${i + 1}`).style.animation = 'none';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`smoke${i + 1}`).style.opacity = '0';

            soundAlarm.pause();
            loa.src = 'img/onvolumn.png';
            loa.style.cursor = 'pointer';

            $('#loa').click(function () {
                loa.style.opacity = '0';
                soundAlarm.muted = true;
            });

            if (loa.style.opacity === '0') {
                $('#loa').click(function () {
                    loa.style.opacity = '1';
                    soundAlarm.muted = false;
                });
            }
        }
    }
};
