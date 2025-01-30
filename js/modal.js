document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".view-details");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const projectId = this.getAttribute("data-project");
            const details = document.getElementById("details-" + projectId);
            details.classList.toggle("hidden");
        });
    });
});
