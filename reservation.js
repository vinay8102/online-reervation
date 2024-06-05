document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform authentication (e.g., using AJAX)
    // For simplicity, let's assume authentication is successful
    // and display reservation form and cancellation form
    document.getElementById('reservationForm').style.display = 'block';
    document.getElementById('cancellationForm').style.display = 'block';
  });
  
  // Reservation form and cancellation form logic would go here
  // You need to handle form submission, validation, and interaction with backend
  // Your existing JavaScript code

// Reservation form submission
document.getElementById('reservationFormContent').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var trainNumber = document.getElementById('trainNumber').value;
    var trainName = document.getElementById('trainName').value;
    var classType = document.getElementById('classType').value;
    var dateOfJourney = document.getElementById('dateOfJourney').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
  
    // Perform validation (you can add more specific validation)
    if (!name || !trainNumber || !trainName || !classType || !dateOfJourney || !from || !to) {
      alert('Please fill in all fields');
      return;
    }
  // Reservation completed
  alert('RESERVATION COMPLETED!');
  // Clear form fields
  document.getElementById('reservationFormContent').reset();

    // Here you would typically submit the form data to the backend
    // For simplicity, let's log the data
    console.log('Reservation Details:');
    console.log('Name:', name);
    console.log('Train Number:', trainNumber);
    console.log('Train Name:', trainName);
    console.log('Class Type:', classType);
    console.log('Date of Journey:', dateOfJourney);
    console.log('From:', from);
    console.log('To:', to);
  
    // Clear form fields after submission
    document.getElementById('reservationFormContent').reset();
  });
  
  // Cancellation form submission
  document.getElementById('cancellationFormContent').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get PNR number
    var pnr = document.getElementById('pnr').value;
  
    // Perform validation
    if (!pnr) {
      alert('Please enter PNR number');
      return;
    }
  // cancellation completed
    alert('TICKETS ARE CANCELLED!');
    // Clear form fields
    document.getElementById('cancellationFormContent').reset();
    // Here you would typically submit the PNR number to the backend
    // For simplicity, let's log the PNR number
    console.log('PNR Number for Cancellation:', pnr);
  
    // Clear form field after submission
    document.getElementById('pnr').value = '';
  });
  
  // Your existing JavaScript code
  
