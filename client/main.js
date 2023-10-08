const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById("fortuneButton")

const postForm = document.getElementById("post-form")

const teamInput = document.getElementById("team-input")

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

    axios.post('http://localhost:4000/api/team', bod).then(() => {}).catch(() => {})
}

complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

postForm.addEventListener('submit', postTeam)

