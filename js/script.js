
//Waiting that the page is loaded
document.addEventListener('DOMContentLoaded', () => {

  // Select the counter section
  const counterSection = document.getElementById('counterSection');

  // Create the + button
  const incrementButton = document.createElement('button');
  incrementButton.textContent = '+';
  incrementButton.id = 'incrementButton'; // assign ID

  // Create the - button
  const decrementButton = document.createElement('button');
  decrementButton.textContent = '-';
  decrementButton.id = 'decrementButton'; // assign ID

  // Insert the button in DOM
  counterSection.appendChild(decrementButton);  // - button
  const numberDisplay = document.createElement('div');

  numberDisplay.textContent = 0; 
  numberDisplay.id = 'numberDisplay'; 
  counterSection.appendChild(numberDisplay); // display

  counterSection.appendChild(incrementButton); // + button

  // Counter variable set to 0
  let counterValue = 0;

  // Increment counter function
  incrementButton.addEventListener('click', () => {
    counterValue++; 
    numberDisplay.textContent = counterValue;
  });

  // Decrement counter function
  decrementButton.addEventListener('click', () => {
    counterValue--;
    numberDisplay.textContent = counterValue;
  });

  // Reset counter function
  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', () => {
    counterValue = 0;
    numberDisplay.textContent = counterValue;
  });
});