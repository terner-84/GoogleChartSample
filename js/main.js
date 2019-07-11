$().ready(function(){
    let chart;
    let data;
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define the chart to be drawn.
      data = new google.visualization.DataTable();
      data.addColumn('string', 'Element');
      data.addColumn('number', 'Percentage');
      data.addRows([
        ['Nitrogen', 0.78],
        ['Oxygen', 0.21],
        ['Other', 0.01]
      ]);

      // Instantiate and draw the chart.
      chart = new google.visualization.PieChart(document.getElementById('chart'));
      chart.draw(data, null);
    }

    $('#btn').click(function(){
        console.log(data);
        data.addRows([
            ['Bor', 0.1],
            ['Neon', 0.1]
          ]);

        /*  
        for (var i = 0; i < chartsdata.length; i++) {
            data.addRow([chartsdata[i].month, chartsdata[i].count]);
        }*/
        console.log(data);
        chart.draw(data, null);
    });

});