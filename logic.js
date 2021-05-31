var saveButton = $(".save-button");
var deleteButton = $(".delete-button");
var nineAM = $("#9am");
var tenAM = $("10am");
var elevenAM = $("11am");
var noon = $("12pm");
var onePM = $("1pm");
var twoPM = $("2pm");
var threePM = $("3pm");
var fourPM = $("4pm");
var fivePM = $("5pm");
var savedTasks = [];
$(document).ready(function () {
    var date = moment().format('dddd MMMM Do, YYYY');
  
    $('#current-day').text("Today is " + date);
})

function currentHour() {
    var currentTime = moment().hour();
    var hour = $(".time-block");


hour.each(function() {
    var thisHour = parseInt($(this).attr("id"))
   // console.log(this)
    if (thisHour === currentTime) {
        $(this).children(".col-9").attr("class", "col-9").addClass("current-hour");
    } 
    else if (thisHour > currentTime) {
    $(this).children(".col-9").attr("class", "col-9").addClass("future-hour");
    } 
    else {
        $(this).children(".col-9").attr("class", "col-9").addClass("past-hour");
    }
// console.log(thisHour);
 //console.log(hour);
 //   console.log(currentTime);
    });
}


$(saveButton).on("click", function (event) {
    event.preventDefault();
    var savedItems = $(this).siblings(".col-9").val();
    var time = $(this).siblings(".time-value").text();
    var timeObject = {
        hours: time, 
        task: savedItems};
   
    savedTasks.push(timeObject);

    localStorage.setItem("saved-tasks", JSON.stringify(savedTasks))

    console.log(time);
    console.log(savedItems);
    console.log(timeObject);
    console.log(savedTasks)

    for (i = 0; i < savedTasks.length; i++) {
    retrievedData = JSON.parse(localStorage.getItem("saved-tasks"));
    savedItems.innerHTML = savedTasks[i].task;
    }

   
})

$(deleteButton).on("click", function (event) {
    event.preventDefault();
    console.log(savedTasks);
    for (i = 0; i < savedTasks.length; i++) {
    window.localStorage.removeItem(savedTasks[i].task);
    console.log(savedTasks[i].task)}
    $(this).siblings(".col-9").val("");
    console.log($(this).siblings());
})

//for (retrievedData.length) {

//}

currentHour();