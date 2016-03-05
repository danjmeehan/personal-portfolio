$(document).ready(function(){
  
// Get Cushing, OK WTI Spot Price FOB, Monthly ($/barrel)
  
  $.get('http://api.eia.gov/series/?api_key=79B09BD8C61785B1E8AC2898378E9855&series_id=PET.RWTC.M', function(response){
    var data = response.series[0].data;

    //Construct an array of months and an array of prices 
    var months = Array();
    var prices = Array();

      for(var i=0; i<24; i++){
            
          var dataArray = data[i];
          var months = months.concat(dataArray[0]);
          var prices = prices.concat(dataArray[1]);
  
        }  

      months.reverse();
      prices.reverse();

      var chartData = {
        labels: months, //Insert labels
        datasets: [
          {
            fillColor: "rgba(0,127,255,0.2)",
            strokeColor: "rgba(0,127,255,1)",
            pointColor: "rgba(0,127,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,127,255,1)",
            data: prices //Insert prices per month
          }
        ]
      };
      timeContext = $(".oil canvas").get(0).getContext("2d");
      new Chart(timeContext).Line(chartData, {
          scaleLabel: function (valuePayload) {
          return '$' + Number(valuePayload.value);
          },
          scaleBeginAtZero: true,
          pointDot: false,
          showToolTips: false
      });
  }); 

// U.S. Natural Gas Citygate Price, Monthly ($/1000 cubic feet)

$.get('http://api.eia.gov/series/?api_key=79B09BD8C61785B1E8AC2898378E9855&series_id=NG.N3050US3.M', function(response){
    var data = response.series[0].data;
      
    //Construct an array of months and an array of prices 
    var months = Array();
    var prices = Array();

      for(var i=0; i<24; i++){
            
          var dataArray = data[i];
          var months = months.concat(dataArray[0]);
          var prices = prices.concat(dataArray[1]);
  
         }   

      months.reverse();
      prices.reverse();   

      var chartData = {
        labels: months, //Insert labels
        datasets: [
          {
            fillColor: "rgba(0,127,255,0.2)",
            strokeColor: "rgba(0,127,255,1)",
            pointColor: "rgba(0,127,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,127,255,1)",
            data: prices //Insert prices per month
          }
        ]
      };
      timeContext = $(".natural-gas canvas").get(0).getContext("2d");
      new Chart(timeContext).Line(chartData, {
          scaleLabel: function (valuePayload) {
          return '$' + Number(valuePayload.value);
          },
          scaleBeginAtZero: true,
          pointDot: false,
          showToolTips: false
      });
  }); 

// Average retail price of electricity : United States : residential : monthly

$.get('http://api.eia.gov/series/?api_key=79B09BD8C61785B1E8AC2898378E9855&series_id=ELEC.PRICE.US-RES.M', function(response){
    var data = response.series[0].data;
      
    //Construct an array of months and an array of prices 
    var months = Array();
    var prices = Array();

      for(var i=0; i<24; i++){
            
          var dataArray = data[i];
          var months = months.concat(dataArray[0]);
          var prices = prices.concat(dataArray[1]);
  
         }  

      months.reverse();
      prices.reverse();     

      var chartData = {
        labels: months, //Insert labels
        datasets: [
          {
            fillColor: "rgba(0,127,255,0.2)",
            strokeColor: "rgba(0,127,255,1)",
            pointColor: "rgba(0,127,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,127,255,1)",
            data: prices //Insert prices per month
          }
        ]
      };
      timeContext = $(".electricity canvas").get(0).getContext("2d");
      new Chart(timeContext).Line(chartData, {
          scaleLabel: function (valuePayload) {
          return '$' + Number(valuePayload.value);
          },
          scaleBeginAtZero: true,
          pointDot: false,
          showToolTips: false
      });
  }); 

// Hydroelectric Power Consumption/Production, Monthly

$.get('http://api.eia.gov/series/?api_key=79B09BD8C61785B1E8AC2898378E9855&series_id=TOTAL.HVTCBUS.M', function(response){
    var data = response.series[0].data;
      
    //Construct an array of months and an array of prices 
    var months = Array();
    var prices = Array();

      for(var i=0; i<24; i++){
            
          var dataArray = data[i];
          var months = months.concat(dataArray[0]);
          var prices = prices.concat(dataArray[1]);
  
         } 

      months.reverse();
      prices.reverse();      

      var chartData = {
        labels: months, //Insert labels
        datasets: [
          {
            fillColor: "rgba(0,127,255,0.2)",
            strokeColor: "rgba(0,127,255,1)",
            pointColor: "rgba(0,127,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,127,255,1)",
            data: prices //Insert prices per month
          }
        ]
      };
      timeContext = $(".hydro canvas").get(0).getContext("2d");
      new Chart(timeContext).Line(chartData, {
          scaleLabel: function (valuePayload) {
          return '$' + Number(valuePayload.value);
          },
          scaleBeginAtZero: true,
          pointDot: false,
          showToolTips: false
      });
  });


});
