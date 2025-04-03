document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Search Functionality
document.getElementById("searchBar").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let laws = document.querySelectorAll(".law");

    laws.forEach(law => {
        let title = law.querySelector("h2").innerText.toLowerCase();
        if (title.includes(filter)) {
            law.style.display = "block";
        } else {
            law.style.display = "none";
        }
    });
});
