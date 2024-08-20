// JavaScript for contact form functionality
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Simulate form submission process
        setTimeout(() => {
            responseMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            responseMessage.style.color = '#28a745'; // Green for success
            form.reset(); // Reset form fields
        }, 1000); // Simulate a delay

        // Optionally, here you can add actual form submission logic using fetch or XMLHttpRequest
    });
});
