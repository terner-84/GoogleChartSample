var data=[];
 var Header= ['Element', 'Density', { role: 'style' }];
 data.push(Header);
 for (var i = 0; i < chartsdata.length; i++) {
      var temp=[];
      temp.push(chartsdata[i].MonthValue);
      temp.push(chartsdata[i].CountValue);

      data.push(temp);
  }
var chartdata = new google.visualization.arrayToDataTable(data);