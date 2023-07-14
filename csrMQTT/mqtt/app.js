// Generate a new random MQTT client id on each page load
var MQTT_CLIENT_ID = "iot_web_" + Math.floor((1 + Math.random()) * 0x10000000000).toString(16);
var reconnect = false;
// Create a MQTT client instance
var MQTT_CLIENT = new Paho.MQTT.Client("broker.hivemq.com", 8000, "/ws");

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
        var van3 = (datashow[7] == 1) ? false : true;
        van4.Value = (datashow[8] == 1) ? false : true;
        van5.Value = (datashow[9] == 1) ? false : true;
        Errpum3.Visible = (datashow[10] == 1) ? true : false;
        Errpump1.Visible = (datashow[11] == 1) ? true : false;
        ErrPump2.Visible = (datashow[12] == 1) ? true : false;
        ////////////////////
        if (datashow[14] == 0 && datashow[23] == 0) {
            tank1.ValueLevel = 15;
            ERRtank1.Visible = false;
        } else
        if (datashow[14] == 1 && datashow[23] == 0) {
            tank1.ValueLevel = 60;
            pump4.Value = true;
            ERRtank1.Visible = false;
        } else
        if (datashow[14] == 1 && datashow[23] == 1) {
            tank1.ValueLevel = 90;
            pump4.Value = false;

            ERRtank1.Visible = false;
        } else
            ERRtank1.Visible = true;
        ///////////////
        if (datashow[15] == 0 && datashow[22] == 0) {
            tank2.ValueLevel = 15;
            ERRtank2.Visible = false;
        } else
        if (datashow[15] == 1 && datashow[22] == 0) {
            tank2.ValueLevel = 60;
            ERRtank2.Visible = false;
        } else
        if (datashow[15] == 1 && datashow[22] == 1) {
            tank2.ValueLevel = 90;
            ERRtank2.Visible = false;
        } else
            ERRtank2.Visible = true;
        ////////////////////////
        tank3.ValueLevel = (datashow[16] == 1) ? 90 : 45;
        PS1.mk = (datashow[17] == 1) ? true : false;
        PS2.mk = (datashow[18] == 1) ? true : false;
        PS3.mk = (datashow[19] == 1) ? true : false;
        van1.Value = (datashow[20] == 1) ? false : true;
        van2.Value = (datashow[21] == 1) ? false : true;
        pump1.Value = (datashow[27] == 1) ? true : false;
        pump2.Value = (datashow[28] == 1) ? true : false;
        pump3.Value = (datashow[26] == 1) ? true : false;
        Modepump1.Text = (datashow[41] == 1) ? "Auto" : "Manual";
        Modepump2.Text = (datashow[41] == 1) ? "Auto" : "Manual";
        Modepump3.Text = (datashow[40] == 1) ? "Auto" : "Manual";

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

        Btconduc.Text = (datashow[57] / 1000);
        btFlowmeter.Text = ((datashow[59] / 10) - 0.5) > 0 ? (datashow[59] / 10) : "0.0";

        uFfilter1.Value = uFfilter2.Value = uFfilter3.Value = uFfilter4.Value = pump1.Value;
        uFfilter5.Value = uFfilter6.Value = uFfilter7.Value = uFfilter8.Value = uFfilter9.Value = uFfilter10.Value = pump3.Value;

        //  flowArrowSolid4.Visible = flowArrowSolid5.Visible = flowArrowSolid6.Visible = pump1.Value;
        //   flowArrowSolid2.Visible = pump2.Value;
        //   flowArrowSolid1.Visible = van4.Value;
        //   flowArrowSolid3.Visible = van5.Value;

        //   flowArrowSolid12.Visible = pump4.Value;

        // flowArrowSolid7.Visible = flowArrowSolid8.Visible = flowArrowSolid9.Visible = flowArrowSolid10.Visible = flowArrowSolid11.Visible = pump3.Value;

        // tinhruntime(pump1.Value | pump2.Value | pump3.Value);
    } catch {}
}

// Tell MQTT_CLIENT to call myMessageArrived(message) each time a new message arrives
MQTT_CLIENT.onMessageArrived = myMessageArrived;