// Newsletter form behavior
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('.newsletter form');
  var messageDiv = document.querySelector('.newsletter .message');
  var emailInput = document.getElementById('email');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var email = emailInput.value;

    if (email === '') {
      messageDiv.textContent = 'Please enter a valid email address';
    } else {
      messageDiv.textContent =
        'Thank you! Your email address ' + email + ' has been added to our mailing list!';
    }
  });
});
