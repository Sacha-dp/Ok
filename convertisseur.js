function conversion() {
  let dec = document.getElementById("decimal").value;
  let bin = document.getElementById("binaire").value;
  let hex = document.getElementById("hexadecimal").value;

  if (dec !== "") {
    document.getElementById("binaire").value = parseInt(dec, 10).toString(2);
    document.getElementById("hexadecimal").value = parseInt(dec, 10).toString(16);
  }
  else if (bin !== "") {
    document.getElementById("decimal").value = parseInt(bin, 2);
    document.getElementById("hexadecimal").value = parseInt(bin, 2).toString(16);
  }
  else if (hex !== "") {
    document.getElementById("decimal").value = parseInt(hex, 16);
    document.getElementById("binaire").value = parseInt(hex, 16).toString(2);
  }
}


function effacer() {
  document.getElementById("decimal").value = "";
  document.getElementById("binaire").value = "";
  document.getElementById("hexadecimal").value = "";
}