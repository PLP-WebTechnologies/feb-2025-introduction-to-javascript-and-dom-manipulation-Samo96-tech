// We're making sure the whole page is loaded before running our code.
// This helps us avoid any "undefined" errors when selecting our elements.
document.addEventListener("DOMContentLoaded", function() {

    // ******************************
    // 1. Dynamically Change Text
    // ******************************
  
    // Find our "Change Intro Text" button by its unique ID.
    const changeTextBtn = document.getElementById('changeTextBtn');
    // Grab the first paragraph inside the "intro" section.
    const introParagraph = document.querySelector('#intro p');
  
    // When someone clicks on the "Change Intro Text" button...
    changeTextBtn.addEventListener('click', function() {
      // ... we update the paragraph to a new friendly message.
      introParagraph.textContent = "We provide innovative, secure, and user-friendly digital financial services.";
    });
  
    // ******************************
    // 2. Modify CSS Styles on the Fly
    // ******************************
  
    // Get hold of the "Toggle Section Style" button and the interactive section.
    const toggleStyleBtn = document.getElementById('toggleStyleBtn');
    const interactiveSection = document.getElementById('interactive');
  
    // When the button is clicked, change the background color.
    toggleStyleBtn.addEventListener('click', function() {
      // If the background is already light blue, switch it back to nothing.
      // Otherwise, change it to light blue.
      interactiveSection.style.backgroundColor = 
        interactiveSection.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
    });
  
    // ******************************
    // 3. Add or Remove a New Element
    // ******************************
  
    // Grab the "Add Element" button and the container div where the new element will appear.
    const addRemoveBtn = document.getElementById('addRemoveBtn');
    const dynamicContainer = document.getElementById('dynamicElementContainer');
  
    // When the button is clicked...
    addRemoveBtn.addEventListener('click', function() {
      // Check if our new element already exists in the page.
      const existingElement = document.getElementById('newElement');
  
      // If it doesn't exist, let's create it!
      if (!existingElement) {
        // Create a new div element.
        const newDiv = document.createElement('div');
        // Give it an ID so we can recognize it later.
        newDiv.id = 'newElement';
        // Add some text to show it's been added.
        newDiv.textContent = "This is a dynamically added element!";
        // Some simple inline styles to make it look nice.
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.border = "1px solid #333";
        // Append the new element to our container div.
        dynamicContainer.appendChild(newDiv);
        // Change the button text so the user knows they can remove it next.
        addRemoveBtn.textContent = "Remove Element";
      } else {
        // If the element exists, remove it from the container.
        dynamicContainer.removeChild(existingElement);
        // Change the button text back.
        addRemoveBtn.textContent = "Add Element";
      }
    });
  });
  