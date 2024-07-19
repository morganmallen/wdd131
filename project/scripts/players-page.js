const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModification = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  "Last Modification: " + lastModification;

  const players = [
    {
      name: "Cody Gakpo",
      country: "🇳🇱 Netherlands",
      goals: 3,
      assists: 1,
      image: "./images/gakpo.webp"
    },
    {
      name: "Harry Kane",  
      country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England",
      goals: 3,
      assists: 0,
      image: "./images/kane.webp"
    },
    {
      name: "Dani Olmo",  
      country: "🇪🇸 Spain",
      goals: 3,
      assists: 2,
      image: "./images/olmo.webp"
    },
    {
      name: "Ivan Schranz",  
      country: "🇸🇰 Slovakia",
      goals: 3,
      assists: 0,
      image: "./images/schranz.webp"
    },
    {
      name: "Jamal Musiala",  
      country: "🇩🇪 Germany",
      goals: 3,
      assists: 0,
      image: "./images/musiala.webp"
    },
    {
      name: "Georges Mikautadze",  
      country: "🇬🇪 Georgia",
      goals: 3,
      assists: 1,
      image: "./images/mikautadze.webp"
    },
  ];
  
  

  document.addEventListener('DOMContentLoaded', () => {
    createTeamCards(players);
  
    document.getElementById('assistsFilter').addEventListener('change', filterPlayers);
  });
  
  function filterPlayers() {
    const assistsFilter = document.getElementById('assistsFilter').value;
  
    let filteredPlayers = [...players];
    if (assistsFilter !== "1") {
      filteredPlayers = filteredPlayers.sort((a, b) => {
        if (assistsFilter === "2") {
          return b.assists - a.assists; 
        } else if (assistsFilter === "3") {
          return a.assists - b.assists; 
        }
      });
    }
  
    createTeamCards(filteredPlayers);
  }
  
  function createTeamCards(players) {
    const container = document.getElementById('players-container');
    container.innerHTML = '';
  
    players.forEach(players => {
      const card = document.createElement('div');
      card.className = 'players-card';
  
      const name = document.createElement('h2');
      name.textContent = players.name;

      const country = document.createElement('p');
      country.textContent = `${players.country}`
  
      const goals = document.createElement('p');
      goals.textContent = `Goals: ${players.goals}`;
  
      const assists = document.createElement('p');
      assists.textContent = `Assists: ${players.assists}`;

      const image = document.createElement('img');
      image.src = players.image;
      image.alt = players.name;
      image.loading = 'lazy';
  
      card.appendChild(name);
      card.appendChild(country);
      card.appendChild(goals);
      card.appendChild(assists);
      card.appendChild(image)
  
      container.appendChild(card);
    });
  }