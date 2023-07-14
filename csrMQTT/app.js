// Generate a new random MQTT client id on each page load
var MQTT_CLIENT_ID = "iot_web_" + Math.floor((1 + Math.random()) * 0x10000000000).toString(16);
var reconnect = false;
// Create a MQTT client instance
var MQTT_CLIENT = new Paho.MQTT.Client("broker.hivemq.com", 8000, "/wss");

// Tell the client instance to connect to the MQTT broker
MQTT_CLIENT.connect({ onSuccess: myClientConnected });

// This is the function which handles subscribing to topics after a connection is made
function myClientConnected() {
    MQTT_CLIENT.subscribe("Synopex/CSR/mqtt/monitoring");
}

// This is the function which handles received messages
function myMessageArrived(message) {
    // Get the payload
    var data = message.payloadBytes;
    // byte[] data = (sender as MQTTHieunv.Client).ReceivedMessage;
    if (data.length == 61) {
        try {
            //byte[] dataTime = new byte[5] {data[0],0x3A, data[2], 0x3A, data[4]};
            var datenow = data[0] + ":" + data[2] + ":" + data[4];
            if (reconnect) {

                reconnect = false;
            } else
                sigmqtt = 0;

            ShowSTATUS(data);


        } catch {

        }
    }


    // Create a new HTML element wrapping the message payload
    // var messageHTML = $("<p>" + messageBody + "</p>");

    // Insert it inside the ```id=updateMe``` element above everything else that is there 
    // $("#updateMe").prepend(messageHTML);
};


