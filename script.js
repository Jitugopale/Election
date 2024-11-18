function handleVote(rowNumber) {
    // Get the arrow element for the specific row
    const arrow = document.getElementById(`arrow-${rowNumber}`);
    // Add the "red" class to the arrow
    arrow.classList.add("red");
  
    // Play the click sound
    const sound = document.getElementById("click-sound");
    sound.play();
  }
  