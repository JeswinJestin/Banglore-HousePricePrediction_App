function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i = 0; i < uiBathrooms.length; i++) {
        if(uiBathrooms[i].checked) {
            return parseInt(uiBathrooms[i].value);
        }
    }
    return -1; // Invalid Value
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i = 0; i < uiBHK.length; i++) {
        if(uiBHK[i].checked) {
            return parseInt(uiBHK[i].value);
        }
    }
    return -1; // Invalid Value
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");
  var sqft = document.getElementById("uiSqft");
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations");
  var estPrice = document.getElementById("uiEstimatedPrice");

  var url = "http://127.0.0.1:5000/predict_home_price";

  $.post(url, {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value
  },function(data, status) {
      console.log(data.estimated_price);
      estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
      console.log(status);
  }).fail(function() {
      estPrice.innerHTML = "<h2>Error: Could not get a prediction</h2>";
  });
}

function onPageLoad() {
  console.log( "document loaded" );
  var url = "http://127.0.0.1:5000/get_location_names";
  
  console.log("Making request to:", url);
  
  $.get(url)
  .done(function(data, status) {
      console.log("got response for get_location_names request");
      console.log("Status:", status);
      console.log("Data:", data);
      
      if(data && data.locations) {
          var locations = data.locations;
          var uiLocations = document.getElementById("uiLocations");
          $('#uiLocations').empty();
          
          // Add default option
          var defaultOpt = new Option("Choose a Location", "");
          defaultOpt.disabled = true;
          defaultOpt.selected = true;
          $('#uiLocations').append(defaultOpt);
          
          // Add location options
          for(var i in locations) {
              var opt = new Option(locations[i], locations[i]);
              $('#uiLocations').append(opt);
          }
          console.log("Successfully loaded", locations.length, "locations");
      } else {
          console.error("No locations data received");
      }
  })
  .fail(function(xhr, status, error) {
      console.error("Failed to load locations:");
      console.error("Status:", status);
      console.error("Error:", error);
      console.error("Response:", xhr.responseText);
      // Keep default options if API fails
  });
}

window.onload = onPageLoad;