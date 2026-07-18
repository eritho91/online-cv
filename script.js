document.addEventListener("DOMContentLoaded", () => {
    // Print-funktionalitet
    const printBtn = document.getElementById("printButton");
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }
});
