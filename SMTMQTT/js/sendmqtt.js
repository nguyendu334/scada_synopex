var MQTT_CLIENT_ID =
  "iot_web_oke_" + Math.floor((1 + Math.random()) * 0x10000000000).toString(16);
var reconnect = false;
// Create a MQTT client instance
var MQTT_CLIENT = new Paho.MQTT.Client(
  "broker.hivemq.com",
  8000,
  MQTT_CLIENT_ID
);

// Tell the client instance to connect to the MQTT broker
var mqtt = MQTT_CLIENT.connect({ onSuccess: myClientConnected });
// Tell MQTT_CLIENT to call myMessageArrived(message) each time a new message arrives

MQTT_CLIENT.onMessageArrived = myMessageArrived;
// set callback handlers
MQTT_CLIENT.onConnectionLost = onConnectionLost;

var mqtt_isconnected = false;

// This is the function which handles subscribing to topics after a connection is made
function myClientConnected() {
  MQTT_CLIENT.subscribe("SYNOPEXVINA2/IIOT/MQTT/SMT1");

  mqtt_isconnected = true;
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
    mqtt_isconnected = false;
  }
}

function myMessageArrived(message) {
  var topic = message.destinationName;

  var data = JSON.parse(message.payloadString);
  console.log(data);
}
function changevaluecheckbox() {
  for (var i = 1; i < 17; i++) {
    if (document.getElementById("vehicle" + i).checked) {
      document.getElementById("vehicle" + i).value = true;
      console.log(document.getElementById("vehicle" + i).checked);

      var message = new Paho.MQTT.Message(
        JSON.stringify({
          SMTMACHINE1: {
            LINE_ENABLE: document.getElementById("linesv1").checked,
            PRINTER: 0,
            REFLOW: 53.2,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE2: {
            LINE_ENABLE: true,
            PRINTER: 15.8,
            REFLOW: 0,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: true,
            REFLOW_ISCONNECTED: false,
          },
          SMTMACHINE3: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 56,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE4: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 59.8,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE5: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 54.4,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE6: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 52.6,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE7: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 0,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: false,
          },
          SMTMACHINE8: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 49.9,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE9: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 0,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: false,
          },
          SMTMACHINE10: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 38.1,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE11: {
            LINE_ENABLE: true,
            PRINTER: 21.3,
            REFLOW: 58,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: true,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE12: {
            LINE_ENABLE: true,
            PRINTER: 24.2,
            REFLOW: 46.4,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: true,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE13: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 52.4,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE14: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 51.5,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE15: {
            LINE_ENABLE: true,
            PRINTER: 22.5,
            REFLOW: 49.1,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: true,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE16: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 51.3,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          EXHAUFAN1: {
            RUNNING: false,
            TEMPERATURE: 0,
          },
          EXHAUFAN2: {
            RUNNING: false,
            TEMPERATURE: 0,
          },
          EXHAUFAN3: {
            RUNNING: false,
            TEMPERATURE: 0,
          },
          timestamp: "20220411-130859",
          PLC_isconnected1_7: false,
          PLC_isconnected8_16: false,
          Exhaufan_isconnected: false,
          id: 1,
        })
      );
      message.destinationName = "daylatest";
      message.qos = 0;
      message.retained = true;
      MQTT_CLIENT.send(message);
      return false;
    } else {
      console.log(document.getElementById("vehicle" + i).checked);
      var message = new Paho.MQTT.Message(
        JSON.stringify({
          SMTMACHINE1: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 53.2,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE2: {
            LINE_ENABLE: true,
            PRINTER: 15.8,
            REFLOW: 0,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: true,
            REFLOW_ISCONNECTED: false,
          },
          SMTMACHINE3: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 56,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE4: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 59.8,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE5: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 54.4,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE6: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 52.6,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE7: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 0,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: false,
          },
          SMTMACHINE8: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 49.9,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE9: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 0,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: false,
          },
          SMTMACHINE10: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 38.1,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE11: {
            LINE_ENABLE: true,
            PRINTER: 21.3,
            REFLOW: 58,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: true,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE12: {
            LINE_ENABLE: true,
            PRINTER: 24.2,
            REFLOW: 46.4,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: true,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE13: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 52.4,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE14: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 51.5,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE15: {
            LINE_ENABLE: true,
            PRINTER: 22.5,
            REFLOW: 49.1,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: true,
            REFLOW_ISCONNECTED: true,
          },
          SMTMACHINE16: {
            LINE_ENABLE: true,
            PRINTER: 0,
            REFLOW: 51.3,
            PRINTER_DIS_BZ: false,
            REFLOW_DIS_BZ: false,
            PRINTER_ISCONNECTED: false,
            REFLOW_ISCONNECTED: true,
          },
          EXHAUFAN1: {
            RUNNING: false,
            TEMPERATURE: 0,
          },
          EXHAUFAN2: {
            RUNNING: false,
            TEMPERATURE: 0,
          },
          EXHAUFAN3: {
            RUNNING: false,
            TEMPERATURE: 0,
          },
          timestamp: "20220411-130859",
          PLC_isconnected1_7: false,
          PLC_isconnected8_16: false,
          Exhaufan_isconnected: false,
          id: 1,
        })
      );
      message.destinationName = "SYNOPEXVINA2/IIOT/MQTT/SMT1";
      message.qos = 0;
      message.retained = true;
      MQTT_CLIENT.send(message);
      return false;
    }
  }
}
// changevaluecheckbox();
// function sendmessg() {
//   var message = new Paho.MQTT.Message(
//     JSON.stringify({ first_name: "ankur", last_name: "bhatia" })
//   );
//   message.destinationName = "SYNOPEXVINA2/IIOT/MQTT/SMT1";
//   message.qos = 0;
//   message.retained = true;
//   MQTT_CLIENT.send(message);
//   return false;
// }
