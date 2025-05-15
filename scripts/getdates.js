// Set the current year
document.getElementById("year").textContent = new Date().getFullYear();

// Format and set the last modified date
const lastModified = new Date(document.lastModified);
const options = { year: "numeric", month: "long", day: "numeric" };
const formattedDate = lastModified.toLocaleDateString("en-US", options);

document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate;
