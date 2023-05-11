const form = document.getElementById('upload-form');
const input = document.getElementById('image-upload');
const preview = document.getElementById('image-preview');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  //Get the uploaded image file
  const file = input.files[0];

  //Create a FormData object to send the file to the server
  const formData = new FormData();
  formData.append('image', file);

  //Send the image file to the server for processing
  fetch('/process-image', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(contact => {
    //Display the extracted contact information on the webpage
    result.innerHTML = `<p><strong>Name:</strong> ${contact.name}</p>
                        <p><strong>Email:</strong> ${contact.email}</p>
                        <p><strong>Phone:</strong> ${contact.phone}</p
  