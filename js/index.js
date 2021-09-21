var elForm = document.querySelector('.form');
var elOutput = document.querySelector('.output');

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  var elFname = elForm.querySelector('.fname').value;
  var elLname = elForm.querySelector('.lname').value;
  var elEmail = elForm.querySelector('.input-email').value;
  var elPassword = elForm.querySelector('.input-password').value;
  var result = elOutput;

  result.textContent = `${elFname} ${elLname} ${elEmail} ${elPassword}`;
  
})
















