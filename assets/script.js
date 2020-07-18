// Variable decleration
const e = moment();
console.log(e.format("dddd"));

var dateDisplay = $("#currentDay");
dateDisplay.text(e.format("[Today is] ddd MMM Mo YYYY"));

var calender = [
  { time: "12:00am", savedText: "Code Webpages" },
  { time: "1:00am", savedText: "Code Webpages" },
  { time: "2:00am", savedText: "Code Webpages" },
  { time: "3:00am", savedText: "Code Webpages" },
  { time: "4:00am", savedText: "Code Webpages" },
  { time: "5:00am", savedText: "Code Webpages" },
  { time: "6:00am", savedText: "Code Webpages" },
  { time: "7:00am", savedText: "Code Webpages" },
  { time: "8:00am", savedText: "Code Webpages" },
  { time: "9:00am", savedText: "Code Webpages" },
  { time: "10:00am", savedText: "Code Webpages" },
  { time: "11:00am", savedText: "Code Webpages" },
  { time: "12:00pm", savedText: "Code Webpages" },
  { time: "1:00pm", savedText: "Code Webpages" },
  { time: "2:00pm", savedText: "Code Webpages" },
  { time: "3:00pm", savedText: "Code Webpages" },
  { time: "4:00pm", savedText: "Code Webpages" },
  { time: "5:00pm", savedText: "Code Webpages" },
  { time: "6:00pm", savedText: "Code Webpages" },
  { time: "7:00pm", savedText: "Code Webpages" },
  { time: "8:00pm", savedText: "Code Webpages" },
  { time: "9:00pm", savedText: "Code Webpages" },
  { time: "10:00pm", savedText: "Code Webpages" },
  { time: "11:00pm", savedText: "Code Webpages" },
  { time: "12:00pm", savedText: "Code Webpages" },
];

var calenderParse = JSON.parse(localStorage.getItem("calender"));

if (calenderParse === null) {
  localStorage.setItem("calender", JSON.stringify(calender));
}

var hours = 24;
var container = $(".container");
function displayHours() {
  calender = JSON.parse(localStorage.getItem("calender"));
  container.empty();
  for (var i = 0; i < hours; i++) {
    currentHour = calender[i];
    var timeBlock = $("<div>").addClass("time-block");
    var row = $("<div>").addClass("row");
    var hour = $("<div>").addClass("hour").text(currentHour.time);
    var description = $("<div>")
      .addClass("description")
      .attr("data-number", i)
      .text(currentHour.savedText);
    var input = $("<textarea>").attr("data-number", i);
    var saveBtn = $("<div>")
      .addClass("saveBtn")
      .attr("data-number", i)
      .text("Save");
    description.append(input);
    row.append(hour).append(description).append(saveBtn);
    timeBlock.append(row);
    container.append(timeBlock);
  }
}

displayHours();

$(document).on("click", ".saveBtn", function () {
  var thisBtn = $(this).attr("data-number");
  var newDesc = $(this).prev();
  var thisText = newDesc.first();
  var textVal = thisText[0].children[0].value;
  calender[thisBtn].savedText = textVal;
  localStorage.setItem("calender", JSON.stringify(calender));
  displayHours();
});
