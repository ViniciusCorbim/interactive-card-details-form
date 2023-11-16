//Card Name
document
  .getElementById("id_cardholderName")
  .addEventListener("input", function (e) {
    const regName = /^[a-zA-Z']{2,} [a-zA-Z]{2,}$/i;

    if (!regName.test(e.target.value)) {
      e.target.classList.toggle("invalid", true);
      document.getElementById("warningName").innerText = "Invalid name given";
      document.getElementById("cardName").innerText = "Jane Appleseed";
    } else {
      e.target.classList.toggle("invalid", false);
      document.getElementById("warningName").innerText = "";
      document.getElementById("cardName").innerText = e.target.value;
    }
  });

//Card Number
document
  .getElementById("id_cardNumber")
  .addEventListener("input", function (e) {
    e.target.value = e.target.value
      .replace(/[^0-9 ]/g, "")
      .replace(/(\..*?)\..*/g, "$1");

    const regNumber = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;

    if (!regNumber.test(e.target.value)) {
      e.target.classList.toggle("invalid", true);
      document.getElementById("warningNumber").innerText =
        "Invalid number given";
      document.getElementById("cardNumber").innerText = "0000 0000 0000 0000";
    } else {
      e.target.classList.toggle("invalid", false);
      document.getElementById("warningNumber").innerText = "";
      document.getElementById("cardNumber").innerText = e.target.value;
    }
  });

//Date MM
document.getElementById("id_dateMM").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^0-9]/g, "")
    .replace(/(\..*?)\..*/g, "$1");

  const regDateMM = /^0[1-9]$|^1[0-2]$/;

  if (!regDateMM.test(e.target.value)) {
    e.target.classList.toggle("invalid", true);
    document.getElementById("warningDate").innerText = "Invalid Date given";
    document.getElementById("cardDateMM").innerText = "00";
  } else {
    e.target.classList.toggle("invalid", false);
    document.getElementById("warningDate").innerText = "";
    document.getElementById("cardDateMM").innerText = e.target.value;
  }
});

//Date YY
document.getElementById("id_dateYY").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^0-9]/g, "")
    .replace(/(\..*?)\..*/g, "$1");

  const regDateYY = /^[0-9][0-9]$/;

  if (!regDateYY.test(e.target.value)) {
    e.target.classList.toggle("invalid", true);
    document.getElementById("warningDate").innerText = "Invalid Date given";
    document.getElementById("cardDateYY").innerText = "00";
  } else {
    e.target.classList.toggle("invalid", false);
    document.getElementById("warningDate").innerText = "";
    document.getElementById("cardDateYY").innerText = e.target.value;
  }
});

//CVC
document.getElementById("id_cvc").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^0-9]/g, "")
    .replace(/(\..*?)\..*/g, "$1");

  const regCVC = /^[0-9]{3}$/;

  if (!regCVC.test(e.target.value)) {
    e.target.classList.toggle("invalid", true);
    document.getElementById("warningCVC").innerText = "Invalid CVC given";
    document.getElementById("cvc").innerText = "000";
  } else {
    e.target.classList.toggle("invalid", false);
    document.getElementById("warningCVC").innerText = "";
    document.getElementById("cvc").innerText = e.target.value;
  }
});
