document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Appointment booked successfully!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});