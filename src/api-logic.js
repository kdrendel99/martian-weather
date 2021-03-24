export default class ApiLogic {
  static asyn getWeather() {
    return fetch('https://api.nasa.gov/insight_weather/?api_key=H7qr70Zy6DmIvbTSaxPjqkHUQWuWfg6FNIj9syic&feedtype=json&ver=1.0 `)
    ,then(function(reponse) {
      if (!response.ok) {
        throw Error(response.status);
      }
      return reponse.json();
    })
    .catch (function(error) {
      return Error(error);
    })
    )};
}
  
    let imgRequest = new XMLHttpRequest();
    const imgUrl = 'https://api.nasa.gov/planetary/apod?api_key=H7qr70Zy6DmIvbTSaxPjqkHUQWuWfg6FNIj9syic';
    console.log(this.status);
    imgRequest.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log("Second API call worked!")
        const response2 = JSON.parse(this.responseText);
        getImage(response2);
      }
    }
  }
}