// setInterval(timer, 1000);
var arrold;
var x = document.getElementById('myAudio');
var loa = document.getElementById('loa');
var data;

var MQTT_CLIENT_ID = 'iot_web' + Math.floor((1 + Math.random()) * 0x10000000000).toString(16);
var reconnect = false;
// Create a MQTT client instance
var MQTT_CLIENT = new Paho.MQTT.Client('broker.hivemq.com', 8000, MQTT_CLIENT_ID);

// Tell the client instance to connect to the MQTT broker
MQTT_CLIENT.connect({ onSuccess: myClientConnected });
// Tell MQTT_CLIENT to call myMessageArrived(message) each time a new message arrives

MQTT_CLIENT.onMessageArrived = myMessageArrived;
// set callback handlers
MQTT_CLIENT.onConnectionLost = onConnectionLost;

var mqtt_isconnected = false;

// This is the function which handles subscribing to topics after a connection is made
function myClientConnected() {
    MQTT_CLIENT.subscribe('SYNOPEXVINA2/IIOT/MQTT/RAWWATERSYSTEM');
    mqtt_isconnected = true;
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        // console.log("onConnectionLost:"+responseObject.errorMessage);
        mqtt_isconnected = false;
    }
}

// This is the function which handles received messages
function myMessageArrived(message) {
    data = JSON.parse(message.payloadString);
}

setInterval(() => {
    rd();
}, 1000);

