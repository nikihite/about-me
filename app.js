
// grab DOM elements
const showButton = document.getElementById('button');
const animal = document.getElementById('animalDiv');

console.log(showButton);
console.log(animal);
// set event listeners 

showButton.addEventListener('click', () => {
    animal.classList.remove('hidden');
});


    // get user input
    // use user input to update state 
    // update DOM to reflect the new state