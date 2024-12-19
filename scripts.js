document.addEventListener("DOMContentLoaded", () => { 
    const images = document.querySelectorAll("#galerie img"); 
    images.forEach(image => { 
    image.addEventListener("click", () => { 
    alert("Vous avez cliqué sur une image !"); 
    }); 
    }); 
    }); 