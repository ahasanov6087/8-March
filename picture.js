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