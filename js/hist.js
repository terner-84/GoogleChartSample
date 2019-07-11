$().ready(function(){
    $('#add_hist').click(function(){
        google.charts.load('current', {packages: ['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            // Define the chart to be drawn.
            let rawData = [
                ['Elmnt', 'Xixao', 'fn'],
                ['Magnesium', 0.78, 'bingo'],
                ['Citigo', 0.02, null],
                ['Fabia', 0, null],
                ['Nitrogen', 0.75, null],
                ['Oxygen', 0.21, null],
                ['Aluminium', 0.01, null]
            ];

            let options = {
                title: 'Approximating Normal Distribution',
                legend: { position: 'none' },
                colors: ['#4285f4', '#ff0000'],
            
                chartArea: { width: 401 },
                hAxis: {
                  ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]
                },
                vAxis: {
                    ticks: [5, 3, 1, 50]
                },
                bar: { gap: 0 },
            
                histogram: {
                  bucketSize: 0.02,
                  maxNumBuckets: 200,
                  minValue: -1,
                  maxValue: 1
                }
            };

            let data = google.visualization.arrayToDataTable(rawData);
            data.sort([{column: 1}]);

            // find data row to highlight
            var highlightRows = data.getFilteredRows([{
                column: 2,
                value: 'bingo'
            }]);

            // Instantiate the chart.
            let container = document.getElementById('hist');
            chart = new google.visualization.Histogram(container);

            google.visualization.events.addListener(chart, 'ready', function () {
                var observer = new MutationObserver(function () {
                    var index = 0;
                    Array.prototype.forEach.call(container.getElementsByTagName('rect'), function (rect) {
                        if (options.colors.indexOf(rect.getAttribute('fill')) > -1) {
                            if (highlightRows.indexOf(index) > -1) {
                                rect.setAttribute('fill', 'rgb(255, 255, 255)');
                                rect.setAttribute('width', 1);
                                rect.setAttribute('stroke', options.colors[1]);
                                rect.setAttribute('stroke-width', 2);
                                rect.setAttribute('stroke-dasharray', 8);
                            }
                        index++;
                        }
                    });
                });
                observer.observe(container, {
                childList: true,
                subtree: true
                });
            });
            
            chart.draw(data, options);
        }
    });
});