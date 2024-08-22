const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const confirmationModal = document.getElementById("confirmationModal");
const confirmYesBtn = document.getElementById("confirmYesBtn");
const finalModal = document.getElementById("finalModal");
const closeFinalModalBtn = document.getElementById("closeFinalModalBtn");

// Mueve el botón "No" a una posición aleatoria cuando el mouse se acerca
noBtn.addEventListener("mouseover", function() {
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;

    const newX = Math.random() * maxWidth;
    const newY = Math.random() * maxHeight;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Mostrar el modal de confirmación al hacer clic en "Sí"
yesBtn.addEventListener("click", function() {
    confirmationModal.style.display = "flex";
});

// Cuando el usuario confirma que está segura
confirmYesBtn.addEventListener("click", function() {
    confirmationModal.style.display = "none"; // Ocultar modal de confirmación
    finalModal.style.display = "flex"; // Mostrar modal final
});

// Cerrar el modal final
closeFinalModalBtn.addEventListener("click", function() {
    finalModal.style.display = "none";
});
