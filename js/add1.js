var data = new google.visualization.DataTable();
data.addColumn('string', 'Month');
data.addColumn('number', 'Count');

for (var i = 0; i < chartsdata.length; i++) {
     data.addRow([chartsdata[i].month, chartsdata[i].count]);
}