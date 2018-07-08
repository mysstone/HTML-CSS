/*
   Filename: list.js

   Variable List:

   Names: Contains the product or event name
   Prices: Contains the product price or event date.
   Descriptions: Contains the product description
   Images: Contains a thumbnail product image
   Images2: Contains a larger product image

*/


function getID()
{
  var url = window.location.toString();
  var i = 0;
  if(url.indexOf("?id=")>0)
  {
    var start = url.lastIndexOf("?id=")+ 4;
    i = url.substring(start);
  }
  return i;
}


 aName = new Array();
  aName[0] = "Mindy";
  aName[1] = "Roger";
  aName[2] = "Nancy";
  aName[3] = "Sally";

 aPrice = new Array();
  aPrice[0] = "$150";
  aPrice[1] = "$200";
  aPrice[2] = "$300";
  aPrice[3] = "$100";

 aDesc = new Array();
  aDesc[0] = "the fun club, sign up now! It will be a fun time for all people to enjoy, and it is totally worth the price. It is $150 and it's a great time for great people! It's for the people after all. She's a good leader. She seems so young. In fact, she is young. I wouldn't worry about it. She's all about having some serious fun. Who knows, maybe it will be life changing: probably not though. ";
  aDesc[1] = "Roger is in charge of the medical club. it can be really boring, or really fun. That's all up to you as a student. Who knows, maybe you'll find the love of your life here, Patrick Dempsey. He's good looking, right? And he's a doctor too? Doctor Roger knows what's up. He can get you into any hospital. He's big on doctor dramas too. So join his club, so you can be as smart as he is.";
  aDesc[2] = "As the club leader's name suggests, this club is for boring Nancy's, or those people who like being negative. That's just how she is. A downer. I don't even know why she's a downer. She just is. Good luck with her. You're going to need it. Maybe this will be the start of a new beginning for this club. I hope so. It seems like a lot of fun, but I've never tried it.";
  aDesc[3] = "Ahhhh, finally, Sally. Sally Mae. Sally Field. Sally is a neat gal with a 60's name. Like in Harry met Sally, she's kinda a faker. She doesn't know what she wants. Oh, that's right. She wants your money. So pay up. And have a good time with this horrendo.. I mean amazing club! That's at least what Sally says. And what Sally says, she gets. No way around it. ";
 aImage = new Array();
  aImage[0] = "students1.jpg";
  aImage[1] = "students2.jpg";
  aImage[2] = "students3.jpg";
  aImage[3] = "students4.jpg";
