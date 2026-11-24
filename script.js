const button = document.getElementById('click-button');

button.addEventListener('click', () => {
  alert('Button was clicked!');
  button.textContent = 'Clicked!';
});