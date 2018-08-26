var projectdata = [];
var studentdata = [];

d3.queue()
  .defer(d3.json, "/json/projectdata.json")
  .defer(d3.json, "/json/studentdata.json")
  .await(analyze);

function analyze(error, projects, students) {
  if (error) {
    console.log(error);
  }

  // console.log(projects);
  // console.log(students);

  projectdata = projects;
  studentdata = students;

  // Join the Arrays
  //  Loop through the studentIdArray and add a student property, which is an array, where every element is the whole student element of the studentdata array

  for (var i = 0; i < projectdata.length; i++) {
    for (var j = 0; j < studentdata.length; j++) {
      if (projectdata[i].studentId.includes(studentdata[j].studentId)) {
        projectdata[i].students = [];
        projectdata[i].students.push(studentdata[j]);
      }
    }
  }
  console.log(projectdata);

  // var selected = "fashion";

  var container = ["container"];
  var containers = ["nav", "hero", "grid-container", "project", "footer"];

  d3.select("body")
    .selectAll("div")
    .data(container)
    .enter()
    .append("div")
    .attr("class", function(d) {
      return d;
    });

  d3.select(".container")
    .selectAll("div")
    .data(containers)
    .enter()
    .append("div")
    .attr("class", function(d) {
      return d;
    });

  var div = d3
    .select(".grid-container")
    .selectAll("div")
    .data(projectdata)
    .enter()
    .append("div")
    .classed("project", true)
    .attr("id", function(d) {
      return d.projectId;
    });

  // Highlighting / hiding

  // div.classed("hide", function(d) {
  //   if (d.topics.includes(selected)) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  //
  // })

  div
    .append("img")
    .attr("width", "100%")
    .attr("src", function(d) {
      return "assets/img_work/" + d.photoUrl;
    });

  div
    .append("div")
    .classed("overlay", true)
    .append("h5")
    .text(function(d) {
      return d.heading;
    })
    .classed("project-title", true);

  // div
  //   .append("h6")
  //   .text(function(d) {
  //     return d.subHead;
  //   })
  //   .classed("project-title", true);
}
