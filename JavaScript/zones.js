/*
   New Perspectives on HTML, XHTML, and DHTML
   Tutorial 11
   Case Problem 3

   Author: Seth Moyes
   Date:   04/06/2016

   Function List:
   addTime(oldtime, milliseconds)
      Used to add a specified number of milliseconds to a date object named oldtime.
      A new date object with the new time value is returned by the function.

   showTime(time)
      Displays a time value in the format:
      hh:mm AM/PM
*/

function addTime (oldTime, milliSeconds) {
//Create a date object named newTime, but do not specify a value for its date or time (e.g. have it start as the current date and time).
var newTime = new Date();

//Use the built in Date method getTime()to get the number of milliseconds contained in the oldTime parameter and add this to the milliSeconds parameter.
//Store this sum in a variable named newValue.
var newValue = oldTime.getTime() + milliSeconds;

/* Using the built in Date method setTime() method, set the time value of the newTime date object to the value of the newValue variable. */
newTime.setTime(newValue);

// Return the value of the newTime date object.
return newTime;
}


/*Below the addTime()(AFTER the closing }), create a function named showTime() that will return a text string showing the time in
12-hour format (e.g. 11:03 AM or 7:45 PM).
The function has a single parameter named time, which contains the date and time that you want displayed. */

function showTime (time) {
/*Use the built in Date methods getMinutes() and getHours() to extract the hours and
minutes from the time parameter passed to the function. */
time.getMinutes().getHours();

//Use a statement to check if the the hours are less than 12, if so set an ampm variable to "AM" otherwise set it to "PM"
function showTime (time) {
  var minutes = time.getMinutes();
  var hours   = time.getHours();
  if(hours<12){ var ampm = "AM"; };
  if(hours>=12){
    hours -= 12;
    var ampm = "PM";
  }


  if(hours === 0){
    hours = 12;
  }


  if(minutes < 10){
    minutes = "0" + minutes;
  }


  return hours + ":" + minutes + ampm;
}
