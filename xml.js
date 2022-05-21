if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
   xmlhttp = new XMLHttpRequest();
}
else
{// code for IE6, IE5
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET", "note.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

document.getElementById("feature1").innerHTML=
   xmlDoc.getElementsByTagName("feature1")[0].childNodes[0].nodeValue;
   document.getElementById("feature2").innerHTML=
   xmlDoc.getElementsByTagName("feature2")[0].childNodes[0].nodeValue;
   document.getElementById("feature3").innerHTML=
   xmlDoc.getElementsByTagName("feature3")[0].childNodes[0].nodeValue;
   document.getElementById("feature4").innerHTML=
   xmlDoc.getElementsByTagName("feature4")[0].childNodes[0].nodeValue;
   document.getElementById("feature5").innerHTML=
   xmlDoc.getElementsByTagName("feature5")[0].childNodes[0].nodeValue;
 