function ShowSTATUS(data) {
    this.datashow = data;
    try {

        var tank1 = document.getElementById("TANK1");
        var tank2 = document.getElementById("TANK2");
        var tank3 = document.getElementById("TANK3");

        var pump1 = document.getElementById("Pump2");
        var pump2 = document.getElementById("Pump3");
        var pump3 = document.getElementById("Pump4");
        var pump4 = document.getElementById("Pump1");

        var uFfilter1 = document.getElementById("UF1");
        var uFfilter2 = document.getElementById("UF2");
        var uFfilter3 = document.getElementById("UF3");
        var uFfilter4 = document.getElementById("UF4");
        var uFfilter5 = document.getElementById("RO1");
        var uFfilter6 = document.getElementById("RO2");
        var uFfilter7 = document.getElementById("RO3");
        var uFfilter8 = document.getElementById("RO4");
        var uFfilter9 = document.getElementById("RO5");
        var uFfilter10 = document.getElementById("RO6");

        var van1 = document.getElementById("Valve1");
        var van2 = document.getElementById("Valve2");
        var van3 = document.getElementById("Valve3");
        var van4 = document.getElementById("Valve4");
        var van5 = document.getElementById("Valve5");

        var PS1 = document.getElementById("den1");
        var PS2 = document.getElementById("den2");
        var PS3 = document.getElementById("den3");

        var Modepump1 = document.getElementById("Manu1");
        var Modepump2 = document.getElementById("Manu2");
        var Modepump3 = document.getElementById("Manu3");

        var btFlowmeter = document.getElementById("Flow");
        var Btconduc = document.getElementById("Conduc");

        var Errpump1 = document.getElementById("Errpump1");
        var Errpump2 = document.getElementById("Errpump2");
        var Errpump3 = document.getElementById("Errpump3");


        var ERRtank1 = document.getElementById("Errtank1");
        var ERRtank2 = document.getElementById("Errtank2");
        // var ERRtank3 = document.getElementById("Errtank3");


        van3.VALUE.setValue = (datashow[7] == 1) ? false : true;
        van4.VALUE.setValue = (datashow[8] == 1) ? false : true;
        van5.VALUE.setValue = (datashow[9] == 1) ? false : true;
        van1.VALUE.setValue = (datashow[20] == 1) ? false : true;
        van2.VALUE.setValue = (datashow[21] == 1) ? false : true;
        Errpump3.VALUE.setValue = (datashow[10] == 1) ? true : false;
        Errpump1.VALUE.setValue = (datashow[11] == 1) ? true : false;
        Errpump2.VALUE.setValue = (datashow[12] == 1) ? true : false;
        ////////////////////
        if (datashow[14] == 0 && datashow[23] == 0) {
            tank1.cuongkool.setValue = 1500;
            ERRtank1.VALUE.setValue = false;
        } else
        if (datashow[14] == 1 && datashow[23] == 0) {
            tank1.cuongkool.setValue = 6000;
            pump4.VALUE.setValue = true;
            ERRtank1.VALUE.setValue = false;
        } else
        if (datashow[14] == 1 && datashow[23] == 1) {
            tank1.cuongkool.setValue = 9000;
            pump4.VALUE.setValue = false;

            ERRtank1.VALUE.setValue = false;
        } else
            ERRtank1.VALUE.setValue = true;
        ///////////////
        if (datashow[15] == 0 && datashow[22] == 0) {
            tank2.cuongkool.setValue = 1500;
            ERRtank2.VALUE.setValue = false;
        } else
        if (datashow[15] == 1 && datashow[22] == 0) {
            tank2.cuongkool.setValue = 6000;
            ERRtank2.VALUE.setValue = false;
        } else
        if (datashow[15] == 1 && datashow[22] == 1) {
            tank2.cuongkool.setValue = 9000;
            ERRtank2.VALUE.setValue = false;
        } else
            ERRtank2.VALUE.setValue = true;
        pump1.VALUE.setValue = (datashow[27] == 1) ? true : false;
        pump2.VALUE.setValue = (datashow[28] == 1) ? true : false;
        pump3.VALUE.setValue = (datashow[26] == 1) ? true : false;
        ////////////////////////
        tank3.cuongkool.setValue = (datashow[16] == 1) ? 9000 : 4500;

        uFfilter1.VALUE.setValue = pump1.VALUE.getValue;
        uFfilter2.VALUE.setValue = pump1.VALUE.getValue;
        uFfilter3.VALUE.setValue = pump1.VALUE.getValue;
        uFfilter4.VALUE.setValue = pump1.VALUE.getValue;

        uFfilter5.VALUE.setValue = pump3.VALUE.getValue;
        uFfilter6.VALUE.setValue = pump3.VALUE.getValue;
        uFfilter7.VALUE.setValue = pump3.VALUE.getValue;
        uFfilter8.VALUE.setValue = pump3.VALUE.getValue;
        uFfilter9.VALUE.setValue = pump3.VALUE.getValue;
        uFfilter10.VALUE.setValue = pump3.VALUE.getValue;

        PS1.VALUE.setValue = (datashow[17] == 1) ? true : false;
        PS2.VALUE.setValue = (datashow[18] == 1) ? true : false;
        PS3.VALUE.setValue = (datashow[19] == 1) ? true : false;
        Modepump1.VALUE.setValue = (datashow[41] == 1) ? true : false;
        Modepump2.VALUE.setValue = (datashow[41] == 1) ? true : false;
        Modepump3.VALUE.setValue = (datashow[40] == 1) ? true : false;

        Btconduc.VALUE.setValue = (datashow[57] / 1000).toFixed(2);
        btFlowmeter.VALUE.setValue = ((datashow[59] / 10) - 0.5) > 0 ? (datashow[59] / 10).toFixed(1) : "0.0";
        /* 
         
         

         Modepump1.BackColor = (datashow[41] == 1) ? Color.Gold : Color.Red;
         Modepump2.BackColor = (datashow[41] == 1) ? Color.Gold : Color.Red;
         Modepump3.BackColor = (datashow[40] == 1) ? Color.Gold : Color.Red;

         ERRvan1o.Visible = (datashow[43] == 1) ? true : false;
         ERRvan2o.Visible = (datashow[44] == 1) ? true : false;
         ERRvan3o.Visible = (datashow[45] == 1) ? true : false;
         ERRvan4o.Visible = (datashow[46] == 1) ? true : false;
         ERRvan5o.Visible = (datashow[47] == 1) ? true : false;
         Errvan1c.Visible = (datashow[48] == 1) ? true : false;
         ERRvan2c.Visible = (datashow[49] == 1) ? true : false;
         ERRvan3c.Visible = (datashow[50] == 1) ? true : false;
         ERRvan4c.Visible = (datashow[51] == 1) ? true : false;
         ERRvan5c.Visible = (datashow[52] == 1) ? true : false;

         SVtime.Text = datashow[53].ToString() + "Hours";
         BWtime.Text = (datashow[55] + datashow[56] * 256).ToString() + "Seconds";

      

         

         //  flowArrowSolid4.Visible = flowArrowSolid5.Visible = flowArrowSolid6.Visible = pump1.Value;
         //   flowArrowSolid2.Visible = pump2.Value;
         //   flowArrowSolid1.Visible = van4.Value;
         //   flowArrowSolid3.Visible = van5.Value;

         //   flowArrowSolid12.Visible = pump4.Value;

         // flowArrowSolid7.Visible = flowArrowSolid8.Visible = flowArrowSolid9.Visible = flowArrowSolid10.Visible = flowArrowSolid11.Visible = pump3.Value;

         // tinhruntime(pump1.Value | pump2.Value | pump3.Value);*/
    } catch {}
}

// Tell MQTT_CLIENT to call myMessageArrived(message) each time a new message arrives
MQTT_CLIENT.onMessageArrived = myMessageArrived;

setInterval(timer, 1000);
sigmqtt = 0;

function timer() {

    var _sig = document.getElementById("SIGNAL");

    sigmqtt++;
    _sig.VALUE.setValue = sigmqtt > 7 ? false : true;
    //  buttonSignal.BackColor = (/*DateTime.ParseExact(DateTime.Now.ToString("H:mm:ss"), "H:mm:ss", CultureInfo.InvariantCulture).Second-DateTime.ParseExact(datenow, "H:mm:ss", CultureInfo.InvariantCulture).Second*/sigmqtt > 10) ? Color.Red : Color.Gold;
    // ERRShow((sigmqtt > 20) ? "ERR- CHECK INTERNET PLZ         " : "SYSTEM PROSSING    ");

    //  if (sigmqtt > 20)
    //      datalog = new string[18] { "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" };


    try {
        if (sigmqtt > 15) {
            reconnect = true;
            MQTT_CLIENT.connect({ onSuccess: myClientConnected });
            sigmqtt = 10;
        }
    } catch {}


}