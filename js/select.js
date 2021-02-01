
    function change_countrySelect(sel) {
    var obj, dbParam, xmlhttp, myObj, x, txt = "";
    obj = { table: sel, limit: 200 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "<table border='1'>"
        for (x in myObj) {
          txt += "<tr><td>" + myObj[x].name + "</td></tr>";
        }
        txt += "</table>"    
        document.getElementById("show").innerHTML = txt;
        }
      };
    xmlhttp.open("POST", "../php/ctr.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send("x=" + dbParam);
  }
