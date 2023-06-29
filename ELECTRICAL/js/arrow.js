var arowService = document.getElementById("arowService");
var arowPlan = document.getElementById("arowPlan");
var arowPlanA = document.getElementById("arowPlanA");

var arowMMFA1 = document.getElementById("arowMMFA1");
var arowMMFA2 = document.getElementById("arowMMFA2");
var arowMMFA1_1 = document.getElementById("arowMMFA1_1");
var arowMMFA4 = document.getElementById("arowMMFA4");
var arowMMFA6 = document.getElementById("arowMMFA6");
var arowMMFA3 = document.getElementById("arowMMFA3");
var arowMMFA5 = document.getElementById("arowMMFA5");

var arowMMFB1 = document.getElementById("arowMMFB1");
var arowMMFB2 = document.getElementById("arowMMFB2");
var arowMMFB1_1 = document.getElementById("arowMMFB1_1");
var arowMMFB6 = document.getElementById("arowMMFB6");
var arowMMFB3 = document.getElementById("arowMMFB3");
var arowMMFB4 = document.getElementById("arowMMFB4");
var arowMMFB5 = document.getElementById("arowMMFB5");

var arowBIRMB1 = document.getElementById("arowBIRMB1");
var arowBIRMB2 = document.getElementById("arowBIRMB2");
var arowBIRMB1_1 = document.getElementById("arowBIRMB1_1");
var arowBIRMB6 = document.getElementById("arowBIRMB6");
var arowBIRMB3 = document.getElementById("arowBIRMB3");
var arowBIRMB4 = document.getElementById("arowBIRMB4");
var arowBIRMB5 = document.getElementById("arowBIRMB5");

var arowBIRMA1 = document.getElementById("arowBIRMA1");
var arowBIRMA2 = document.getElementById("arowBIRMA2");
var arowBIRMA1_1 = document.getElementById("arowBIRMA1_1");
var arowBIRMA6 = document.getElementById("arowBIRMA6");
var arowBIRMA3 = document.getElementById("arowBIRMA3");
var arowBIRMA4 = document.getElementById("arowBIRMA4");
var arowBIRMA5 = document.getElementById("arowBIRMA5");

var arowFILRETA1 = document.getElementById("arowFILRETA1");
var arowFILRETA2 = document.getElementById("arowFILRETA2");
var arowFILRETA1_1 = document.getElementById("arowFILRETA1_1");
var arowFILRETA6 = document.getElementById("arowFILRETA6");
var arowFILRETA3 = document.getElementById("arowFILRETA3");
var arowFILRETA4 = document.getElementById("arowFILRETA4");
var arowFILRETA5 = document.getElementById("arowFILRETA5");

var arowFILRETB1 = document.getElementById("arowFILRETB1");
var arowFILRETB2 = document.getElementById("arowFILRETB2");
var arowFILRETB1_1 = document.getElementById("arowFILRETB1_1");
var arowFILRETB6 = document.getElementById("arowFILRETB6");
var arowFILRETB3 = document.getElementById("arowFILRETB3");
var arowFILRETB4 = document.getElementById("arowFILRETB4");
var arowFILRETB5 = document.getElementById("arowFILRETB5");

var arowSOFTA1 = document.getElementById("arowSOFTA1");
var arowSOFTA2 = document.getElementById("arowSOFTA2");
var arowSOFTA6 = document.getElementById("arowSOFTA6");
var arowSOFTA3 = document.getElementById("arowSOFTA3");
var arowSOFTA4 = document.getElementById("arowSOFTA4");
var arowSOFTA5 = document.getElementById("arowSOFTA5");

var arowSOFTB1 = document.getElementById("arowSOFTB1");
var arowSOFTB2 = document.getElementById("arowSOFTB2");
var arowSOFTB1_1 = document.getElementById("arowSOFTB1_1");
var arowSOFTB4 = document.getElementById("arowSOFTB4");
var arowSOFTB3 = document.getElementById("arowSOFTB3");
var arowSOFTB5 = document.getElementById("arowSOFTB5");
var arowSOFTB6 = document.getElementById("arowSOFTB6");

var arowRaw = document.getElementById("arowRaw");

