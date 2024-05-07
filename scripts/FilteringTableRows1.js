document.addEventListener("DOMContentLoaded", function() {
    // Function to filter table rows based on selected parameters
    function filterTable() {
        var country = document.getElementById("country").value;
        var city = document.getElementById("city").value;
        var name = document.getElementById("name").value;
        
        var tableRows = document.getElementById("Table of Recognized Universities and Degrees").getElementsByTagName("tr");
        
        for (var i = 1; i < tableRows.length; i++) {
            var row = tableRows[i];
            var rowCountry = row.cells[0].innerText;
            var rowCity = row.cells[1].innerText;
            var rowName = row.cells[2].innerText;
            
            // Check if the row matches the selected parameters
            if ((country === "All" || rowCountry === country) &&
                (city === "All" || rowCity === city) &&
                (name === "All" || rowName === name)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        }
    }

    // Attach event listener to the search button
    document.getElementById("searchBtn").addEventListener("click", filterTable);
});

