const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModification = new Date(document.lastModified);
document.getElementById("lastModified").textContent = "Last Modification: " + lastModification;