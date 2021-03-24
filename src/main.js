import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ApiLogic from './api-logic.js'

$(document).ready(function() {
   $('#weatherLocation').click(function() {
  let promise = ApiLogic.getWeather();
  promise.then(function(response);
  const reponse = JSON.parse(response);

  
  imgRequest.open ("GET", imgUrl, true);
  imgRequest.send();
  function getImage(response2)  {
    $('.showImageCaption').html(`${response2.explanation}`);
    $('.showImage').append(`<img src="${response2["url"]}"width="400">`);
  }
  function getElements(response) {
    $('.showInfo').text(`The season on Mars is ${response[response.sol_keys[2]].Season}`);
    $('.showInfo').append(` and the average number of samples taken from on Mars is ${response[response.sol_keys[2]].PRE.av}`);
  }
    });