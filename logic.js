var saveButton = $(".save-button");
var deleteButton = $(".delete-button");
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
    if (thisHour === currentTime) {
        $(this).children(".col-9").attr("class", "col-9").addClass("current-hour");
    } 
    else if (thisHour > currentTime) {
    $(this).children(".col-9").attr("class", "col-9").addClass("future-hour");
    } 
    else {
        $(this).children(".col-9").attr("class", "col-9").addClass("past-hour");
    }
});
}

$(saveButton).on("click", function (event) {
    event.preventDefault();
    var savedItems = $(this).siblings(".col-9").val();
    var time = $(this).siblings(".time-value").text();
    var timeObject = {
        hours: time, 
        task: savedItems};
   console.log(savedItems);
   console.log(time);
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
    localStorage.removeItem("saved-tasks");
    console.log(savedTasks[i].task)}
    $(this).siblings(".col-9").val("");
    console.log($(this).siblings());
})

$(window).on ("load", function() {
    console.log(JSON.parse(localStorage.getItem("saved-tasks")));
    var saving = JSON.parse(localStorage.getItem("saved-tasks"));
    console.log(saving);
        var tasksField = $(".col-9");
         var dayHours = $(".time-value");
    if (saving) {
       for (i = 0; i < saving.length; i++) {
           savedTasks.push(saving);
         console.log(dayHours);
        if (dayHours[i].innerHTML === saving[i].hours) {
         $(tasksField[i]).text(saving[i].task);
    }    else {
        $(tasksField[i]).text('');
    }
}
    }
currentHour();
});
