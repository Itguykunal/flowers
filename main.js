onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
document.addEventListener('click', function(event) {
    // Create a new div element
    var ahhhElement = document.createElement('div');
    ahhhElement.classList.add('Ahann');
    ahhhElement.textContent = 'Ahann';
    
    // Position the element at the click location
    ahhhElement.style.top = `${event.clientY}px`;
    ahhhElement.style.left = `${event.clientX}px`;

    // Add the element to the body
    document.body.appendChild(ahhhElement);
    
    // Show the element with a fade-in effect
    setTimeout(function() {
        ahhhElement.classList.add('show');
    }, 10); // Slight delay to ensure the element is added to the DOM
    
    // Hide the element with a fade-out effect after 1 second
    setTimeout(function() {
        ahhhElement.classList.remove('show');
        ahhhElement.classList.add('hide');
        
        // Remove the element from the DOM after the fade-out transition
        setTimeout(function() {
            document.body.removeChild(ahhhElement);
        }, 1000); // Match this timeout with the transition duration
    }, 1000);
});
