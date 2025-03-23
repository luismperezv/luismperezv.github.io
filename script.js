// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('Site loaded successfully');
    
    // Example function to update the page content
    function updateContent() {
        const container = document.querySelector('.container');
        if (container) {
            container.style.backgroundColor = '#ffffff';
        }
    }
    
    // Call the update function
    updateContent();
}); 