// 
axios.get('http://localhost:8888/corsData')
  .then(function (response) {
    // handle success
    document.getElementById("name").innerHTML = response.data.name;
    document.getElementById("culture").innerHTML = response.data.culture;
  })