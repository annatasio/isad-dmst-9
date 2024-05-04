function filterTable() {
    var input1 = document.getElementById("ParameterCountry").value.trim().toUpperCase();
    var input2 = document.getElementById("ParameterCity").value.trim().toUpperCase();
    var input3 = document.getElementById("ParameterName").value.trim().toUpperCase();
  
    var table = document.getElementById("Table of Recognized Universities and Degrees");
    var rows = table.getElementsByTagName("tr");
  
    for (var i = 1; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
  
      if (input1 && input1 !== "" && cells[0]) {
        var txtValue1 = cells[0].textContent || cells[0].innerText;
        if (txtValue1.toUpperCase().indexOf(input1) === -1) {
          rows[i].style.display = "none";
          continue;
        }
      }
  
      if (input2 && input2 !== "" && cells[1]) {
        var txtValue2 = cells[1].textContent || cells[1].innerText;
        if (txtValue2.toUpperCase().indexOf(input2) === -1) {
          rows[i].style.display = "none";
          continue;
        }
      }
  
      if (input3 && input3 !== "" && cells[2]) {
        var txtValue3 = cells[2].textContent || cells[2].innerText;
        if (txtValue3.toUpperCase().indexOf(input3) === -1) {
          rows[i].style.display = "none";
          continue;
        }
      }
  
      rows[i].style.display = "";
    }
  }
  