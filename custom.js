$(document).ready(function () {
  var eventsData = [];
  var eventsVal = [];
  var datesVal = [];

  window.onload = getFormValue();

  function getFormValue() {
    var myEvents = document.querySelectorAll(".event");
    var dates = document.querySelectorAll(".date");

    myEvents.forEach((eventElem) => {
      eventsVal.push(eventElem.value);
    });

    dates.forEach((dateElem) => {
      datesVal.push(dateElem.value);
    });
  }

  // for loop for create dynamic event data
  for (let i = 0; i < eventsVal.length; i++) {
    eventsData.push({
      title: eventsVal[i],
      start: datesVal[i],
    });
  }

  // Event Calender init()
  $("#calendar").fullCalendar({
    locale: "",
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,basicWeek,basicDay",
    },

    events: eventsData,
  });
});
