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
        // Split each line into cells (assuming cells are separated by a delimiter like comma)
        const cells = line.split(',');
        
        // Create a new table row
        const row = document.createElement('tr');
        
        // Iterate over each cell
        cells.forEach(cell => {
          // Check if cell contains elements within parentheses
          const matches = cell.match(/\((.*?)\)/);
          if (matches) {
            // If elements within parentheses found, concatenate them and create a new cell
            const cellElement = document.createElement('td');
            cellElement.textContent = matches[0]; // Take the first match
            cellElement.style.border = '1px solid black'; // Add border styling
            row.appendChild(cellElement);
          } else {
            // If no elements within parentheses, create a new cell with original content
            const cellElement = document.createElement('td');
            cellElement.textContent = cell.trim();
            cellElement.style.border = '1px solid black'; // Add border styling
            row.appendChild(cellElement);
          }
        });
        
        // Add the row to the table body
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error reading the file:', error));
};

