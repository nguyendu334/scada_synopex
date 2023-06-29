function a() {
    var MQTT_CLIENT_ID =
        "iot_web_temp" +
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
        MQTT_CLIENT.subscribe("SYNOPEXVINA2/HIEUNV/MQTT/AIRCOM");
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
    var text;
    var data;



    var timedata = document.getElementById("timedata");
    // This is the function which handles received messages
    function myMessageArrived(message) {
        var text = JSON.parse(message.payloadString);
        data = text;
        // console.log(data);
        db = data;
        alarmRedZone(data);
    }
}
setInterval(a, 5000);
function alarmRedZone(data) {
    if(data.Room2[0] >= 700 || data.Room2[0] <= 500) {
        document.getElementById('boxRoom2').style.display = "block";
    }
    else{
        document.getElementById('boxRoom2').style.display = "none";
    }
    if(data.n2[0] >= 700|| data.n2[0] <= 500){
        document.getElementById('boxN2').style.display = "block";
    }
    else{
        document.getElementById('boxN2').style.display = "none";
    }
    if(data.room1[0] >= 700|| data.room1[0] <= 500){
        document.getElementById('boxRoom1').style.display = "block";
    }
    else{
        document.getElementById('boxRoom1').style.display = "none";
    }
    if(data.vp[0] >= 700|| data.vp[0] <= 500){
        document.getElementById('boxProduct').style.display = "block";
    }
    else{
        document.getElementById('boxProduct').style.display = "none";
    }
}