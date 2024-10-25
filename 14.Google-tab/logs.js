// Function to toggle the background settings container
function show() {
    let abc = document.querySelector('.abc');
    abc.classList.toggle('on');
    abc.classList.toggle('off');
}

// Function to change the background
function bgChange(imageSrc) {
    document.body.style.backgroundImage = `url('${imageSrc}')`;
}
