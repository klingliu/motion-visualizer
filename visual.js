// const svg = d3.select('svg');
//   svg.append('circle');

// d3.select("h4")
// .style("color","brown");

const canvas = d3.select(".canva");

const svg = canvas.append("svg")
            .attr('width', 600)
            .attr('height', 600)

const rect = svg.selectAll("rect");
svg.append("circle").attr("cx","34").attr("cy","34").attr("r","34");

svg.append("rect").attr("width",100)
                  .attr("height",150)
                  .attr("x",50)
                  .attr("y",50)
                  .attr("fill","green");

