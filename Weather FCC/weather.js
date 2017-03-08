/* eslint-disable */
function getData(data) {
  var dataObj = {
    windSpeed: (data["wind"]["speed"]).toFixed(1),
    windDirection: (data["wind"]["deg"]).toFixed(1),
    temperature: (data["main"]["temp"] - 273.15).toFixed(1),
    description: data["weather"][0]["description"]
    // description: "thunder"
    // windSpeed: '234',
    // windDirection: '160',
    // temperature: (' 373.15' - 273.15).toFixed(1)
  }
  return dataObj;
}

function celsiusToFahrenheit(celsius) {
  return ((celsius * (9 / 5)) + 32).toFixed(1)
}

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://ipinfo.io",
    data: {},
    dataType: "json",
    success: function (response) {
      var arr = response.loc.split(',')
      var lat = arr[0];
      var lon = arr[1];
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=54210b7425775c5509e6d309d4e49623`,
        method: 'GET',
        data: {},
        dataType: 'json',
        success: function (response) {
          var {
            temperature,
            windSpeed,
            windDirection,
            description
          } = getData(response);
          console.log(`your approximate coords Lat - ${lat} Lon - ${lon}`);
          
          var match = description;
          $('.description').text(description[0].toUpperCase() + description.slice(1));
          $('.temperature').text(temperature);

          $('.celsius').click(function () {
            $('.fahrenheit').css('display', 'inline');
            var tempInF = celsiusToFahrenheit(temperature);
            $('.temperature').text(tempInF)
            $('.celsius').css('display', 'none')
          })
          $('.fahrenheit').click(function () {
            $('.celsius').css('display', 'inline');
            var tempInC = temperature;
            $('.temperature').text(tempInC);
            $('.fahrenheit').css('display', 'none');
          })

          if (/haze/g.test(match)) {
            $('.weatherImage').html('<i class="wi wi-day-cloud"></i>')
          } else if (/clear/gi.test(match)) {
            $('.weatherImage').html('<i class="wi wi-day-sunny"></i>')
            // $('.weatherImage')
          } else if (/thunder/gi.test(match)) {
            $('.weatherImage').html('<i class="wi wi-thunderstorm"></i>')
          } else if (/snow/gi.test(match)) {
            $('.weatherImage').html('<i class="wi wi-snow"></i>')
          } else if (/rain/gi.test(match)) {
            $('.weatherImage').html('<i class="wi wi-rain"></i>')
          } else if (/mist/gi.test(match)) {
            $('.weatherImage').html('<i class="wi wi-fog"></i>')
          }

        }
      });
    }
  });

})