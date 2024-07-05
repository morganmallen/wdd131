const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModification = new Date(document.lastModified);
document.getElementById("lastModified").textContent = "Last Modification: " + lastModification;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January 11",
        area: 17500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March 19-21",
        area: 45800,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-954942-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October 27-29",
        area: 53997,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x640/tokyo_japan_temple-evening.jpeg"
    }
  ];

  function createTempleCards(temples) {
    const container = document.getElementById('temple-container');
    container.innerHTML = '';
  
    temples.forEach(temple => {
      const card = document.createElement('div');
      card.className = 'temple-card';
  
      const name = document.createElement('h2');
      name.textContent = temple.templeName;
  
      const location = document.createElement('p');
      location.textContent = `Location: ${temple.location}`;
  
      const dedicated = document.createElement('p');
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
      const area = document.createElement('p');
      area.textContent = `Area: ${temple.area} sq ft`;
  
      const image = document.createElement('img');
      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      image.loading = 'lazy';
  
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);
      card.appendChild(image);
  
      container.appendChild(card);
    });
  }
  
  function filterTemples(criteria) {
    let filteredTemples = temples;
    const h2 = document.querySelector('main h2');
  
    switch (criteria) {
      case 'Old':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        h2.textContent = 'Old';
        break;
      case 'New':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        h2.textContent = 'New';
        break;
      case 'Large':
        filteredTemples = temples.filter(temple => temple.area > 90000);
        h2.textContent = 'Large';
        break;
      case 'Small':
        filteredTemples = temples.filter(temple => temple.area < 10000);
        h2.textContent = 'Small';
        break;
      default:
        h2.textContent = 'Home';
    }
  
    createTempleCards(filteredTemples);
  }
  
  document.querySelectorAll('.navigation a').forEach(navLink => {
    navLink.addEventListener('click', (event) => {
      event.preventDefault();
      filterTemples(navLink.textContent);
    });
  });
  
  filterTemples('Home');