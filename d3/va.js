// A pie chart to show population by age group; uses the "pie" namespace.
dispatch.on("load.pie", function(tractById) {
  var width = 200,
      height = 200,
      radius = Math.min(width, height) / 1.9;

  var color = d3.scale.ordinal()
      .domain(groups)
      .range(["#fdbb84", "#fc8d59", "#e34a33", "#b30000"]);

  var arc = d3.svg.arc()
      .outerRadius(radius - 50)
      .innerRadius(radius - 10);

  var pie = d3.layout.pie()
      .sort(null);

  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var path = svg.selectAll("path")
      .data(groups)
    .enter().append("path")
      .style("fill", color)
      .each(function() { this._current = {startAngle: 0, endAngle: 0}; });

  dispatch.on("statechange.pie", function(d) {
    path.data(pie.value(function(g) { return d[g]; })(groups)).transition()
        .attrTween("d", function(d) {
          var interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function(t) {
            return arc(interpolate(t));
          };
        });
  });
});