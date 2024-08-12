document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    const user = users.find(user => user.email === emailInput);

    if (!user) {
        alert("Ky email nuk eshte i vlefshem");
    } else if (user.password !== passwordInput) {
        alert("Password-i nuk eshte i sakte");
    } else {
        // Clear the content of the 'back' div
        const backDiv = document.querySelector(".back");
        backDiv.innerHTML = "";

        // Remove all CSS styles applied to the 'back' div
        backDiv.removeAttribute("class");
        backDiv.removeAttribute("style");

        // Create and populate the 'grid1' div
        const grid = document.querySelector(".grid1");
        grid.innerHTML = ""; // Clear previous content if any

        pdfFiles.forEach((pdf, index) => {
            const link = document.createElement("a");
            link.href = pdf.path;
            link.target = "_blank";
            link.className = "pdf-link";
            link.id = `pdf-link-${index}`;
            link.textContent = pdf.name;
            grid.appendChild(link);
        });

        // Optionally, style the grid1 div if needed
        grid.classList.add("pdf-grid"); // Add a class for styling the grid
    }
});