let reviews = localStorage.getItem("reviews");

if (reviews === null) {
    reviews = 0;
}

reviews = Number(reviews) + 1;

localStorage.setItem("reviews", reviews);

document.querySelector("#reviewCount").textContent = reviews;
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
