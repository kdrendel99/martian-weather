import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  // $('#weatherLocation').click(function() {

    let request = new XMLHttpRequest();
    const url = 'https://api.nasa.gov/insight_weather/?api_key=H7qr70Zy6DmIvbTSaxPjqkHUQWuWfg6FNIj9syic&feedtype=json&ver=1.0 ';
    request.onreadystatechange = function () 
    {
      if (this.readyState === 4 && this.status === 200) {
        console.log("First API call worked!")
        const response = JSON.parse(this.responseText);
        getElements (response);
      }
    }
    request.open ("GET", url, true);
    request.send();
    function getElements(response) {
      $('.showInfo').text(`The season on Mars is ${response[response.sol_keys[2]].Season}`);
      $('.showInfo').append(` and the average number of samples taken from on Mars is ${response[response.sol_keys[2]].PRE.av}`);
    }

    let imgRequest = new XMLHttpRequest();
    const imgUrl = 'https://api.nasa.gov/planetary/apod?api_key=H7qr70Zy6DmIvbTSaxPjqkHUQWuWfg6FNIj9syic';
    console.log(this.status);
    imgRequest.onreadystatechange = function ()
    {
      if (this.readyState === 4 && this.status === 200) {
        console.log("Second API call worked!")
      const response2 = JSON.parse(this.responseText);
      getImage (response2);
    }
  }
  imgRequest.open ("GET", imgUrl, true);
  imgRequest.send();
  function getImage(response2)  {
    $('.showImage').html(`${response2.explanation}`)
    $('.showImage').append(`<img src="${response2["url"]}"width="400">`);
  }
    });