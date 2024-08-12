document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('.contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Clear the form fields
          form.reset();
          alert('Forma u dërgua me sukses!');
        } else {
          // Handle errors
          alert('Dërgimi i formës dështoj. Ju lutem dërgoni formën përsëri!');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Ka ndhur një gabim. Ju lutem provojeni përsëri.');
      });
    });
  });