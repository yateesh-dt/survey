// app/assets/javascripts/form.js

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
      alert('Form submitted successfully!'); // Display the alert
    });
  });
  