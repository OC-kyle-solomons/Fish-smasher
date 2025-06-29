"use strict";
const spawnButton = document.getElementById('spawn');

spawnButton.addEventListener('click', () => {
    const img = document.createElement('img');
    img.src = "assets/fishclosed.png";
    img.style.position = 'absolute';
    img.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    img.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    img.isalive = true;
    img.addEventListener('click', () => {
        img.isalive = false;
        img.src = "assets/fishdead.png";
        setTimeout(() => {
            img.remove();
        }, 1000);
    });

    img.addEventListener('mouseover', () => {
    if (img.isalive) {
        img.src = "assets/fishhover.png";
    }
    
    });

    img.addEventListener('mouseout', () => {
    if (img.isalive) {
        img.src = "assets/fishclosed.png";
    }
    });



    document.body.appendChild(img);
});
