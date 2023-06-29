setInterval(read, 1000);

function read() {

    var random = Math.random();
    // var phantram = (random*100).toFixed(1);
    var phantram = 27;
    console.log(data.Chart_Area.CuCL2[0]);
    document.getElementById("mucnuoc1").style.height = phantram + "%";
    document.getElementById("mucnuoc2").style.height = phantram + "%";
    document.getElementById("bentrongHNO3AU").style.height = phantram + "%";
    if (phantram >= 26) {
        water("#back", "rect29380-4", "fill:#28c757");
    }
    else {
        water("#back", "rect29380-4", "fill:#888888");
    }
}

var data = {
    Chart_Area: {
      CuCL2: {
        0: { Time: '8', rate: -12.9 },
        1: { Time: '9', rate: -12.9 },
        2: { Time: '10', rate: -12.9 },
        3: { Time: '11', rate: -12.9 },
        4: { Time: '12', rate: -12.9 },
        5: { Time: '13', rate: -12.9 },
        6: { Time: '14', rate: -12.9 },
        7: { Time: '15', rate: -12.9 },
        8: { Time: '16', rate: 0 },
        9: { Time: '17', rate: 0 },
        10: { Time: '18', rate: 0 },
        11: { Time: '19', rate: 0 },
        12: { Time: '20', rate: 0 },
        13: { Time: '21', rate: 0 },
        14: { Time: '22', rate: 0 },
        15: { Time: '23', rate: 0 },
        16: { Time: '0', rate: 0 },
        17: { Time: '1', rate: 0 },
        18: { Time: '2', rate: 0 },
        19: { Time: '3', rate: 0 },
        20: { Time: '4', rate: 0 },
        21: { Time: '5', rate: 0 },
        22: { Time: '6', rate: 0 },
        23: { Time: '7', rate: 0 }
      }
    }
  };