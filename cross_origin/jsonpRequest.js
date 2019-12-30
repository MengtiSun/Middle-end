// instead of requesting data via ajax, let's request a js file
// This is because
const s = document.createElement("script");
s.src = "http://localhost:8888/jsonpData.js";
document.body.appendChild(s);

function showData(myObj) {
  document.getElementById("name").innerHTML = myObj.name;
  document.getElementById("culture").innerHTML = myObj.culture;
}