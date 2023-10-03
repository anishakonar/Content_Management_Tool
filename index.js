const imageBoxes = document.querySelectorAll('.image-box');
let draggedImage = null;

imageBoxes.forEach(box => {
    box.addEventListener('dragstart', (e) => {
        draggedImage = e.target;
        e.target.style.opacity = '0.5';
    });

    box.addEventListener('dragend', () => {
        draggedImage.style.opacity = '1';
        draggedImage = null;
    });
});

imageBoxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    box.addEventListener('dragenter', (e) => {
        e.preventDefault();
        if (draggedImage) {
            box.style.border = '2px dashed #007bff';
        }
    });

    box.addEventListener('dragleave', () => {
        box.style.border = '2px dashed #ccc';
    });

    box.addEventListener('drop', () => {
        if (draggedImage) {
            box.style.border = '2px dashed #ccc';
            box.appendChild(draggedImage);
        }
    });
});