window.onload = function () {
  animationArrowService();
  animationArrowPlan();
  animationArrowPlanA();

  animationArrowMMFA1();
  animationArrowMMFA2();
  animationArrowMMFA1_1();
  animationArrowMMFA6();
  animationArrowMMFA4();
  animationArrowMMFA3();
  animationArrowMMFA5();

  animationArrowMMFB1();
  animationArrowMMFB2();
  animationArrowMMFB1_1();
  animationArrowMMFB6();
  animationArrowMMFB5();
  animationArrowMMFB4();
  animationArrowMMFB3();

  animationArrowarowBIRMA1();
  animationArrowarowBIRMA2();
  animationArrowarowBIRMA1_1();
  animationArrowBIRMA6();
  animationArrowBIRMA3();
  animationArrowBIRMA4();
  animationArrowBIRMA5();

  animationArrowarowBIRMB1();
  animationArrowarowBIRMB2();
  animationArrowarowBIRMB1_1();
  animationArrowBIRMB6();
  animationArrowBIRMB3();
  animationArrowBIRMB4();
  animationArrowBIRMB5();

  animationArrowarowFILRETA1();
  animationArrowarowFILRETA2();
  animationArrowarowFILRETA1_1();
  animationArrowFILRETA6();
  animationArrowFILRETA3();
  animationArrowFILRETA4();
  animationArrowFILRETA5();

  animationArrowarowFILRETB1();
  animationArrowarowFILRETB2();
  animationArrowarowFILRETB1_1();
  animationArrowFILRETB6();
  animationArrowFILRETB3();
  animationArrowFILRETB4();
  animationArrowFILRETB5();

  animationArrowarowSOFTA1();
  animationArrowarowSOFTA1_1();
  animationArrowSOFTA6();
  animationArrowSOFTA3();
  animationArrowSOFTA4();
  animationArrowSOFTA5();

  animationArrowarowSOFTB1();
  animationArrowarowSOFTB2();
  animationArrowarowSOFTB1_1();
  animationArrowSOFTB6();
  animationArrowSOFTB3();
  animationArrowSOFTB4();
  animationArrowSOFTB5();
  animationArrowarowRaw();
};
// Arrow hướng sang phải
function animationArrowService() {
  arowService.animate(
    [{ left: "125px" }, { left: "135px" }, { left: "125px" }],
    {
      duration: 700,
      iterations: Infinity,
    }
  );
}