function rd() {
    var dt = new Date();
    var month = dt.getMonth() + 1;
    var year = dt.getFullYear();
    var day = dt.getDate();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    document.getElementById('myTime').innerHTML =
        h + ':' + m + ':' + s + '      ' + day + '/' + month + '/' + year;
    var timedata = document.getElementById('timedata');
    timedata.value = h + ':' + m + ':' + s + '      ' + day + '/' + month + '/' + year;
    var arr = [];

    arr.push(
        data.Data_bits._SP_01A_F_SERVICE_PUMP,
        data.Data_bits._SP_01B_F_SERVICE_PUMP,
        data.Data_bits._SP_01C_F_SERVICE_PUMP,
        data.Data_bits._BP_01A_F_NaCl_PUMP,
        data.Data_bits._BP_01B_F_NaCl_PUMP,
        data.Data_bits._NP_01A_F_BACK_WASH_PUMP,
        data.Data_bits._NP_01B_F_BACK_WASH_PUMP,
    );
    if (JSON.stringify(arrold) != JSON.stringify(arr)) {
        autoBaodong();
        arrold = arr;
    }

    function autoBaodong() {
        if (
            data.Data_bits._SP_01A_F_SERVICE_PUMP == 1 ||
            data.Data_bits._SP_01B_F_SERVICE_PUMP == 1 ||
            data.Data_bits._SP_01C_F_SERVICE_PUMP == 1 ||
            data.Data_bits._BP_01A_F_NaCl_PUMP == 1 ||
            data.Data_bits._BP_01B_F_NaCl_PUMP == 1 ||
            data.Data_bits._NP_01A_F_BACK_WASH_PUMP == 1 ||
            data.Data_bits._NP_01B_F_BACK_WASH_PUMP == 1
        ) {
            let playAttempt = setInterval(() => {
                x.play()
                    .then(() => {
                        clearInterval(playAttempt);
                    })
                    .catch((error) => {
                        console.log();
                    });
            }, 1);
            loa.src = 'images/ALARM.png';
        } else {
            x.pause();
            loa.src = 'images/onvolumn.png';
        }
    }
    var controlsEnabled = false;
    $('#loa').on('click', function () {
        controlsEnabled = !controlsEnabled;
        if (controlsEnabled == true) {
            x.muted = true;
            loa.src = 'images/volume.png';
        } else {
            x.muted = false;
            if (
                text.Data_bits._SP_01A_F_SERVICE_PUMP == 1 ||
                text.Data_bits._SP_01B_F_SERVICE_PUMP == 1 ||
                text.Data_bits._SP_01C_F_SERVICE_PUMP == 1 ||
                text.Data_bits._BP_01A_F_NaCl_PUMP == 1 ||
                text.Data_bits._BP_01B_F_NaCl_PUMP == 1 ||
                text.Data_bits._NP_01A_F_BACK_WASH_PUMP == 1 ||
                text.Data_bits._NP_01B_F_BACK_WASH_PUMP == 1
            ) {
                loa.src = 'images/ALARM.png';
            } else {
                loa.src = 'images/onvolumn.png';
            }
        }
    });
    var dataold1;

    //ID pump error
    var errorsp01a = document.getElementById('errorsp01a');
    var errorsp01c = document.getElementById('errorsp01c');
    var errorsp01b = document.getElementById('errorsp01b');

    var errorbp01a = document.getElementById('errorbp01a');
    var errorbp01b = document.getElementById('errorbp01b');
    var errornpa01a = document.getElementById('errornpa01a');
    var errornpa01b = document.getElementById('errornpa01b');

    if (data.Data_bits._SP_01A_F_SERVICE_PUMP == 1) {
        errorsp01a.style.display = 'block';
    } else {
        errorsp01a.style.display = 'none';
    }
    if (data.Data_bits._SP_01B_F_SERVICE_PUMP == 1) {
        errorsp01b.style.display = 'block';
    } else {
        errorsp01b.style.display = 'none';
    }
    if (data.Data_bits._SP_01C_F_SERVICE_PUMP == 1) {
        errorsp01c.style.display = 'block';
    } else {
        errorsp01c.style.display = 'none';
    }
    if (data.Data_bits._BP_01A_F_NaCl_PUMP == 1) {
        errorbp01a.style.display = 'block';
    } else {
        errorbp01a.style.display = 'none';
    }
    if (data.Data_bits._BP_01B_F_NaCl_PUMP == 1) {
        errorbp01b.style.display = 'block';
    } else {
        errorbp01b.style.display = 'none';
    }
    if (data.Data_bits._NP_01A_F_BACK_WASH_PUMP == 1) {
        errornpa01a.style.display = 'block';
    } else {
        errornpa01a.style.display = 'none';
    }
    if (data.Data_bits._NP_01B_F_BACK_WASH_PUMP == 1) {
        errornpa01b.style.display = 'block';
    } else {
        errornpa01b.style.display = 'none';
    }
    // id van
    // var bsva = document.getElementById("van-bsva");
    // var bsvb = document.getElementById("van-bsvb");
    // var arowPlan = document.getElementById("arowPlan");
    // var arowPlanA = document.getElementById("arowPlanA");

    if ((data.Data_bits._BSVA == 1) | (data.Data_bits._BSVB == 1)) {
        water('#img-wapper', 'totalBSVAB', 'display:block');
    } else {
        water('#img-wapper', 'totalBSVAB', 'display:none');
    }
    if (data.Data_bits._BSVA == 1) {
        valve('#van-bsva', '#b1ff3b');
        water('#img-wapper', 'pathBSVA', 'display:block');
    } else {
        valve('#van-bsva', '#e7eae2');
        water('#img-wapper', 'pathBSVA', 'display:none');
    }
    if (data.Data_bits._BSVB == 1) {
        valve('#van-bsvb', '#b1ff3b');
        water('#img-wapper', 'pathBSVB', 'display:block');
    } else {
        valve('#van-bsvb', '#e7eae2');
        water('#img-wapper', 'pathBSVB', 'display:none');
    }

    //Tank MMFA
    // valve1("#van-mmfa01a", data.Data_bits._01A_BIRM_A1, "#b1ff3b", "#e7eae2");

    if (data.Data_bits._01A_BIRM_A1 == 1) {
        valve('#van-mmfa01a', '#b1ff3b');
        water('#img-wapper', 'pathMMFA01A', 'display:block');
    } else {
        valve('#van-mmfa01a', '#e7eae2');
        water('#img-wapper', 'pathMMFA01A', 'display:none');
    }
    if (data.Data_bits._02A_BIRM_A1 == 1) {
        valve('#van-mmfa02a', '#b1ff3b');
        water('#img-wapper', 'pathMMFA02A', 'display:block');
    } else {
        valve('#van-mmfa02a', '#e7eae2');
        water('#img-wapper', 'pathMMFA02A', 'display:none');
    }
    if (data.Data_bits._03A_BIRM_A1 == 1) {
        valve('#van-mmfa03a', '#b1ff3b');
        water('#img-wapper', 'pathMMFA03A', 'display:block');
    } else {
        valve('#van-mmfa03a', '#e7eae2');
        water('#img-wapper', 'pathMMFA03A', 'display:none');
    }
    if (data.Data_bits._04A_BIRM_A1 == 1) {
        valve('#van-mmfa04a', '#b1ff3b');
        water('#img-wapper', 'pathMMFA04A', 'display:block');
    } else {
        valve('#van-mmfa04a', '#e7eae2');
        water('#img-wapper', 'pathMMFA04A', 'display:none');
    }
    if (data.Data_bits._05A_BIRM_A1 == 1) {
        valve('#van-mmfa05a', '#b1ff3b');
        water('#img-wapper', 'pathMMFA05A', 'display:block');
    } else {
        valve('#van-mmfa05a', '#e7eae2');
        water('#img-wapper', 'pathMMFA05A', 'display:none');
    }
    if (data.Data_bits._06A_BIRM_A1 == 1) {
        valve('#van-mmfa06a', '#b1ff3b');
        water('#img-wapper', 'pathMMFA06A', 'display:block');
    } else {
        valve('#van-mmfa06a', '#e7eae2');
        water('#img-wapper', 'pathMMFA06A', 'display:none');
    }

    if (data.Data_bits._F07A == 1) {
        valve('#van-mmfa07a', '#b1ff3b');
        water('#img-wapper', 'pathF07A', 'display:block');
    } else {
        valve('#van-mmfa07a', '#e7eae2');
        water('#img-wapper', 'pathF07A', 'display:none');
    }
    if (data.Data_bits._08A_BIRM_A1 == 1 && data.Data_bits._01A_BIRM_A1 == 1) {
        valve('#van-mmfa08a', '#b1ff3b');
        water('#img-wapper', 'pathMMFA08ARa', 'display:block');
        water('#img-wapper', 'pathMMFA08AVao', 'display:none');
    } else if (data.Data_bits._08A_BIRM_A1 == 1 && data.Data_bits._03A_BIRM_A1 == 1) {
        valve('#van-mmfa08a', '#b1ff3b');
        water('#img-wapper', 'pathMMFA08AVao', 'display:block');
        water('#img-wapper', 'pathMMFA08ARa', 'display:none');
    } else {
        valve('#van-mmfa08a', '#e7eae2');
        water('#img-wapper', 'pathMMFA08ARa', 'display:none');
        water('#img-wapper', 'pathMMFA08AVao', 'display:none');
    }

    // tank MMFB
    if (data.Data_bits._01B_BIRM_B1 == 1) {
        valve('#van-mmfa01b', '#b1ff3b');
        water('#img-wapper', 'pathMMFB01B', 'display:block');
    } else {
        valve('#van-mmfa01b', '#e7eae2');
        water('#img-wapper', 'pathMMFB01B', 'display:none');
    }
    if (data.Data_bits._02B_BIRM_B1 == 1) {
        valve('#van-mmfa02b', '#b1ff3b');
        water('#img-wapper', 'pathMMFB02B', 'display:block');
    } else {
        valve('#van-mmfa02b', '#e7eae2');
        water('#img-wapper', 'pathMMFB02B', 'display:none');
    }
    if (data.Data_bits._03B_BIRM_B1 == 1) {
        valve('#van-mmfa03b', '#b1ff3b');
        water('#img-wapper', 'pathMMFB03B', 'display:block');
    } else {
        valve('#van-mmfa03b', '#e7eae2');
        water('#img-wapper', 'pathMMFB03B', 'display:none');
    }
    if (data.Data_bits._04B_BIRM_B1 == 1) {
        valve('#van-mmfa04b', '#b1ff3b');
        water('#img-wapper', 'pathMMFB04B', 'display:block');
    } else {
        valve('#van-mmfa04b', '#e7eae2');
        water('#img-wapper', 'pathMMFB04B', 'display:none');
    }
    if (data.Data_bits._05B_BIRM_B1 == 1) {
        valve('#van-mmfa05b', '#b1ff3b');
        water('#img-wapper', 'pathMMFB05B', 'display:block');
    } else {
        valve('#van-mmfa05b', '#e7eae2');
        water('#img-wapper', 'pathMMFB05B', 'display:none');
    }
    if (data.Data_bits._06B_BIRM_B1 == 1) {
        valve('#van-mmfa06b', '#b1ff3b');
        water('#img-wapper', 'pathMMFB06B', 'display:block');
    } else {
        valve('#van-mmfa06b', '#e7eae2');
        water('#img-wapper', 'pathMMFB06B', 'display:none');
    }

    if (data.Data_bits._08B_BIRM_B1 == 1 && data.Data_bits._01B_BIRM_B1 == 1) {
        valve('#van-mmfa08b', '#b1ff3b');
        water('#img-wapper', 'pathMMFB08BRa', 'display:block');
        water('#img-wapper', 'pathMMFB08BVao', 'display:none');
    } else if (data.Data_bits._08B_BIRM_B1 == 1 && data.Data_bits._03B_BIRM_B1 == 1) {
        valve('#van-mmfa08b', '#b1ff3b');
        water('#img-wapper', 'pathMMFB08BVao', 'display:block');
        water('#img-wapper', 'pathMMFB08BRa', 'display:none');
    } else {
        valve('#van-mmfa08b', '#e7eae2');
        water('#img-wapper', 'pathMMFB08BRa', 'display:none');
        water('#img-wapper', 'pathMMFB08BVao', 'display:none');
    }

    if (data.Data_bits._F07B == 1) {
        valve('#van-mmfa07b', '#b1ff3b');
        water('#img-wapper', 'pathF07B', 'display:block');
    } else {
        valve('#van-mmfa07b', '#e7eae2');
        water('#img-wapper', 'pathF07B', 'display:none');
    }

    //Tank Brima

    if (data.Data_bits._01A_BIRM_A2 == 1) {
        valve('#van-birma01a', '#b1ff3b');
        water('#img-wapper', 'pathBIRMA01A', 'display:block');
    } else {
        valve('#van-birma01a', '#e7eae2');
        water('#img-wapper', 'pathBIRMA01A', 'display:none');
    }
    if (data.Data_bits._02A_BIRM_A2 == 1) {
        valve('#van-birma02a', '#b1ff3b');
        water('#img-wapper', 'pathBIRMA02A', 'display:block');
    } else {
        valve('#van-birma02a', '#e7eae2');
        water('#img-wapper', 'pathBIRMA02A', 'display:none');
    }
    if (data.Data_bits._03A_BIRM_A2 == 1) {
        valve('#van-birma03a', '#b1ff3b');
        water('#img-wapper', 'pathBIRMA03A', 'display:block');
    } else {
        valve('#van-birma03a', '#e7eae2');
        water('#img-wapper', 'pathBIRMA03A', 'display:none');
    }
    if (data.Data_bits._04A_BIRM_A2 == 1) {
        valve('#van-birma04a', '#b1ff3b');
        water('#img-wapper', 'pathBIRMA04A', 'display:block');
    } else {
        valve('#van-birma04a', '#e7eae2');
        water('#img-wapper', 'pathBIRMA04A', 'display:none');
    }
    if (data.Data_bits._05A_BIRM_A2 == 1) {
        valve('#van-birma05a', '#b1ff3b');
        water('#img-wapper', 'pathBIRMA05A', 'display:block');
    } else {
        valve('#van-birma05a', '#e7eae2');
        water('#img-wapper', 'pathBIRMA05A', 'display:none');
    }
    if (data.Data_bits._06A_BIRM_A2 == 1) {
        valve('#van-birma06a', '#b1ff3b');
        water('#img-wapper', 'pathBIRMA06A', 'display:block');
    } else {
        valve('#van-birma06a', '#e7eae2');
        water('#img-wapper', 'pathBIRMA06A', 'display:none');
    }

    if (data.Data_bits._08A_BIRM_A2 == 1 && data.Data_bits._01A_BIRM_A2 == 1) {
        valve('#van-birma08a', '#b1ff3b');
        water('#img-wapper', 'pathBIRMA08ARa', 'display:block');
        water('#img-wapper', 'pathBIRMA08AVao', 'display:none');
    } else if (data.Data_bits._08A_BIRM_A2 == 1 && data.Data_bits._03A_BIRM_A2 == 1) {
        valve('#van-birma08a', '#b1ff3b');
        water('#img-wapper', 'pathBIRMA08AVao', 'display:block');
        water('#img-wapper', 'pathBIRMA08ARa', 'display:none');
    } else {
        valve('#van-birma08a', '#e7eae2');
        water('#img-wapper', 'pathBIRMA08ARa', 'display:none');
        water('#img-wapper', 'pathBIRMA08AVao', 'display:none');
    }

    //Tank Brimb

    if (data.Data_bits._01B_BIRM_B2 == 1) {
        valve('#van-birma01b', '#b1ff3b');
        water('#img-wapper', 'pathBIRMB01B', 'display:block');
    } else {
        valve('#van-birma01b', '#e7eae2');
        water('#img-wapper', 'pathBIRMB01B', 'display:none');
    }
    if (data.Data_bits._02B_BIRM_B2 == 1) {
        valve('#van-birma02b', '#b1ff3b');
        water('#img-wapper', 'pathBIRMB02B', 'display:block');
    } else {
        valve('#van-birma02b', '#e7eae2');
        water('#img-wapper', 'pathBIRMB02B', 'display:none');
    }
    if (data.Data_bits._03B_BIRM_B2 == 1) {
        valve('#van-birma03b', '#b1ff3b');
        water('#img-wapper', 'pathBIRMB03B', 'display:block');
    } else {
        valve('#van-birma03b', '#e7eae2');
        water('#img-wapper', 'pathBIRMB03B', 'display:none');
    }
    if (data.Data_bits._04A_BIRM_A2 == 1) {
        valve('#van-birma04b', '#b1ff3b');
        water('#img-wapper', 'pathBIRMB04B', 'display:block');
    } else {
        valve('#van-birma04b', '#e7eae2');
        water('#img-wapper', 'pathBIRMB04B', 'display:none');
    }
    if (data.Data_bits._05B_BIRM_B2 == 1) {
        valve('#van-birma05b', '#b1ff3b');
        water('#img-wapper', 'pathBIRMB05B', 'display:block');
    } else {
        valve('#van-birma05b', '#e7eae2');
        water('#img-wapper', 'pathBIRMB05B', 'display:none');
    }
    if (data.Data_bits._06B_BIRM_B2 == 1) {
        valve('#van-birma06b', '#b1ff3b');
        water('#img-wapper', 'pathBIRMB06B', 'display:block');
    } else {
        valve('#van-birma06b', '#e7eae2');
        water('#img-wapper', 'pathBIRMB06B', 'display:none');
    }

    if (data.Data_bits._08B_BIRM_B2 == 1 && data.Data_bits._01B_BIRM_B2 == 1) {
        valve('#van-birma08b', '#b1ff3b');
        water('#img-wapper', 'pathBIRMB08BRa', 'display:block');
        water('#img-wapper', 'pathBIRMB08BVao', 'display:none');
    } else if (data.Data_bits._08B_BIRM_B2 == 1 && data.Data_bits._03B_BIRM_B2 == 1) {
        valve('#van-birma08b', '#b1ff3b');
        water('#img-wapper', 'pathBIRMB08BVao', 'display:block');
        water('#img-wapper', 'pathBIRMB08BRa', 'display:none');
    } else {
        valve('#van-birma08b', '#e7eae2');
        water('#img-wapper', 'pathBIRMB08BRa', 'display:none');
        water('#img-wapper', 'pathBIRMB08BVao', 'display:none');
    }
    //Tank filret

    if (data.Data_bits._01A_AC_FILTER_A == 1) {
        valve('#van-FILRETA01a', '#b1ff3b');
        water('#img-wapper', 'pathFILRETA01A', 'display:block');
    } else {
        valve('#van-FILRETA01a', '#e7eae2');
        water('#img-wapper', 'pathFILRETA01A', 'display:none');
    }
    if (data.Data_bits._02A_AC_FILTER_A == 1) {
        valve('#van-FILRETA02a', '#b1ff3b');
        water('#img-wapper', 'pathFILRETA02A', 'display:block');
    } else {
        valve('#van-FILRETA02a', '#e7eae2');
        water('#img-wapper', 'pathFILRETA02A', 'display:none');
    }
    if (data.Data_bits._03A_AC_FILTER_A == 1) {
        valve('#van-FILRETA03a', '#b1ff3b');
        water('#img-wapper', 'pathFILRETA03A', 'display:block');
    } else {
        valve('#van-FILRETA03a', '#e7eae2');
        water('#img-wapper', 'pathFILRETA03A', 'display:none');
    }
    if (data.Data_bits._04A_AC_FILTER_A == 1) {
        valve('#van-FILRETA04a', '#b1ff3b');
        water('#img-wapper', 'pathFILRETA04A', 'display:block');
    } else {
        valve('#van-FILRETA04a', '#e7eae2');
        water('#img-wapper', 'pathFILRETA04A', 'display:none');
    }
    if (data.Data_bits._05A_AC_FILTER_A == 1) {
        valve('#van-FILRETA05a', '#b1ff3b');
        water('#img-wapper', 'pathFILRETA05A', 'display:block');
    } else {
        valve('#van-FILRETA05a', '#e7eae2');
        water('#img-wapper', 'pathFILRETA05A', 'display:none');
    }
    if (data.Data_bits._06A_AC_FILTER_A == 1) {
        valve('#van-FILRETA06a', '#b1ff3b');
        water('#img-wapper', 'pathFILRETA06A', 'display:block');
    } else {
        valve('#van-FILRETA06a', '#e7eae2');
        water('#img-wapper', 'pathFILRETA06A', 'display:none');
    }
    if (data.Data_bits._08A_AC_FILTER_A == 1 && data.Data_bits._01A_AC_FILTER_A == 1) {
        valve('#van-FILRETA08a', '#b1ff3b');
        water('#img-wapper', 'pathFILRETA08ARa', 'display:block');
        water('#img-wapper', 'pathFILRETA08AVao', 'display:none');
    } else if (data.Data_bits._08A_AC_FILTER_A == 1 && data.Data_bits._03A_AC_FILTER_A == 1) {
        valve('#van-FILRETA08a', '#b1ff3b');
        water('#img-wapper', 'pathFILRETA08AVao', 'display:block');
        water('#img-wapper', 'pathFILRETA08ARa', 'display:none');
    } else {
        valve('#van-FILRETA08a', '#e7eae2');
        water('#img-wapper', 'pathFILRETA08ARa', 'display:none');
        water('#img-wapper', 'pathFILRETA08AVao', 'display:none');
    }

    // Tank FILTERB
    if (data.Data_bits._01B_AC_FILTER_B == 1) {
        valve('#van-FILRETA01b', '#b1ff3b');
        water('#img-wapper', 'pathFILRETB01B', 'display:block');
    } else {
        valve('#van-FILRETA01b', '#e7eae2');
        water('#img-wapper', 'pathFILRETB01B', 'display:none');
    }
    if (data.Data_bits._02B_AC_FILTER_B == 1) {
        valve('#van-FILRETA02b', '#b1ff3b');
        water('#img-wapper', 'pathFILRETB02B', 'display:block');
    } else {
        valve('#van-FILRETA02b', '#e7eae2');
        water('#img-wapper', 'pathFILRETB02B', 'display:none');
    }
    if (data.Data_bits._03B_AC_FILTER_B == 1) {
        valve('#van-FILRETA03b', '#b1ff3b');
        water('#img-wapper', 'pathFILRETB03B', 'display:block');
    } else {
        valve('#van-FILRETA03b', '#e7eae2');
        water('#img-wapper', 'pathFILRETB03B', 'display:none');
    }
    if (data.Data_bits._04B_AC_FILTER_B == 1) {
        valve('#van-FILRETA04b', '#b1ff3b');
        water('#img-wapper', 'pathFILRETB04B', 'display:block');
    } else {
        valve('#van-FILRETA04b', '#e7eae2');
        water('#img-wapper', 'pathFILRETB04B', 'display:none');
    }
    if (data.Data_bits._05B_AC_FILTER_B == 1) {
        valve('#van-FILRETA05b', '#b1ff3b');
        water('#img-wapper', 'pathFILRETB05B', 'display:block');
    } else {
        valve('#van-FILRETA05b', '#e7eae2');
        water('#img-wapper', 'pathFILRETB05B', 'display:none');
    }
    if (data.Data_bits._06B_AC_FILTER_B == 1) {
        valve('#van-FILRETA06b', '#b1ff3b');
        water('#img-wapper', 'pathFILRETB06B', 'display:block');
    } else {
        valve('#van-FILRETA06b', '#e7eae2');
        water('#img-wapper', 'pathFILRETB06B', 'display:none');
    }
    if (data.Data_bits._08B_AC_FILTER_B == 1 && data.Data_bits._01B_AC_FILTER_B == 1) {
        valve('#van-FILRETA08b', '#b1ff3b');
        water('#img-wapper', 'pathFILRETB08BRa', 'display:block');
        water('#img-wapper', 'pathFILRETB08BVao', 'display:none');
    } else if (data.Data_bits._08B_AC_FILTER_B == 1 && data.Data_bits._03B_AC_FILTER_B == 1) {
        valve('#van-FILRETA08b', '#b1ff3b');
        water('#img-wapper', 'pathFILRETB08BVao', 'display:block');
        water('#img-wapper', 'pathFILRETB08BRa', 'display:none');
    } else {
        valve('#van-FILRETA08b', '#e7eae2');
        water('#img-wapper', 'pathFILRETB08BRa', 'display:none');
        water('#img-wapper', 'pathFILRETB08BVao', 'display:none');
    }

    //tank Soft

    if ((data.Data_bits._07A == 1) | (data.Data_bits._07B == 1)) {
        water('#img-wapper', 'total07AB', 'display:block');
    } else {
        water('#img-wapper', 'total07AB', 'display:none');
    }
    if (data.Data_bits._07A == 1) {
        valve('#van-arrow07A', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERA07A', 'display:block');
    } else {
        valve('#van-arrow07A', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERA07A', 'display:none');
    }
    if (data.Data_bits._07B == 1) {
        valve('#van-arrow07B', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERB07B', 'display:block');
    } else {
        valve('#van-arrow07B', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERB07B', 'display:none');
    }
    //tank SoftA
    if (data.Data_bits._01A_SOFTENER_A == 1) {
        valve('#van-SOFTA01a', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERA01A', 'display:block');
    } else {
        valve('#van-SOFTA01a', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERA01A', 'display:none');
    }
    if (data.Data_bits._02A_SOFTENER_A == 1) {
        valve('#van-SOFTA02a', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERA02A', 'display:block');
    } else {
        valve('#van-SOFTA02a', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERA02A', 'display:none');
    }
    if (data.Data_bits._03A_SOFTENER_A == 1) {
        valve('#van-SOFTA03a', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERA03A', 'display:block');
    } else {
        valve('#van-SOFTA03a', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERA03A', 'display:none');
    }
    if (data.Data_bits._04A_SOFTENER_A == 1) {
        valve('#van-SOFTA04a', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERA04A', 'display:none');
    } else {
        valve('#van-SOFTA04a', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERA04A', 'display:none');
    }
    if (data.Data_bits._05A_SOFTENER_A == 1) {
        valve('#van-SOFTA05a', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERA05A', 'display:none');
    } else {
        valve('#van-SOFTA05a', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERA05A', 'display:none');
    }
    if (data.Data_bits._06A_SOFTENER_A == 1) {
        valve('#van-SOFTA06a', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERA06A', 'display:none');
    } else {
        valve('#van-SOFTA06a', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERA06A', 'display:none');
    }
    if (data.Data_bits._08A_SOFTENER_A == 1 && data.Data_bits._01A_SOFTENER_A == 1) {
        valve('#van-SOFTA08a', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERA08ARa', 'display:block');
        water('#img-wapper', 'pathSOFTENERA08AVao', 'display:none');
    } else if (data.Data_bits._08A_SOFTENER_A == 1 && data.Data_bits._03A_SOFTENER_A == 1) {
        valve('#van-SOFTA08a', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERA08AVao', 'display:block');
        water('#img-wapper', 'pathSOFTENERA08ARa', 'display:none');
    } else {
        valve('#van-SOFTA08a', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERA08ARa', 'display:none');
        water('#img-wapper', 'pathSOFTENERA08AVao', 'display:none');
    }

    //tank softB
    if (data.Data_bits._01B_SOFTENER_B == 1) {
        valve('#van-SOFTA01b', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERB01B', 'display:block');
    } else {
        valve('#van-SOFTA01b', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERB01B', 'display:none');
    }
    if (data.Data_bits._02B_SOFTENER_B == 1) {
        valve('#van-SOFTA02b', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERB02B', 'display:block');
    } else {
        valve('#van-SOFTA02b', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERB02B', 'display:none');
    }
    if (data.Data_bits._03B_SOFTENER_B == 1) {
        valve('#van-SOFTA03b', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERB03B', 'display:block');
    } else {
        valve('#van-SOFTA03b', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERB03B', 'display:none');
    }
    if (data.Data_bits._04B_SOFTENER_B == 1) {
        valve('#van-SOFTA04b', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERB04B', 'display:block');
    } else {
        valve('#van-SOFTA04b', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERB04B', 'display:none');
    }
    if (data.Data_bits._05B_SOFTENER_B == 1) {
        valve('#van-SOFTA05b', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERB05B', 'display:block');
    } else {
        valve('#van-SOFTA05b', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERB05B', 'display:none');
    }
    if (data.Data_bits._06B_SOFTENER_B == 1) {
        valve('#van-SOFTA06b', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERB06B', 'display:block');
    } else {
        valve('#van-SOFTA06b', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERB06B', 'display:none');
    }
    if (data.Data_bits._08B_SOFTENER_B == 1 && data.Data_bits._01B_SOFTENER_B == 1) {
        valve('#van-SOFTA08b', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERB08BRa', 'display:block');
        water('#img-wapper', 'pathSOFTENERB08BVao', 'display:none');
    } else if (data.Data_bits._08B_SOFTENER_B == 1 && data.Data_bits._03B_SOFTENER_B == 1) {
        valve('#van-SOFTA08b', '#b1ff3b');
        water('#img-wapper', 'pathSOFTENERB08BVao', 'display:block');
        water('#img-wapper', 'pathSOFTENERB08BRa', 'display:none');
    } else {
        valve('#van-SOFTA08b', '#e7eae2');
        water('#img-wapper', 'pathSOFTENERB08BRa', 'display:none');
        water('#img-wapper', 'pathSOFTENERB08BVao', 'display:none');
    }
    valve('#van-raw', '#b1ff3b');
    //pump service
    var sp01a = document.getElementById('sp01a');
    var sp01b = document.getElementById('sp01b');
    var sp01c = document.getElementById('sp01c');

    var bp01a = document.getElementById('bp01a');
    var bp01b = document.getElementById('bp01b');

    var npa01a = document.getElementById('npa01a');
    var npa01b = document.getElementById('npa01b');

    if (JSON.stringify(dataold1) != JSON.stringify(data.Data_bits)) {
        if (data.Data_bits._SP_01A_Run_SERVICE_PUMP == 1) {
            sp01a.getSVGDocument().getElementById('Q_ON 1').style.opacity = 1;
            sp01a.getSVGDocument().getElementById('layer1').style.animation =
                'center 1s  infinite linear';
            sp01a.getSVGDocument().getElementById('layer1').style.transformOrigin = 'center';
            sp01a.getSVGDocument().getElementById('layer1').style.transformBox == 'fill-box';
        } else {
            sp01a.getSVGDocument().getElementById('Q_ON 1').style.opacity = 0;
            sp01a.getSVGDocument().getElementById('layer1').style.animation = '';
        }

        if (data.Data_bits._SP_01B_Run_SERVICE_PUMP == 1) {
            sp01c.getSVGDocument().getElementById('Q_ON 1').style.opacity = 1;
            sp01c.getSVGDocument().getElementById('layer1').style.animation =
                'center 1s  infinite linear';
            sp01c.getSVGDocument().getElementById('layer1').style.transformOrigin = 'center';
            sp01c.getSVGDocument().getElementById('layer1').style.transformBox == 'fill-box';
        } else {
            sp01c.getSVGDocument().getElementById('Q_ON 1').style.opacity = 0;
            sp01c.getSVGDocument().getElementById('layer1').style.animation = '';
        }

        if (data.Data_bits._SP_01C_Run_SERVICE_PUMP == 1) {
            sp01b.getSVGDocument().getElementById('Q_ON 1').style.opacity = 1;
            sp01b.getSVGDocument().getElementById('layer1').style.animation =
                'center 1s  infinite linear';
            sp01b.getSVGDocument().getElementById('layer1').style.transformOrigin = 'center';
            sp01b.getSVGDocument().getElementById('layer1').style.transformBox == 'fill-box';
        } else {
            sp01b.getSVGDocument().getElementById('Q_ON 1').style.opacity = 0;
            sp01b.getSVGDocument().getElementById('layer1').style.animation = '';
        }

        if (data.Data_bits._BP_01A_Run_NaCl_PUMP == 1) {
            bp01a.getSVGDocument().getElementById('Q_ON 1').style.opacity = 1;
            bp01a.getSVGDocument().getElementById('layer1').style.animation =
                'center 1s  infinite linear';
            bp01a.getSVGDocument().getElementById('layer1').style.transformOrigin = 'center';
            bp01a.getSVGDocument().getElementById('layer1').style.transformBox == 'fill-box';
        } else {
            bp01a.getSVGDocument().getElementById('Q_ON 1').style.opacity = 0;
            bp01a.getSVGDocument().getElementById('layer1').style.animation = '';
        }

        if (data.Data_bits._BP_01B_Run_NaCl_PUMP == 1) {
          bp01b.getSVGDocument().getElementById('Q_ON 1').style.opacity = 1;
          bp01b.getSVGDocument().getElementById('layer1').style.animation =
              'center 1s  infinite linear';
          bp01b.getSVGDocument().getElementById('layer1').style.transformOrigin = 'center';
          bp01b.getSVGDocument().getElementById('layer1').style.transformBox == 'fill-box';
      } else {
          bp01b.getSVGDocument().getElementById('Q_ON 1').style.opacity = 0;
          bp01b.getSVGDocument().getElementById('layer1').style.animation = '';
        }

        if (data.Data_bits._NP_01A_RUN_BACK_WASH_PUMP == 1) {
            npa01a.getSVGDocument().getElementById('Q_ON 1').style.opacity = 1;
            npa01a.getSVGDocument().getElementById('layer1').style.animation =
                'center 1s  infinite linear';
            npa01a.getSVGDocument().getElementById('layer1').style.transformOrigin = 'center';
            npa01a.getSVGDocument().getElementById('layer1').style.transformBox == 'fill-box';
        } else {
            npa01a.getSVGDocument().getElementById('Q_ON 1').style.opacity = 0;
            npa01a.getSVGDocument().getElementById('layer1').style.animation = '';
        }

        if (data.Data_bits._NP_01B_RUN_BACK_WASH_PUMP == 1) {
            npa01b.getSVGDocument().getElementById('Q_ON 1').style.opacity = 1;
            npa01b.getSVGDocument().getElementById('layer1').style.animation =
                'center 1s  infinite linear';
            npa01b.getSVGDocument().getElementById('layer1').style.transformOrigin = 'center';
            npa01b.getSVGDocument().getElementById('layer1').style.transformBox == 'fill-box';
        } else {
            npa01b.getSVGDocument().getElementById('Q_ON 1').style.opacity = 0;
            npa01b.getSVGDocument().getElementById('layer1').style.animation = '';
        }
        dataold1 = data.Data_bits;
    }
    var connectServer = document.getElementById('plcConnect');

    if (data.Rawsystem_PLC_isconnect == true) {
        connectServer.classList.add('on');
    } else {
        connectServer.classList.remove('on');
    }

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
    function daysInMonth1(day, month, year) {
        return new Date(year, month, day, 0);
    }

    var bentrongmmfa = document.getElementById('bentrongmmfa');
    var bentrongmmfb = document.getElementById('bentrongmmfb');
    var bentrongbirma = document.getElementById('bentrongbirma');
    var bentrongbirmb = document.getElementById('bentrongbirmb');
    var bentrongfilreta = document.getElementById('bentrongfilreta');
    var bentrongfilretb = document.getElementById('bentrongfilretb');
    var bentrongsofta = document.getElementById('bentrongsofta');
    var bentrongsoftb = document.getElementById('bentrongsoftb');

    var total = 0;
    for (var i = 1; i < 13; i++) {
        total += daysInMonth(i, 2021);
    }
    for (var i = 1; i < 13; i++) {
        total += daysInMonth(i, 2022);
    }
    // for (var i = 1; i < 13; i++) {
    //   total += daysInMonth(i, 2023);
    // }
    // console.log(total);
    var total1 = 0;
    var date = new Date();
    var date1 = daysInMonth1(date.getDate(), date.getMonth() + 1, date.getFullYear());
    var date2 = daysInMonth1(1, 1, 2021);
    var total1 = date1 - date2;
    var total2 = total1 / (1000 * (60 * 60 * 24));
    var total3 = (total2 / total) * 100;
    // console.log(total3);
    bentrongmmfa.style.width = total3.toFixed(1) + '%';
    bentrongmmfb.style.width = total3.toFixed(1) + '%';
    bentrongbirma.style.width = total3.toFixed(1) + '%';
    bentrongbirmb.style.width = total3.toFixed(1) + '%';
    bentrongfilreta.style.width = total3.toFixed(1) + '%';
    bentrongfilretb.style.width = total3.toFixed(1) + '%';
    bentrongsofta.style.width = total3.toFixed(1) + '%';
    bentrongsoftb.style.width = total3.toFixed(1) + '%';
}
