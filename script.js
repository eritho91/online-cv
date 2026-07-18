document.addEventListener("DOMContentLoaded", () => {
    // 1. Mjuk fade-in effekt
    document.body.classList.add('fade-in');

    // 2. Print-funktionalitet
    const printBtn = document.getElementById("printButton");
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }
});
