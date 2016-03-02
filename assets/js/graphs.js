$(document).ready(function(){

// Get Cushing, OK WTI Spot Price FOB, Monthly ($/barrel)
	
	$.get('http://api.eia.gov/series/?api_key=79B09BD8C61785B1E8AC2898378E9855&series_id=PET.RWTC.M', function(response){
		var data = response.series[0].data;
    	
    	//Construct an array of months and an array of prices 
		var months = Array();
		var prices = Array();

    	for(var i=0; i<data.length; i++){
        		
        	var dataArray = data[i];
          	var months = months.concat(dataArray[0]);
          	var prices = prices.concat(dataArray[1]);
  
         }  		
        	console.log(prices);
        	console.log(typeof(months));
        	console.log(typeof(prices));

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
            pointDot: false,
            data: prices //Insert prices per month
          }
        ]
      };
      timeContext = $(".graph canvas").get(0).getContext("2d");
      new Chart(timeContext).Line(chartData);
  });

});