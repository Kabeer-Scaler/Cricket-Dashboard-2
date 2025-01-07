const API_URL = 'https://api.cricapi.com/v1/cricScore?apikey=ea64e3ee-94cc-4755-a3a6-4e1d9a04029b';
const liveScoresDiv = document.getElementById('scores-list');

function fetchAndDisplayScores() {
  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.status === 'success' && data.data && data.data.length > 0) {
        // Save the data in localStorage
        localStorage.setItem('cachedScores', JSON.stringify(data.data));
        
        liveScoresDiv.innerHTML = '';
        data.data.forEach(match => {
          const matchDiv = document.createElement('div');
          matchDiv.classList.add('match');
          matchDiv.innerHTML = `
            <h3>${match.name}</h3>
            <p>Status: ${match.status}</p>
            ${
              match.score && match.score.length > 0
                ? `<p>Score: ${match.score[0].inning} - ${match.score[0].r}/${match.score[0].w} in ${match.score[0].o} overs</p>`
                : '<p>No live score available.</p>'
            }
          `;
          liveScoresDiv.appendChild(matchDiv);
        });
      } else {
        displayCachedScores();
      }
    })
    .catch(error => {
      console.error('Error fetching live scores:', error);
      displayCachedScores(); // Show cached data in case of an error
    });
}

function displayCachedScores() {
  const cachedScores = localStorage.getItem('cachedScores');
  if (cachedScores) {
    const data = JSON.parse(cachedScores);
    liveScoresDiv.innerHTML = '';
    data.forEach(match => {
      const matchDiv = document.createElement('div');
      matchDiv.classList.add('match');
      matchDiv.innerHTML = `
        <h3>${match.name}</h3>
        <p>Status: ${match.status}</p>
        ${
          match.score && match.score.length > 0
            ? `<p>Score: ${match.score[0].inning} - ${match.score[0].r}/${match.score[0].w} in ${match.score[0].o} overs</p>`
            : '<p>No live score available.</p>'
        }
      `;
      liveScoresDiv.appendChild(matchDiv);
    });
  } else {
    liveScoresDiv.innerHTML = '<p>No live matches found.</p>';
  }
}


fetchAndDisplayScores(); 
setInterval(fetchAndDisplayScores, 6000); 




const API_URL1 = 'https://api.cricapi.com/v1/series?apikey=ea64e3ee-94cc-4755-a3a6-4e1d9a04029b&offset=0';
const seriesContainer = document.getElementById('series-container');


function fetchAndDisplaySeries() {
  fetch(API_URL1)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.status === 'success' && data.data && data.data.length > 0) {
        // Save the series data
        localStorage.setItem('cachedSeries', JSON.stringify(data.data));
        
        seriesContainer.innerHTML = '';
        data.data.forEach(series => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <strong>${series.name}</strong>
            <p>Status: ${series.status}</p>
            <p>Start Date: ${series.startDate}</p>
            <p>End Date: ${series.endDate}</p>
          `;
          seriesContainer.appendChild(listItem);
        });
      } else {
        displayCachedSeries();
      }
    })
    .catch(error => {
      console.error('Error fetching cricket series:', error);
      displayCachedSeries(); // Show cached data
    });
}

function displayCachedSeries() {
  const cachedSeries = localStorage.getItem('cachedSeries');
  if (cachedSeries) {
    const data = JSON.parse(cachedSeries);
    seriesContainer.innerHTML = '';
    data.forEach(series => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <strong>${series.name}</strong>
        <p>Status: ${series.status}</p>
        <p>Start Date: ${series.startDate}</p>
        <p>End Date: ${series.endDate}</p>
      `;
      seriesContainer.appendChild(listItem);
    });
  } else {
    seriesContainer.innerHTML = '<p>No cricket series found.</p>';
  }
}


fetchAndDisplaySeries();
setInterval(fetchAndDisplaySeries,600000)

const API_URL2 = 'https://api.cricapi.com/v1/players?apikey=ea64e3ee-94cc-4755-a3a6-4e1d9a04029b&offset=0';
const playersListDiv = document.getElementById('players-container');


function fetchAndDisplayPlayers() {
  fetch(API_URL2)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.status === 'success' && data.data && data.data.length > 0) {
        // Save the players data
        localStorage.setItem('cachedPlayers', JSON.stringify(data.data));
        
        playersListDiv.innerHTML = '';
        data.data.forEach(player => {
          const playerDiv = document.createElement('div');
          playerDiv.classList.add('player');
          playerDiv.innerHTML = `
            <strong>${player.name}</strong>
            <p>Country: ${player.country || 'N/A'}</p>
          `;
          playersListDiv.appendChild(playerDiv);
        });
      } else {
        displayCachedPlayers();
      }
    })
    .catch(error => {
      console.error('Error fetching players:', error);
      displayCachedPlayers(); // Show cached data
    });
}

function displayCachedPlayers() {
  const cachedPlayers = localStorage.getItem('cachedPlayers');
  if (cachedPlayers) {
    const data = JSON.parse(cachedPlayers);
    playersListDiv.innerHTML = '';
    data.forEach(player => {
      const playerDiv = document.createElement('div');
      playerDiv.classList.add('player');
      playerDiv.innerHTML = `
        <strong>${player.name}</strong>
        <p>Country: ${player.country || 'N/A'}</p>
      `;
      playersListDiv.appendChild(playerDiv);
    });
  } else {
    playersListDiv.innerHTML = '<p>No players found.</p>';
  }
}


fetchAndDisplayPlayers();
setInterval(fetchAndDisplayPlayers,600000)
