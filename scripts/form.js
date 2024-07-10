const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModification = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  "Last Modification: " + lastModification;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averageRating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averageRating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averageRating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averageRating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averageRating: 5.0,
  },
];

function populateProductOptions() {
  const productSelect = document.getElementById("productName");
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

window.onload = populateProductOptions;

if (window.location.pathname.endsWith("review.html")) {
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);
  document.body.insertAdjacentHTML(
    "beforeend",
    `<p>You have completed ${reviewCount} reviews.</p>`
  );
}
