document.addEventListener("DOMContentLoaded", init, false);

function init() {
  function sumar() {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = num1 + num2;
  }
  function restar() {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = num1 - num2;
  }

  function multiplicar() {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = num1 * num2;
  }

  function dividir() {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = num1 / num2;
  }

  var sum = document.getElementById("sumar");
  sum.onclick = () => {
    sumar();
  };

  var res = document.getElementById("restar");
  res.onclick = () => {
    restar();
  };
  var mult = document.getElementById("multiplicar");
  mult.onclick = () => {
    multiplicar();
  };
  var div = document.getElementById("dividir");
  div.onclick = () => {
    dividir();
  };
}
document.getElementById("sumar").style.color = "red";
document.getElementById("restar").style.color = "green";
document.getElementById("multiplicar").style.color = "blue";
document.getElementById("dividir").style.color = "skyblue";
document.getElementById("resultado").style.backgroundColor = "#a8e4ce";
