// Read text file and populate table
window.onload = function() {
  // Read the text file (replace 'AnagnorismenaData.txt' with your file path)
  fetch('AnagnorismenaData.txt')
    .then(response => response.text())
    .then(data => {
      // Split the text data into lines
      const lines = data.split('\n');
      
      // Get the table body element
      const tableBody = document.getElementById('TableBody');
      
      // Iterate over each line and create table rows
      lines.forEach(line => {
        // Split each line by colon (:)
        const cells = line.split(':');
        
        // Create a new table row
        const row = document.createElement('tr');
        
        // Iterate over each cell
        cells.forEach(cell => {
          // Create a new table cell
          const cellElement = document.createElement('td');
          cellElement.textContent = cell.trim();
          cellElement.style.border = '1px solid black'; // Add border styling
          row.appendChild(cellElement);
        });
        
        // Add the row to the table body
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error reading the file:', error));
};
