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
          cellElement.style.padding = '8px'
          row.appendChild(cellElement);
        });
        
        // Add the row to the table body
        tableBody.appendChild(row);

        // Call generatePDF function after appending row
        addGeneratePDFButton(row);
      });
    })
    .catch(error => console.error('Error reading the file:', error));
};

function addGeneratePDFButton(row) {
  // Create a button cell
  const buttonCell = document.createElement('td');
  const button = document.createElement('button');
  button.textContent = 'Generate PDF';
  button.onclick = function() {
    var pdfContent = generatePDF(row);
    window.location.replace('CerificationPDF.html?pdf=' + encodeURIComponent(pdfContent));
  };
  buttonCell.appendChild(button);
  row.appendChild(buttonCell);
}

function generatePDF(row) {
  var doc = new jsPDF();
  var cells = row.cells;
  var content = "This is a PDF generated with values from the table:\n\n";
  content += "Value from Column 1: " + cells[0].innerText + "\n";
  content += "Value from Column 2: " + cells[1].innerText;
  doc.text(content, 10, 10);

  // Return the PDF content as a data URL
  return doc.output('dataurl');
}


