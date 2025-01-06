const API_URL = 'https://api.cricapi.com/v1/currentMatches?apikey=ea64e3ee-94cc-4755-a3a6-4e1d9a04029b&offset=0';
const liveScoresDiv = document.getElementById('live-scores');


function fetchAndDisplayScores() {
  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('API Response:', data); 

      if (data.status === 'success' && data.data && data.data.length > 0) {
        liveScoresDiv.innerHTML = '';

        data.data.forEach(match => {
          console.log('Match Data:', match); 

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
        console.warn('No live matches found or data missing:', data); 
        liveScoresDiv.innerHTML = '<p>No live matches found.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching live scores:', error); 
      liveScoresDiv.innerHTML = '<p>Failed to load live scores. Please try again later.</p>';
    });
}


fetchAndDisplayScores(); 
setInterval(fetchAndDisplayScores, 600000); 




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
      if (data.status === "success" && data.data && data.data.length > 0) {
        
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
        seriesContainer.innerHTML = '<p>No cricket series found.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching cricket series:', error);
      seriesContainer.innerHTML = '<p>Failed to load cricket series. Please try again later.</p>';
    });
}


fetchAndDisplaySeries();
setInterval(fetchAndDisplaySeries,600000)

const API_URL2 = 'https://api.cricapi.com/v1/players?apikey=ea64e3ee-94cc-4755-a3a6-4e1d9a04029b&offset=0';
const playersListDiv = document.getElementById('players-list');


function fetchAndDisplayPlayers() {
  fetch(API_URL2)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.status === "success" && data.data && data.data.length > 0) {
       
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
        playersListDiv.innerHTML = '<p>No players found.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching players:', error);
      playersListDiv.innerHTML = '<p>Failed to load players. Please try again later.</p>';
    });
}


fetchAndDisplayPlayers();
setInterval(fetchAndDisplayPlayers,600000)
