function moveImage() {
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];

    if (file) {
        
        const reader = new FileReader();
        reader.onload = function (event) {
            localStorage.setItem('userImage', event.target.result);
            window.location.href = './index1.html';
        };
        reader.readAsDataURL(file); 
    } else {
        alert("Please upload an image first.");
    }
}

window.onload = () => {
    console.log("Script loaded successfully.");
  
    // Retrieve and set user image from localStorage
    const imageSrc = localStorage.getItem("userImage");
    const userImage = document.getElementById("user-image");
  
    if (imageSrc && userImage) {
      userImage.src = imageSrc;
    } else {
      console.warn("No image found in localStorage or 'user-image' not found.");
    }
  
    // Remove 'not-loaded' class after 1 second (for animations, if any)
    setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 1000);
  
    // Example function from picture.js (if it had any logic)
    function pictureLogic() {
      console.log("Executing picture.js logic...");
      // Add additional functionality here if needed
    }
  
    pictureLogic(); // Call the function if necessary
  };
  