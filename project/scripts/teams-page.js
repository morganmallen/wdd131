const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModification = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  "Last Modification: " + lastModification;

const teams = [
  {
    name: "🇪🇸 Spain",
    placement: 1,
    matches: 7,
    wins: 7,
    draws: 0,
    losses: 0,
    style: "Spain is known for their 'tiki-taka' style, characterized by short passing and maintaining possession to control the game."
  },
  {
    name: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England",
    placement: 2,
    matches: 7,
    wins: 3,
    draws: 3,
    losses: 1,
    style: "England plays a fast-paced, physical game with a strong emphasis on set pieces and crossing from the wings."
  },
  {
    name: "🇳🇱 Netherlands",
    placement: 3,
    matches: 6,
    wins: 3,
    draws: 1,
    losses: 2,
    style: "The Netherlands employs a balanced attacking approach with a focus on total football, allowing players to interchange positions fluidly."
  },
  {
    name: "🇫🇷 France",
    placement: 4,
    matches: 6,
    wins: 2,
    draws: 3,
    losses: 1,
    style: "France combines solid defensive organization with explosive counter-attacks, often relying on the individual brilliance of their star players."
  },
  {
    name: "🇩🇪 Germany",
    placement: 5,
    matches: 5,
    wins: 3,
    draws: 1,
    losses: 1,
    style: "Germany's play style is highly disciplined and efficient, focusing on a well-structured defense and quick transitions to attack."
  },
  {
    name: "🇨🇭 Switzerland",
    placement: 6,
    matches: 5,
    wins: 2,
    draws: 3,
    losses: 0,
    style: "Switzerland plays a pragmatic style, focusing on solid defense and taking advantage of set pieces and counter-attacks."
  },
  {
    name: "🇹🇷 Turkey",
    placement: 7,
    matches: 5,
    wins: 3,
    draws: 0,
    losses: 2,
    style: "Turkey is known for their aggressive and resilient play, often relying on strong physical presence and a high-pressing strategy."
  },
  {
    name: "🇵🇹 Portugal",
    placement: 8,
    matches: 5,
    wins: 2,
    draws: 2,
    losses: 1,
    style: "Portugal combines a strong defensive setup with quick, skillful attacking players, often relying on the creativity and finishing of their forwards."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  createTeamCards(teams);

  document.getElementById('winsFilter').addEventListener('change', filterTeams);
  document.getElementById('lossesFilter').addEventListener('change', filterTeams);
  document.getElementById('drawsFilter').addEventListener('change', filterTeams);
});

function filterTeams(event) {
  const winsFilter = document.getElementById('winsFilter');
  const lossesFilter = document.getElementById('lossesFilter');
  const drawsFilter = document.getElementById('drawsFilter');

  if (event.target.id === 'winsFilter') {
    lossesFilter.value = "1";
    drawsFilter.value = "1";
  } else if (event.target.id === 'lossesFilter') {
    winsFilter.value = "1";
    drawsFilter.value = "1";
  } else if (event.target.id === 'drawsFilter') {
    winsFilter.value = "1";
    lossesFilter.value = "1";
  }

  let filteredTeams = [...teams];

  if (winsFilter.value !== "1") {
    filteredTeams = filteredTeams.sort((a, b) => {
      return winsFilter.value === "2" ? b.wins - a.wins : a.wins - b.wins;
    });
  }

  if (lossesFilter.value !== "1") {
    filteredTeams = filteredTeams.sort((a, b) => {
      return lossesFilter.value === "2" ? b.losses - a.losses : a.losses - b.losses;
    });
  }

  if (drawsFilter.value !== "1") {
    filteredTeams = filteredTeams.sort((a, b) => {
      return drawsFilter.value === "2" ? b.draws - a.draws : a.draws - b.draws;
    });
  }

  createTeamCards(filteredTeams);
}

function createTeamCards(teams) {
  const container = document.getElementById('teams-container');
  container.innerHTML = '';

  teams.forEach(team => {
    const card = document.createElement('div');
    card.className = 'teams-card';

    const name = document.createElement('h2');
    name.textContent = team.name;

    const placement = document.createElement('p');
    placement.textContent = `Placement: ${team.placement}`;

    const matches = document.createElement('p');
    matches.textContent = `Matches: ${team.matches}`;

    const wins = document.createElement('p');
    wins.textContent = `Wins: ${team.wins}`;

    const draws = document.createElement('p');
    draws.textContent = `Draws: ${team.draws}`;

    const losses = document.createElement('p');
    losses.textContent = `Losses: ${team.losses}`;

    const style = document.createElement('p');
    style.textContent = `Style: ${team.style}`;

    const rating = document.createElement('div');
    rating.className = 'stars-container';
    rating.innerHTML = `
      <div class="stars">
        <input type="radio" id="fivestar_${team.name}" name="stars_${team.name}" value="5" ${getSavedRating(team.name) === 5 ? 'checked' : ''} />
        <label for="fivestar_${team.name}"></label>
        <input type="radio" id="fourstar_${team.name}" name="stars_${team.name}" value="4" ${getSavedRating(team.name) === 4 ? 'checked' : ''} />
        <label for="fourstar_${team.name}"></label>
        <input type="radio" id="threestar_${team.name}" name="stars_${team.name}" value="3" ${getSavedRating(team.name) === 3 ? 'checked' : ''} />
        <label for="threestar_${team.name}"></label>
        <input type="radio" id="twostar_${team.name}" name="stars_${team.name}" value="2" ${getSavedRating(team.name) === 2 ? 'checked' : ''} />
        <label for="twostar_${team.name}"></label>
        <input type="radio" id="onestar_${team.name}" name="stars_${team.name}" value="1" ${getSavedRating(team.name) === 1 ? 'checked' : ''} />
        <label for="onestar_${team.name}"></label>
      </div>
    `;

    card.appendChild(name);
    card.appendChild(placement);
    card.appendChild(matches);
    card.appendChild(wins);
    card.appendChild(draws);
    card.appendChild(losses);
    card.appendChild(style);
    card.appendChild(rating);

    container.appendChild(card);

    const stars = rating.querySelectorAll('input');
    stars.forEach(star => {
      star.addEventListener('change', () => {
        saveRating(team.name, star.value);
      });
    });
  });
}

function saveRating(teamName, rating) {
  localStorage.setItem(`rating_${teamName}`, rating);
}

function getSavedRating(teamName) {
  return parseInt(localStorage.getItem(`rating_${teamName}`)) || 0;
}
