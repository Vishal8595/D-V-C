function addItem() {
    const item = document.getElementById('item').value;
    const metre = parseFloat(document.getElementById('metre').value);
    const rsPerMtr = parseFloat(document.getElementById('rsPerMtr').value);
    const fullSuitPrice = (metre * rsPerMtr).toFixed(2);

    const tableBody = document.querySelector('#ledgerTable tbody');
    const newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${item}</td>
        <td>${metre}</td>
        <td>${rsPerMtr}</td>
        <td>${fullSuitPrice}</td>
    `;

    document.getElementById('billingForm').reset();
}

// Listen for the Enter key press
document.getElementById('billingForm').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        addItem();
    }
});