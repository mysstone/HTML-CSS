/**********************************
 * Cookie functions to allow you to
 * Set, Get, Append and Delete
 * JavaScript Cookies.
 * by Dawn Gregg, 2006
 ***********************************/

function getUTC(xDays)
{
   var exp = new Date();
   exp.setTime(exp.getTime() + (xDays*24*60*60*1000));
   return exp.toUTCString();
}

function getCookieValue (name) 
{  
  var arg = name + "=";
  var start =  document.cookie.indexOf(arg);
  var offset = start + arg.length;
  
  if (start != -1)      
  {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
       endstr = document.cookie.length;

    return document.cookie.substring(offset, endstr);
  }    
  else
    return null;
}

function appendCookie (name, value, days, delim)
{
   var d = "|";
   if(delim) d = delim;
   
   // get contents already in cookie
   var current = getCookieValue(name);
   
   // if something already in cookie add new purchases to the end it
   if(current != null)
     value = current + delim + value;
     
   // Set or Reset the cookie
   setCookie(name, value, days);
}

function setCookie (name, value, days)
{
  // Create a persistent cookie
  if (days > 0)
  {  document.cookie = name + "=" + value +
            "; expires=" + getUTC(days) + ";" ;
  }
  else
    document.cookie = name +"="+ value + ";";
}

function deleteCookie (name) 
{  
   var exp = getUTC(-1);     
   var cval = getCookieValue (name);
   document.cookie = name + "=" + cval + "; expires=" + exp + ";";
}