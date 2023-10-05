 // Get the modal element
 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var btn = document.getElementById("modal_mbti_tag");

 // Get the close button
 var closeBtn = document.getElementsByClassName("close")[0];

 // Open the modal when the button is clicked
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // Close the modal when the close button is clicked
 closeBtn.onclick = function() {
     modal.style.display = "none";
 }