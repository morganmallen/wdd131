const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModification = new Date(document.lastModified);
document.getElementById("lastModified").textContent = "Last Modification" + lastModification;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});