const complimentBtn = document.getElementById("complimentButton");

const fortuneBtn = document.getElementById("fortuneButton");

const postForm = document.getElementById("post-form");

const teamInput = document.getElementById("team-input");

const myDiv = document.getElementById("results-landing-page");

const teamsContainer = document.querySelector("#teams-container");

const form = document.querySelector("#team-form");

const baseURL = `http://localhost:4000/api/teams`;

const teamsCallback = ({ data: teams }) => displayTeams(teams);

const errCallback = (err) => console.log(err);

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};




const postTeam = (event) => {
  event.preventDefault();

  let bod = {
    team: teamInput.value,
  };

  console.log(bod);

  axios
    .post("http://localhost:4000/api/team", bod)
    .then((res) => {
      let teams = res.data;

      myDiv.textContent = "";

      for (let i = 0; i < teams.length; i = i + 1) {
        let nameP = document.createElement("p");
        nameP.textContent = teams[i].team;
        myDiv.appendChild(nameP);
      }
    })
    .catch(() => {});
};

const getAllTeams = () =>
  axios.get(baseURL).then(teamsCallback).catch(errCallback);

const createTeam = (body) =>
  axios.post(baseURL, body).then(teamsCallback).catch(errCallback);

const deleteTeam = (id) =>
  axios.delete(`${baseURL}/${id}`).then(teamsCallback).catch(errCallback);

const updateTeam = (id, type) =>
  axios
    .put(`${baseURL}/${id}`, { type })
    .then(teamsCallback)
    .catch(errCallback);

function submitHandler(event) {
  let teamName = document.querySelector("#football-team");
  let favPlayer = document.querySelector("fav-player");

  let bodyObj = {
    teamName: teamName.value,
    favPlayer: favPlayer.value,
  };

  createTeam(bodyObj);
  teamName.value = "";
  favPlayer.value = "";
}

function createTeamCard(team) {
  const teamCard = document.createElement("div");
  teamCard.classList.add("team-card");

  teamCard.innerHTML = `<p class="football-team">${team.teamName}</p>
                            <p class="fav-player">$${team.favPlayer}</p>
                            <button onclick="deleteTeam(${team.id}">delete</button>`;

   teamsContainer.appendChild(teamCard)
}

function displayTeams(arr) {
    teamsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i = i + 1) {
        createTeamCard(arr[i])
    }
}


complimentBtn.addEventListener("click", getCompliment);

fortuneBtn.addEventListener("click", getFortune);

postForm.addEventListener("submit", postTeam);

form.addEventListener('submit', submitHandler)

getAllTeams()