function animationArrowPlanA() {
  arowPlanA.animate([{ left: "510px" }, { left: "520px" }, { left: "510px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowPlan() {
  arowPlan.animate([{ left: "510px" }, { left: "520px" }, { left: "510px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
// Arrow hướng lên trên
function animationArrowMMFA1() {
  arowMMFA1.animate([{ top: "80px" }, { top: "90px" }, { top: "80px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowMMFA2() {
  arowMMFA2.animate([{ top: "155px" }, { top: "165px" }, { top: "155px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowMMFA1_1() {
  arowMMFA1_1.animate([{ top: "330px" }, { top: "320px" }, { top: "330px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowMMFB1() {
  arowMMFB1.animate([{ top: "590px" }, { top: "600px" }, { top: "590px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowMMFB2() {
  arowMMFB2.animate([{ top: "655px" }, { top: "665px" }, { top: "655px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowMMFB1_1() {
  arowMMFB1_1.animate([{ top: "830px" }, { top: "820px" }, { top: "830px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowBIRMA1() {
  arowBIRMA1.animate([{ top: "80px" }, { top: "90px" }, { top: "80px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowBIRMA2() {
  arowBIRMA2.animate([{ top: "155px" }, { top: "165px" }, { top: "155px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowBIRMA1_1() {
  arowBIRMA1_1.animate([{ top: "330px" }, { top: "320px" }, { top: "330px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowBIRMB1() {
  arowBIRMB1.animate([{ top: "590px" }, { top: "600px" }, { top: "590px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowBIRMB2() {
  arowBIRMB2.animate([{ top: "655px" }, { top: "665px" }, { top: "655px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowBIRMB1_1() {
  arowBIRMB1_1.animate([{ top: "830px" }, { top: "820px" }, { top: "830px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowFILRETA1() {
  arowFILRETA1.animate([{ top: "80px" }, { top: "90px" }, { top: "80px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowFILRETA2() {
  arowFILRETA2.animate([{ top: "155px" }, { top: "165px" }, { top: "155px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowFILRETA1_1() {
  arowFILRETA1_1.animate(
    [{ top: "330px" }, { top: "320px" }, { top: "330px" }],
    {
      duration: 700,
      iterations: Infinity,
    }
  );
}

function animationArrowarowFILRETB1() {
  arowFILRETB1.animate([{ top: "590px" }, { top: "600px" }, { top: "590px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowFILRETB2() {
  arowFILRETB2.animate([{ top: "655px" }, { top: "665px" }, { top: "655px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowFILRETB1_1() {
  arowFILRETB1_1.animate(
    [{ top: "830px" }, { top: "820px" }, { top: "830px" }],
    {
      duration: 700,
      iterations: Infinity,
    }
  );
}

function animationArrowarowSOFTA1() {
  arowSOFTA1.animate([{ top: "80px" }, { top: "90px" }, { top: "80px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowSOFTA1_1() {
  arowSOFTA1_1.animate([{ top: "330px" }, { top: "320px" }, { top: "330px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowSOFTB1() {
  arowSOFTB1.animate([{ top: "590px" }, { top: "600px" }, { top: "590px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowSOFTB1_1() {
  arowSOFTB1_1.animate([{ top: "830px" }, { top: "820px" }, { top: "830px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
// Arrow hướng xuống dưới
function animationArrowMMFA3() {
  arowMMFA3.animate([{ top: "230px" }, { top: "220px" }, { top: "230px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowMMFA6() {
  arowMMFA6.animate([{ top: "330px" }, { top: "320px" }, { top: "330px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowMMFA5() {
  arowMMFA5.animate([{ top: "330px" }, { top: "320px" }, { top: "330px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowMMFA4() {
  arowMMFA4.animate([{ top: "175px" }, { top: "165px" }, { top: "175px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowBIRMA6() {
  arowBIRMA6.animate([{ top: "330px" }, { top: "320px" }, { top: "330px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowBIRMA3() {
  arowBIRMA3.animate([{ top: "230px" }, { top: "220px" }, { top: "230px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowBIRMA4() {
  arowBIRMA4.animate([{ top: "175px" }, { top: "165px" }, { top: "175px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowBIRMA5() {
  arowBIRMA5.animate([{ top: "330px" }, { top: "320px" }, { top: "330px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowFILRETA3() {
  arowFILRETA3.animate([{ top: "230px" }, { top: "220px" }, { top: "230px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowFILRETA4() {
  arowFILRETA4.animate([{ top: "175px" }, { top: "165px" }, { top: "175px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowFILRETA5() {
  arowFILRETA5.animate([{ top: "330px" }, { top: "320px" }, { top: "330px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowBIRMB6() {
  arowBIRMB6.animate([{ top: "830px" }, { top: "820px" }, { top: "830px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowBIRMB3() {
  arowBIRMB3.animate([{ top: "725px" }, { top: "715px" }, { top: "725px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowBIRMB4() {
  arowBIRMB4.animate([{ top: "665px" }, { top: "655px" }, { top: "665px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowBIRMB5() {
  arowBIRMB5.animate([{ top: "830px" }, { top: "820px" }, { top: "830px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowFILRETA6() {
  arowFILRETA6.animate([{ top: "330px" }, { top: "320px" }, { top: "330px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowFILRETB6() {
  arowFILRETB6.animate([{ top: "830px" }, { top: "820px" }, { top: "830px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowFILRETB3() {
  arowFILRETB3.animate([{ top: "725px" }, { top: "715px" }, { top: "725px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowFILRETB4() {
  arowFILRETB4.animate([{ top: "665px" }, { top: "655px" }, { top: "665px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowFILRETB5() {
  arowFILRETB5.animate([{ top: "830px" }, { top: "820px" }, { top: "830px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowSOFTA6() {
  arowSOFTA6.animate([{ top: "330px" }, { top: "320px" }, { top: "330px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowSOFTA3() {
  arowSOFTA3.animate([{ top: "230px" }, { top: "220px" }, { top: "230px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowSOFTA4() {
  arowSOFTA4.animate([{ top: "175px" }, { top: "165px" }, { top: "175px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowSOFTA5() {
  arowSOFTA5.animate([{ top: "330px" }, { top: "320px" }, { top: "330px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowSOFTB6() {
  arowSOFTB6.animate([{ top: "830px" }, { top: "820px" }, { top: "830px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowSOFTB3() {
  arowSOFTB3.animate([{ top: "725px" }, { top: "715px" }, { top: "725px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowSOFTB4() {
  arowSOFTB4.animate([{ top: "665px" }, { top: "655px" }, { top: "665px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowSOFTB5() {
  arowSOFTB5.animate([{ top: "830px" }, { top: "820px" }, { top: "830px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowMMFB6() {
  arowMMFB6.animate([{ top: "830px" }, { top: "820px" }, { top: "830px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowMMFB5() {
  arowMMFB5.animate([{ top: "830px" }, { top: "820px" }, { top: "830px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowMMFB4() {
  arowMMFB4.animate([{ top: "665px" }, { top: "655px" }, { top: "665px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowMMFB3() {
  arowMMFB3.animate([{ top: "724px" }, { top: "714px" }, { top: "724px" }], {
    duration: 700,
    iterations: Infinity,
  });
}

function animationArrowarowSOFTB2() {
  arowSOFTB2.animate([{ top: "771px" }, { top: "781px" }, { top: "771px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
function animationArrowarowRaw() {
  arowRaw.animate([{ top: "500px" }, { top: "510px" }, { top: "500px" }], {
    duration: 700,
    iterations: Infinity,
  });
}
