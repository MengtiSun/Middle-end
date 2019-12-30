// this is not successfully because of cross origin issue
axios.get('http://localhost:8888/data')
  .then(function (response) {
    // handle success
    document.getElementById("name").innerHTML = response.data.name;
    document.getElementById("culture").innerHTML = response.data.culture;
  })