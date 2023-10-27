const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById("fortuneButton")

const postForm = document.getElementById("post-form")

const teamInput = document.getElementById("team-input")

const myDiv = document.getElementById("results-landing-page")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

const postTeam = (event) => {
    event.preventDefault()

    let bod = {
        team: teamInput.value
    }

    console.log(bod)

    axios.post('http://localhost:4000/api/team', bod)
    .then((res) => {
        let teams = res.data

        myDiv.textContent = ""

        for (let i = 0; i < teams.length; i = i + 1) {
            let nameP = document.createElement('p')
            nameP.textContent = teams[i].team
            myDiv.appendChild(nameP)
        }
    })
    .catch(() => {})
}






complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

postForm.addEventListener('submit', postTeam)

