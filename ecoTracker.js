// Get references to DOM elements
const ecoActionInput = document.getElementById("ecoAction");
const ecoTrackerForm = document.getElementById("ecoTrackerForm");
const ecoActionList = document.getElementById("ecoActionList");
const actionCount = document.getElementById("actionCount");
const progressBar = document.getElementById("progressBar");
const successMessage = document.getElementById("successMessage");

// Initialize action count
let actionsLogged = 0;

ecoTrackerForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from refreshing the page

  // Get the value of the input
  const ecoAction = ecoActionInput.value.trim();

  if (ecoAction === "") {
    alert("Please enter an eco-friendly action.");
    return;
  }

  // Create a new list item for the action
  const li = document.createElement("li");
  li.textContent = ecoAction;
  ecoActionList.appendChild(li);

  // Clear the input field
  ecoActionInput.value = "";

  // Update action count
  actionsLogged++;
  actionCount.textContent = actionsLogged;

  // Update progress bar
  const progress = (actionsLogged / 10) * 100; // Assuming 10 is the goal
  progressBar.style.width = progress + "%";

  // Show success message
  successMessage.style.display = "block";
  
  // Hide success message after 2 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 2000); // Success message will disappear after 2 seconds

});


