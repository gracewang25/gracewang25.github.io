// Profile Picture Configuration
// To change your profile picture, simply update the URL below:
const PROFILE_IMAGE_URL = "./images/profile.png";

// Apply the profile image when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profilePicture');
    if (profileImg) {
        profileImg.src = PROFILE_IMAGE_URL;
    }
});

// You can also change the profile image by updating the constant above and refreshing the page
// Examples:
// const PROFILE_IMAGE_URL = "https://your-image-hosting-service.com/your-image.jpg";
// const PROFILE_IMAGE_URL = "https://github.com/yourusername.png"; // GitHub profile picture
// const PROFILE_IMAGE_URL = "./images/profile.jpg"; // Local image in an images folder
