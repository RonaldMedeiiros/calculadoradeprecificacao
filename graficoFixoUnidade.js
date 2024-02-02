<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var margemLucroFixo = window.margemLucroGraficoFixo || 0;
        var data = google.visualization.arrayToDataTable([
          ['Tipo', 'Valor'],
          ['Margem de Lucro', margemLucroFixo],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('graficoMargemLucro'));
        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <div id="graficoMargemLucro" style="width: 900px; height: 500px;"></div>
    <script src="formulas.js"></script>
  </body>
</html>