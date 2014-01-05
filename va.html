<!DOCTYPE html>
<meta charset="utf-8">
<style>

.axis text {
  font: 10px sans-serif;
}

.axis line,
.axis path {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

</style>
<body>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script>

var dispatch = d3.dispatch("load", "statechange");

var groups = [
  "0 vehicles",
  "1 vehicle",
  "2 vehicles",
  "3+ vehicles"
];

d3.csv("data.csv", type, function(error, states) {
  if (error) throw error;
  var tractById = d3.map();
  states.forEach(function(d) { tractById.set(d.id, d); });
  dispatch.load(tractById);
  dispatch.statechange(tractById.get("010100"));
});

// A drop-down menu for selecting a state; uses the "menu" namespace.
dispatch.on("load.menu", function(tractById) {
  var select = d3.select("#va_chart")
    .append("div")
    .append("select")
      .on("change", function() { dispatch.statechange(tractById.get(this.value)); });

  select.selectAll("option")
      .data(tractById.values())
    .enter().append("option")
      .attr("value", function(d) { return d.id; })
      .text(function(d) { return d.id; });

  dispatch.on("statechange.menu", function(state) {
    select.property("value", state.id);
  });
});

// A bar chart to show total population; uses the "bar" namespace.
/*
dispatch.on("load.bar", function(tractById) {
  var margin = {top: 20, right: 20, bottom: 30, left: 30},
      width = 70 - margin.left - margin.right,
      height = 250 - margin.top - margin.bottom;

  var y = d3.scale.linear()
      .domain([0, d3.max(tractById.values(), function(d) { return d.total; })])
      .rangeRound([height, 0])
      .nice();

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format(".2s"));

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  var rect = svg.append("rect")
      .attr("x", 4)
      .attr("width", width - 4)
      .attr("y", height)
      .attr("height", 0)
      .style("fill", "#aaa");

  dispatch.on("statechange.bar", function(d) {
    rect.transition()
        .attr("y", y(d.total))
        .attr("height", y(0) - y(d.total));
  });
});

*/

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

// Coerce population counts to numbers and compute total per state.
function type(d) {
  d.total = d3.sum(groups, function(k) { return d[k] = +d[k]; });
  return d;
}

</script>